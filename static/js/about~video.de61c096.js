(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~video"],{"02cf":function(t,e,n){var i=n("b68d"),r=n("c6da"),a=r.RegExp;t.exports=i((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"16fa":function(t,e,n){var i=n("b68d"),r=n("c6da"),a=r.RegExp;t.exports=i((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},"1a5f":function(t,e,n){
/*!
 * vue-infinite-loading v2.4.5
 * (c) 2016-2020 PeachScript
 * MIT License
 */
!function(e,n){t.exports=n()}(0,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(3).default)("6223ff68",i,!0,{})},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(3).default)("27f0e51f",i,!0,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[i].concat(o).concat([a]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},r=0;r<e.length;r++){var a=e[r],o=a[0],s={id:t+":"+r,css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}n.r(e),n.d(e,"default",(function(){return p}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,d=function(){},u=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,r){c=n,u=r||{};var o=i(t,e);return h(o),function(e){for(var n=[],r=0;r<o.length;r++){var s=o[r];(l=a[s.id]).refs--,n.push(l)}for(e?h(o=i(t,e)):o=[],r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],i=a[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(m(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(m(n.parts[r]));a[n.id]={id:n.id,refs:1,parts:o}}}}function b(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(c)return d;i.parentNode.removeChild(i)}if(f){var r=l++;i=s||(s=b()),e=x.bind(null,i,r,!1),n=x.bind(null,i,r,!0)}else i=b(),e=y.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var g,v=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var a=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function y(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}',""])},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".infinite-loading-container[data-v-644ea9c9]{clear:both;text-align:center}.infinite-loading-container[data-v-644ea9c9] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-644ea9c9]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-644ea9c9]:not(:active):hover{opacity:.8}",""])},function(t,e,n){"use strict";n.r(e);var i={throttleLimit:50,loopCheckTimeout:1e3,loopCheckMaxCalls:10},r=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t={passive:!0},!0}});window.addEventListener("testpassive",e,e),window.remove("testpassive",e,e)}catch(t){}return t}(),a={STATE_CHANGER:["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):","\ntemplate:",'<infinite-loading @infinite="infiniteHandler"></infinite-loading>',"\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...","","more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),INFINITE_EVENT:"`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",IDENTIFIER:"the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."},o={INFINITE_LOOP:["executed the callback function more than ".concat(i.loopCheckMaxCalls," times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"),'\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ',"more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")},s={READY:0,LOADING:1,COMPLETE:2,ERROR:3},l={color:"#666",fontSize:"14px",padding:"10px 0"},c={mode:"development",props:{spinner:"default",distance:100,forceUseInfiniteWrapper:!1},system:i,slots:{noResults:"No results :(",noMore:"No more data :)",error:"Opps, something went wrong :(",errorBtnText:"Retry",spinner:""},WARNINGS:a,ERRORS:o,STATUS:s},d=n(4),u=n.n(d),f={BUBBLES:{render:function(t){return t("span",{attrs:{class:"loading-bubbles"}},Array.apply(Array,Array(8)).map((function(){return t("span",{attrs:{class:"bubble-item"}})})))}},CIRCLES:{render:function(t){return t("span",{attrs:{class:"loading-circles"}},Array.apply(Array,Array(8)).map((function(){return t("span",{attrs:{class:"circle-item"}})})))}},DEFAULT:{render:function(t){return t("i",{attrs:{class:"loading-default"}})}},SPIRAL:{render:function(t){return t("i",{attrs:{class:"loading-spiral"}})}},WAVEDOTS:{render:function(t){return t("span",{attrs:{class:"loading-wave-dots"}},Array.apply(Array,Array(5)).map((function(){return t("span",{attrs:{class:"wave-item"}})})))}}};function p(t,e,n,i,r,a,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}var h=p({name:"Spinner",computed:{spinnerView:function(){return f[(this.$attrs.spinner||"").toUpperCase()]||this.spinnerInConfig},spinnerInConfig:function(){return c.slots.spinner&&"string"==typeof c.slots.spinner?{render:function(){return this._v(c.slots.spinner)}}:"object"===u()(c.slots.spinner)?c.slots.spinner:f[c.props.spinner.toUpperCase()]||f.DEFAULT}}},(function(){var t=this.$createElement;return(this._self._c||t)(this.spinnerView,{tag:"component"})}),[],!1,(function(t){var e=n(5);e.__inject__&&e.__inject__(t)}),"46b20d22",null).exports;function b(t){"production"!==c.mode&&console.warn("[Vue-infinite-loading warn]: ".concat(t))}function m(t){console.error("[Vue-infinite-loading error]: ".concat(t))}var g={timers:[],caches:[],throttle:function(t){var e=this;-1===this.caches.indexOf(t)&&(this.caches.push(t),this.timers.push(setTimeout((function(){t(),e.caches.splice(e.caches.indexOf(t),1),e.timers.shift()}),c.system.throttleLimit)))},reset:function(){this.timers.forEach((function(t){clearTimeout(t)})),this.timers.length=0,this.caches=[]}},v={isChecked:!1,timer:null,times:0,track:function(){var t=this;this.times+=1,clearTimeout(this.timer),this.timer=setTimeout((function(){t.isChecked=!0}),c.system.loopCheckTimeout),this.times>c.system.loopCheckMaxCalls&&(m(o.INFINITE_LOOP),this.isChecked=!0)}},x={key:"_infiniteScrollHeight",getScrollElm:function(t){return t===window?document.documentElement:t},save:function(t){var e=this.getScrollElm(t);e[this.key]=e.scrollHeight},restore:function(t){var e=this.getScrollElm(t);"number"==typeof e[this.key]&&(e.scrollTop=e.scrollHeight-e[this.key]+e.scrollTop),this.remove(e)},remove:function(t){void 0!==t[this.key]&&delete t[this.key]}};function y(t){return t.replace(/[A-Z]/g,(function(t){return"-".concat(t.toLowerCase())}))}function w(t){return t.offsetWidth+t.offsetHeight>0}var k=p({name:"InfiniteLoading",data:function(){return{scrollParent:null,scrollHandler:null,isFirstLoad:!0,status:s.READY,slots:c.slots}},components:{Spinner:h},computed:{isShowSpinner:function(){return this.status===s.LOADING},isShowError:function(){return this.status===s.ERROR},isShowNoResults:function(){return this.status===s.COMPLETE&&this.isFirstLoad},isShowNoMore:function(){return this.status===s.COMPLETE&&!this.isFirstLoad},slotStyles:function(){var t=this,e={};return Object.keys(c.slots).forEach((function(n){var i=y(n);(!t.$slots[i]&&!c.slots[n].render||t.$slots[i]&&!t.$slots[i][0].tag)&&(e[n]=l)})),e}},props:{distance:{type:Number,default:c.props.distance},spinner:String,direction:{type:String,default:"bottom"},forceUseInfiniteWrapper:{type:[Boolean,String],default:c.props.forceUseInfiniteWrapper},identifier:{default:+new Date},onInfinite:Function},watch:{identifier:function(){this.stateChanger.reset()}},mounted:function(){var t=this;this.$watch("forceUseInfiniteWrapper",(function(){t.scrollParent=t.getScrollParent()}),{immediate:!0}),this.scrollHandler=function(e){t.status===s.READY&&(e&&e.constructor===Event&&w(t.$el)?g.throttle(t.attemptLoad):t.attemptLoad())},setTimeout((function(){t.scrollHandler(),t.scrollParent.addEventListener("scroll",t.scrollHandler,r)}),1),this.$on("$InfiniteLoading:loaded",(function(e){t.isFirstLoad=!1,"top"===t.direction&&t.$nextTick((function(){x.restore(t.scrollParent)})),t.status===s.LOADING&&t.$nextTick(t.attemptLoad.bind(null,!0)),e&&e.target===t||b(a.STATE_CHANGER)})),this.$on("$InfiniteLoading:complete",(function(e){t.status=s.COMPLETE,t.$nextTick((function(){t.$forceUpdate()})),t.scrollParent.removeEventListener("scroll",t.scrollHandler,r),e&&e.target===t||b(a.STATE_CHANGER)})),this.$on("$InfiniteLoading:reset",(function(e){t.status=s.READY,t.isFirstLoad=!0,x.remove(t.scrollParent),t.scrollParent.addEventListener("scroll",t.scrollHandler,r),setTimeout((function(){g.reset(),t.scrollHandler()}),1),e&&e.target===t||b(a.IDENTIFIER)})),this.stateChanger={loaded:function(){t.$emit("$InfiniteLoading:loaded",{target:t})},complete:function(){t.$emit("$InfiniteLoading:complete",{target:t})},reset:function(){t.$emit("$InfiniteLoading:reset",{target:t})},error:function(){t.status=s.ERROR,g.reset()}},this.onInfinite&&b(a.INFINITE_EVENT)},deactivated:function(){this.status===s.LOADING&&(this.status=s.READY),this.scrollParent.removeEventListener("scroll",this.scrollHandler,r)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler,r)},methods:{attemptLoad:function(t){var e=this;this.status!==s.COMPLETE&&w(this.$el)&&this.getCurrentDistance()<=this.distance?(this.status=s.LOADING,"top"===this.direction&&this.$nextTick((function(){x.save(e.scrollParent)})),"function"==typeof this.onInfinite?this.onInfinite.call(null,this.stateChanger):this.$emit("infinite",this.stateChanger),!t||this.forceUseInfiniteWrapper||v.isChecked||v.track()):this.status===s.LOADING&&(this.status=s.READY)},getCurrentDistance:function(){var t;return t="top"===this.direction?"number"==typeof this.scrollParent.scrollTop?this.scrollParent.scrollTop:this.scrollParent.pageYOffset:this.$el.getBoundingClientRect().top-(this.scrollParent===window?window.innerHeight:this.scrollParent.getBoundingClientRect().bottom),t},getScrollParent:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el;return"string"==typeof this.forceUseInfiniteWrapper&&(t=document.querySelector(this.forceUseInfiniteWrapper)),t||("BODY"===e.tagName?t=window:(!this.forceUseInfiniteWrapper&&["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1||e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper"))&&(t=e)),t||this.getScrollParent(e.parentNode)}},destroyed:function(){!this.status!==s.COMPLETE&&(g.reset(),x.remove(this.scrollParent),this.scrollParent.removeEventListener("scroll",this.scrollHandler,r))}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infinite-loading-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSpinner,expression:"isShowSpinner"}],staticClass:"infinite-status-prompt",style:t.slotStyles.spinner},[t._t("spinner",[n("spinner",{attrs:{spinner:t.spinner}})])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoResults,expression:"isShowNoResults"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noResults},[t._t("no-results",[t.slots.noResults.render?n(t.slots.noResults,{tag:"component"}):[t._v(t._s(t.slots.noResults))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoMore,expression:"isShowNoMore"}],staticClass:"infinite-status-prompt",style:t.slotStyles.noMore},[t._t("no-more",[t.slots.noMore.render?n(t.slots.noMore,{tag:"component"}):[t._v(t._s(t.slots.noMore))]])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowError,expression:"isShowError"}],staticClass:"infinite-status-prompt",style:t.slotStyles.error},[t._t("error",[t.slots.error.render?n(t.slots.error,{tag:"component",attrs:{trigger:t.attemptLoad}}):[t._v("\n        "+t._s(t.slots.error)+"\n        "),n("br"),t._v(" "),n("button",{staticClass:"btn-try-infinite",domProps:{textContent:t._s(t.slots.errorBtnText)},on:{click:t.attemptLoad}})]],{trigger:t.attemptLoad})],2)])}),[],!1,(function(t){var e=n(7);e.__inject__&&e.__inject__(t)}),"644ea9c9",null).exports;function _(t){c.mode=t.config.productionTip?"development":"production"}Object.defineProperty(k,"install",{configurable:!1,enumerable:!1,value:function(t,e){Object.assign(c.props,e&&e.props),Object.assign(c.slots,e&&e.slots),Object.assign(c.system,e&&e.system),t.component("infinite-loading",k),_(t)}}),"undefined"!=typeof window&&window.Vue&&(window.Vue.component("infinite-loading",k),_(window.Vue)),e.default=k}])}))},"3f27":function(t,e,n){"use strict";n("3fab");var i=n("a5ba"),r=n("c6da"),a=n("7faf"),o=n("e7ec"),s=n("a9fd"),l=n("244f"),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),d=r.Error,u=o(/./.test);i({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=this.exec;if(!s(e))return u(this,t);var n=a(e,this,t);if(null!==n&&!l(n))throw new d("RegExp exec method returned something other than an Object or null");return!!n}})},"3f3e":function(t,e,n){"use strict";var i=n("16bc");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"3fab":function(t,e,n){"use strict";var i=n("a5ba"),r=n("ba60");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},"444b":function(t,e,n){"use strict";var i=n("3f4a");e["a"]={checkFeeling:function(t){return Object(i["a"])().post("feelings/check",t)},createFeeling:function(t){return Object(i["a"])().post("feelings",t)},getLikedVideos:function(t){return Object(i["a"])().get("feelings/videos",{params:{page:t,limit:12}})}}},"496f":function(t,e,n){var i=n("16bc"),r=n("12a9");t.exports=function(t,e,n,a){try{return a?e(i(n)[0],n[1]):e(n)}catch(o){r(t,"throw",o)}}},"57b6":function(t,e,n){"use strict";var i=n("a5ba"),r=n("c6da"),a=n("f1b6"),o=n("fa17"),s=n("244f"),l=n("ccb5"),c=n("67e7"),d=n("50dd"),u=n("c854"),f=n("d442"),p=n("4718"),h=n("9535"),b=p("slice"),m=f("species"),g=r.Array,v=Math.max;i({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var n,i,r,f=d(this),p=c(f),b=l(t,p),x=l(void 0===e?p:e,p);if(a(f)&&(n=f.constructor,o(n)&&(n===g||a(n.prototype))?n=void 0:s(n)&&(n=n[m],null===n&&(n=void 0)),n===g||void 0===n))return h(f,b,x);for(i=new(void 0===n?g:n)(v(x-b,0)),r=0;b<x;b++,r++)b in f&&u(i,r,f[b]);return i.length=r,i}})},"58fa":function(t,e,n){},"8caa":function(t,e,n){var i=n("b68d"),r=n("c6da"),a=r.RegExp;e.UNSUPPORTED_Y=i((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ba60:function(t,e,n){"use strict";var i=n("7faf"),r=n("e7ec"),a=n("78f8"),o=n("3f3e"),s=n("8caa"),l=n("3ab3"),c=n("0572"),d=n("11d9").get,u=n("16fa"),f=n("02cf"),p=l("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,b=h,m=r("".charAt),g=r("".indexOf),v=r("".replace),x=r("".slice),y=function(){var t=/a/,e=/b*/g;return i(h,t,"a"),i(h,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),w=s.UNSUPPORTED_Y||s.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],_=y||k||w||u||f;_&&(b=function(t){var e,n,r,s,l,u,f,_=this,E=d(_),S=a(t),C=E.raw;if(C)return C.lastIndex=_.lastIndex,e=i(b,C,S),_.lastIndex=C.lastIndex,e;var I=E.groups,R=w&&_.sticky,T=i(o,_),$=_.source,A=0,O=S;if(R&&(T=v(T,"y",""),-1===g(T,"g")&&(T+="g"),O=x(S,_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==m(S,_.lastIndex-1))&&($="(?: "+$+")",O=" "+O,A++),n=new RegExp("^(?:"+$+")",T)),k&&(n=new RegExp("^"+$+"$(?!\\s)",T)),y&&(r=_.lastIndex),s=i(h,R?n:_,O),R?s?(s.input=x(s.input,A),s[0]=x(s[0],A),s.index=_.lastIndex,_.lastIndex+=s[0].length):_.lastIndex=0:y&&s&&(_.lastIndex=_.global?s.index+s[0].length:r),k&&s&&s.length>1&&i(p,s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s&&I)for(s.groups=u=c(null),l=0;l<I.length;l++)f=I[l],u[f[0]]=s[f[1]];return s}),t.exports=b},c1f9:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t){if(Array.isArray(t))return i(t)}n.d(e,"a",(function(){return l}));n("49e9"),n("c2e6"),n("a9b6"),n("742a"),n("2690"),n("d4f9"),n("f4c5");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("57b6"),n("3e22"),n("3fab"),n("3f27");function o(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return r(t)||a(t)||o(t)||s()}},d16e:function(t,e,n){"use strict";var i=n("c6da"),r=n("5980"),a=n("7faf"),o=n("3493"),s=n("496f"),l=n("3ee8"),c=n("fa17"),d=n("67e7"),u=n("c854"),f=n("1fda"),p=n("0d5d"),h=i.Array;t.exports=function(t){var e=o(t),n=c(this),i=arguments.length,b=i>1?arguments[1]:void 0,m=void 0!==b;m&&(b=r(b,i>2?arguments[2]:void 0));var g,v,x,y,w,k,_=p(e),E=0;if(!_||this==h&&l(_))for(g=d(e),v=n?new this(g):h(g);g>E;E++)k=m?b(e[E],E):e[E],u(v,E,k);else for(y=f(e,_),w=y.next,v=n?new this:[];!(x=a(w,y)).done;E++)k=m?s(y,b,[x.value,E],!0):x.value,u(v,E,k);return v.length=E,v}},f4c5:function(t,e,n){var i=n("a5ba"),r=n("d16e"),a=n("3e60"),o=!a((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:o},{from:r})},ff9c:function(t,e,n){"use strict";n("58fa");var i=n("a392"),r=n("38df"),a=n("f77f"),o=n("ace2"),s=n("cf9e"),l=n("430a"),c=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=n("89ea"),u=n("78c7");e["a"]=Object(d["a"])(i["a"],o["a"],c).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(a["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||s["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})}}]);
//# sourceMappingURL=about~video.de61c096.js.map