import{_ as d,r as i,o as r,c as t,d as e,e as a,b as n,f as o}from"./app-d33de609.js";const c={},h=o(`<h1 id="agile-led" tabindex="-1"><a class="header-anchor" href="#agile-led" aria-hidden="true">#</a> Agile Led</h1><h2 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍" aria-hidden="true">#</a> 1、介绍</h2><p>Agile Led 是基于 RT-Thread 实现的 led 软件包，提供 led 操作的 API。</p><h3 id="_1-1、特性" tabindex="-1"><a class="header-anchor" href="#_1-1、特性" aria-hidden="true">#</a> 1.1、特性</h3><ol><li>代码简洁易懂，充分使用 RT-Thread 提供的 API</li><li>详细注释</li><li>线程安全</li><li>断言保护</li><li>API 操作简单</li></ol><h3 id="_1-2、目录结构" tabindex="-1"><a class="header-anchor" href="#_1-2、目录结构" aria-hidden="true">#</a> 1.2、目录结构</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>doc</td><td>文档目录</td></tr><tr><td>examples</td><td>例子目录</td></tr><tr><td>inc</td><td>头文件目录</td></tr><tr><td>src</td><td>源代码目录</td></tr></tbody></table><h3 id="_1-3、许可证" tabindex="-1"><a class="header-anchor" href="#_1-3、许可证" aria-hidden="true">#</a> 1.3、许可证</h3><p>Agile Led package 遵循 LGPLv2.1 许可，详见 <code>LICENSE</code> 文件。</p><h3 id="_1-4、依赖" tabindex="-1"><a class="header-anchor" href="#_1-4、依赖" aria-hidden="true">#</a> 1.4、依赖</h3><ul><li>RT-Thread 3.0+</li><li>RT-Thread 4.0+</li></ul><h2 id="_2、如何打开-agile-led" tabindex="-1"><a class="header-anchor" href="#_2、如何打开-agile-led" aria-hidden="true">#</a> 2、如何打开 Agile Led</h2><p>使用 Agile Led package 需要在 RT-Thread 的包管理器中选择它，具体路径如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">RT-Thread online packages</span></span>
<span class="line"><span style="color:#abb2bf;">    peripheral libraries and drivers ---&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">        [*] agile_led: A agile led package</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后让 RT-Thread 的包管理器自动更新，或者使用 <code>pkgs --update</code> 命令更新包到 BSP 中。</p><h2 id="_3、使用-agile-led" tabindex="-1"><a class="header-anchor" href="#_3、使用-agile-led" aria-hidden="true">#</a> 3、使用 Agile Led</h2><ul><li>帮助文档请查看 <a href="./doc/doxygen/Agile_Led.chm">doc/doxygen/Agile_Led.chm</a></li></ul><p>如果未使能 PKG_AGILE_LED_USING_THREAD_AUTO_INIT:</p><ol><li><p>agile_led_env_init 初始化环境</p></li><li><p>创建一个线程，周期调用 agile_led_process，建议周期时间不要太长</p></li></ol><ul><li><p>agile_led_create / agile_led_init 创建 / 初始化对象</p></li><li><p>agile_led_start 启动运行</p></li><li><p>agile_led_dynamic_change_light_mode / agile_led_static_change_light_mode 更改模式</p><p>该操作也可在启动运行前执行</p></li><li><p>如果需要感知对象执行结束，agile_led_set_compelete_callback 设置回调函数</p></li><li><p>过程中需要强制停止，使用 agile_led_stop</p></li><li><p>agile_led_on / agile_led_off / agile_led_toggle 单独操作对象</p></li></ul><h3 id="_3-1、示例" tabindex="-1"><a class="header-anchor" href="#_3-1、示例" aria-hidden="true">#</a> 3.1、示例</h3><p>使用示例在 <a href="./examples">examples</a> 下。</p><h3 id="_3-2、doxygen-文档生成" tabindex="-1"><a class="header-anchor" href="#_3-2、doxygen-文档生成" aria-hidden="true">#</a> 3.2、Doxygen 文档生成</h3><ul><li>使用 <code>Doxywizard</code> 打开 <a href="./doc/doxygen/Doxyfile">Doxyfile</a> 运行，生成的文件在 <a href="./doc/doxygen/output">doxygen/output</a> 下。</li><li>需要更改 <code>Graphviz</code> 路径。</li><li><code>HTML</code> 生成未使用 <code>chm</code> 格式的，如果使能需要更改 <code>hhc.exe</code> 路径。</li></ul><h2 id="_4、联系方式-感谢" tabindex="-1"><a class="header-anchor" href="#_4、联系方式-感谢" aria-hidden="true">#</a> 4、联系方式 &amp; 感谢</h2>`,25),s=e("li",null,"维护：马龙伟",-1),_={href:"https://github.com/loogg/agile_led",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,[a("邮箱："),e("a",{href:"mailto:2544047213@qq.com"},"2544047213@qq.com")],-1);function g(u,b){const l=i("ExternalLinkIcon");return r(),t("div",null,[h,e("ul",null,[s,e("li",null,[a("主页："),e("a",_,[a("https://github.com/loogg/agile_led"),n(l)])]),p])])}const f=d(c,[["render",g],["__file","index.html.vue"]]);export{f as default};