(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"149a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"channel"}},[a("router-view")],1)},r=[],i={},n=i,l=a("cba8"),c=Object(l["a"])(n,s,r,!1,null,null,null);e["default"]=c.exports},"2cb0":function(t,e,a){"use strict";a("5e13")},"2ddf":function(t,e,a){},"5e13":function(t,e,a){},6954:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4",attrs:{id:"dashboard"}},[a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"d-flex justify-space-between mb-5"},[a("h2",[t._v("channel dashboard")]),a("div",{staticClass:"right"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mr-4 white",attrs:{icon:""},on:{click:function(e){t.dialog=!0}}},Object.assign({},s)),[a("v-icon",{staticClass:"small",attrs:{size:"25"}},[t._v("mdi-upload")])],1)]}}])},[a("span",[t._v("Upload video")])])],1)]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("v-card-title",{staticClass:"pl-5"},[t._v("Recent subscribers")]),a("v-card-actions",{staticClass:"d-block ml-2"},[a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(e){t.subscribersDialog=!0}}},[t._v(" See all ")])],1)],1)],1)],1)],1),a("upload-video-modal",{attrs:{"open-dialog":t.dialog},on:{closeDialog:function(e){t.dialog=!1}}}),a("subscribers-modal",{attrs:{"open-dialog":t.subscribersDialog},on:{closeDialog:function(e){t.subscribersDialog=!1}}})],1)},r=[],i=a("3f2e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"",transition:"fab-transition","max-width":"800"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("div",{staticClass:"d-flex justify-space-between mb-5"},[a("v-card-title",{staticClass:"py-3"},[t._v("Subscribers")]),a("v-btn",{attrs:{icon:"",text:""},on:{click:t.closeModal}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",{staticClass:"px-3"},[a("v-row",[a("v-col",{staticClass:"pt-0 px-0",attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.subscribers,loading:t.loading,"sort-by":"calories"},scopedSlots:t._u([{key:"item.channel",fn:function(e){var s=e.item;return[a("v-avatar",{staticClass:"white--text",attrs:{size:"35",color:"red"}},["no-photo.jpg"!==s.subscriberId.photoUrl?[a("img",{attrs:{src:t.getUrl+"/uploads/avatars/"+s.subscriberId.photoUrl,alt:s.subscriberId.photoUrl+" avatar"}})]:a("span",{staticClass:"headline"},[t._v(" "+t._s(s.subscriberId.channelName.split("")[0].toUpperCase())+" ")])],2),a("span",{staticClass:"pl-2"},[t._v(t._s(s.subscriberId.channelName))])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})],1)],1)],1)],1)],1)},l=[],c=a("b5e5"),o=a("a19a"),d=(a("e186"),a("a9b6"),a("7736")),u=a("e7f4"),b={name:"SubscribersModal",props:["openDialog"],data:function(){return{headers:[{text:"Channel",align:"start",value:"channel"},{text:"Date Subscribed",value:"createdAt"},{text:"Subcriber count",value:"subscriberId.subscribers"}],subscribers:[],loading:!0}},computed:Object(o["a"])(Object(o["a"])({},Object(d["b"])(["getUrl"])),{},{dialog:function(){return this.openDialog}}),methods:{getSubscribers:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,u["a"].getSubscribers(0).catch((function(t){return console.log(t)})).finally((function(){t.loading=!1}));case 3:if(a=e.sent,a){e.next=6;break}return e.abrupt("return");case 6:t.subscribers=a.data.data;case 7:case"end":return e.stop()}}),e)})))()},subscribe:function(t){console.log(t)},closeModal:function(){this.$emit("closeDialog")}},mounted:function(){this.getSubscribers()}},h=b,v=a("cba8"),p=a("72e9"),g=a.n(p),m=a("234c"),f=a("3df0"),w=a("c0ce"),_=a("c615"),x=a("8742"),C=a("c35a"),V=a("4a8d"),y=a("1e55"),j=a("a519"),S=Object(v["a"])(h,n,l,!1,null,null,null),k=S.exports;g()(S,{VAvatar:m["a"],VBtn:f["a"],VCard:w["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:x["a"],VDataTable:C["a"],VDialog:V["a"],VIcon:y["a"],VRow:j["a"]});var O={data:function(){return{loading:!0,dialog:!1,subscribersDialog:!1}},components:{UploadVideoModal:i["a"],SubscribersModal:k},mounted:function(){}},U=O,I=(a("af5b"),a("262a")),A=a("0d37"),D=Object(v["a"])(U,s,r,!1,null,null,null);e["default"]=D.exports;g()(D,{VBtn:f["a"],VCard:w["a"],VCardActions:_["a"],VCardTitle:_["d"],VCol:x["a"],VContainer:I["a"],VIcon:y["a"],VRow:j["a"],VTooltip:A["a"]})},"71a8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"channel-home"}},[a("v-parallax",{attrs:{height:"230",src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}}),a("div",{staticClass:"nav-bgcolor"},[a("div",{attrs:{id:"channel-header"}},[a("v-container",{staticClass:"py-0"},[a("v-row",{staticClass:"justify-space-between"},[a("v-col",{attrs:{cols:"12",sm:"5",md:"5",lg:"5","offset-md":"1"}},[a("v-skeleton-loader",{staticClass:"mr-1",attrs:{type:"list-item-avatar-two-line",loading:t.loading}},[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-avatar",{attrs:{size:"80"}},["no-photo.jpg"!==t.channel.photoUrl?a("v-img",{attrs:{src:t.url+"/uploads/avatars/"+t.channel.photoUrl}}):a("v-avatar",{attrs:{color:"red",size:"60"}},[a("span",{staticClass:"white--text headline "},[t._v(" "+t._s(t.channel.channelName.split("")[0].toUpperCase()))])])],1),a("v-list-item-content",{staticClass:"align-self-auto"},[a("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(t.channel.channelName))]),a("v-list-item-subtitle",[t._v(t._s(t.channel.subscribers)+" subscribers ")])],1)],1)],1)],1)],1),t.loading?t._e():a("v-col",{attrs:{cols:"12",sm:"5",md:"3",lg:"3"}},[t.currentUser&&t.channel._id!==t.currentUser._id||t.showSubBtn?a("v-btn",{class:[{"red white--text":!t.subscribed},{"grey grey--text lighten-3 text--darken-3":t.subscribed},"mt-6"],attrs:{tile:"",large:"",depressed:"",loading:t.subscribeLoading},on:{click:t.subscribe}},[t._v(t._s(t.subscribed?"subscribed":"subscribe"))]):t._e()],1)],1)],1)],1),a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-tabs",{attrs:{"background-color":"transparent","show-arrows":"",centered:"","center-active":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e,s){return a("v-tab",{key:s},[t._v(" "+t._s(e)+" ")])})),1),a("v-container",{attrs:{fluid:""}},[a("v-tabs-items",{staticClass:"transparent",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-title",[t._v("Uploads")]),a("v-slide-group",{staticClass:"pa-4",attrs:{multiple:"","show-arrows":""}},t._l(t.loading?5:t.videos.data,(function(e,s){return a("v-slide-item",{key:s},[a("v-skeleton-loader",{staticClass:"mr-1",attrs:{type:"card-avatar",loading:t.loading,width:"250px"}},[a("video-card",{attrs:{card:{maxWidth:250,type:"noAvatar"},video:e,channel:e.userId}})],1)],1)})),1)],1)],1),a("v-tab-item",[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-title",[t._v("Uploads")]),a("v-row",t._l(t.loading?10:t.videos.data,(function(e,s){return a("v-col",{key:s,staticClass:"mx-xs-auto",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[a("v-skeleton-loader",{attrs:{type:"card-avatar",loading:t.loading}},[a("video-card",{attrs:{card:{maxWidth:350},video:e,channel:e.userId}})],1)],1)})),1)],1)],1)],1)],1)],1)],1),a("signin-modal",{attrs:{openModal:t.signinDialog,details:t.details},on:{closeModal:function(e){t.signinDialog=!1}}})],1)},r=[],i=a("b5e5"),n=a("a19a"),l=(a("e186"),a("a9b6"),a("7736")),c=a("3f4a"),o={getAll:function(t){return Object(c["a"])().get("users/?".concat(t))},getById:function(t){return Object(c["a"])().get("users/".concat(t))},createUser:function(t){return Object(c["a"])().post("users",t)},updateUser:function(t,e){return Object(c["a"])().put("users/".concat(e),t)},deleteById:function(t){return Object(c["a"])().delete("users/".concat(t))}},d=a("7b4e"),u=a("e7f4"),b=a("829b"),h=a("931e"),v={data:function(){return{tab:null,loading:!1,errored:!1,subscribed:!1,subscribeLoading:!1,showSubBtn:!0,url:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_URL,items:["Home","Videos","Playlists","Community","Channels","about"],videos:{},channel:{},signinDialog:!1,details:{}}},computed:Object(n["a"])({},Object(l["b"])(["isAuthenticated","currentUser"])),components:{VideoCard:b["a"],SigninModal:h["a"]},methods:{getChannel:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loading=!0,e.errored=!1,a.next=4,o.getById(t).catch((function(t){e.errored=!0,console.log(t),e.$router.push("/")})).finally((function(){return e.loading=!1}));case 4:if(s=a.sent,s){a.next=7;break}return a.abrupt("return");case 7:e.channel=s.data.data,e.currentUser&&e.currentUser._id===e.channel._id?e.showSubBtn=!1:e.showSubBtn=!0,e.getVideos(),e.checkSubscription(e.channel._id);case 11:case"end":return a.stop()}}),a)})))()},getVideos:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,d["a"].getAll("public",{userId:t.channel._id}).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}));case 3:if(a=e.sent,"undefined"!==typeof a){e.next=6;break}return e.abrupt("return");case 6:t.videos=a.data;case 7:case"end":return e.stop()}}),e)})))()},checkSubscription:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.currentUser){a.next=2;break}return a.abrupt("return");case 2:return e.loading=!0,a.next=5,u["a"].checkSubscription({channelId:t}).catch((function(t){console.log(t)})).finally((function(){e.loading=!1}));case 5:if(s=a.sent,s){a.next=8;break}return a.abrupt("return");case 8:s.data.data._id?e.subscribed=!0:e.subscribed=!1;case 9:case"end":return a.stop()}}),a)})))()},subscribe:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isAuthenticated){e.next=4;break}return t.signinDialog=!0,t.details={title:"Want to subscribe to this channel?",text:"Sign in to subscribe to this channel."},e.abrupt("return");case 4:return t.subscribeLoading=!0,e.next=7,u["a"].createSubscription({channelId:t.channel._id}).catch((function(t){return console.log(t)})).finally((function(){t.subscribeLoading=!1}));case 7:if(a=e.sent,a){e.next=10;break}return e.abrupt("return");case 10:a.data.data._id?(t.subscribed=!0,t.channel.subscribers++):(t.subscribed=!1,t.channel.subscribers--);case 11:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getChannel(this.$route.params.id)},beforeRouteUpdate:function(t,e,a){this.getChannel(t.params.id),a()}},p=v,g=(a("2cb0"),a("cba8")),m=a("72e9"),f=a.n(m),w=a("234c"),_=a("3df0"),x=a("c0ce"),C=a("c615"),V=a("8742"),y=a("262a"),j=a("d46d"),S=a("1562"),k=a("1f07"),O=a("3858"),U=(a("df55"),a("430a")),I=U["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),A=a("89ea");const D=Object(A["a"])(I);var R=D.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},a=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),s=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[a,s])}}),L=a("a519"),E=a("6f1f"),B=a("1fb9"),T=a("fe4f"),$=a("78c7");const H=U["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object($["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object($["c"])("v-item should only contain a single element",this),t)}});Object(A["a"])(H,Object(T["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"});var N=Object(A["a"])(H,Object(T["a"])("slideGroup")).extend({name:"v-slide-item"}),M=a("214d"),z=a("8ff6"),P=a("e253"),Y=a("f88e"),W=Object(g["a"])(p,s,r,!1,null,null,null);e["default"]=W.exports;f()(W,{VAvatar:w["a"],VBtn:_["a"],VCard:x["a"],VCardTitle:C["d"],VCol:V["a"],VContainer:y["a"],VImg:j["a"],VListItem:S["a"],VListItemAvatar:k["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VParallax:R,VRow:L["a"],VSkeletonLoader:E["a"],VSlideGroup:B["b"],VSlideItem:N,VTab:M["a"],VTabItem:z["a"],VTabs:P["a"],VTabsItems:Y["a"]})},"81ec":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4",attrs:{id:"studio"}},[a("router-view")],1)},r=[],i={},n=i,l=a("cba8"),c=Object(l["a"])(n,s,r,!1,null,null,null);e["default"]=c.exports},"829b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"content-bg card mx-auto",attrs:{"max-width":t.card.maxWidth,flat:"",tile:"",router:"",to:"/watch/"+t.video._id,color:"black"}},[a("v-img",{attrs:{height:"250",src:t.video.thumbnailUrl}}),a("v-row",{attrs:{"no-gutters":""}},["noAvatar"!=t.card.type?a("v-col",{attrs:{cols:"2"}},[a("v-list-item",{staticClass:"pl-0 pt-3",attrs:{router:"",to:"/channels/"+t.channel._id}},[a("v-list-item-avatar",["no-photo.jpg"!==t.channel.photoUrl?a("v-img",{staticClass:"elevation-6",attrs:{src:t.channel.photoUrl}}):a("v-avatar",{attrs:{color:"red"}},[a("span",{staticClass:"white--text headline "},[t._v(" "+t._s(t.channel.channelName.split("")[0].toUpperCase())+"111")])])],1)],1)],1):t._e(),a("v-col",[a("v-card-title",{staticClass:"pl-2 pt-3 subtitle-1 font-weight-bold",staticStyle:{"line-height":"1.2rem"}},[t._v(" "+t._s(t.video.title)+" ")]),a("v-card-subtitle",{staticClass:"pl-2 pb-0"},[t._v(" "+t._s(t.channel.name)+" ")]),a("v-card-subtitle",{staticClass:"pl-2 pt-0"},[t._v(" "+t._s(t.video.views)+" 관람하다."),a("v-icon",[t._v("mdi-circle-small")]),t._v(t._s(t.dateFormatter(t.video.CreatedAt))+" ")],1)],1)],1)],1)},r=[],i=a("caaf"),n=a.n(i),l={name:"VideoCard",props:{video:{type:Object,required:!0},channel:{type:Object,required:!0},card:Object},data:function(){return{url:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_URL}},methods:{dateFormatter:function(t){return n()(t).format("YYYY-MM-DD")}}},c=l,o=a("cba8"),d=a("72e9"),u=a.n(d),b=a("234c"),h=a("c0ce"),v=a("c615"),p=a("8742"),g=a("1e55"),m=a("d46d"),f=a("1562"),w=a("1f07"),_=a("a519"),x=Object(o["a"])(c,s,r,!1,null,null,null);e["a"]=x.exports;u()(x,{VAvatar:b["a"],VCard:h["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VCol:p["a"],VIcon:g["a"],VImg:m["a"],VListItem:f["a"],VListItemAvatar:w["a"],VRow:_["a"]})},af5b:function(t,e,a){"use strict";a("2ddf")},df55:function(t,e,a){}}]);
//# sourceMappingURL=dashboard.d089244d.js.map