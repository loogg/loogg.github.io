import{_ as r,r as s,o as a,c as i,a as e,e as n,b as o,f as l}from"./app-b1247f6b.js";const d={},c=e("h1",{id:"jsmn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jsmn","aria-hidden":"true"},"#"),o(" JSMN")],-1),u={href:"https://travis-ci.org/zserge/jsmn",target:"_blank",rel:"noopener noreferrer"},p=e("img",{src:"https://travis-ci.org/zserge/jsmn.svg?branch=master",alt:"Build Status",tabindex:"0",loading:"lazy"},null,-1),h=e("figcaption",null,"Build Status",-1),m=e("p",null,[o("jsmn (pronounced like 'jasmine') is a minimalistic JSON parser in C. It can be"),e("br"),o(" easily integrated into resource-limited or embedded projects.")],-1),b={href:"http://www.json.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/zserge/jsmn",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),y={href:"http://zserge.com/jsmn.html",target:"_blank",rel:"noopener noreferrer"},_=l(`<h2 id="philosophy" tabindex="-1"><a class="header-anchor" href="#philosophy" aria-hidden="true">#</a> Philosophy</h2><p>Most JSON parsers offer you a bunch of functions to load JSON data, parse it<br> and extract any value by its name. jsmn proves that checking the correctness of<br> every JSON packet or allocating temporary objects to store parsed JSON fields<br> often is an overkill.</p><p>JSON format itself is extremely simple, so why should we complicate it?</p><p>jsmn is designed to be <strong>robust</strong> (it should work fine even with erroneous<br> data), <strong>fast</strong> (it should parse data on the fly), <strong>portable</strong> (no superfluous<br> dependencies or non-standard C extensions). And of course, <strong>simplicity</strong> is a<br> key feature - simple code style, simple algorithm, simple integration into<br> other projects.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>compatible with C89</li><li>no dependencies (even libc!)</li><li>highly portable (tested on x86/amd64, ARM, AVR)</li><li>about 200 lines of code</li><li>extremely small code footprint</li><li>API contains only 2 functions</li><li>no dynamic memory allocation</li><li>incremental single-pass parsing</li><li>library code is covered with unit-tests</li></ul><h2 id="design" tabindex="-1"><a class="header-anchor" href="#design" aria-hidden="true">#</a> Design</h2><p>The rudimentary jsmn object is a <strong>token</strong>. Let&#39;s consider a JSON string:</p><pre><code>&#39;{ &quot;name&quot; : &quot;Jack&quot;, &quot;age&quot; : 27 }&#39;
</code></pre><p>It holds the following tokens:</p><ul><li>Object: <code>{ &quot;name&quot; : &quot;Jack&quot;, &quot;age&quot; : 27}</code> (the whole object)</li><li>Strings: <code>&quot;name&quot;</code>, <code>&quot;Jack&quot;</code>, <code>&quot;age&quot;</code> (keys and some values)</li><li>Number: <code>27</code></li></ul><p>In jsmn, tokens do not hold any data, but point to token boundaries in JSON<br> string instead. In the example above jsmn will create tokens like: Object<br> [0..31], String [3..7], String [12..16], String [20..23], Number [27..29].</p><p>Every jsmn token has a type, which indicates the type of corresponding JSON<br> token. jsmn supports the following token types:</p><ul><li>Object - a container of key-value pairs, e.g.:<br><code>{ &quot;foo&quot;:&quot;bar&quot;, &quot;x&quot;:0.3 }</code></li><li>Array - a sequence of values, e.g.:<br><code>[ 1, 2, 3 ]</code></li><li>String - a quoted sequence of chars, e.g.: <code>&quot;foo&quot;</code></li><li>Primitive - a number, a boolean (<code>true</code>, <code>false</code>) or <code>null</code></li></ul><p>Besides start/end positions, jsmn tokens for complex types (like arrays<br> or objects) also contain a number of child items, so you can easily follow<br> object hierarchy.</p><p>This approach provides enough information for parsing any JSON data and makes<br> it possible to use zero-copy techniques.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><p>To clone the repository you should have Git installed. Just run:</p><pre><code>$ git clone https://github.com/zserge/jsmn
</code></pre><p>Repository layout is simple: jsmn.c and jsmn.h are library files, tests are in<br> the jsmn_test.c, you will also find README, LICENSE and Makefile files inside.</p><p>To build the library, run <code>make</code>. It is also recommended to run <code>make test</code>.<br> Let me know, if some tests fail.</p><p>If build was successful, you should get a <code>libjsmn.a</code> library.<br> The header file you should include is called <code>&quot;jsmn.h&quot;</code>.</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>Token types are described by <code>jsmntype_t</code>:</p><pre><code>typedef enum {
	JSMN_UNDEFINED = 0,
	JSMN_OBJECT = 1,
	JSMN_ARRAY = 2,
	JSMN_STRING = 3,
	JSMN_PRIMITIVE = 4
} jsmntype_t;
</code></pre><p><strong>Note:</strong> Unlike JSON data types, primitive tokens are not divided into<br> numbers, booleans and null, because one can easily tell the type using the<br> first character:</p><ul><li><code>&#39;t&#39;, &#39;f&#39;</code> - boolean</li><li><code>&#39;n&#39;</code> - null</li><li><code>&#39;-&#39;, &#39;0&#39;..&#39;9&#39;</code> - number</li></ul><p>Token is an object of <code>jsmntok_t</code> type:</p><pre><code>typedef struct {
	jsmntype_t type; // Token type
	int start;       // Token start position
	int end;         // Token end position
	int size;        // Number of child (nested) tokens
} jsmntok_t;
</code></pre><p><strong>Note:</strong> string tokens point to the first character after<br> the opening quote and the previous symbol before final quote. This was made<br> to simplify string extraction from JSON data.</p><p>All job is done by <code>jsmn_parser</code> object. You can initialize a new parser using:</p><pre><code>jsmn_parser parser;
jsmntok_t tokens[10];

jsmn_init(&amp;parser);

// js - pointer to JSON string
// tokens - an array of tokens available
// 10 - number of tokens available
jsmn_parse(&amp;parser, js, strlen(js), tokens, 10);
</code></pre><p>This will create a parser, and then it tries to parse up to 10 JSON tokens from<br> the <code>js</code> string.</p><p>A non-negative return value of <code>jsmn_parse</code> is the number of tokens actually<br> used by the parser.<br> Passing NULL instead of the tokens array would not store parsing results, but<br> instead the function will return the value of tokens needed to parse the given<br> string. This can be useful if you don&#39;t know yet how many tokens to allocate.</p><p>If something goes wrong, you will get an error. Error will be one of these:</p><ul><li><code>JSMN_ERROR_INVAL</code> - bad token, JSON string is corrupted</li><li><code>JSMN_ERROR_NOMEM</code> - not enough tokens, JSON string is too large</li><li><code>JSMN_ERROR_PART</code> - JSON string is too short, expecting more JSON data</li></ul><p>If you get <code>JSMN_ERROR_NOMEM</code>, you can re-allocate more tokens and call<br><code>jsmn_parse</code> once more. If you read json data from the stream, you can<br> periodically call <code>jsmn_parse</code> and check if return value is <code>JSMN_ERROR_PART</code>.<br> You will get this error until you reach the end of JSON data.</p><h2 id="other-info" tabindex="-1"><a class="header-anchor" href="#other-info" aria-hidden="true">#</a> Other info</h2>`,38),k={href:"http://www.opensource.org/licenses/mit-license.php",target:"_blank",rel:"noopener noreferrer"},j=e("br",null,null,-1);function N(S,J){const t=s("ExternalLinkIcon");return a(),i("div",null,[c,e("figure",null,[e("a",u,[p,n(t)]),h]),m,e("p",null,[o("You can find more information about JSON format at "),e("a",b,[o("json.org"),n(t)])]),e("p",null,[o("Library sources are available at "),e("a",f,[o("https://github.com/zserge/jsmn"),n(t)])]),e("p",null,[o("The web page with some information about jsmn can be found at"),g,e("a",y,[o("http://zserge.com/jsmn.html"),n(t)])]),_,e("p",null,[o("This software is distributed under "),e("a",k,[o("MIT license"),n(t)]),o(","),j,o(" so feel free to integrate it in your commercial products.")])])}const q=r(d,[["render",N],["__file","index.html.vue"]]);export{q as default};