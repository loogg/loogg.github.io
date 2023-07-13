import{_ as d,r as o,o as r,c as h,a as e,b as a,e as s,f as l}from"./app-9456f732.js";const c={},n=l('<h1 id="更新记录" tabindex="-1"><a class="header-anchor" href="#更新记录" aria-hidden="true">#</a> 更新记录</h1><h2 id="agile-modbus-1-1-0-发布" tabindex="-1"><a class="header-anchor" href="#agile-modbus-1-1-0-发布" aria-hidden="true">#</a> Agile Modbus 1.1.0 发布</h2><h3 id="新功能" tabindex="-1"><a class="header-anchor" href="#新功能" aria-hidden="true">#</a> 新功能</h3><p>2021-12-02：马龙伟</p><ul><li>增加 Doxygen 注释，生成文档</li></ul><p>2021-12-28：马龙伟</p><ul><li>增加 RTU 和 TCP 主机例子</li><li>增加 RTU 和 TCP 从机例子</li><li>增加示例文档</li></ul><p>2022-01-08：马龙伟</p><ul><li>增加 RTU 点对点传输文件例子</li><li>增加 RTU 广播传输文件例子</li></ul><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3><p>2022-01-06：马龙伟</p><ul><li>修改从机例子，RTU 和 TCP 使用同一个从机回调</li><li>TCP 从机支持最大 5 个客户端接入</li><li>TCP 从机 10s 内未收到正确报文主动断开</li></ul><p>2022-01-08：马龙伟</p><ul><li>去除接收数据判断中长度限制</li><li>去除 <code>agile_modbus_serialize_raw_request</code> 对于原始数据的长度限制</li></ul><h2 id="agile-modbus-1-1-1-发布" tabindex="-1"><a class="header-anchor" href="#agile-modbus-1-1-1-发布" aria-hidden="true">#</a> Agile Modbus 1.1.1 发布</h2><h3 id="修改-1" tabindex="-1"><a class="header-anchor" href="#修改-1" aria-hidden="true">#</a> 修改</h3><p>2022-06-22：马龙伟</p>',17),t={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"增加 HPM6750_Boot 链接",-1),_=e("li",null,[a("更改 LICENSE 为 "),e("code",null,"Apache-2.0")],-1),b=l('<h2 id="agile-modbus-1-1-2-发布" tabindex="-1"><a class="header-anchor" href="#agile-modbus-1-1-2-发布" aria-hidden="true">#</a> Agile Modbus 1.1.2 发布</h2><h3 id="新功能-1" tabindex="-1"><a class="header-anchor" href="#新功能-1" aria-hidden="true">#</a> 新功能</h3><p>2022-07-28：马龙伟</p><ul><li>提供简易从机接入 <code>agile_modbus_slave_util_callback </code> 接口</li></ul><h3 id="修改-2" tabindex="-1"><a class="header-anchor" href="#修改-2" aria-hidden="true">#</a> 修改</h3><p>2022-07-28：马龙伟</p><ul><li><code>agile_modbus_slave_handle</code> 增加 <code>从机回调私有数据</code> 参数</li><li><code>agile_modbus_slave_callback_t</code> 增加 <code>私有数据</code> 参数</li><li><code>examples</code> 中从机示例使用 <code>agile_modbus_slave_util_callback</code> 接口实现寄存器读写</li></ul><h2 id="agile-modbus-1-1-3-发布" tabindex="-1"><a class="header-anchor" href="#agile-modbus-1-1-3-发布" aria-hidden="true">#</a> Agile Modbus 1.1.3 发布</h2><h3 id="修改-3" tabindex="-1"><a class="header-anchor" href="#修改-3" aria-hidden="true">#</a> 修改</h3><p>2022-11-22：马龙伟</p><ul><li><code>agile_modbus_slave_handle</code> 中写单个寄存器将 <code>slave_info.buf</code> 指针指向局部变量地址，开启编译器优化后该地址被其他变量使用。修改为指向函数内全局变量地址。</li></ul>',11);function p(m,g){const i=o("ExternalLinkIcon");return r(),h("div",null,[n,e("ul",null,[e("li",null,[e("a",t,[a("README.md"),s(i)]),a(" 增加在 AT32F437 上基于 RT-Thread 实现的支持 Modbus 固件升级的 Bootloader 链接")]),u,_]),b])}const x=d(c,[["render",p],["__file","ChangeLog.html.vue"]]);export{x as default};
