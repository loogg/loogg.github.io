---
title: STM32F407 RT-Thread 移植 GD32 以太网 SD卡注意事项
category:
  - 笔记
tag:
  - MCU
  - GD32
  - RT-Thread
---

## 以太网

参考 GD 官方文档 <a href="/MCU/GD32/STM32F4xx_to_GD32F4xx系列_V1.1.pdf" target="_blank">STM32F4xx_to_GD32F4xx系列_V1.1.pdf</a>

![ENET修改](/MCU/GD32/ENET修改.png)

修改 `stm32f4xx_hal_eth.c` 中 `static void ETH_FlushTransmitFIFO(ETH_HandleTypeDef *heth)`

```diff
static void ETH_FlushTransmitFIFO(ETH_HandleTypeDef *heth)
{
  __IO uint32_t tmpreg1 = 0U;

  /* Set the Flush Transmit FIFO bit */
  (heth->Instance)->DMAOMR |= ETH_DMAOMR_FTF;

  /* Wait until the write operation will be taken into account:
     at least four TX_CLK/RX_CLK clock cycles */
+ while (((heth->Instance)->DMAOMR & ETH_DMAOMR_FTF) != RESET);

  tmpreg1 = (heth->Instance)->DMAOMR;
  ETH_Delay(ETH_REG_WRITE_DELAY);
  (heth->Instance)->DMAOMR = tmpreg1;
}
```

## SD卡

- 调试发现使用的是 DMA 方式，数据对齐是 4 字节。SD卡初始化过程中先发 ACMD55，然后 CMD 51 命令读取 SCR 寄存器 8 个 字节时出现了异常。

- SDIO_FIFOCNT 寄存器为 0了，但是 SDIO_STAT 寄存器的值为 0x0020A400

- 日志如下，CMD6 同样是接收长度，只不过长度为 64，CMD51长度为8

  ![SD异常日志](/MCU/GD32/SD异常日志.png)

  ![SDIO状态寄存器](/MCU/GD32/SDIO状态寄存器.png)

- 处理该问题

  由于在 `rthw_sdio_irq_process` 中断处理函数中，在需要数据交互条件下，产生 `DATAEND` 中断时发送事件集。

  因此在 `rthw_sdio_send_command` 中可以屏蔽接收状态位的判断。

  ![sdio_irq](/MCU/GD32/sdio_irq.png)

  ![sdio_send_command](/MCU/GD32/sdio_send_command.png)
