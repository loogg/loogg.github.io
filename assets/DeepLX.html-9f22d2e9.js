import{_ as o,r as t,o as i,c as r,a as e,b as a,d as s,e as l}from"./app-9321368f.js";const p="/ImmersiveTranslate/DeepLX_download.png",c="/ImmersiveTranslate/DeepLX_run.png",d="/ImmersiveTranslate/DeepLX_test.png",u="/ImmersiveTranslate/ImmersiveTranslateBeta.png",m="/ImmersiveTranslate/ImmersiveTranslateDeepLX.png",g="/ImmersiveTranslate/DeepLX_bench.png",h={},_=e("h2",{id:"教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#教程","aria-hidden":"true"},"#"),a(" 教程")],-1),f={href:"https://immersivetranslate.com/docs/services/deepL/#%E8%87%AA%E5%BB%BA-deepl-api",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"安装-deeplx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-deeplx","aria-hidden":"true"},"#"),a(" 安装 DeepLX")],-1),b={href:"https://github.com/OwO-Network/DeepLX",target:"_blank",rel:"noopener noreferrer"},v=l('<p>windows 安装：</p><p>64 位电脑下载：<code>deeplx_windows_amd64.exe</code></p><figure><img src="'+p+'" alt="DeepLX 下载" tabindex="0" loading="lazy"><figcaption>DeepLX 下载</figcaption></figure><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>双击 <code>deeplx_windows_amd64.exe</code></p><figure><img src="'+c+`" alt="DeepLX 运行" tabindex="0" loading="lazy"><figcaption>DeepLX 运行</figcaption></figure><ul><li><p>测试</p><p>使用 Postman 测试</p><p>POST:</p><p>url: localhost:1188/translate</p><p>body:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;text&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Hello World&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;source_lang&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;EN&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;target_lang&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ZH&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="DeepLX 测试" tabindex="0" loading="lazy"><figcaption>DeepLX 测试</figcaption></figure></li></ul><h2 id="沉浸式翻译设置" tabindex="-1"><a class="header-anchor" href="#沉浸式翻译设置" aria-hidden="true">#</a> 沉浸式翻译设置</h2><ul><li><p><code>开发者设置</code> 中，打开 <code>开启 Beta 测试特性</code></p><figure><img src="'+u+'" alt="沉浸式翻译开启 Beta 测试特性" tabindex="0" loading="lazy"><figcaption>沉浸式翻译开启 Beta 测试特性</figcaption></figure></li><li><p>基本设置，翻译服务选择 <code>DeepLX</code></p><figure><img src="'+m+'" alt="沉浸式翻译 DeepLX 翻译服务" tabindex="0" loading="lazy"><figcaption>沉浸式翻译 DeepLX 翻译服务</figcaption></figure></li></ul><h2 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试" aria-hidden="true">#</a> 性能测试</h2><p>使用 <code>沉浸式翻译</code> 翻译整个网页，控制台打印日志如图。</p><p>会在短时间内发送大量请求，每条请求的应道 <code>300-500ms</code> 区间，整个页面翻译消耗时间比较长，且容易导致 <code>DeepL API</code> 屏蔽 IP。</p><figure><img src="'+g+'" alt="DeepLX 性能" tabindex="0" loading="lazy"><figcaption>DeepLX 性能</figcaption></figure>',13);function x(L,y){const n=t("ExternalLinkIcon");return i(),r("div",null,[_,e("p",null,[e("a",f,[a("自建 DeepL API"),s(n)])]),B,e("p",null,[a("Github地址："),e("a",b,[a("https://github.com/OwO-Network/DeepLX"),s(n)])]),v])}const X=o(h,[["render",x],["__file","DeepLX.html.vue"]]);export{X as default};