import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BqqVeB2F.js";const p="/my-blog/assets/%E9%85%8D%E7%BD%AEgithubpages.B9DKoweL.png",l="/my-blog/assets/%E7%94%B3%E8%AF%B7Algolia%E6%90%9C%E7%B4%A2%E6%9C%8D%E5%8A%A1.BgD3XsIr.png",y=JSON.parse('{"title":"打包静态网站并部署到 GitHub","description":"","frontmatter":{},"headers":[],"relativePath":"devRecord/other/vitePress搭建相关.md","filePath":"devRecord/other/vitePress搭建相关.md","lastUpdated":1712820977000}'),t={name:"devRecord/other/vitePress搭建相关.md"},e=n(`<h1 id="打包静态网站并部署到-github" tabindex="-1">打包静态网站并部署到 GitHub <a class="header-anchor" href="#打包静态网站并部署到-github" aria-label="Permalink to &quot;打包静态网站并部署到 GitHub&quot;">​</a></h1><h2 id="编写打包部署脚本" tabindex="-1">编写打包部署脚本 <a class="header-anchor" href="#编写打包部署脚本" aria-label="Permalink to &quot;编写打包部署脚本&quot;">​</a></h2><p>在项目根目录创建 deploy.sh 脚本，用于自动化打包、部署流程</p><details class="details custom-block"><summary>查看详情</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打包生成静态文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入待发布的 dist/ 目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交打包静态网站到 github-pages 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 部署到 https://&lt;username&gt;.github.io/&lt;repo&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [这里是你的项目git地址] master:github-pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交所有代码到github</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../../../</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;update&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div></details><p>新增ackage.json运行脚本</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs:deploy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sh deploy.sh&quot;</span></span></code></pre></div><h2 id="配置-github-pages" tabindex="-1">配置 github pages <a class="header-anchor" href="#配置-github-pages" aria-label="Permalink to &quot;配置 github pages&quot;">​</a></h2><p><img src="`+p+'" alt="配置 github pages" loading="lazy"></p><h2 id="配置-algolia-搜索" tabindex="-1">配置 Algolia 搜索 <a class="header-anchor" href="#配置-algolia-搜索" aria-label="Permalink to &quot;配置 Algolia 搜索&quot;">​</a></h2><p><a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noreferrer">申请搜索服务</a></p><p>填写部署到公网的网站地址、邮箱和代码仓库地址，全部勾选，然后提交</p><p><img src="'+l+`" alt="申请Algolia搜索服务" loading="lazy"></p><p>等待申请通过的并回复该邮件</p><blockquote><p>回复语句：<code>I am the maintainer of the website, I can modify the code ~</code></p></blockquote><p>等待下一封回复的邮件，该邮件中包含了<code>appId</code> <code>apiKey</code> <code>indexName</code></p><p>在vitePress的配置文件中配置 algolia 搜索服务</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    algolia: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      appId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      apiKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      indexName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xxxd&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,17),h=[e];function k(d,r,g,o,c,F){return a(),i("div",null,h)}const u=s(t,[["render",k]]);export{y as __pageData,u as default};
