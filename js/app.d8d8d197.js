(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],i[a]&&p.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/eisenhower-box/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"215f":function(t,e,n){},2335:function(t,e,n){},"26c4":function(t,e,n){},"3c8b":function(t,e,n){"use strict";var o=n("26c4"),i=n.n(o);i.a},"4fc9":function(t,e,n){"use strict";var o=n("215f"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=n("ce5b"),s=n.n(i),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-tooltip",{attrs:{bottom:""}},[n("h1",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n      The Eisenhower Box\n\n    ")]),n("span",[t._v('\n      "WHAT IS IMPORTANT IS SELDOM URGENT AND WHAT IS URGENT IS SELDOM IMPORTANT",\n\n      Dwight D. Eisenhower\n    ')])]),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("eisenhower-box")],1)],1),n("v-footer",{attrs:{app:""}})],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[n("v-flex",{attrs:{md12:"",lg10:"",xl8:"","hidden-xs-only":""}},[n("div",{staticClass:"square"},[n("span",{staticClass:"headline "}),n("span",{staticClass:"headline text-uppercase "},[t._v("Urgent")]),n("span",{staticClass:"headline text-uppercase "},[t._v("Not Urgent")]),n("span",{staticClass:"headline text-uppercase  importance"},[t._v("Important")]),n("box",{staticClass:"item green lighten-2",attrs:{section:"do"}}),n("box",{staticClass:"item green lighten-2",attrs:{section:"decide"}}),n("span",{staticClass:"headline text-uppercase  importance"},[t._v("Not Important")]),n("box",{staticClass:"item deep-orange lighten-2",attrs:{section:"delegate"}}),n("box",{staticClass:"item deep-orange lighten-2",attrs:{section:"later"}})],1)]),n("v-flex",{attrs:{xs12:"","hidden-sm-and-up":""}},[n("div",{staticClass:"column"},[n("div",{staticClass:"title text-uppercase "},[t._v("Important & Urgent")]),n("box",{staticClass:"item green lighten-2",attrs:{section:"do"}}),n("div",{staticClass:"title text-uppercase "},[t._v("Important But Not Urgent")]),n("box",{staticClass:"item green lighten-2",attrs:{section:"decide"}}),n("div",{staticClass:"title text-uppercase "},[t._v("Not Important But Urgent")]),n("box",{staticClass:"item deep-orange lighten-2",attrs:{section:"delegate"}}),n("div",{staticClass:"title text-uppercase "},[t._v("Neither Important "),n("br"),t._v(" Nor Urgent")]),n("box",{staticClass:"item deep-orange lighten-2",attrs:{section:"later"}})],1)])],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section-header",{attrs:{section:t.section}}),n("items",{attrs:{section:t.section}})],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"items"},t._l(t.$store.state.section[t.section],function(e,o){return n("v-list-tile",{key:t.section+"-"+o},[n("v-text-field",{ref:t.section+"-"+o,refInFor:!0,attrs:{value:e,placeholder:t.$store.state.placeholder[t.section],"append-icon":"close"},on:{input:function(e){t.editItem(e,o)},"click:append":function(e){t.removeItem(o)}}})],1)}))},f=[],h={props:["section"],methods:{removeItem:function(t){this.$store.dispatch("interactWithItem",{intention:"removeItem",section:this.section,index:t})},editItem:function(t,e){this.$store.dispatch("interactWithItem",{intention:"editItem",section:this.section,text:t,index:e})}},computed:{}},m=h,v=(n("77ad"),n("2877")),g=Object(v["a"])(m,p,f,!1,null,"16469115",null);g.options.__file="Items.vue";var b=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"white--text"},[n("h2",{staticClass:"display-1 text-uppercase font-weight-bold"},[t._v("\n    "+t._s(t.$store.state.heading[t.section])+"\n  ")]),n("span",{staticClass:"subheading font-italic"},[t._v("\n    "+t._s(t.$store.state.subheading[t.section])+"\n  ")]),n("button-add-item",{staticClass:"button-add-item",attrs:{section:t.section}})],1)},_=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"button-add",class:{hidden:4==t.$store.state.section[t.section].length},attrs:{slot:"activator",icon:""},on:{click:function(e){t.$store.dispatch("interactWithItem",{intention:"addItem",section:t.section})}},slot:"activator"},[n("v-icon",[t._v("add")])],1)},w=[],y={name:"ButtonAddItem",props:["section"]},S=y,C=(n("3c8b"),Object(v["a"])(S,I,w,!1,null,"2b4be264",null));C.options.__file="ButtonAddItem.vue";var O=C.exports,j={name:"SectionHeader",props:["section"],components:{ButtonAddItem:O}},E=j,$=(n("84da"),Object(v["a"])(E,x,_,!1,null,"551f3dbf",null));$.options.__file="SectionHeader.vue";var B=$.exports,T={name:"Box",props:["section"],components:{Items:b,SectionHeader:B}},N=T,D=Object(v["a"])(N,u,d,!1,null,null,null);D.options.__file="Box.vue";var k=D.exports,A={name:"EisenhowerBox",props:{},created:function(){this.$store.commit("loadStorage")},components:{Box:k}},P=A,M=(n("4fc9"),Object(v["a"])(P,c,l,!1,null,"4cda79e0",null));M.options.__file="EisenhowerBox.vue";var U=M.exports,W={name:"app",components:{EisenhowerBox:U}},H=W,J=(n("5c0b"),Object(v["a"])(H,a,r,!1,null,null,null));J.options.__file="App.vue";var R=J.exports,F=n("2f62"),G=n("832e");o["default"].use(F["a"]);var L=new F["a"].Store({state:{heading:{do:"Do",decide:"Decide",delegate:"Delegate",later:"Do it later"},subheading:{do:"Do it now.",decide:"Schedule a time to do it.",delegate:"Ask someone to do it for you.",later:"Stop doing this or do it in moderation!"},placeholder:{do:"Do it, do it now!",decide:"Tackle this soon but not right now.",delegate:"Find another poor soul to help you.",later:"Is this what you really need?"},section:{}},mutations:{addItem:function(t,e){t.section[e.section].unshift("")},editItem:function(t,e){t.section[e.section].splice(e.index,1,e.text)},removeItem:function(t,e){t.section[e.section].splice(e.index,1)},updateStorage:function(t){localStorage.setItem("eisenhower-box",JSON.stringify(t.section))},loadStorage:function(t){var e=localStorage.getItem("eisenhower-box");t.section=e?JSON.parse(e):G}},actions:{interactWithItem:function(t,e){t.commit(e.intention,e),t.commit("updateStorage")}}});n("bf40");o["default"].use(s.a),o["default"].config.productionTip=!1,new o["default"]({store:L,render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),i=n.n(o);i.a},"5e27":function(t,e,n){},"77ad":function(t,e,n){"use strict";var o=n("2335"),i=n.n(o);i.a},"832e":function(t){t.exports={do:["Write a blog post","Do taxes","Take wife to hospital"],decide:["Exercise","Call friends & family","Plan long term business strategy"],delegate:["Book flights","Answer some emails","Schedule interviews"],later:["Watch television","Sort junk email","Beat yourself up for being in this situation"]}},"84da":function(t,e,n){"use strict";var o=n("c3da"),i=n.n(o);i.a},c3da:function(t,e,n){}});
//# sourceMappingURL=app.d8d8d197.js.map