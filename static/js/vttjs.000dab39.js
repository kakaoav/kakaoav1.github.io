(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vttjs"],{1:function(t,e){},4693:function(t,e,n){var r=n("d6f6"),i=Object.create||function(){function t(){}return function(e){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return t.prototype=e,new t}}();function o(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function a(t){function e(t,e,n,r){return 3600*(0|t)+60*(0|e)+(0|n)+(0|r)/1e3}var n=t.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);return n?n[3]?e(n[1],n[2],n[3].replace(":",""),n[4]):n[1]>59?e(n[1],n[2],0,n[4]):e(0,n[1],n[2],n[4]):null}function s(){this.values=i(null)}function c(t,e,n,r){var i=r?t.split(r):[t];for(var o in i)if("string"===typeof i[o]){var a=i[o].split(n);if(2===a.length){var s=a[0],c=a[1];e(s,c)}}}function u(t,e,n){var r=t;function i(){var e=a(t);if(null===e)throw new o(o.Errors.BadTimeStamp,"Malformed timestamp: "+r);return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function u(t,e){var r=new s;c(t,(function(t,e){switch(t){case"region":for(var i=n.length-1;i>=0;i--)if(n[i].id===e){r.set(t,n[i].region);break}break;case"vertical":r.alt(t,e,["rl","lr"]);break;case"line":var o=e.split(","),a=o[0];r.integer(t,a),r.percent(t,a)&&r.set("snapToLines",!1),r.alt(t,a,["auto"]),2===o.length&&r.alt("lineAlign",o[1],["start","center","end"]);break;case"position":o=e.split(","),r.percent(t,o[0]),2===o.length&&r.alt("positionAlign",o[1],["start","center","end"]);break;case"size":r.percent(t,e);break;case"align":r.alt(t,e,["start","center","end","left","right"]);break}}),/:/,/\s/),e.region=r.get("region",null),e.vertical=r.get("vertical","");try{e.line=r.get("line","auto")}catch(i){}e.lineAlign=r.get("lineAlign","start"),e.snapToLines=r.get("snapToLines",!0),e.size=r.get("size",100);try{e.align=r.get("align","center")}catch(i){e.align=r.get("align","middle")}try{e.position=r.get("position","auto")}catch(i){e.position=r.get("position",{start:0,left:0,center:50,middle:50,end:100,right:100},e.align)}e.positionAlign=r.get("positionAlign",{start:"start",left:"start",center:"center",middle:"center",end:"end",right:"end"},e.align)}function l(){t=t.replace(/^\s+/,"")}if(l(),e.startTime=i(),l(),"--\x3e"!==t.substr(0,3))throw new o(o.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+r);t=t.substr(3),l(),e.endTime=i(),l(),u(t,e)}o.prototype=i(Error.prototype),o.prototype.constructor=o,o.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},s.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,n){return n?this.has(t)?this.values[t]:e[n]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,n){for(var r=0;r<n.length;++r)if(e===n[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(e=parseFloat(e),e>=0&&e<=100))&&(this.set(t,e),!0)}};var l=r.createElement&&r.createElement("textarea"),h={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},f={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:"rgba(0,0,0,1)"},p={v:"title",lang:"lang"},g={rt:"ruby"};function d(t,e){function n(){if(!e)return null;function t(t){return e=e.substr(t.length),t}var n=e.match(/^([^<]*)(<[^>]*>?)?/);return t(n[1]?n[1]:n[2])}function r(t){return l.innerHTML=t,t=l.textContent,l.textContent="",t}function i(t,e){return!g[e.localName]||g[e.localName]===t.localName}function o(e,n){var r=h[e];if(!r)return null;var i=t.document.createElement(r),o=p[e];return o&&n&&(i[o]=n.trim()),i}var s,c=t.document.createElement("div"),u=c,d=[];while(null!==(s=n()))if("<"!==s[0])u.appendChild(t.document.createTextNode(r(s)));else{if("/"===s[1]){d.length&&d[d.length-1]===s.substr(2).replace(">","")&&(d.pop(),u=u.parentNode);continue}var m,v=a(s.substr(1,s.length-2));if(v){m=t.document.createProcessingInstruction("timestamp",v),u.appendChild(m);continue}var b=s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!b)continue;if(m=o(b[1],b[3]),!m)continue;if(!i(u,m))continue;if(b[2]){var w=b[2].split(".");w.forEach((function(t){var e=/^bg_/.test(t),n=e?t.slice(3):t;if(f.hasOwnProperty(n)){var r=e?"background-color":"color",i=f[n];m.style[r]=i}})),m.className=w.join(" ")}d.push(b[1]),u.appendChild(m),u=m}return c}var m=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function v(t){for(var e=0;e<m.length;e++){var n=m[e];if(t>=n[0]&&t<=n[1])return!0}return!1}function b(t){var e,n=[],r="";if(!t||!t.childNodes)return"ltr";function i(t,e){for(var n=e.childNodes.length-1;n>=0;n--)t.push(e.childNodes[n])}function o(t){if(!t||!t.length)return null;var e=t.pop(),n=e.textContent||e.innerText;if(n){var r=n.match(/^.*(\n|\r)/);return r?(t.length=0,r[0]):n}return"ruby"===e.tagName?o(t):e.childNodes?(i(t,e),o(t)):void 0}i(n,t);while(r=o(n))for(var a=0;a<r.length;a++)if(e=r.charCodeAt(a),v(e))return"rtl";return"ltr"}function w(t){if("number"===typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,n=e.textTrackList,r=0,i=0;i<n.length&&n[i]!==e;i++)"showing"===n[i].mode&&r++;return-1*++r}function y(){}function T(t,e,n){y.call(this),this.cue=e,this.cueDiv=d(t,e.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={direction:b(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===e.align?"center":e.align,font:n.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var i=0;switch(e.positionAlign){case"start":i=e.position;break;case"center":i=e.position-e.size/2;break;case"end":i=e.position-e.size;break}""===e.vertical?this.applyStyles({left:this.formatStyle(i,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(i,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function E(t){var e,n,r,i;if(t.div){n=t.div.offsetHeight,r=t.div.offsetWidth,i=t.div.offsetTop;var o=(o=t.div.childNodes)&&(o=o[0])&&o.getClientRects&&o.getClientRects();t=t.div.getBoundingClientRect(),e=o?Math.max(o[0]&&o[0].height||0,t.height/o.length):0}this.left=t.left,this.right=t.right,this.top=t.top||i,this.height=t.height||n,this.bottom=t.bottom||i+(t.height||n),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight}function x(t,e,n,r){function i(t,e){for(var i,o=new E(t),a=1,s=0;s<e.length;s++){while(t.overlapsOppositeAxis(n,e[s])||t.within(n)&&t.overlapsAny(r))t.move(e[s]);if(t.within(n))return t;var c=t.intersectPercentage(n);a>c&&(i=new E(t),a=c),t=new E(o)}return i||o}var o=new E(e),a=e.cue,s=w(a),c=[];if(a.snapToLines){var u;switch(a.vertical){case"":c=["+y","-y"],u="height";break;case"rl":c=["+x","-x"],u="width";break;case"lr":c=["-x","+x"],u="width";break}var l=o.lineHeight,h=l*Math.round(s),f=n[u]+l,p=c[0];Math.abs(h)>f&&(h=h<0?-1:1,h*=Math.ceil(f/l)*l),s<0&&(h+=""===a.vertical?n.height:n.width,c=c.reverse()),o.move(p,h)}else{var g=o.lineHeight/n.height*100;switch(a.lineAlign){case"center":s-=g/2;break;case"end":s-=g;break}switch(a.vertical){case"":e.applyStyles({top:e.formatStyle(s,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(s,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(s,"%")});break}c=["+y","-x","+x","-y"],o=new E(e)}var d=i(o,c);e.move(d.toCSSCompatValues(n))}function C(){}y.prototype.applyStyles=function(t,e){for(var n in e=e||this.div,t)t.hasOwnProperty(n)&&(e.style[n]=t[n])},y.prototype.formatStyle=function(t,e){return 0===t?0:t+e},T.prototype=i(y.prototype),T.prototype.constructor=T,E.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e;break}},E.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},E.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},E.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},E.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},E.prototype.intersectPercentage=function(t){var e=Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left)),n=Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top)),r=e*n;return r/(this.height*this.width)},E.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},E.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,n=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t;var i={left:t.left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||n};return i},C.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!==typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},C.convertCueToDOMTree=function(t,e){return t&&e?d(t,e):null};var A=.05,S="sans-serif",k="1.5%";C.processCues=function(t,e,n){if(!t||!e||!n)return null;while(n.firstChild)n.removeChild(n.firstChild);var r=t.document.createElement("div");function i(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}if(r.style.position="absolute",r.style.left="0",r.style.right="0",r.style.top="0",r.style.bottom="0",r.style.margin=k,n.appendChild(r),i(e)){var o=[],a=E.getSimpleBoxPosition(r),s=Math.round(a.height*A*100)/100,c={font:s+"px "+S};(function(){for(var n,i,s=0;s<e.length;s++)i=e[s],n=new T(t,i,c),r.appendChild(n.div),x(t,n,a,o),i.displayState=n.div,o.push(E.getSimpleBoxPosition(n))})()}else for(var u=0;u<e.length;u++)r.appendChild(e[u].displayState)},C.Parser=function(t,e,n){n||(n=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=n||new TextDecoder("utf8"),this.regionList=[]},C.Parser.prototype={reportOrThrowError:function(t){if(!(t instanceof o))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){var e=this;function n(){var t=e.buffer,n=0;while(n<t.length&&"\r"!==t[n]&&"\n"!==t[n])++n;var r=t.substr(0,n);return"\r"===t[n]&&++n,"\n"===t[n]&&++n,e.buffer=t.substr(n),r}function r(t){var n=new s;if(c(t,(function(t,e){switch(t){case"id":n.set(t,e);break;case"width":n.percent(t,e);break;case"lines":n.integer(t,e);break;case"regionanchor":case"viewportanchor":var r=e.split(",");if(2!==r.length)break;var i=new s;if(i.percent("x",r[0]),i.percent("y",r[1]),!i.has("x")||!i.has("y"))break;n.set(t+"X",i.get("x")),n.set(t+"Y",i.get("y"));break;case"scroll":n.alt(t,e,["up"]);break}}),/=/,/\s/),n.has("id")){var r=new(e.vttjs.VTTRegion||e.window.VTTRegion);r.width=n.get("width",100),r.lines=n.get("lines",3),r.regionAnchorX=n.get("regionanchorX",0),r.regionAnchorY=n.get("regionanchorY",100),r.viewportAnchorX=n.get("viewportanchorX",0),r.viewportAnchorY=n.get("viewportanchorY",100),r.scroll=n.get("scroll",""),e.onregion&&e.onregion(r),e.regionList.push({id:n.get("id"),region:r})}}function i(t){var n=new s;c(t,(function(t,e){switch(t){case"MPEGT":n.integer(t+"S",e);break;case"LOCA":n.set(t+"L",a(e));break}}),/[^\d]:/,/,/),e.ontimestampmap&&e.ontimestampmap({MPEGTS:n.get("MPEGTS"),LOCAL:n.get("LOCAL")})}function l(t){t.match(/X-TIMESTAMP-MAP/)?c(t,(function(t,e){switch(t){case"X-TIMESTAMP-MAP":i(e);break}}),/=/):c(t,(function(t,e){switch(t){case"Region":r(e);break}}),/:/)}t&&(e.buffer+=e.decoder.decode(t,{stream:!0}));try{var h;if("INITIAL"===e.state){if(!/\r\n|\n/.test(e.buffer))return this;h=n();var f=h.match(/^WEBVTT([ \t].*)?$/);if(!f||!f[0])throw new o(o.Errors.BadSignature);e.state="HEADER"}var p=!1;while(e.buffer){if(!/\r\n|\n/.test(e.buffer))return this;switch(p?p=!1:h=n(),e.state){case"HEADER":/:/.test(h)?l(h):h||(e.state="ID");continue;case"NOTE":h||(e.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(h)){e.state="NOTE";break}if(!h)continue;e.cue=new(e.vttjs.VTTCue||e.window.VTTCue)(0,0,"");try{e.cue.align="center"}catch(d){e.cue.align="middle"}if(e.state="CUE",-1===h.indexOf("--\x3e")){e.cue.id=h;continue}case"CUE":try{u(h,e.cue,e.regionList)}catch(d){e.reportOrThrowError(d),e.cue=null,e.state="BADCUE";continue}e.state="CUETEXT";continue;case"CUETEXT":var g=-1!==h.indexOf("--\x3e");if(!h||g&&(p=!0)){e.oncue&&e.oncue(e.cue),e.cue=null,e.state="ID";continue}e.cue.text&&(e.cue.text+="\n"),e.cue.text+=h.replace(/\u2028/g,"\n").replace(/u2029/g,"\n");continue;case"BADCUE":h||(e.state="ID");continue}}}catch(d){e.reportOrThrowError(d),"CUETEXT"===e.state&&e.cue&&e.oncue&&e.oncue(e.cue),e.cue=null,e.state="INITIAL"===e.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var t=this;try{if(t.buffer+=t.decoder.decode(),(t.cue||"HEADER"===t.state)&&(t.buffer+="\n\n",t.parse()),"INITIAL"===t.state)throw new o(o.Errors.BadSignature)}catch(e){t.reportOrThrowError(e)}return t.onflush&&t.onflush(),this}},t.exports=C},"481a":function(t,e){var n={"":!0,up:!0};function r(t){if("string"!==typeof t)return!1;var e=n[t.toLowerCase()];return!!e&&t.toLowerCase()}function i(t){return"number"===typeof t&&t>=0&&t<=100}function o(){var t=100,e=3,n=0,o=100,a=0,s=100,c="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return t},set:function(e){if(!i(e))throw new Error("Width must be between 0 and 100.");t=e}},lines:{enumerable:!0,get:function(){return e},set:function(t){if("number"!==typeof t)throw new TypeError("Lines must be set to a number.");e=t}},regionAnchorY:{enumerable:!0,get:function(){return o},set:function(t){if(!i(t))throw new Error("RegionAnchorX must be between 0 and 100.");o=t}},regionAnchorX:{enumerable:!0,get:function(){return n},set:function(t){if(!i(t))throw new Error("RegionAnchorY must be between 0 and 100.");n=t}},viewportAnchorY:{enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new Error("ViewportAnchorY must be between 0 and 100.");s=t}},viewportAnchorX:{enumerable:!0,get:function(){return a},set:function(t){if(!i(t))throw new Error("ViewportAnchorX must be between 0 and 100.");a=t}},scroll:{enumerable:!0,get:function(){return c},set:function(t){var e=r(t);!1===e?console.warn("Scroll: an invalid or illegal string was specified."):c=e}}})}t.exports=o},"51a6":function(t,e,n){var r=n("6a9f"),i=t.exports={WebVTT:n("4693"),VTTCue:n("90fb"),VTTRegion:n("481a")};r.vttjs=i,r.WebVTT=i.WebVTT;var o=i.VTTCue,a=i.VTTRegion,s=r.VTTCue,c=r.VTTRegion;i.shim=function(){r.VTTCue=o,r.VTTRegion=a},i.restore=function(){r.VTTCue=s,r.VTTRegion=c},r.VTTCue||i.shim()},"6a9f":function(t,e,n){(function(e){var n;n="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},t.exports=n}).call(this,n("2409"))},"90fb":function(t,e){var n="auto",r={"":1,lr:1,rl:1},i={start:1,center:1,end:1,left:1,right:1,auto:1,"line-left":1,"line-right":1};function o(t){if("string"!==typeof t)return!1;var e=r[t.toLowerCase()];return!!e&&t.toLowerCase()}function a(t){if("string"!==typeof t)return!1;var e=i[t.toLowerCase()];return!!e&&t.toLowerCase()}function s(t,e,r){this.hasBeenReset=!1;var i="",s=!1,c=t,u=e,l=r,h=null,f="",p=!0,g="auto",d="start",m="auto",v="auto",b=100,w="center";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return i},set:function(t){i=""+t}},pauseOnExit:{enumerable:!0,get:function(){return s},set:function(t){s=!!t}},startTime:{enumerable:!0,get:function(){return c},set:function(t){if("number"!==typeof t)throw new TypeError("Start time must be set to a number.");c=t,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return u},set:function(t){if("number"!==typeof t)throw new TypeError("End time must be set to a number.");u=t,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return l},set:function(t){l=""+t,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return h},set:function(t){h=t,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return f},set:function(t){var e=o(t);if(!1===e)throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");f=e,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return p},set:function(t){p=!!t,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return g},set:function(t){if("number"!==typeof t&&t!==n)throw new SyntaxError("Line: an invalid number or illegal string was specified.");g=t,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return d},set:function(t){var e=a(t);e?(d=e,this.hasBeenReset=!0):console.warn("lineAlign: an invalid or illegal string was specified.")}},position:{enumerable:!0,get:function(){return m},set:function(t){if(t<0||t>100)throw new Error("Position must be between 0 and 100.");m=t,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return v},set:function(t){var e=a(t);e?(v=e,this.hasBeenReset=!0):console.warn("positionAlign: an invalid or illegal string was specified.")}},size:{enumerable:!0,get:function(){return b},set:function(t){if(t<0||t>100)throw new Error("Size must be between 0 and 100.");b=t,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return w},set:function(t){var e=a(t);if(!e)throw new SyntaxError("align: an invalid or illegal alignment string was specified.");w=e,this.hasBeenReset=!0}}}),this.displayState=void 0}s.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},t.exports=s},d6f6:function(t,e,n){(function(e){var r,i="undefined"!==typeof e?e:"undefined"!==typeof window?window:{},o=n(1);"undefined"!==typeof document?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=o)),t.exports=r}).call(this,n("2409"))}}]);