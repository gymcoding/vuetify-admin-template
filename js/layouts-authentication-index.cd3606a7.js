(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layouts-authentication-index"],{"58df":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("a026");function n(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return a["a"].extend({mixins:e})}},7496:function(t,e,i){"use strict";var a=i("5530"),n=(i("df86"),i("7560")),r=i("58df");e["a"]=Object(r["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(a["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},7560:function(t,e,i){"use strict";i.d(e,"b",(function(){return s}));var a=i("5530"),n=i("a026"),r=n["a"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(t){var e=Object(a["a"])(Object(a["a"])({},t.props),t.injections),i=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:i})}e["a"]=r},aa49:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("authentication-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("router-view")],1)},s=[],o={name:"AuthenticationView"},u=o,c=i("2877"),l=i("6544"),d=i.n(l),p=i("f6c4"),f=Object(c["a"])(u,r,s,!1,null,null,null),h=f.exports;d()(f,{VMain:p["a"]});var m={name:"AuthenticationLayout",components:{AuthenticationView:h}},v=m,k=i("7496"),b=Object(c["a"])(v,a,n,!1,null,null,null);e["default"]=b.exports;d()(b,{VApp:k["a"]})},bd0c:function(t,e,i){},d10f:function(t,e,i){"use strict";var a=i("a026");e["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},df86:function(t,e,i){},f6c4:function(t,e,i){"use strict";i("bd0c");var a=i("d10f");e["a"]=a["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,a=t.right,n=t.footer,r=t.insetFooter,s=t.bottom,o=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(n+r+s,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=layouts-authentication-index.cd3606a7.js.map