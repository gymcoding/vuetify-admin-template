(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-grid-system~31ecd969"],{"0fd9":function(e,t,a){"use strict";var n=a("ade3"),r=a("5530"),o=(a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),i=a("d9f7"),l=a("80d2"),s=["sm","md","lg","xl"],d=["start","end","center"];function c(e,t){return s.reduce((function(a,n){return a[e+Object(l["D"])(n)]=t(),a}),{})}var f=function(e){return[].concat(d,["baseline","stretch"]).includes(e)},u=c("align",(function(){return{type:String,default:null,validator:f}})),h=function(e){return[].concat(d,["space-between","space-around"]).includes(e)},m=c("justify",(function(){return{type:String,default:null,validator:h}})),v=function(e){return[].concat(d,["space-between","space-around","stretch"]).includes(e)},b=c("alignContent",(function(){return{type:String,default:null,validator:v}})),g={align:Object.keys(u),justify:Object.keys(m),alignContent:Object.keys(b)},y={align:"align",justify:"justify",alignContent:"align-content"};function w(e,t,a){var n=y[e];if(null!=a){if(t){var r=t.replace(e,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var p=new Map;t["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},u),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:v}},b),render:function(e,t){var a=t.props,r=t.data,o=t.children,l="";for(var s in a)l+=String(a[s]);var d=p.get(l);return d||function(){var e,t;for(t in d=[],g)g[t].forEach((function(e){var n=a[e],r=w(t,e,n);r&&d.push(r)}));d.push((e={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(e,"align-".concat(a.align),a.align),Object(n["a"])(e,"justify-".concat(a.justify),a.justify),Object(n["a"])(e,"align-content-".concat(a.alignContent),a.alignContent),e)),p.set(l,d)}(),e(a.tag,Object(i["a"])(r,{staticClass:"row",class:d}),o)}})},2039:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{id:"grid-view",fluid:"",tag:"section"}},[a("v-row",{staticClass:"text-center"},[e._l(3,(function(t){return a("v-col",{key:"cols-"+t,attrs:{cols:"4"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-4 ")])],1)],1)})),e._l(3,(function(t){return a("v-col",{key:"sm-"+t,attrs:{cols:"12",sm:"4"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-sm-4 ")])],1)],1)})),e._l(3,(function(t){return a("v-col",{key:"md-"+t,attrs:{cols:"12",md:"4"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-md-4 ")])],1)],1)})),e._l(3,(function(t){return a("v-col",{key:"lg-"+t,attrs:{cols:"12",lg:"4"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-lg-4 ")])],1)],1)})),e._l(3,(function(t){return a("v-col",{key:"xl-"+t,attrs:{cols:"12",xl:"4"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-xl-4 ")])],1)],1)})),e._l(4,(function(t){return a("v-col",{key:"mixed-"+t,attrs:{sm:"6",lg:"3"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-xl-4 ")])],1)],1)}))],2),a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{md:"3"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-md-3 ")])],1)],1),a("v-col",{staticClass:"ml-auto",attrs:{md:"3"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-md-4 ml-auto mr-auto ")])],1)],1)],1),a("v-row",{staticClass:"text-center"},e._l(2,(function(t){return a("v-col",{key:"offset-"+t,staticClass:"ml-auto mr-auto",attrs:{md:"4"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-md-4 ml-auto mr-auto ")])],1)],1)})),1),a("v-row",{staticClass:"text-center mb-12"},[a("v-col",{staticClass:"ml-auto mr-auto",attrs:{md:"6"}},[a("v-card",[a("v-card-text",{staticClass:"red--text text--darken-4"},[e._v(" col-md-6 ml-auto mr-auto ")])],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12 pt-0"}},[a("v-card",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("h2",[e._v("Some Title Here")]),a("v-card-text",{staticClass:"font-weight-light"},[e._v(' One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. ')])],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("h2",[e._v("Another Title Here")]),a("v-card-text",{staticClass:"font-weight-light"},[e._v(' One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. ')])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("h2",[e._v("Some Title Here")]),a("v-card-text",{staticClass:"font-weight-light"},[e._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("h2",[e._v("Another Title Here")]),a("v-card-text",{staticClass:"font-weight-light"},[e._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("h2",[e._v("Another Title Here")]),a("v-card-text",{staticClass:"font-weight-light"},[e._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("h2",[e._v("Some Title Here")]),a("v-card-text",{staticClass:"font-weight-light"},[e._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("h2",[e._v("Another Title Here")]),a("v-card-text",{staticClass:"font-weight-light"},[e._v(" One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ")])],1)],1)],1)],1)],1)],1)],1)},r=[],o={},i=o,l=a("2877"),s=a("6544"),d=a.n(s),c=a("b0af"),f=a("99d9"),u=a("62ad"),h=a("a523"),m=a("0fd9"),v=Object(l["a"])(i,n,r,!1,null,null,null);t["default"]=v.exports;d()(v,{VCard:c["a"],VCardText:f["c"],VCol:u["a"],VContainer:h["a"],VRow:m["a"]})},"62ad":function(e,t,a){"use strict";var n=a("ade3"),r=a("5530"),o=(a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),i=a("d9f7"),l=a("80d2"),s=["sm","md","lg","xl"],d=function(){return s.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),c=function(){return s.reduce((function(e,t){return e["offset"+Object(l["D"])(t)]={type:[String,Number],default:null},e}),{})}(),f=function(){return s.reduce((function(e,t){return e["order"+Object(l["D"])(t)]={type:[String,Number],default:null},e}),{})}(),u={col:Object.keys(d),offset:Object.keys(c),order:Object.keys(f)};function h(e,t,a){var n=e;if(null!=a&&!1!==a){if(t){var r=t.replace(e,"");n+="-".concat(r)}return"col"!==e||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var m=new Map;t["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},d),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var a=t.props,r=t.data,o=t.children,l=(t.parent,"");for(var s in a)l+=String(a[s]);var d=m.get(l);return d||function(){var e,t;for(t in d=[],u)u[t].forEach((function(e){var n=a[e],r=h(t,e,n);r&&d.push(r)}));var r=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!r||!a.cols},Object(n["a"])(e,"col-".concat(a.cols),a.cols),Object(n["a"])(e,"offset-".concat(a.offset),a.offset),Object(n["a"])(e,"order-".concat(a.order),a.order),Object(n["a"])(e,"align-self-".concat(a.alignSelf),a.alignSelf),e)),m.set(l,d)}(),e(a.tag,Object(i["a"])(r,{class:d}),o)}})}}]);
//# sourceMappingURL=views-grid-system~31ecd969.7857b474.js.map