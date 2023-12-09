---
title: STM32F407 RT-Thread 移植 GD32 以太网 SD卡注意事项
category:
  - 笔记
tag:
  - MCU
  - GD32
  - RT-Thread
---

## 参考

GD 官方文档 <a href="/MCU/GD32/STM32F4xx_to_GD32F4xx系列_V1.1.pdf" target="_blank">STM32F4xx_to_GD32F4xx系列_V1.1.pdf</a>

## 以太网

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
