(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cnode-2/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"14b9":function(t,e,n){},"22f1":function(t,e,n){"use strict";var a=n("39a5"),s=n.n(a);s.a},"39a5":function(t,e,n){},"3e88":function(t,e,n){"use strict";var a=n("cf72"),s=n.n(a);s.a},4482:function(t,e,n){},"541e":function(t,e,n){"use strict";var a=n("4482"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e25e"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"main"},[n("router-view",{attrs:{name:"slidebar"}}),n("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"root"}}},[a("img",{attrs:{src:n("d686"),alt:""}})]),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"#"}},[t._v("首页")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("新手入门")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("API")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("关于")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("注册")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("登录")])])])}],c={name:"Header"},u=c,l=(n("22f1"),n("2877")),p=Object(l["a"])(u,r,o,!1,null,"68d5395a",null),f=p.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PostList"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",{staticClass:"posts"},[a("ul",[t._m(0),t._l(t.posts,(function(e){return a("li",[a("img",{attrs:{src:e.author.avatar_url,alt:""}}),a("span",{staticClass:"allcount"},[a("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),t._v(" /"+t._s(e.visit_count)+" ")]),a("span",{class:[{put_good:1==e.good,put_top:1==e.top,"topiclist-tab":1!=e.good&&1!=e.top}]},[a("span",[t._v(" "+t._s(t._f("tabFormatter")(e))+" ")])]),a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[a("span",[t._v(" "+t._s(e.title)+" ")])]),a("span",{staticClass:"last_reply"},[t._v(" "+t._s(t._f("formatDate")(e.last_reply_at))+" ")])],1)})),a("li",[a("pagination",{on:{handleList:t.renderList}})],1)],2)])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"toobar"},[n("span",[t._v("全部")]),n("span",[t._v("精华")]),n("span",[t._v("分享")]),n("span",[t._v("问答")]),n("span",[t._v("招聘")])])])}],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("button",{on:{click:t.changeBtn}},[t._v("首页")]),n("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t.jduge?n("button",{staticClass:"pagebtn"},[t._v("......")]):t._e(),t._l(t.pagebtns,(function(e){return n("button",{class:[{currentPage:e==t.currentPage},"pagebtn"],on:{click:function(n){return t.changeBtn(e)}}},[t._v(" "+t._s(e)+" ")])})),n("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},v=[],g=(n("a434"),n("1157")),m=n.n(g),b={name:"Pagination",data:function(){return{pagebtns:[1,2,3,4,5,"......"],currentPage:1,jduge:!1}},methods:{changeBtn:function(t){if("number"==typeof t)this.currentPage=t,this.jduge=t>4,t==this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t==this.pagebtns[0]&&1!=t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":m()("button.currentPage").prev().click();break;case"下一页":m()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5,"......"],this.changeBtn(1);break;default:break}}}},y=b,C=(n("6b4d"),Object(l["a"])(y,h,v,!1,null,"7d44e89f",null)),j=C.exports,L={name:"PostList",data:function(){return{isLoading:!1,posts:[],postpage:1}},components:{pagination:j},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postpage,limit:20}}).then((function(e){t.isLoading=!1,t.posts=e.data.data})).catch((function(t){console.log(t)}))},renderList:function(t){this.postpage=t,this.getData()}},beforeMount:function(){this.isLoading=!0,this.getData()}},k=L,P=(n("541e"),Object(l["a"])(k,d,_,!1,null,"dfdac994",null)),$=P.exports,w={name:"App",components:{Header:f,PostList:$}},O=w,x=(n("034f"),Object(l["a"])(O,s,i,!1,null,null,null)),D=x.exports,I=n("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",{attrs:{c:""}},[a("div",{staticClass:"topic_header"},[a("div",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),a("ul",[a("li",[t._v("•发布于："+t._s(t._f("formatDate")(t.post.create_at)))]),a("li",[t._v(" • 作者： "+t._s(t.post.author.loginname)+" ")]),a("li",[t._v("• "+t._s(t.post.visit_count)+"次浏览")]),a("li",[t._v("•来自"+t._s(t._f("tabFormatter")(t.post)))])]),a("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.post.content)}})]),a("div",{attrs:{id:"reply"}},[a("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,(function(e,n){return a("div",{staticClass:"replySec"},[a("div",{staticClass:"replyUp"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})]),a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("span",[t._v(t._s(e.author.loginname))])]),a("span",[t._v(t._s(n+1)+"楼")]),e.ups.length>0?a("span",[t._v("☝ "+t._s(e.ups.length))]):a("span")],1),a("p",{domProps:{innerHTML:t._s(e.content)}})])}))],2)])])},E=[],T={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getArticleData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then((function(e){1==e.data.success&&(t.isLoading=!1,t.post=e.data.data)})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getArticleData()},watch:{$route:function(t,e){this.getArticleData()}}},B=T,S=(n("7703"),Object(l["a"])(B,M,E,!1,null,null,null)),A=S.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"UserInfo"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",{staticClass:"userInfomation"},[a("section",[a("img",{attrs:{src:t.userinfo.avatar_url}}),a("span",[t._v(t._s(t.userinfo.loginname))]),a("p",[t._v(t._s(t.userinfo.score)+"积分")]),a("p",[t._v("注册时间："+t._s(t._f("formatDate")(t.userinfo.create_at)))])]),a("div",{staticClass:"replies"},[a("p",[t._v("回复的主题")]),a("ul",t._l(t.userinfo.recent_replies,(function(e){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(t._s(e.title))])],1)})),0)]),a("div",{staticClass:"topics"},[a("p",[t._v("创建的主题")]),a("ul",t._l(t.userinfo.recent_topics,(function(e){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(t._s(e.title))])],1)})),0)])])])},F=[],U=(n("b0c0"),{name:"UserInfo",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(e){t.isLoading=!1,t.userinfo=e.data.data})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getData()}}),J=U,q=(n("3e88"),Object(l["a"])(J,H,F,!1,null,"71b2feb2",null)),z=q.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autherinfo"},[n("div",{staticClass:"authersummay"},[n("div",{staticClass:"topbar"},[t._v("作者")]),n("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[n("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})])],1),n("div",{staticClass:"recent_topics"},[n("div",{staticClass:"topbar"},[t._v("作者最近主题")]),n("ul",t._l(t.topcilimitby5,(function(e){return n("li",[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),n("div",{staticClass:"recent_replies"},[n("div",{staticClass:"topbar"},[t._v("作者最近回复")]),n("ul",t._l(t.replylimitby5,(function(e){return n("li",[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},K=[],N=(n("fb6a"),{name:"SlideBar",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(e){t.isLoading=!1,t.userinfo=e.data.data})).catch((function(t){console.log(t)}))}},computed:{topcilimitby5:function(){if(this.userinfo.recent_topics)return this.userinfo.recent_topics.slice(0,5)},replylimitby5:function(){if(this.userinfo.recent_replies)return this.userinfo.recent_replies.slice(0,5)}},beforeMount:function(){this.isLoading=!0,this.getData()}}),Q=N,R=(n("fa4b"),Object(l["a"])(Q,G,K,!1,null,"413418aa",null)),V=R.exports;a["a"].use(I["a"]);var W=new I["a"]({routes:[{name:"root",path:"/",components:{main:$}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:A,slidebar:V}},{name:"user_info",path:"/userinfo/:name",components:{main:z}}]}),X=n("bc3a"),Y=n.n(X);a["a"].prototype.$http=Y.a,a["a"].config.productionTip=!1,new a["a"]({router:W,render:function(t){return t(D)}}).$mount("#app"),a["a"].filter("formatDate",(function(t){if(!t)return"";var e=new Date(t),n=(new Date).getTime()-e.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"})),a["a"].filter("tabFormatter",(function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"}))},"6b4d":function(t,e,n){"use strict";var a=n("14b9"),s=n.n(a);s.a},7703:function(t,e,n){"use strict";var a=n("e6ad"),s=n.n(a);s.a},"85ec":function(t,e,n){},cf1c:function(t,e,n){t.exports=n.p+"img/loading.556e9ff8.gif"},cf72:function(t,e,n){},d686:function(t,e,n){t.exports=n.p+"img/cnodejs_light.86f6a7c2.svg"},e6ad:function(t,e,n){},f6cf:function(t,e,n){},fa4b:function(t,e,n){"use strict";var a=n("f6cf"),s=n.n(a);s.a}});
//# sourceMappingURL=app.017dba72.js.map