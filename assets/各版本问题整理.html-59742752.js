import{_ as s,o as n,c as a,e as l}from"./app-9321368f.js";const e={},i=l(`<h2 id="rt-thread-4-1-0" tabindex="-1"><a class="header-anchor" href="#rt-thread-4-1-0" aria-hidden="true">#</a> RT-Thread 4.1.0</h2><h3 id="sd-驱动框架" tabindex="-1"><a class="header-anchor" href="#sd-驱动框架" aria-hidden="true">#</a> SD 驱动框架</h3><p>SD 初始化失败移除 <code>blk_dev</code> 时存在双向链表 <code>next</code> 和 <code>prev</code> 都为 <code>NULL</code> 的情况，造成死循环。</p><p>修改 <code>rt_mmcsd_blk_remove</code>:</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">void rt_mmcsd_blk_remove(struct rt_mmcsd_card *card)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    rt_list_t *l, *n;</span></span>
<span class="line"><span style="color:#ABB2BF;">    struct mmcsd_blk_device *blk_dev;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">+     if(card == RT_NULL)</span></span>
<span class="line"><span style="color:#98C379;">+     {</span></span>
<span class="line"><span style="color:#98C379;">+         LOG_E(&quot;card is null!&quot;);</span></span>
<span class="line"><span style="color:#98C379;">+         return;</span></span>
<span class="line"><span style="color:#98C379;">+     }</span></span>
<span class="line"><span style="color:#98C379;">+</span></span>
<span class="line"><span style="color:#98C379;">+     if(rt_list_isempty(&amp;card-&gt;blk_devices))</span></span>
<span class="line"><span style="color:#98C379;">+     {</span></span>
<span class="line"><span style="color:#98C379;">+         LOG_E(&quot;card blk_devices is empty!&quot;);</span></span>
<span class="line"><span style="color:#98C379;">+         return;</span></span>
<span class="line"><span style="color:#98C379;">+     }</span></span>
<span class="line"><span style="color:#98C379;">+</span></span>
<span class="line"><span style="color:#98C379;">+     if ((&amp;card-&gt;blk_devices)-&gt;next == RT_NULL)</span></span>
<span class="line"><span style="color:#98C379;">+     {</span></span>
<span class="line"><span style="color:#98C379;">+         LOG_E(&quot;card blk_devices is null!&quot;);</span></span>
<span class="line"><span style="color:#98C379;">+         return;</span></span>
<span class="line"><span style="color:#98C379;">+     }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    for (l = (&amp;card-&gt;blk_devices)-&gt;next, n = l-&gt;next; l != &amp;card-&gt;blk_devices; l = n, n=n-&gt;next)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        blk_dev = (struct mmcsd_blk_device *)rt_list_entry(l, struct mmcsd_blk_device, list);</span></span>
<span class="line"><span style="color:#ABB2BF;">        if (blk_dev-&gt;card == card)</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            /* unmount file system */</span></span>
<span class="line"><span style="color:#ABB2BF;">            const char * mounted_path = dfs_filesystem_get_mounted_path(&amp;(blk_dev-&gt;dev));</span></span>
<span class="line"><span style="color:#ABB2BF;">            if (mounted_path)</span></span>
<span class="line"><span style="color:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#ABB2BF;">                  dfs_unmount(mounted_path);</span></span>
<span class="line"><span style="color:#ABB2BF;">                  LOG_D(&quot;unmount file system %s for device %s.\\r\\n&quot;, mounted_path, blk_dev-&gt;dev.parent.name);</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            rt_sem_delete(blk_dev-&gt;part.lock);</span></span>
<span class="line"><span style="color:#ABB2BF;">            rt_device_unregister(&amp;blk_dev-&gt;dev);</span></span>
<span class="line"><span style="color:#ABB2BF;">            rt_list_remove(&amp;blk_dev-&gt;list);</span></span>
<span class="line"><span style="color:#ABB2BF;">            rt_free(blk_dev);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="f4-sd-写入时偶尔长时间等待" tabindex="-1"><a class="header-anchor" href="#f4-sd-写入时偶尔长时间等待" aria-hidden="true">#</a> F4 SD 写入时偶尔长时间等待</h3><p>原 <code>rthw_sdio_send_command</code> 的实现方式为 <code>while</code> 死等结束或者超时，会造成低优先级的任务在这段时间内不运行。</p><p>修改 <code>drv_sdio.c</code>:</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">- #define SDIO_TX_RX_COMPLETE_TIMEOUT_LOOPS    (100000)</span></span>
<span class="line"><span style="color:#98C379;">+ #define SDIO_TX_RX_COMPLETE_TIMEOUT_LOOPS    (10000) //经测试为1.3ms</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">static void rthw_sdio_send_command(struct rthw_sdio *sdio, struct sdio_pkg *pkg)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    if (data != RT_NULL)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        volatile rt_uint32_t count = SDIO_TX_RX_COMPLETE_TIMEOUT_LOOPS;</span></span>
<span class="line"><span style="color:#98C379;">+       volatile rt_uint32_t loop_cnt = 800;  // count为10000时一个loop约为1.3ms，800个loop约为1.04s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">-        while (count &amp;&amp; (hw_sdio-&gt;sta &amp; (HW_SDIO_IT_TXACT | HW_SDIO_IT_RXACT)))</span></span>
<span class="line"><span style="color:#E06C75;">-        {</span></span>
<span class="line"><span style="color:#E06C75;">-            count--;</span></span>
<span class="line"><span style="color:#E06C75;">-        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">+        while (count &amp;&amp; (hw_sdio-&gt;sta &amp; (HW_SDIO_IT_TXACT | HW_SDIO_IT_RXACT)))</span></span>
<span class="line"><span style="color:#98C379;">+        {</span></span>
<span class="line"><span style="color:#98C379;">+            count--;</span></span>
<span class="line"><span style="color:#98C379;">+            if ((count == 0) &amp;&amp; (loop_cnt &gt; 0)) {</span></span>
<span class="line"><span style="color:#98C379;">+                rt_thread_mdelay(1);</span></span>
<span class="line"><span style="color:#98C379;">+                count = SDIO_TX_RX_COMPLETE_TIMEOUT_LOOPS;</span></span>
<span class="line"><span style="color:#98C379;">+                loop_cnt--;</span></span>
<span class="line"><span style="color:#98C379;">+            }</span></span>
<span class="line"><span style="color:#98C379;">+        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        if ((count == 0) || (hw_sdio-&gt;sta &amp; HW_SDIO_ERRORS))</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">            cmd-&gt;err = -RT_ERROR;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[i];function c(d,r){return n(),a("div",null,p)}const t=s(e,[["render",c],["__file","各版本问题整理.html.vue"]]);export{t as default};
