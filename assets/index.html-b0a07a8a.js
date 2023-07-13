import{_ as o,r as p,o as c,c as t,a as s,b as l,e as a,f as n}from"./app-9456f732.js";const i="/assets/ModbusProtocol-7900ee6e.jpg",d="/assets/SlaveCallback-1958640b.jpg",r="/assets/zanshang-e2e5224e.jpg",_={},u=n('<h1 id="agile-modbus" tabindex="-1"><a class="header-anchor" href="#agile-modbus" aria-hidden="true">#</a> Agile Modbus</h1><h2 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍" aria-hidden="true">#</a> 1、介绍</h2><p>Agile Modbus 即：轻量型 modbus 协议栈，满足用户任何场景下的使用需求。</p><figure><img src="'+i+'" alt="ModbusProtocol" tabindex="0" loading="lazy"><figcaption>ModbusProtocol</figcaption></figure>',4),B={href:"https://loogg.github.io/agile_modbus/",target:"_blank",rel:"noopener noreferrer"},y=s("li",null,[s("p",null,[s("code",null,"examples"),l(" 文件夹提供 PC 上的示例")])],-1),b={href:"https://github.com/loogg/agile_modbus_mcu_demos",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/loogg/AT32F437_Boot",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/loogg/HPM6750_Boot",target:"_blank",rel:"noopener noreferrer"},v=n(`<h3 id="_1-1、特性" tabindex="-1"><a class="header-anchor" href="#_1-1、特性" aria-hidden="true">#</a> 1.1、特性</h3><ol><li>支持 rtu 及 tcp 协议，使用纯 C 开发，不涉及任何硬件接口，可在任何形式的硬件上直接使用。</li><li>由于其使用纯 C 开发、不涉及硬件，完全可以在串口上跑 tcp 协议，在网络上跑 rtu 协议。</li><li>支持符合 modbus 格式的自定义协议。</li><li>同时支持多主机和多从机。</li><li>使用简单，只需要将 rtu 或 tcp 句柄初始化好后，调用相应 API 进行组包和解包即可。</li></ol><h3 id="_1-2、目录结构" tabindex="-1"><a class="header-anchor" href="#_1-2、目录结构" aria-hidden="true">#</a> 1.2、目录结构</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>doc</td><td>文档</td></tr><tr><td>examples</td><td>例子</td></tr><tr><td>figures</td><td>素材</td></tr><tr><td>inc</td><td>头文件</td></tr><tr><td>src</td><td>源代码</td></tr><tr><td>util</td><td>提供简单实用的组件</td></tr></tbody></table><h3 id="_1-3、许可证" tabindex="-1"><a class="header-anchor" href="#_1-3、许可证" aria-hidden="true">#</a> 1.3、许可证</h3><p>Agile Modbus 遵循 <code>Apache-2.0</code> 许可，详见 <code>LICENSE</code> 文件。</p><h2 id="_2、使用-agile-modbus" tabindex="-1"><a class="header-anchor" href="#_2、使用-agile-modbus" aria-hidden="true">#</a> 2、使用 Agile Modbus</h2><p>帮助文档请查看 <a href="./doc/doxygen/Agile_Modbus.chm">doc/doxygen/Agile_Modbus.chm</a></p><h3 id="_2-1、移植" tabindex="-1"><a class="header-anchor" href="#_2-1、移植" aria-hidden="true">#</a> 2.1、移植</h3><ul><li><p>用户需要实现硬件接口的 <code>发送数据</code> 、 <code>等待数据接收结束</code> 、 <code>清空接收缓存</code> 函数</p><p>对于 <code>等待数据接收结束</code>，提供如下几点思路：</p><ol><li><p>通用方法</p><p>每隔 20 / 50 ms (该时间可根据波特率和硬件设置，这里只是给了参考值) 从硬件接口读取数据存放到缓冲区中并更新偏移，直到读取不到或缓冲区满，退出读取。</p><p>这对于裸机或操作系统都适用，操作系统可通过 <code>select</code> 或 <code>信号量</code> 方式完成阻塞。</p></li><li><p>串口 <code>DMA + IDLE</code> 中断方式</p><p>配置 <code>DMA + IDLE</code> 中断，在中断中使能标志，应用程序中判断该标志是否置位即可。</p><p>但该方案容易出问题，数据字节间稍微错开一点时间就不是一帧了。推荐第一种方案。</p></li></ol></li><li><p>主机：</p><ol><li><code>agile_modbus_rtu_init</code> / <code>agile_modbus_tcp_init</code> 初始化 <code>RTU/TCP</code> 环境</li><li><code>agile_modbus_set_slave</code> 设置从机地址</li><li><code>清空接收缓存</code></li><li><code>agile_modbus_serialize_xxx</code> 打包请求数据</li><li><code>发送数据</code></li><li><code>等待数据接收结束</code></li><li><code>agile_modbus_deserialize_xxx</code> 解析响应数据</li><li>用户处理得到的数据</li></ol></li><li><p>从机：</p><ol><li>实现 <code>agile_modbus_slave_callback_t</code> 类型回调函数</li><li><code>agile_modbus_rtu_init</code> / <code>agile_modbus_tcp_init</code> 初始化 <code>RTU/TCP</code> 环境</li><li><code>agile_modbus_set_slave</code> 设置从机地址</li><li><code>等待数据接收结束</code></li><li><code>agile_modbus_slave_handle</code> 处理请求数据</li><li><code>清空接收缓存</code> (可选)</li><li><code>发送数据</code></li></ol></li><li><p>特殊功能码</p><p>需要调用 <code>agile_modbus_set_compute_meta_length_after_function_cb</code> 和 <code>agile_modbus_set_compute_data_length_after_meta_cb</code> API 设置特殊功能码在主从模式下处理的回调。</p><ul><li><p><code>agile_modbus_set_compute_meta_length_after_function_cb</code></p><p><code>msg_type == AGILE_MODBUS_MSG_INDICATION</code>: 返回主机请求报文的数据元长度(uint8_t 类型)，不是特殊功能码必须返回 0。</p><p><code>msg_type == MSG_CONFIRMATION</code>: 返回从机响应报文的数据元长度(uint8_t 类型)，不是特殊功能码必须返回 1。</p></li><li><p><code>agile_modbus_set_compute_data_length_after_meta_cb</code></p><p><code>msg_type == AGILE_MODBUS_MSG_INDICATION</code>: 返回主机请求报文数据元之后的数据长度，不是特殊功能码必须返回 0。</p><p><code>msg_type == MSG_CONFIRMATION</code>: 返回从机响应报文数据元之后的数据长度，不是特殊功能码必须返回 0。</p></li></ul></li><li><p><code>agile_modbus_rtu_init</code> / <code>agile_modbus_tcp_init</code></p><p>初始化 <code>RTU/TCP</code> 环境时需要用户传入 <code>发送缓冲区</code> 和 <code>接收缓冲区</code>，建议这两个缓冲区大小都为 <code>AGILE_MODBUS_MAX_ADU_LENGTH</code> (260) 字节。<code>特殊功能码</code> 情况用户根据协议自行决定。</p><p>但对于小内存 MCU，这两个缓冲区也可以设置小，所有 API 都会对缓冲区大小进行判断：</p><p>发送缓冲区设置：如果 <code>预期请求的数据长度</code> 或 <code>预期响应的数据长度</code> 大于 <code>设置的发送缓冲区大小</code>，返回异常。</p><p>接收缓冲区设置：如果 <code>主机请求的报文长度</code> 大于 <code>设置的接收缓冲区大小</code>，返回异常。这个是合理的，小内存 MCU 做从机肯定是需要对某些功能码做限制的。</p></li></ul><h3 id="_2-2、主机" tabindex="-1"><a class="header-anchor" href="#_2-2、主机" aria-hidden="true">#</a> 2.2、主机</h3><p>见 <code>2.1、移植</code>。</p><h3 id="_2-3、从机" tabindex="-1"><a class="header-anchor" href="#_2-3、从机" aria-hidden="true">#</a> 2.3、从机</h3><h4 id="_2-3-1、接口说明" tabindex="-1"><a class="header-anchor" href="#_2-3-1、接口说明" aria-hidden="true">#</a> 2.3.1、接口说明</h4><ul><li><p><code>agile_modbus_slave_handle</code> 介绍</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">agile_modbus_slave_handle</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">agile_modbus_t</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">msg_length</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">uint8_t</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">slave_strict</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">                              </span><span style="color:#56B6C2;">agile_modbus_slave_callback_t</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">slave_cb</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">const</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">void</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">slave_data</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">frame_length</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>msg_length: <code>等待数据接收结束</code> 后接收到的数据长度。</p><p>slave_strict: 从机地址严格性检查 (0: 不判断地址是否一致，由用户回调处理; 1: 地址必须一致，否则不会调用回调，也不打包响应数据)。</p><p>slave_cb: <code>agile_modbus_slave_callback_t</code> 类型回调函数，用户实现并传入。如果为 NULL，所有功能码都能响应且为成功，但寄存器数据依然为 0。</p><p>slave_data: 从机回调函数私有数据。</p><p>frame_length: 获取解析出的 modbus 数据帧长度。这个参数的意义在于：</p><ol><li>尾部有脏数据: 仍能解析成功，并告诉用户真实的 modbus 帧长，用户可以进行处理</li><li>数据粘包: 数据由 <code>一帧完整的 modbus 数据 + 部分 modbus 数据帧</code> 组成，用户获得真实 modbus 帧长后，可以移除处理完的 modbus 数据帧，再次读取硬件接口数据与当前 <code>部分 modbus 数据帧</code> 组成新的一帧</li><li>该参数在 modbus 广播传输大数据时使用较多(如：自定义功能码广播升级固件)，普通的从机响应都是一问一答式，只处理完整数据帧就行，建议在响应前执行 <code>清空接收缓存</code></li></ol></li><li><p><code>agile_modbus_slave_callback_t</code> 介绍</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@brief</span><span style="color:#7F848E;font-style:italic;">   从机回调函数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;">   </span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#7F848E;font-style:italic;"> modbus 句柄</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;">   </span><span style="color:#E06C75;font-style:italic;">slave_info</span><span style="color:#7F848E;font-style:italic;"> 从机信息体</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;">   </span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#7F848E;font-style:italic;"> 私有数据</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@return</span><span style="color:#7F848E;font-style:italic;">  =0:正常;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *          &lt;0:异常</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *             (-AGILE_MODBUS_EXCEPTION_UNKNOW(-255): 未知异常，从机不会打包响应数据)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *             (其他负数异常码: 从机会打包异常响应数据)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">typedef</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#56B6C2;">agile_modbus_slave_callback_t</span><span style="color:#ABB2BF;">)(</span><span style="color:#56B6C2;">agile_modbus_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">ctx, </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> agile_modbus_slave_info </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">slave_info, </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">data);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>agile_modbus_slave_info</code>:</p><p>sft: 包含从机地址和功能码属性，回调中可利用</p><p>rsp_length: 响应数据长度指针，回调中处理 <code>特殊功能码</code> 时需要更新其值，否则 <strong>不准更改</strong></p><p>address: 寄存器地址 (不是所有功能码都用到)</p><p>nb: 数目 (不是所有功能码都用到)</p><p>buf: 不同功能码需要使用的数据域 (不是所有功能码都用到)</p><p>send_index: 发送缓冲区当前索引 (不是所有功能码都用到)</p></li><li><p><code>agile_modbus_slave_info</code> 不同功能码使用</p><ul><li><p>AGILE_MODBUS_FC_READ_COILS、AGILE_MODBUS_FC_READ_DISCRETE_INPUTS</p><p>需要使用到 <code>address</code>、<code>nb</code>、<code>send_index</code> 属性，需要调用 <code>agile_modbus_slave_io_set</code> API 将 IO 数据存放到 <code>ctx-&gt;send_buf + send_index</code> 开始的数据区域。</p></li><li><p>AGILE_MODBUS_FC_READ_HOLDING_REGISTERS、AGILE_MODBUS_FC_READ_INPUT_REGISTERS</p><p>需要使用到 <code>address</code>、<code>nb</code>、<code>send_index</code> 属性，需要调用 <code>agile_modbus_slave_register_set</code> API 将寄存器数据存放到 <code>ctx-&gt;send_buf + send_index</code> 开始的数据区域。</p></li><li><p>AGILE_MODBUS_FC_WRITE_SINGLE_COIL、AGILE_MODBUS_FC_WRITE_SINGLE_REGISTER</p><p>需要使用到 <code>address</code>、<code>buf</code> 属性，将 <code>buf</code> 强转为 <code>int *</code> 类型，获取值存放到寄存器中。</p></li><li><p>AGILE_MODBUS_FC_WRITE_MULTIPLE_COILS</p><p>需要使用到 <code>address</code>、<code>nb</code>、<code>buf</code> 属性，需要调用 <code>agile_modbus_slave_io_get</code> API 获取要写入的 IO 数据。</p></li><li><p>AGILE_MODBUS_FC_WRITE_MULTIPLE_REGISTERS</p><p>需要使用到 <code>address</code>、<code>nb</code>、<code>buf</code> 属性，需要调用 <code>agile_modbus_slave_register_get</code> API 获取要写入的寄存器数据。</p></li><li><p>AGILE_MODBUS_FC_MASK_WRITE_REGISTER</p><p>需要使用到 <code>address</code>、<code>buf</code> 属性，通过 <code>(buf[0] &lt;&lt; 8) + buf[1]</code> 获取 <code>and</code> 值，通过 <code>(buf[2] &lt;&lt; 8) + buf[3]</code> 获取 <code>or</code> 值。获取寄存器值 <code>data</code>，进行 <code>data = (data &amp; and) | (or &amp; (~and))</code> 操作更新 <code>data</code> 值，写入寄存器。</p></li><li><p>AGILE_MODBUS_FC_WRITE_AND_READ_REGISTERS</p><p>需要使用到 <code>address</code>、<code>buf</code>、<code>send_index</code> 属性，通过 <code>(buf[0] &lt;&lt; 8) + buf[1]</code> 获取要读取的寄存器数目，通过 <code>(buf[2] &lt;&lt; 8) + buf[3]</code> 获取要写入的寄存器地址，通过 <code>(buf[4] &lt;&lt; 8) + buf[5]</code> 获取要写入的寄存器数目。需要调用 <code>agile_modbus_slave_register_get</code> API 获取要写入的寄存器数据，调用 <code>agile_modbus_slave_register_set</code> API 将寄存器数据存放到 <code>ctx-&gt;send_buf + send_index</code> 开始的数据区域。</p></li><li><p>自定义功能码</p><p>需要使用到 <code>send_index</code>、<code>nb</code>、<code>buf</code> 属性，用户在回调中处理数据。</p><p>send_index: 发送缓冲区当前索引</p><p>nb: PUD - 1，也就是 modbus 数据域长度</p><p>buf: modbus 数据域起始位置</p><p><strong>注意</strong>: 用户在回调中往发送缓冲区填入数据后，需要更新 <code>agile_modbus_slave_info</code> 的 <code>rsp_length</code> 值。</p></li></ul></li></ul><h4 id="_2-3-2、简易从机接入接口" tabindex="-1"><a class="header-anchor" href="#_2-3-2、简易从机接入接口" aria-hidden="true">#</a> 2.3.2、简易从机接入接口</h4><p>Agile Modbus 提供了 <code>agile_modbus_slave_callback_t</code> 的一种实现方式，使用户能够简单方便接入。</p><p>使用示例可查看 <a href="./examples/slave">examples/slave</a>。</p><p>使用方式：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;agile_modbus.h&quot;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;agile_modbus_slave_util.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">agile_modbus_slave_util_t</span><span style="color:#ABB2BF;"> slave_util </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  /* User implementation */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">agile_modbus_slave_handle</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ctx</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> read_len</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> agile_modbus_slave_util_callback</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">&amp;</span><span style="color:#E06C75;font-style:italic;">slave_util</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">NULL</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>agile_modbus_slave_util_callback</code> 介绍</p><ul><li><p>Agile Modbus 提供的一种 <code>agile_modbus_slave_callback_t</code> 实现方式，需要 <code>agile_modbus_slave_util_t</code> 类型变量指针作为私有数据。</p></li><li><p>私有数据为 NULL，所有功能码都能响应且为成功，但寄存器数据依然为 0。</p></li></ul></li><li><p><code>agile_modbus_slave_util_t</code> 介绍</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">typedef</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> agile_modbus_slave_util {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">agile_modbus_slave_util_map_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">tab_bits;</span><span style="color:#7F848E;font-style:italic;">                                            /**&lt; 线圈寄存器定义数组 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> nb_bits;</span><span style="color:#7F848E;font-style:italic;">                                                                              /**&lt; 线圈寄存器定义数组数目 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">agile_modbus_slave_util_map_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">tab_input_bits;</span><span style="color:#7F848E;font-style:italic;">                                      /**&lt; 离散量输入寄存器定义数组 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> nb_input_bits;</span><span style="color:#7F848E;font-style:italic;">                                                                        /**&lt; 离散量输入寄存器定义数组数目 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">agile_modbus_slave_util_map_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">tab_registers;</span><span style="color:#7F848E;font-style:italic;">                                       /**&lt; 保持寄存器定义数组 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> nb_registers;</span><span style="color:#7F848E;font-style:italic;">                                                                         /**&lt; 保持寄存器定义数组数目 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">agile_modbus_slave_util_map_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">tab_input_registers;</span><span style="color:#7F848E;font-style:italic;">                                 /**&lt; 输入寄存器定义数组 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> nb_input_registers;</span><span style="color:#7F848E;font-style:italic;">                                                                   /**&lt; 输入寄存器定义数组数目 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">addr_check)(</span><span style="color:#56B6C2;">agile_modbus_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">ctx, </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> agile_modbus_slave_info </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">slave_info);</span><span style="color:#7F848E;font-style:italic;">       /**&lt; 地址检查接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">special_function)(</span><span style="color:#56B6C2;">agile_modbus_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">ctx, </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> agile_modbus_slave_info </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">slave_info);</span><span style="color:#7F848E;font-style:italic;"> /**&lt; 特殊功能码处理接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">done)(</span><span style="color:#56B6C2;">agile_modbus_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">ctx, </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> agile_modbus_slave_info </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">slave_info, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> ret);</span><span style="color:#7F848E;font-style:italic;">    /**&lt; 处理结束接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#56B6C2;">agile_modbus_slave_util_t</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>寄存器相关</p><p>用户需要实现 <code>bits</code>、<code>input_bits</code>、<code>registers</code>、<code>input_registers</code> 定义。如果某个寄存器定义为 NULL，该寄存器对应的功能码能响应且为成功，但寄存器数据都为 0。</p></li><li><p>接口调用过程</p><figure><img src="`+d+`" alt="SlaveCallback" tabindex="0" loading="lazy"><figcaption>SlaveCallback</figcaption></figure></li></ul></li><li><p><code>agile_modbus_slave_util_map</code> 介绍</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">typedef</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> agile_modbus_slave_util_map {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> start_addr;</span><span style="color:#7F848E;font-style:italic;">                                       /**&lt; 起始地址 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> end_addr;</span><span style="color:#7F848E;font-style:italic;">                                         /**&lt; 结束地址 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">get)(</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">buf, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> bufsz);</span><span style="color:#7F848E;font-style:italic;">                     /**&lt; 获取寄存器数据接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">set)(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> index, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> len, </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">buf, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> bufsz);</span><span style="color:#7F848E;font-style:italic;"> /**&lt; 设置寄存器数据接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#56B6C2;">agile_modbus_slave_util_map_t</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>注意事项</strong>:</p><ul><li><p>起始地址和结束地址决定的寄存器个数有限制。更改函数内部 <code>map_buf</code> 数组大小可使其变大。</p><ul><li><p>bit 寄存器 &lt; 250</p></li><li><p>register 寄存器 &lt; 125</p></li></ul></li><li><p>接口函数为 NULL，寄存器对应的功能码能响应且为成功。</p></li></ul></li><li><p><code>get</code> 接口</p><p>将地址域内的数据全部拷贝到 <code>buf</code> 中。</p></li><li><p><code>set</code> 接口</p><ul><li><p><code>index</code>: 地址域内的偏移</p></li><li><p><code>len</code>: 长度</p></li></ul><p>根据 <code>index</code> 和 <code>len</code> 修改数据。</p></li></ul></li></ul><h3 id="_2-4、示例" tabindex="-1"><a class="header-anchor" href="#_2-4、示例" aria-hidden="true">#</a> 2.4、示例</h3>`,22),h=n('<li><p><a href="./examples">examples</a> 文件夹中提供 PC 上的示例，可以在 <code>WSL</code> 或 <code>Linux</code> 下编译运行。</p><ul><li><p>RTU / TCP 主机、从机的示例</p></li><li><p>特殊功能码的示例</p><p>RTU 点对点传输文件: 演示特殊功能码的使用方式</p><p>RTU 广播传输文件: 演示 <code>agile_modbus_slave_handle</code> 中 <code>frame_length</code> 的用处</p></li></ul></li>',1),D={href:"https://github.com/loogg/agile_modbus_mcu_demos",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/loogg/AT32F437_Boot",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/loogg/HPM6750_Boot",target:"_blank",rel:"noopener noreferrer"},F=n('<h3 id="_2-5、doxygen-文档生成" tabindex="-1"><a class="header-anchor" href="#_2-5、doxygen-文档生成" aria-hidden="true">#</a> 2.5、Doxygen 文档生成</h3><ul><li>使用 <code>Doxywizard</code> 打开 <a href="./doc/doxygen/Doxyfile">Doxyfile</a> 运行，生成的文件在 <a href="./doc/doxygen/output">doxygen/output</a> 下。</li><li>需要更改 <code>Graphviz</code> 路径。</li><li><code>HTML</code> 生成未使用 <code>chm</code> 格式的，如果使能需要更改 <code>hhc.exe</code> 路径。</li></ul><h2 id="_3、支持" tabindex="-1"><a class="header-anchor" href="#_3、支持" aria-hidden="true">#</a> 3、支持</h2><figure><img src="'+r+'" alt="zanshang" tabindex="0" loading="lazy"><figcaption>zanshang</figcaption></figure><p>如果 Agile Modbus 解决了你的问题，不妨扫描上面二维码请我 <strong>喝杯咖啡</strong> ~</p><h2 id="_4、联系方式-感谢" tabindex="-1"><a class="header-anchor" href="#_4、联系方式-感谢" aria-hidden="true">#</a> 4、联系方式 &amp; 感谢</h2>',6),C=s("li",null,"维护：马龙伟",-1),E={href:"https://github.com/loogg/agile_modbus",target:"_blank",rel:"noopener noreferrer"},x=s("li",null,[l("邮箱："),s("a",{href:"mailto:2544047213@qq.com"},"2544047213@qq.com")],-1);function I(M,T){const e=p("ExternalLinkIcon");return c(),t("div",null,[u,s("ul",null,[s("li",null,[s("p",null,[l("在线文档："),s("a",B,[l("API Manual"),a(e)])])]),y,s("li",null,[s("p",null,[l("MCU 上的示例查看 "),s("a",b,[l("mcu_demos"),a(e)])])]),s("li",null,[s("p",null,[l("在 AT32F437 上基于 RT-Thread 实现的支持 Modbus 固件升级的 Bootloader："),s("a",m,[l("AT32F437_Boot"),a(e)])])]),s("li",null,[s("p",null,[l("在 HPM6750 上基于 RT-Thread 实现的支持 Modbus 固件升级的 Bootloader："),s("a",g,[l("HPM6750_Boot"),a(e)])])])]),v,s("ul",null,[h,s("li",null,[s("p",null,[s("a",D,[l("mcu_demos"),a(e)]),l(" 提供在 MCU 上的例子。")])]),s("li",null,[s("p",null,[s("a",f,[l("AT32F437_Boot"),a(e)]),l(" 在 AT32F437 上基于 RT-Thread 实现的支持 Modbus 固件升级的 Bootloader。")])]),s("li",null,[s("p",null,[s("a",A,[l("HPM6750_Boot"),a(e)]),l(" 在 HPM6750 上基于 RT-Thread 实现的支持 Modbus 固件升级的 Bootloader。")])])]),F,s("ul",null,[C,s("li",null,[l("主页："),s("a",E,[l("https://github.com/loogg/agile_modbus"),a(e)])]),x])])}const S=o(_,[["render",I],["__file","index.html.vue"]]);export{S as default};
