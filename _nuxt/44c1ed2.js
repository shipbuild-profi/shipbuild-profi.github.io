(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{346:function(t,e,n){var map={"./fe1.jpg":347,"./fe2.jpg":348,"./fe25.jpg":232,"./fe3.jpg":349,"./fe4.jpg":350,"./fe5.jpg":351,"./fe6.jpg":352,"./fe7.jpg":353,"./fe8.jpg":354,"./img1.jpg":355,"./img2.jpg":356,"./img3.jpg":357,"./img4.jpg":358,"./img5.jpeg":359,"./img6.jpg":360};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=346},347:function(t,e,n){t.exports=n.p+"img/fe1.5e79ce6.jpg"},348:function(t,e,n){t.exports=n.p+"img/fe2.bbab7c5.jpg"},349:function(t,e,n){t.exports=n.p+"img/fe3.61ac2a4.jpg"},350:function(t,e,n){t.exports=n.p+"img/fe4.87c216b.jpg"},351:function(t,e,n){t.exports=n.p+"img/fe5.17ecced.jpg"},352:function(t,e,n){t.exports=n.p+"img/fe6.f75dd2a.jpg"},353:function(t,e,n){t.exports=n.p+"img/fe7.d928051.jpg"},354:function(t,e,n){t.exports=n.p+"img/fe8.00ac89e.jpg"},355:function(t,e,n){t.exports=n.p+"img/img1.4813356.jpg"},356:function(t,e,n){t.exports=n.p+"img/img2.63f6a09.jpg"},357:function(t,e,n){t.exports=n.p+"img/img3.84853ad.jpg"},358:function(t,e,n){t.exports=n.p+"img/img4.0d2c743.jpg"},359:function(t,e,n){t.exports=n.p+"img/img5.667a0bb.jpeg"},360:function(t,e,n){t.exports=n.p+"img/img6.40fe2ac.jpg"},361:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("aeec1c08",content,!0,{sourceMap:!1})},363:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("ef3ed770",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n(361)},365:function(t,e,n){var r=n(48)(!1);r.push([t.i,".card[data-v-3b77c204]{margin-top:.5rem;margin-bottom:.5rem;margin-left:.5rem;width:20rem;height:28rem;border:none;overflow:hidden;padding:0;cursor:pointer}[data-v-3b77c204]:hover{background-color:#e0ffff;text-decoration:none}.image[data-v-3b77c204]{height:55%;border-radius:.5rem;margin-left:.5rem;margin-right:.5rem}.header[data-v-3b77c204]{font-size:1.15rem;font-weight:900;margin-top:.4rem}.header[data-v-3b77c204],.span1[data-v-3b77c204]{padding-left:.6rem}.span1[data-v-3b77c204]{font-weight:800;color:teal}.span2[data-v-3b77c204]{font-size:.8rem;font-weight:800}.snippet[data-v-3b77c204],.span2[data-v-3b77c204]{color:grey;padding-left:.4rem}",""]),t.exports=r},371:function(t,e,n){"use strict";n.r(e);var r={props:["card"]},c=(n(364),n(44)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("nuxt-link",{staticClass:"card",attrs:{to:"/present/"+t.card.id}},[r("img",{staticClass:"image",attrs:{src:n(346)("./"+(t.card.image||"fe1.jpg")),alt:""}}),t._v(" "),r("h3",{staticClass:"header"},[t._v(t._s(t.card.title))]),t._v(" "),r("p",{staticClass:"span1"},[t._v("\n        "+t._s(t.card.span1)+"\n    ")]),t._v(" "),r("div",{staticClass:"span2"},[t._v("\n        "+t._s(t.card.span2)+"\n    ")]),t._v(" "),r("div",{staticClass:"span2"},[t._v("\n        "+t._s(t.card.span3)+"\n    ")]),t._v(" "),r("div",{staticClass:"span2"},[t._v("\n        "+t._s(t.card.span4)+"\n    ")]),t._v(" "),r("div",{staticClass:"span2"},[t._v("\n        "+t._s(t.card.span5)+"\n    ")]),t._v(" "),r("div",{staticClass:"span2"},[t._v("\n        "+t._s(t.card.span6)+"\n    ")])])],1)}),[],!1,null,"3b77c204",null);e.default=component.exports},374:function(t,e,n){"use strict";n(363)},375:function(t,e,n){var r=n(48)(!1);r.push([t.i,".container[data-v-26c197a5]{margin-top:2rem;margin-bottom:4rem;display:flex;flex-wrap:wrap}.header[data-v-26c197a5]{font-weight:700;font-size:1.5rem}.snippet[data-v-26c197a5]{color:grey;margin-bottom:1.5rem}.cards-container[data-v-26c197a5]{display:flex;flex-wrap:wrap;align-items:flex-start}",""]),t.exports=r},385:function(t,e,n){"use strict";n.r(e);var r={props:["cardsSection"]},c=(n(374),n(44)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h4",{staticClass:"header"},[t._v("\n        "+t._s(t.cardsSection.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"snippet"},[t._v("\n        "+t._s(t.cardsSection.snippet)+"\n    ")]),t._v(" "),n("div",{staticClass:"cards-container"},t._l(t.cardsSection.cards,(function(t){return n("ServiceCard",{key:t.id,attrs:{card:t}})})),1)])}),[],!1,null,"26c197a5",null);e.default=component.exports;installComponents(component,{ServiceCard:n(371).default})}}]);