import{d as n}from"./app.f39c3f0f.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="function-prototype-bind" tabindex="-1"><a class="header-anchor" href="#function-prototype-bind" aria-hidden="true">#</a> function.prototype.bind()</h1><p><code>bind</code> \u51FD\u6570\u7684\u5B9E\u73B0\u6B65\u9AA4\uFF1A</p><ul><li>\u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570\uFF1B</li><li>\u4FDD\u5B58\u5F53\u524D\u51FD\u6570\u7684\u5F15\u7528\uFF0C\u83B7\u53D6\u5176\u4F59\u4F20\u5165\u53C2\u6570\u503C\uFF1B</li><li>\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u8FD4\u56DE\uFF1B</li><li>\u51FD\u6570\u5185\u90E8\u4F7F\u7528 apply \u6765\u7ED1\u5B9A\u51FD\u6570\u8C03\u7528\uFF0C\u9700\u8981\u5224\u65AD\u51FD\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u7684\u60C5\u51B5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u4F20\u5165\u5F53\u524D\u51FD\u6570\u7684 this \u7ED9 apply \u8C03\u7528\uFF0C\u5176\u4F59\u60C5\u51B5\u90FD\u4F20\u5165\u6307\u5B9A\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@see</span> https://github.com/mqyqingfeng/Blog/issues/12
 * <span class="token keyword">@see</span> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">thisArg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Function.prototype.bind - what is trying to be bound is not callable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> <span class="token function-variable function">fNOP</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> <span class="token function-variable function">fBound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> bindArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">fNOP</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> thisArg<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>bindArgs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  fNOP<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
  fBound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fNOP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> fBound<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,4);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};