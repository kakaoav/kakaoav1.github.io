(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"023c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4 black",attrs:{id:"home"}},[a("adh",{attrs:{posters:t.posters}}),a("v-container",{attrs:{fluid:""}},[t.errored?a("v-alert",{attrs:{prominent:"",type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("div",{staticClass:"title"},[t._v("Error!")]),a("div",[t._v(" 오류가 났습니다. 다시 시도하시기를 클릭하십시오. ")])]),a("v-col",{staticClass:"shrink"},[a("v-btn",{on:{click:t.getVideos}},[t._v("새로 고치다")])],1)],1)],1):a("main",[a("h3",{staticClass:"headline font-weight-medium"},[t._v("모든 영상")]),a("v-row",[t._l(t.videos,(function(e,n){return a("v-col",{key:n,staticClass:"mx-xs-auto",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-skeleton-loader",{attrs:{type:"card-avatar",loading:t.loading}},[a("video-card",{attrs:{card:{maxWidth:350},video:e,channel:e.userId}})],1)],1)})),0!==t.videos.length||t.loading?t._e():a("v-col",{staticClass:"text-center"},[a("p",[t._v("No videos yet")])])],2)],1)],1),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:t.totalPage,"total-visible":7,circle:""},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},r=[],i=a("2909"),s=a("1da1"),o=(a("96cf"),a("d3b7"),a("159b"),a("c1df")),l=a.n(o),c=a("0e91"),d=a("829b"),u=a("7b4e"),v={name:"V1",data:function(){return{loading:!0,loaded:!1,errored:!1,videos:[],totalPage:1,page:1,posters:[],typee:1}},methods:{pageChange:function(t){this.videos.length=0,this.page=t},getVideos:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loaded||(e.loading=!0),a.next=3,u["a"].getAll("public",{page:20*e.page,classify:5}).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}));case 3:if(n=a.sent,"undefined"!==typeof n){a.next=6;break}return a.abrupt("return");case 6:n.data.data.length?(e.totalPage=parseInt(n.data.totalPage/20),(r=e.videos).push.apply(r,Object(i["a"])(n.data.data)),console.log(e.$state)):t.complete();case 7:case"end":return a.stop()}}),a)})))()},getAds:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getPosters({typee:t.typee});case 2:a=e.sent,console.log(a),a.data.data.forEach((function(e){t.posters.push(e)}));case 5:case"end":return e.stop()}}),e)})))()},dateFormatter:function(t){return l()(t).fromNow()}},mounted:function(){this.getVideos(this.$state),this.getAds()},components:{VideoCard:d["a"],Adh:c["a"]},watch:{page:{handler:function(t){t&&this.getVideos(this.$state)}}}},g=v,h=(a("10d1"),a("2877")),p=a("6544"),f=a.n(p),m=a("0798"),b=a("8336"),w=a("62ad"),C=a("a523"),y=a("891e"),V=a("0fd9"),_=a("3129"),x=Object(h["a"])(g,n,r,!1,null,null,null);e["default"]=x.exports;f()(x,{VAlert:m["a"],VBtn:b["a"],VCol:w["a"],VContainer:C["a"],VPagination:y["a"],VRow:V["a"],VSkeletonLoader:_["a"]})},"07db":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4",attrs:{id:"home"}},[a("v-container",{attrs:{fluid:""}},[t.errored?a("v-alert",{attrs:{prominent:"",type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("div",{staticClass:"title"},[t._v("Error!")]),a("div",[t._v(" Something went wrong, but don’t fret — let’s give it another shot. ")])]),a("v-col",{staticClass:"shrink"},[a("v-btn",{on:{click:t.getVideos}},[t._v("Take action")])],1)],1)],1):a("main",[a("v-row",[t._l(t.loading?12:t.videos,(function(e,n){return a("v-col",{key:n,staticClass:"mx-xs-auto",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-skeleton-loader",{attrs:{type:"card-avatar",loading:t.loading}},[a("video-card",{attrs:{card:{maxWidth:350},video:e,channel:e.userId}})],1)],1)})),0!==t.videos.length||t.loading?t._e():a("v-col",{staticClass:"text-center"},[a("p",[t._v("No liked videos yet")])]),a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("infinite-loading",{on:{infinite:t.getVideos},scopedSlots:t._u([{key:"error",fn:function(e){var n=e.trigger;return a("div",{},[a("v-alert",{attrs:{prominent:"",type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("div",{staticClass:"title"},[t._v("Error!")]),a("div",[t._v(" Something went wrong, but don’t fret — let’s give it another shot. ")])]),a("v-col",{staticClass:"shrink"},[a("v-btn",{on:{click:n}},[t._v("Take action")])],1)],1)],1)],1)}}])},[a("div",{attrs:{slot:"spinner"},slot:"spinner"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"red"}})],1),a("div",{attrs:{slot:"no-results"},slot:"no-results"}),a("span",{attrs:{slot:"no-more"},slot:"no-more"})])],1)],2)],1)],1)],1)},r=[],i=a("2909"),s=a("1da1"),o=(a("96cf"),a("d3b7"),a("e166")),l=a.n(o),c=a("829b"),d=a("444b"),u=a("c1df"),v=a.n(u),g={name:"LikedVideo",data:function(){return{loading:!1,loaded:!1,errored:!1,videos:[],page:1}},methods:{getVideos:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loaded||(e.loading=!0),a.next=3,d["a"].getLikedVideos(e.page).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}));case 3:if(n=a.sent,"undefined"!==typeof n){a.next=6;break}return a.abrupt("return");case 6:n.data.data.length?(e.page+=1,(r=e.videos).push.apply(r,Object(i["a"])(n.data.data)),t.loaded(),e.loaded=!0):t.complete();case 7:case"end":return a.stop()}}),a)})))()},dateFormatter:function(t){return v()(t).fromNow()}},components:{VideoCard:c["a"],InfiniteLoading:l.a}},h=g,p=(a("7e19"),a("2877")),f=a("6544"),m=a.n(f),b=a("0798"),w=a("8336"),C=a("62ad"),y=a("a523"),V=a("490a"),_=a("0fd9"),x=a("3129"),k=Object(p["a"])(h,n,r,!1,null,null,null);e["default"]=k.exports;m()(k,{VAlert:b["a"],VBtn:w["a"],VCol:C["a"],VContainer:y["a"],VProgressCircular:V["a"],VRow:_["a"],VSkeletonLoader:x["a"]})},"0e91":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.posters,(function(t){return a("div",{key:t._id},[a("v-card",{attrs:{width:"100%",href:t.href,target:"_blank"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:t.pic_url,"max-height":"600",width:"100%",contain:""}})],1)],1)})),0)},r=[],i={name:"Adh",props:{posters:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{}},methods:{}},s=i,o=a("2877"),l=a("6544"),c=a.n(l),d=a("b0af"),u=a("adda"),v=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=v.exports;c()(v,{VCard:d["a"],VImg:u["a"]})},"10d1":function(t,e,a){"use strict";a("e2c1")},"17b3":function(t,e,a){},"1ab2":function(t,e,a){"use strict";a("fa65")},"1ab4":function(t,e,a){"use strict";a("ec24")},"21bb":function(t,e,a){"use strict";a("2dad")},"22ef":function(t,e,a){"use strict";a("aa80")},"2dad":function(t,e,a){},"366e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4 black",attrs:{id:"home"}},[a("adh",{attrs:{posters:t.posters}}),a("v-container",{attrs:{fluid:""}},[t.errored?a("v-alert",{attrs:{prominent:"",type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("div",{staticClass:"title"},[t._v("Error!")]),a("div",[t._v(" 오류가 났습니다. 다시 시도하시기를 클릭하십시오. ")])]),a("v-col",{staticClass:"shrink"},[a("v-btn",{on:{click:t.getVideos}},[t._v("새로 고치다")])],1)],1)],1):a("main",[a("h3",{staticClass:"headline font-weight-medium"},[t._v("모든 영상")]),a("v-row",[t._l(t.videos,(function(e,n){return a("v-col",{key:n,staticClass:"mx-xs-auto",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-skeleton-loader",{attrs:{type:"card-avatar",loading:t.loading}},[a("video-card",{attrs:{card:{maxWidth:350},video:e,channel:e.userId}})],1)],1)})),0!==t.videos.length||t.loading?t._e():a("v-col",{staticClass:"text-center"},[a("p",[t._v("No videos yet")])])],2)],1)],1),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:t.totalPage,"total-visible":7,circle:""},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},r=[],i=a("2909"),s=a("1da1"),o=(a("96cf"),a("d3b7"),a("159b"),a("c1df")),l=a.n(o),c=a("0e91"),d=a("829b"),u=a("7b4e"),v={name:"V1",data:function(){return{loading:!0,loaded:!1,errored:!1,videos:[],totalPage:1,page:1,posters:[],typee:1}},methods:{pageChange:function(t){this.videos.length=0,this.page=t},getVideos:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loaded||(e.loading=!0),a.next=3,u["a"].getAll("public",{page:20*e.page,classify:10}).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}));case 3:if(n=a.sent,"undefined"!==typeof n){a.next=6;break}return a.abrupt("return");case 6:n.data.data.length?(e.totalPage=parseInt(n.data.totalPage/20),(r=e.videos).push.apply(r,Object(i["a"])(n.data.data)),console.log(e.$state)):t.complete();case 7:case"end":return a.stop()}}),a)})))()},getAds:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getPosters({typee:t.typee});case 2:a=e.sent,console.log(a),a.data.data.forEach((function(e){t.posters.push(e)}));case 5:case"end":return e.stop()}}),e)})))()},dateFormatter:function(t){return l()(t).fromNow()}},mounted:function(){this.getVideos(this.$state),this.getAds()},components:{VideoCard:d["a"],Adh:c["a"]},watch:{page:{handler:function(t){t&&this.getVideos(this.$state)}}}},g=v,h=(a("22ef"),a("2877")),p=a("6544"),f=a.n(p),m=a("0798"),b=a("8336"),w=a("62ad"),C=a("a523"),y=a("891e"),V=a("0fd9"),_=a("3129"),x=Object(h["a"])(g,n,r,!1,null,null,null);e["default"]=x.exports;f()(x,{VAlert:m["a"],VBtn:b["a"],VCol:w["a"],VContainer:C["a"],VPagination:y["a"],VRow:V["a"],VSkeletonLoader:_["a"]})},7709:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4 black",attrs:{id:"home"}},[a("adh",{attrs:{posters:t.posters}}),a("v-container",{attrs:{fluid:""}},[t.errored?a("v-alert",{attrs:{prominent:"",type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("div",{staticClass:"title"},[t._v("Error!")]),a("div",[t._v(" 오류가 났습니다. 다시 시도하시기를 클릭하십시오. ")])]),a("v-col",{staticClass:"shrink"},[a("v-btn",{on:{click:t.getVideos}},[t._v("새로 고치다")])],1)],1)],1):a("main",[a("h3",{staticClass:"headline font-weight-medium"},[t._v("모든 영상")]),a("v-row",[t._l(t.videos,(function(e,n){return a("v-col",{key:n,staticClass:"mx-xs-auto",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-skeleton-loader",{attrs:{type:"card-avatar",loading:t.loading}},[a("video-card",{attrs:{card:{maxWidth:350},video:e,channel:e.userId}})],1)],1)})),0!==t.videos.length||t.loading?t._e():a("v-col",{staticClass:"text-center"},[a("p",[t._v("No videos yet")])])],2)],1)],1),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:t.totalPage,"total-visible":7,circle:""},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},r=[],i=a("2909"),s=a("1da1"),o=(a("96cf"),a("d3b7"),a("159b"),a("c1df")),l=a.n(o),c=a("0e91"),d=a("829b"),u=a("7b4e"),v={name:"V1",data:function(){return{loading:!0,loaded:!1,errored:!1,videos:[],totalPage:1,page:1,posters:[],typee:1}},methods:{pageChange:function(t){this.videos.length=0,this.page=t},getVideos:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loaded||(e.loading=!0),a.next=3,u["a"].getAll("public",{page:20*e.page,classify:4}).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}));case 3:if(n=a.sent,"undefined"!==typeof n){a.next=6;break}return a.abrupt("return");case 6:n.data.data.length?(e.totalPage=parseInt(n.data.totalPage/20),(r=e.videos).push.apply(r,Object(i["a"])(n.data.data)),console.log(e.$state)):t.complete();case 7:case"end":return a.stop()}}),a)})))()},getAds:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getPosters({typee:t.typee});case 2:a=e.sent,console.log(a),a.data.data.forEach((function(e){t.posters.push(e)}));case 5:case"end":return e.stop()}}),e)})))()},dateFormatter:function(t){return l()(t).fromNow()}},mounted:function(){this.getVideos(this.$state),this.getAds()},components:{VideoCard:d["a"],Adh:c["a"]},watch:{page:{handler:function(t){t&&this.getVideos(this.$state)}}}},g=v,h=(a("1ab2"),a("2877")),p=a("6544"),f=a.n(p),m=a("0798"),b=a("8336"),w=a("62ad"),C=a("a523"),y=a("891e"),V=a("0fd9"),_=a("3129"),x=Object(h["a"])(g,n,r,!1,null,null,null);e["default"]=x.exports;f()(x,{VAlert:m["a"],VBtn:b["a"],VCol:w["a"],VContainer:C["a"],VPagination:y["a"],VRow:V["a"],VSkeletonLoader:_["a"]})},"7e19":function(t,e,a){"use strict";a("a174")},"829b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"content-bg card mx-auto",attrs:{"max-width":t.card.maxWidth,flat:"",tile:"",router:"",to:"/watch/"+t.video._id,color:"black"}},[a("v-img",{attrs:{height:"250",src:t.video.thumbnailUrl}}),a("v-row",{attrs:{"no-gutters":""}},["noAvatar"!=t.card.type?a("v-col",{attrs:{cols:"2"}},[a("v-list-item",{staticClass:"pl-0 pt-3",attrs:{router:"",to:"/channels/"+t.channel._id}},[a("v-list-item-avatar",["no-photo.jpg"!==t.channel.photoUrl?a("v-img",{staticClass:"elevation-6",attrs:{src:t.channel.photoUrl}}):a("v-avatar",{attrs:{color:"red"}},[a("span",{staticClass:"white--text headline "},[t._v(" "+t._s(t.channel.channelName.split("")[0].toUpperCase())+"111")])])],1)],1)],1):t._e(),a("v-col",[a("v-card-title",{staticClass:"pl-2 pt-3 subtitle-1 font-weight-bold",staticStyle:{"line-height":"1.2rem"}},[t._v(" "+t._s(t.video.title)+" ")]),a("v-card-subtitle",{staticClass:"pl-2 pb-0"},[t._v(" "+t._s(t.channel.name)+" ")]),a("v-card-subtitle",{staticClass:"pl-2 pt-0"},[t._v(" "+t._s(t.video.views)+" 관람하다."),a("v-icon",[t._v("mdi-circle-small")]),t._v(t._s(t.dateFormatter(t.video.CreatedAt))+" ")],1)],1)],1)],1)},r=[],i=a("c1df"),s=a.n(i),o={name:"VideoCard",props:{video:{type:Object,required:!0},channel:{type:Object,required:!0},card:Object},data:function(){return{url:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_URL}},methods:{dateFormatter:function(t){return s()(t).format("YYYY-MM-DD")}}},l=o,c=a("2877"),d=a("6544"),u=a.n(d),v=a("8212"),g=a("b0af"),h=a("99d9"),p=a("62ad"),f=a("132d"),m=a("adda"),b=a("da13"),w=a("8270"),C=a("0fd9"),y=Object(c["a"])(l,n,r,!1,null,null,null);e["a"]=y.exports;u()(y,{VAvatar:v["a"],VCard:g["a"],VCardSubtitle:h["b"],VCardTitle:h["d"],VCol:p["a"],VIcon:f["a"],VImg:m["a"],VListItem:b["a"],VListItemAvatar:w["a"],VRow:C["a"]})},"891e":function(t,e,a){"use strict";var n=a("2909"),r=a("5530"),i=(a("a9e3"),a("99af"),a("d3b7"),a("25f0"),a("d81d"),a("17b3"),a("9d26")),s=a("dc22"),o=a("a9ad"),l=a("de2c"),c=a("7560"),d=a("58df");e["a"]=Object(d["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:s["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(r["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,r=Math.floor(e/2),i=this.length-r+1+a;if(this.value>r&&this.value<i){var s=1,o=this.length,l=this.value-r+2,c=this.value+r-2-a,d=l-1===s+1?2:"...",u=c+1===o-1?c+1:"...";return[1,d].concat(Object(n["a"])(this.range(l,c)),[u,this.length])}if(this.value===r){var v=this.value+r-1-a;return[].concat(Object(n["a"])(this.range(1,v)),["...",this.length])}if(this.value===i){var g=this.value-r+1;return[1,"..."].concat(Object(n["a"])(this.range(g,this.length)))}return[].concat(Object(n["a"])(this.range(1,r)),["..."],Object(n["a"])(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var n=t;n<=e;n++)a.push(n);return a},genIcon:function(t,e,a,n,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":r},on:a?{}:{click:n}},[t(i["a"],[e])])])},genItem:function(t,e){var a=this,n=e===this.value&&(this.color||"primary"),r=e===this.value,i=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(i,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,n){return t("li",{key:n},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},9735:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4 black",attrs:{id:"home"}},[a("adh",{attrs:{posters:t.posters}}),a("v-container",{attrs:{fluid:""}},[t.errored?a("v-alert",{attrs:{prominent:"",type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("div",{staticClass:"title"},[t._v("Error!")]),a("div",[t._v(" 오류가 났습니다. 다시 시도하시기를 클릭하십시오. ")])]),a("v-col",{staticClass:"shrink"},[a("v-btn",{on:{click:t.getVideos}},[t._v("새로 고치다")])],1)],1)],1):a("main",[a("h3",{staticClass:"headline font-weight-medium"},[t._v("모든 영상")]),a("v-row",[t._l(t.videos,(function(e,n){return a("v-col",{key:n,staticClass:"mx-xs-auto",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-skeleton-loader",{attrs:{type:"card-avatar",loading:t.loading}},[a("video-card",{attrs:{card:{maxWidth:350},video:e,channel:e.userId}})],1)],1)})),0!==t.videos.length||t.loading?t._e():a("v-col",{staticClass:"text-center"},[a("p",[t._v("No videos yet")])])],2)],1)],1),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:t.totalPage,"total-visible":7,circle:""},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},r=[],i=a("2909"),s=a("1da1"),o=(a("96cf"),a("d3b7"),a("159b"),a("c1df")),l=a.n(o),c=a("0e91"),d=a("829b"),u=a("7b4e"),v={name:"V1",data:function(){return{loading:!0,loaded:!1,errored:!1,videos:[],totalPage:1,page:1,posters:[],typee:1}},methods:{pageChange:function(t){this.videos.length=0,this.page=t},getVideos:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loaded||(e.loading=!0),a.next=3,u["a"].getAll("public",{page:20*e.page,classify:6}).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}));case 3:if(n=a.sent,"undefined"!==typeof n){a.next=6;break}return a.abrupt("return");case 6:n.data.data.length?(e.totalPage=parseInt(n.data.totalPage/20),(r=e.videos).push.apply(r,Object(i["a"])(n.data.data)),console.log(e.$state)):t.complete();case 7:case"end":return a.stop()}}),a)})))()},getAds:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getPosters({typee:t.typee});case 2:a=e.sent,console.log(a),a.data.data.forEach((function(e){t.posters.push(e)}));case 5:case"end":return e.stop()}}),e)})))()},dateFormatter:function(t){return l()(t).fromNow()}},mounted:function(){this.getVideos(this.$state),this.getAds()},components:{VideoCard:d["a"],Adh:c["a"]},watch:{page:{handler:function(t){t&&this.getVideos(this.$state)}}}},g=v,h=(a("1ab4"),a("2877")),p=a("6544"),f=a.n(p),m=a("0798"),b=a("8336"),w=a("62ad"),C=a("a523"),y=a("891e"),V=a("0fd9"),_=a("3129"),x=Object(h["a"])(g,n,r,!1,null,null,null);e["default"]=x.exports;f()(x,{VAlert:m["a"],VBtn:b["a"],VCol:w["a"],VContainer:C["a"],VPagination:y["a"],VRow:V["a"],VSkeletonLoader:_["a"]})},a174:function(t,e,a){},aa80:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4 black",attrs:{id:"home"}},[a("adh",{attrs:{posters:t.posters}}),a("v-container",{attrs:{fluid:""}},[t.errored?a("v-alert",{attrs:{prominent:"",type:"error"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("div",{staticClass:"title"},[t._v("Error!")]),a("div",[t._v(" 오류가 났습니다. 다시 시도하시기를 클릭하십시오. ")])]),a("v-col",{staticClass:"shrink"},[a("v-btn",{on:{click:t.getVideos}},[t._v("새로 고치다")])],1)],1)],1):a("main",[a("h3",{staticClass:"headline font-weight-medium"},[t._v("모든 영상")]),a("v-row",[t._l(t.videos,(function(e,n){return a("v-col",{key:n,staticClass:"mx-xs-auto",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-skeleton-loader",{attrs:{type:"card-avatar",loading:t.loading}},[a("video-card",{attrs:{card:{maxWidth:350},video:e,channel:e.userId}})],1)],1)})),0!==t.videos.length||t.loading?t._e():a("v-col",{staticClass:"text-center"},[a("p",[t._v("No videos yet")])])],2)],1)],1),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:t.totalPage,"total-visible":7,circle:""},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},r=[],i=a("2909"),s=a("1da1"),o=(a("96cf"),a("d3b7"),a("159b"),a("c1df")),l=a.n(o),c=a("0e91"),d=a("829b"),u=a("7b4e"),v={name:"Home",components:{VideoCard:d["a"],Adh:c["a"]},data:function(){return{loading:!0,loaded:!1,errored:!1,videos:[],totalPage:1,page:1,posters:[],typee:1}},methods:{pageChange:function(t){this.videos.length=0,this.page=t},getVideos:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loaded||(e.loading=!0),a.next=3,u["a"].getAll("public",{page:20*e.page,classify:0}).catch((function(t){console.log(t),e.errored=!0})).finally((function(){e.loading=!1}));case 3:if(n=a.sent,"undefined"!==typeof n){a.next=6;break}return a.abrupt("return");case 6:n.data.data.length?(e.totalPage=parseInt(n.data.totalPage/20),(r=e.videos).push.apply(r,Object(i["a"])(n.data.data))):t.complete();case 7:case"end":return a.stop()}}),a)})))()},getAds:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getPosters({typee:t.typee});case 2:a=e.sent,a.data.data.forEach((function(e){t.posters.push(e)}));case 4:case"end":return e.stop()}}),e)})))()},dateFormatter:function(t){return l()(t).fromNow()}},mounted:function(){this.getVideos(this.$state),this.getAds()},watch:{page:{handler:function(t){t&&this.getVideos(this.$state)}}}},g=v,h=(a("21bb"),a("2877")),p=a("6544"),f=a.n(p),m=a("0798"),b=a("8336"),w=a("62ad"),C=a("a523"),y=a("891e"),V=a("0fd9"),_=a("3129"),x=Object(h["a"])(g,n,r,!1,null,null,null);e["default"]=x.exports;f()(x,{VAlert:m["a"],VBtn:b["a"],VCol:w["a"],VContainer:C["a"],VPagination:y["a"],VRow:V["a"],VSkeletonLoader:_["a"]})},e2c1:function(t,e,a){},ec24:function(t,e,a){},fa65:function(t,e,a){}}]);