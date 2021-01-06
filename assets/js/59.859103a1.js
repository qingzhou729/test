(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{378:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"聊聊我的新课《vue-js-3-0-核心源码解析》​"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聊聊我的新课《vue-js-3-0-核心源码解析》​"}},[t._v("#")]),t._v(" 聊聊我的新课《Vue.js 3.0 核心源码解析》​")]),t._v(" "),a("h2",{attrs:{id:"我为什么做这门课程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我为什么做这门课程"}},[t._v("#")]),t._v(" 我为什么做这门课程")]),t._v(" "),a("p",[t._v("2020 年 7 月 6 日，我的课程 《Vue.js 3.0 核心源码解析》在拉勾教育平台上线了，我想和大家聊聊我为什么做这门课，源码学习的心得以及与拉勾合作的一些感受。")]),t._v(" "),a("p",[t._v("从 16 年底到现在，我每年都会出一门新课，截止到去年，我在慕课网已经上线了 4 门视频课程了。不过出视频课对我来说确实效率太低了，因为我个人的毛病，如果我在录制过程中有一些小瑕疵或者是讲错了，我是不会继续讲然后让后期剪辑，而是会停下来重新录制，结果就导致一小段视频不断地 NG，录制效率非常低下。")]),t._v(" "),a("p",[t._v("所以 19 年我录完 《TypeScript 重构 Axios》课程后，就不打算做新课了，心想着维护一下现有的几门课程得了。但后来想想是不是还得产出点啥，于是 19 年下半年注册了公众号，写写原创文章应该也不错，因为工作相关的原因，我打算写系列 ElementUI 源码分析的文章，但不幸的是，我写着写着，突然有一天就不想写了。")]),t._v(" "),a("p",[t._v("到现在我的草稿里还有一篇没发出去的文章，因为我发现 ElementUI 的源码对我来说太简单了，而且有些地方的实现也很粗糙，写完一看阅读数还没有一些撒鸡汤的文章多，评论也很少，我写下去没有动力和成就感了，对自己的提升也非常有限。于是，我鸽了，是的，我第一次在公开场合承认我鸽了，对不起。")]),t._v(" "),a("p",[t._v("2020 年 4 月，拉勾的运营找到了我，问我愿不愿意合作一门 Vue.js 3.0 的课程。原本我是拒绝的，但是她说就是做一个专栏类的课程，主要通过文字 + 音频的形式呈现，我心想写文章那不是我擅长的么，也不会占用太多时间，于是我就说我考虑一下。")]),t._v(" "),a("p",[t._v("从我 18 年做 《Vue.js 2.x 源码解析》课程的经验来看，源码这类抽象的技术用视频的方式呈现，对讲师来说是一个极大的挑战，我录完课程发现自己的发际线都明显高了一截，因为录起来实在太累了，一些比较深入的知识点，视频方式也不利于呈现。但是如果是写文章，那么就可以写的非常深入，而且不用担心过程中出错，因为写文章出错，改改就好了，最终呈现给用户就是完美的，而录视频的过程中是音画同步的，出一点错就得重来。")]),t._v(" "),a("p",[t._v("Vue.js 3.0 从去年下半年开始的 alpha 版本出来，社区就出来一些源码解析类文章，不过大部分都是分析 Vue.js 3.0 的响应式模块的实现，搞的就跟 Vue.js 3.0 就只有响应式一样。当然，响应式确实是一个很大的变化，但除此之外，Composition API，组件的渲染更新方式，编译的实现和优化，新的内置组件这些都是我感兴趣的东西，于是我系统地研究了一波 Vue.js 3.0 的源码，当然也希望自己能系统地输出 Vue.js 3.0 的源码解析文章。")]),t._v(" "),a("p",[t._v("所以我最终答应了和拉勾的合作，并且你们也不用担心这门课程被鸽了，因为有合同呢，如果擅自鸽的话要支付一大笔违约金：）")]),t._v(" "),a("h2",{attrs:{id:"学习源码在工作中的收益"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习源码在工作中的收益"}},[t._v("#")]),t._v(" 学习源码在工作中的收益")]),t._v(" "),a("p",[t._v("有些人可能会好奇，我平时去研究这些源码有用吗？对我来说，用处非常大。")]),t._v(" "),a("p",[t._v("今年 5 月份，我所在的公司 Zoom 在我们的 Web 项目中开启了 CSP 安全策略，其中把 "),a("code",[t._v("unsafe-eval")]),t._v(" 从 "),a("code",[t._v("script-src")]),t._v(" 中拿掉了，但是这么操作导致了一个很严重的问题，由于运行在 Web 的项目有一部分组件是通过 Vue.js 开发的，这部分代码全部不能正常工作了。")]),t._v(" "),a("p",[t._v("虽然我到了 Zoom 后在公司推行了前后端分离的解决方案，并用该方案重构了十几个项目，但是还有很多项目并没有来得及重构，他们仍然是直接通过 CDN 的方式引入 Vue.js，并在后端的 Java 模板中写组件的 template，然后用在运行时编译模板。我们知道编译的过程最后是生成一段 code 字符串，然后通过 "),a("code",[t._v("new Function")]),t._v(" 的方式转成 render 函数，但是 CSP 安全策略开启后，"),a("code",[t._v("new Function")]),t._v("  和 "),a("code",[t._v("eval")]),t._v(" 都被禁用了，导致整个编译后的流程不能进行下去。")]),t._v(" "),a("p",[t._v("既然有问题，我就得想办法解决。其实解决这个问题有两个思路，一个是全面推进前后端分离方案，使用 runtime-only 版本的 Vue.js，但这么做牵涉到所有使用 Vue.js 页面的改动，成本很高，短期不现实，是终极目标。另一个就是使用一个 CSP 兼容版本的 Vue.js，早在 Vue.js 1.x 版本的时代，Vue.js 官方提供了 Vue.js CSP 兼容版本，但是到了 Vue.js 2.x 后，官方就不再提供 CSP 兼容版本了，因为从官方的视角看，我都提供了 runtime-only 版本的解决方案了，完全没必要提供 CSP 兼容版本了。")]),t._v(" "),a("p",[t._v("但实际上 CSP 兼容版本还是有需求的，比如社区有人提过一个 "),a("a",{attrs:{href:"https://github.com/vuejs/vue/issues/9895",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1),t._v("，然而官方压根就没搭理（从我做的经验来看，做这玩意成本还是不小的，花 99% 的精力解决 1% 的人的问题的买卖显然不会做）。")]),t._v(" "),a("p",[t._v("虽然官方没有直接支持 CSP 兼容版本的 Vue.js，但对于我们来说，现阶段最小成本解决问题的方式就是使用一个 CSP 兼容版本的 Vue.js，所以只能魔改 Vue.js 了。")]),t._v(" "),a("p",[t._v("那么，我们应该改哪些部分呢？")]),t._v(" "),a("p",[t._v("首先，"),a("code",[t._v("new Function")]),t._v(" 不能用了，那么生成的 code 字符串如何执行呢？经过调研，我选用了 notevil 这个库，它其实就是用 JavaScript 去实现 JavsScript 的解析引擎，大致原理是先把源码解析成 AST 树，再去遍历 AST 树，对不同类型的节点做不同的处理，达到最终执行 JavaScript 代码的目的。但是 notevil 的实现还是不够完整，比如一些 ES6 的语法，像箭头函数、数组对象的解构赋值，是不支持的；此外，还有一个致命的影响：对 "),a("code",[t._v("with")]),t._v(" 的语法不支持。")]),t._v(" "),a("p",[t._v("Vue.js 2.x 组件模板最终编译的代码，是使用 "),a("code",[t._v("with")]),t._v(" 语法做了一层包装，举个例子：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n  {{ message }}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("上述组件模板，最终编译生成的 code 如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这是什么意思呢，首先，Vue.js 为了让用户使用方便，在模板中访问数据不用手动加 "),a("code",[t._v("this")]),t._v("，但是实际上在模板中引用的变量都是定义在组件实例中的。比如我们上述例子中的 "),a("code",[t._v("message")]),t._v(" 和 "),a("code",[t._v("text")]),t._v("，都是定义在组件实例上的，所以如果不用 "),a("code",[t._v("with(this)")]),t._v(" 的话，我们需要生成如下的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们定义一个函数，接受一个 "),a("code",[t._v("_ctx")]),t._v("  参数，这个 "),a("code",[t._v("_ctx")]),t._v(" 在运行时就是组件传入的实例对象 "),a("code",[t._v("this")]),t._v("。")]),t._v(" "),a("p",[t._v("这个时候，你可能会说，这有何难的，我们给所有的变量和函数的对象前面加上 "),a("code",[t._v("_ctx")]),t._v(" 前缀不就可以了吗，但事情并没有你想的那么简单，我们简单地对上述示例做个变形：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n  {{ message + text }}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("显然，由于模板中可能存在复杂的表达式，我们最终希望的结果如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("整个事情就变成了，我需要给生成代码中该加 "),a("code",[t._v("this")]),t._v(" 的地方加 "),a("code",[t._v("this")]),t._v("。所以抛开了 "),a("code",[t._v("with this")]),t._v("，我们需要实现上述需求，怎么搞呢？")]),t._v(" "),a("p",[t._v("Vue.js 2.x 的编译会经过三个过程：template 解析生成 AST ——> AST 优化 ——> AST 生成 code。我的思路是尽量不改这三个过程，然后到最后再去加一个过程：转换生成的 code。对于前面的例子，也就是想办法把")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("转换成")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("具体怎么做呢，因为模板的可能性有千万种，所以最靠谱的方式就是先把转换前的代码解析生成 AST，再去遍历这颗 AST，根据语法在相关的位置上加上前缀（修改 AST 的 节点），最后再把修改后的 AST 转换成代码。")]),t._v(" "),a("p",[t._v("我利用了 recast 库完成了code → AST 和  AST → code ，estree-walker 库去遍历 AST 的节点，通过一系列判断条件去判断这个节点需不需要加前缀。我们需要注意的是，函数的参数不能加前缀，局部变量不能加前缀，全局内置变量不能加前缀，已经加过前缀的节点不能加前缀等。")]),t._v(" "),a("p",[t._v("这里比较有意思的地方是要考虑函数嵌套函数，也就是有闭包的情况。需要设计一个堆栈的数据结构，在函数进入入栈，函数退出出栈，如果是外层函数中定义的变量，内部函数是不能加前缀的。")]),t._v(" "),a("p",[t._v("这里的第三方依赖 recast、estree-walker 原本都是在 node.js 端跑的，为了让它们在前端运行，我也分别 clone 了它们的代码， 用 rollup 对它们做打包，并删除了内部一些 node only 的代码和一定程度的魔改，最终编译出一份在 web 端跑的代码，放到了 lib 目录。")]),t._v(" "),a("p",[t._v("具体代码细节我就不介绍了，我之所以有上述思路，其实是因为我研究过 Vue.js 3.0 的编译过程，发现它在离线编译的时候也会把结果编译成带前缀的，然后我就把它的实现原理搞清楚了，核心代码借过来，然后再做一些修改来支持自己特定的一些 feature，这个难题就被我解决了。最终魔改版的 Vue.js 也在主流浏览器下跑通了的 12 个 demo 以及跑通了 1300 多个单测。")]),t._v(" "),a("p",[t._v("之前一直不太理解为什么 Vue.js 编译生成的代码需要用 "),a("code",[t._v("with")]),t._v(" 包一层，因为 "),a("code",[t._v("with")]),t._v(" 在 ECMAScript 5 的严格模式中是被禁用的，现在终于理解了对于模板内部用到了一些复杂表达式，利用 "),a("code",[t._v("with")]),t._v(" 的特性动去指定的对象中查找即可，完全不用做多余的转换，也不用引入这些 AST 解析库了，因为引入这些库要让 Vue.js 最终打包的体积大了约四倍。")]),t._v(" "),a("p",[t._v("另外，我们平时经常会强调技术选型的能力，其实技术选型的一个标准，就是你选择的第三方依赖，你能不能 hold 住。首先是你知道它的职责边界，知道它能做什么不能做什么，怎么利用它帮助你开发需求；其次是出了错你能不能快速定位到原因，知道是依赖的问题还是自身使用的问题；最后就是当它不能满足你的需求，并且官方不愿意解决或者不维护的情况下，你能不能去 fork 这个库，自己开发解决并实现。那么显然拥有这些能力就需要你对它的源码实现非常了解，所以这也是一些高阶岗位为什么会在面试中考察你对技术原理掌握的一方面原因。")]),t._v(" "),a("h2",{attrs:{id:"和拉勾合作的一些感受"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和拉勾合作的一些感受"}},[t._v("#")]),t._v(" 和拉勾合作的一些感受")]),t._v(" "),a("p",[t._v("最后聊聊和拉勾合作的一些感受吧，拉勾的编辑们真的很用心，每一篇稿子，他们都会反复地跟我磨稿，我课程中的图，他们也会帮我再重新美化一遍，另外他们也会根据我的文字课程做成视频 PPT，一门课出来他们真的投入了很多资源，另外拉勾的编辑小姐姐为了能看懂我的文章还特地自学了 Vue.js。")]),t._v(" "),a("p",[t._v("此外，拉勾教育真的是慈善教育，1 元购课的活动，对用户而言，几乎没有任何的决策成本，买就对了，另外买完课程还可以分销。")]),t._v(" "),a("p",[t._v("对我而言，赚钱从来就不是我做课程的主要目的，我的目的就是去输出优质的课程，帮助更多的人进阶技术，并且也在做课程的过程中提升自己，而赚钱就是它的一个附属价值，你的课程质量好，有价值，自然就会有很多人来购买学习。")]),t._v(" "),a("p",[t._v("相信通过和拉勾的合作，这门课会以最优质的状态呈现给大家，总之，如果你买了这门课程，一定要认真学习，并且有所收获，这样我和拉勾的付出就是值得的。")]),t._v(" "),a("h2",{attrs:{id:"写给我之前的学生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写给我之前的学生"}},[t._v("#")]),t._v(" 写给我之前的学生")]),t._v(" "),a("p",[t._v("我在慕课的《Vue.js 2.x 的源码解析》课程，之前是计划更新的，不过目前看来是不会再更新了，如果你是这门课的学生， 并且是冲着 Vue.js 3.0 来的，那么你看到这篇文章的时候，抓紧去拉勾花 1 元购买这门课，如果错过了 1 元活动，也不要紧，你可以在公众号后台或者是 issue 区给我留言，贴上你的慕课网源码课程的购买订单，我会给你发私信，帮你们去申请 1 元购的链接。")]),t._v(" "),a("p",[t._v("另外，Vue.js 2.x 和 3.x 的源码学习不冲突，两者都很重要，并且很多思想是相同的，如果你是一个 Vue.js 的用户，你迟早都要去学习它们的。")]),t._v(" "),a("h2",{attrs:{id:"广告时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广告时间"}},[t._v("#")]),t._v(" 广告时间")]),t._v(" "),a("p",[t._v("最后，放出"),a("a",{attrs:{href:"https://kaiwu.lagou.com/course/courseInfo.htm?courseId=326#/content",target:"_blank",rel:"noopener noreferrer"}},[t._v("拉勾课程的链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("你可以扫下方二维码购买学习：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/qrcode.png"),alt:"qrcode"}}),t._v(" "),a("p",[t._v("也可以关注我的公众号，在后台给我留言")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/qrcode_mp.jpg"),alt:"qrcode_mp"}})])}),[],!1,null,null,null);s.default=e.exports}}]);