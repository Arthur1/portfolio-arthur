(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{313:function(t,e,r){t.exports=r.p+"img/9c2bcf2.jpg"},316:function(t,e,r){var content=r(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("897a29fc",content,!0,{sourceMap:!1})},317:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("a3c29b56",content,!0,{sourceMap:!1})},318:function(t,e,r){var content=r(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("61ab5da8",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";r.r(e);var o={components:{DevBadge:r(321).default},props:["work"]},l=(r(339),r(23)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"workBox"},[r("div",{staticClass:"workBox_child"},[r("h2",{staticClass:"headline2"},[t._v(" "+t._s(t.$t("works."+t.work.id+".title"))),r("small",{staticClass:"work_year"},[t._v("["+t._s(t.work.year)+"]")])]),t._v(" "),r("div",t._l(t.work.devs,(function(t){return r("dev-badge",{key:t,attrs:{devId:t}})})),1),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("works."+t.work.id+".description"))+"\n    ")]),t._v(" "),r("dl",{staticClass:"work_links"},[t.work.url?r("dt",[r("font-awesome-icon",{attrs:{icon:["fas","link"]}})],1):t._e(),t._v(" "),t.work.url?r("dd",[r("a",{attrs:{href:t.work.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.work.url))])]):t._e(),t._v(" "),t.work.github?r("dt",[r("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1):t._e(),t._v(" "),t.work.github?r("dd",[r("a",{attrs:{href:t.work.github,target:"_blank",rel:"noopener"}},[t._v(t._s(t.work.github))])]):t._e()])]),t._v(" "),r("div",{staticClass:"workBox_child"},[r("img",{attrs:{src:t.work.img.src,width:t.work.img.width,height:t.work.img.height,alt:t.$t("works."+t.work.id+".title")}})])])}),[],!1,null,"38ba2d52",null);e.default=component.exports;installComponents(component,{DevBadge:r(321).default})},321:function(t,e,r){"use strict";r.r(e);r(58);var o=r(336),l={props:["devId"],data:function(){return{devs:o}},computed:{dev:function(){var t=this;return this.devs.find((function(e){return e.id==t.devId}),this)}}},n=(r(337),r(23)),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"badge",style:"background: "+(this.dev.bgColor||"gray")+"; color: "+(this.dev.textColor||"white")+";"},[e("font-awesome-icon",{staticClass:"badge_icon",attrs:{icon:this.dev.icon}}),this._v(this._s(this.dev.label)+"\n")],1)}),[],!1,null,"05d59b4f",null);e.default=component.exports},336:function(t){t.exports=JSON.parse('[{"id":"php","label":"PHP","bgColor":"#777cb4","textColor":"white","icon":["fab","php"]},{"id":"js","label":"JavaScript","bgColor":"#f7df1e","textColor":"black","icon":["fab","js"]},{"id":"laravel","label":"Laravel","bgColor":"#f55247","textColor":"white","icon":["fab","laravel"]},{"id":"vuejs","label":"Vue.js","bgColor":"#42b883","textColor":"white","icon":["fab","vuejs"]},{"id":"nuxtjs","label":"Nuxt.js","bgColor":"#2f495e","textColor":"white","icon":["fab","vuejs"]},{"id":"bootstrap","label":"Bootstrap","bgColor":"#563e7b","textColor":"white","icon":["fab","bootstrap"]},{"id":"html","label":"HTML5","bgColor":"#e34f26","textColor":"white","icon":["fab","html5"]},{"id":"css","label":"CSS3","bgColor":"#3c97d2","textColor":"white","icon":["fab","css3"]},{"id":"wordpress","label":"Wordpress","bgColor":"#21759b","textColor":"white","icon":["fab","wordpress"]},{"id":"fuelphp","label":"FuelPHP","bgColor":"#8303d8","textColor":"white","icon":["fas","tint"]},{"id":"python","label":"Python","bgColor":"#4584b6","textColor":"white","icon":["fab","python"]},{"id":"play","label":"Play Framework","bgColor":"#48661f","textColor":"white","icon":["fas","chevron-right"]},{"id":"scala","label":"Scala","bgColor":"#DF3835","textColor":"white","icon":["fas","question-circle"]},{"id":"ifttt","label":"IFTTT","bgColor":"#000000","textColor":"white","icon":["fas","question-circle"]},{"id":"gas","label":"Google Apps Script","bgColor":"#3e82f9","textColor":"white","icon":["fas","file-import"]},{"id":"aws","label":"AWS","bgColor":"#ff9900","textColor":"white","icon":["fab","aws"]},{"id":"mysql","label":"MySQL","bgColor":"#00758f","textColor":"white","icon":["fas","database"]},{"id":"redis","label":"Redis","bgColor":"#da2b21","textColor":"white","icon":["fas","database"]},{"id":"docker","label":"Docker","bgColor":"#0db7ed","textColor":"white","icon":["fab","docker"]}]')},337:function(t,e,r){"use strict";var o=r(316);r.n(o).a},338:function(t,e,r){(e=r(21)(!1)).push([t.i,".badge[data-v-05d59b4f]{display:inline-block;margin-right:.5rem;margin-bottom:.5rem;padding:.3rem;border-radius:.3rem;font-size:.8rem}.badge_icon[data-v-05d59b4f]{margin-right:.3rem}",""]),t.exports=e},339:function(t,e,r){"use strict";var o=r(317);r.n(o).a},340:function(t,e,r){(e=r(21)(!1)).push([t.i,".workBox[data-v-38ba2d52]{display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:2rem}@media screen and (min-width:1000px){.workBox[data-v-38ba2d52]:nth-of-type(2n){flex-direction:row-reverse}}.workBox_child[data-v-38ba2d52]{width:100%}@media screen and (min-width:1000px){.workBox_child[data-v-38ba2d52]{padding:1rem;width:50%}}.workBox_child img[data-v-38ba2d52]{max-width:100%;height:auto}.work_year[data-v-38ba2d52]{font-weight:400;font-size:.9rem;margin-left:1rem;color:grey}.work_links[data-v-38ba2d52]{display:flex;flex-wrap:wrap;margin:1rem 0}.work_links>dt[data-v-38ba2d52]{width:1.5rem}.work_links>dd[data-v-38ba2d52]{width:calc(100% - 1.5rem)}",""]),t.exports=e},341:function(t,e,r){t.exports=r.p+"img/ed2b01c.png"},342:function(t,e,r){t.exports=r.p+"img/32f055e.png"},343:function(t,e,r){t.exports=r.p+"img/6d04d80.png"},344:function(t,e,r){t.exports=r.p+"img/f00f8c8.png"},345:function(t,e,r){t.exports=r.p+"img/3bc52e3.png"},346:function(t,e,r){t.exports=r.p+"img/0e4850d.png"},347:function(t,e,r){t.exports=r.p+"img/f5f91f9.png"},348:function(t,e,r){t.exports=r.p+"img/7fb18cd.png"},349:function(t,e,r){t.exports=r.p+"img/65db6e6.png"},350:function(t,e,r){t.exports=r.p+"img/5deda40.png"},351:function(t,e,r){t.exports=r.p+"img/661b6e3.png"},352:function(t,e,r){t.exports=r.p+"img/858fe56.png"},353:function(t,e,r){t.exports=r.p+"img/4073bdc.jpg"},354:function(t,e,r){t.exports=r.p+"img/afe8c02.png"},355:function(t,e,r){t.exports=r.p+"img/8e492c4.png"},356:function(t,e,r){t.exports=r.p+"img/8e1c68a.png"},357:function(t,e,r){t.exports=r.p+"img/9a8289e.png"},358:function(t,e,r){"use strict";var o=r(318);r.n(o).a},359:function(t,e,r){var o=r(21),l=r(127),n=r(313);e=o(!1);var d=l(n);e.push([t.i,'.headlineBox[data-v-385fdee0]{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC"),url('+d+")}",""]),t.exports=e},365:function(t,e,r){"use strict";r.r(e);var o={components:{WorkElement:r(320).default},head:function(){return{title:"Works",meta:[{hid:"og:title",property:"og:title",content:"Works"}]}},data:function(){return{works:[{id:"koudaisai2016",year:2016,url:"https://2016.koudaisai.jp/",github:null,img:{src:r(341),width:1280,height:681},devs:["php","fuelphp","js","mysql"]},{id:"koudaisai2017",year:2017,url:"https://2017.koudaisai.jp/",github:null,img:{src:r(342),width:1280,height:678},devs:["php","fuelphp","js","mysql"]},{id:"goukakuJizi",year:2017,url:"https://goukaku.jizi.jp/",github:null,img:{src:r(343),width:1280,height:702},devs:["php","fuelphp","mysql"]},{id:"titechAppProject",year:2018,url:"https://titech.app/",github:null,img:{src:r(344),width:1280,height:702},devs:["js","nuxtjs","gas","aws"]},{id:"buratsukiPortal",year:2018,url:null,github:"https://github.com/Arthur1/buratsuki-portal/",img:{src:r(345),width:1280,height:699},devs:["php","fuelphp","js","mysql","docker"]},{id:"agricolaBook",year:2018,url:null,github:null,img:{src:r(346),width:1184,height:682},devs:["js","vuejs","bootstrap"]},{id:"tokyoKoryo",year:2019,url:"https://tokyokoryo.org/",github:null,img:{src:r(347),width:1280,height:737},devs:["php","wordpress","mysql"]},{id:"internalSpace",year:2019,url:"https://internal-space.com/",github:null,img:{src:r(348),width:1280,height:738},devs:["php","wordpress","mysql"]},{id:"reborn",year:2019,url:"https://internal-space.com/works/rebornvr/",github:null,img:{src:r(349),width:962,height:554},devs:["gas","ifttt","js"]},{id:"lifeGame",year:2019,url:"https://arthur1.github.io/sf-lifegame/",github:"https://github.com/Arthur1/sf-lifegame/",img:{src:r(350),width:1280,height:698},devs:["js","vuejs"]},{id:"gachiproOfSysimpl",year:2020,url:null,github:null,img:{src:r(351),width:1280,height:738},devs:["scala","play","js","vuejs","bootstrap","python","mysql","docker"]},{id:"nationalEconomy",year:2020,url:"https://neo.buratsuki.page/",github:"https://github.com/Arthur1/national-economy2/",img:{src:r(352),width:1280,height:737},devs:["php","laravel","js","vuejs","bootstrap","mysql","redis","docker"]},{id:"agriCompanion",year:2020,url:null,github:"https://github.com/Arthur1/agricola-companion/",img:{src:r(353),width:1280,height:737},devs:["php","laravel","js","vuejs","bootstrap","mysql","redis"]},{id:"shirenInpasu",year:2020,url:"https://inpasu.buratsuki.page/",github:"https://github.com/Arthur1/shiren-inpasu/",img:{src:r(354),width:1920,height:937},devs:["js","nuxtjs","bootstrap"]},{id:"agricolaDatabaseViewer",year:2021,url:"https://db.buratsuki.page/",github:"https://github.com/Arthur1/agricola-database-frontend/",img:{src:r(355),width:2512,height:1592},devs:["js","nuxtjs","bootstrap"]},{id:"agricolaDatabaseApi",year:2021,github:"https://github.com/Arthur1/agricola-database-server/",img:{src:r(356),width:2512,height:1592},devs:["php","laravel","mysql","docker"]},{id:"agentsVisualizer",year:2021,url:"https://arthur1.github.io/agents-visualizer/",github:"https://github.com/Arthur1/agents-visualizer/",img:{src:r(357),width:2512,height:1592},devs:["js","vuejs","bootstrap"]}]}},computed:{reversedWorks:function(){return this.works.reverse()}}},l=(r(358),r(23)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"container"},this._l(this.reversedWorks,(function(t){return e("work-element",{key:t.id,attrs:{work:t}})})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headlineBox"},[e("h1",{staticClass:"headline"},[this._v("Works")])])}],!1,null,"385fdee0",null);e.default=component.exports;installComponents(component,{WorkElement:r(320).default})}}]);