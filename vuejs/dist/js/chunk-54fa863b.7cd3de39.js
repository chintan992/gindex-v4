(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54fa863b","chunk-2d0babe1"],{1148:function(e,t,n){"use strict";var r=n("a691"),o=n("1d80");e.exports="".repeat||function(e){var t=String(o(this)),n="",a=r(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("d784"),o=n("44e7"),a=n("825a"),i=n("1d80"),c=n("4840"),u=n("8aa5"),s=n("50c4"),l=n("14c3"),d=n("9263"),f=n("d039"),h=[].push,p=Math.min,g=4294967295,m=!f((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),a=void 0===n?g:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,a);var c,u,s,l=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,f+"g");while(c=d.call(m,r)){if(u=m.lastIndex,u>p&&(l.push(r.slice(p,c.index)),c.length>1&&c.index<r.length&&h.apply(l,c.slice(1)),s=c[0].length,p=u,l.length>=a))break;m.lastIndex===c.index&&m.lastIndex++}return p===r.length?!s&&m.test("")||l.push(""):l.push(r.slice(p)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,o,n):r.call(String(o),t,n)},function(e,o){var i=n(r,e,this,o,r!==t);if(i.done)return i.value;var d=a(e),f=String(this),h=c(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),_=new h(m?d:"^(?:"+d.source+")",v),C=void 0===o?g:o>>>0;if(0===C)return[];if(0===f.length)return null===l(_,f)?[f]:[];var x=0,y=0,R=[];while(y<f.length){_.lastIndex=m?y:0;var A,E=l(_,m?f:f.slice(y));if(null===E||(A=p(s(_.lastIndex+(m?0:y)),f.length))===x)y=u(f,y,b);else{if(R.push(f.slice(x,y)),R.length===C)return R;for(var S=1;S<=E.length-1;S++)if(R.push(E[S]),R.length===C)return R;y=x=A}}return R.push(f.slice(x)),R}]}),!m)},"27ae":function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(e,t){module.exports=t(e)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e.charAt(n)]=n;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],n=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),r=[b64chars.charAt(n>>>18),b64chars.charAt(n>>>12&63),t>=2?"=":b64chars.charAt(n>>>6&63),t>=1?"=":b64chars.charAt(63&n)];return r.join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){var t="[object Uint8Array]"===Object.prototype.toString.call(e);return t?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),n=t-65536;return fromCharCode(55296+(n>>>10))+fromCharCode(56320+(1023&n));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,n=t%4,r=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),o=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return o.length-=[0,0,2,1][n],o.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global["Meteor"]&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__("c8ba"))},3905:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"navigation-buttons"},[n("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?n("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged?e._e():n("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?n("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?n("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?n("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?n("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():n("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():n("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),n("hr")])},o=[],a=(n("d3b7"),n("25f0"),{data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=localStorage.getItem("tokendata"),t=localStorage.getItem("userdata");null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=localStorage.getItem("tokendata"),n=localStorage.getItem("userdata");if(null!=n&&null!=t){var r=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),o=JSON.parse(this.$hash.AES.decrypt(n,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:r.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?o.admin&&!o.superadmin?(e.logged=!0,e.admin=!0):o.admin&&o.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{id:0,cmd:"results",data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})}))}else this.logged=!1}}),i=a,c=n("2877"),u=Object(c["a"])(i,r,o,!1,null,null,null);t["default"]=u.exports},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),a=n("b622"),i=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},"45d8":function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return v}));n("99af"),n("c975"),n("b680"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276");var r=n("9bd2"),o=n("27ae").Base64,a=["html","php","css","go","java","js","json","txt","sh","md"],i=["mp3","flac","wav","ogg","m4a"],c=["mp4","webm","mkv","m3u8"],u=["bmp","jpg","jpeg","png","gif"],s=["pdf"],l=function(e){return e.replace(/(.*)/,(function(e,t){return t.replace().replace(/\//g,"%2F").replace(/#/g,"%23")}))},d=function(e,t){return e=l(e),"application/vnd.google-apps.folder"===t.mimeType&&"/"!==e.substr(-1)&&(e+="/"),e},f=function(e){var t=e.split("/").pop(),n=t.split(".").pop().toLowerCase(),r=p(e);return-1!=a.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"text/").concat(r)}))),-1!=s.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"pdf/").concat(r)}))),-1!=i.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"audio/").concat(r)}))),-1!=c.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"video/").concat(r)}))),-1!=u.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"image/").concat(r)}))),e},h=function(e){var t=e.split("/").pop(),n=t.split(".").pop().toLowerCase(),r=a.concat.apply(a,c.concat(u,s,i));return-1!=r.indexOf("".concat(n))},p=function(e){return o.encodeURI(e)},g=function(e){return o.decode(e)};function m(e,t){var n=e.path,o=e.file.modifiedTime,a="file_path_"+n+o,i=localStorage.getItem(a);if(i)return t(i);r["a"].get(n).then((function(e){var n=e.data;localStorage.setItem(a,n),t(n)}))}function b(e){return e>=1e9?e=(e/1e9).toFixed(2)+" GB":e>=1e6?e=(e/1e6).toFixed(2)+" MB":e>=1e3?e=(e/1e3).toFixed(2)+" KB":e>1?e+=" bytes":1==e?e+=" byte":e="",e}function v(e,t){t=t||"YYYY-MM-DD HH:mm:ss","string"===typeof e&&(e=new Date(e)),"number"===typeof e&&(e=new Date(e));var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours()%12===0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()},r={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};for(var o in/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+r[e.getDay()+""])),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t}},"4d63":function(e,t,n){var r=n("83ab"),o=n("da84"),a=n("94ca"),i=n("7156"),c=n("9bf2").f,u=n("241c").f,s=n("44e7"),l=n("ad6d"),d=n("9f7f"),f=n("6eeb"),h=n("d039"),p=n("69f3").set,g=n("2626"),m=n("b622"),b=m("match"),v=o.RegExp,_=v.prototype,C=/a/g,x=/a/g,y=new v(C)!==C,R=d.UNSUPPORTED_Y,A=r&&a("RegExp",!y||R||h((function(){return x[b]=!1,v(C)!=C||v(x)==x||"/a/i"!=v(C,"i")})));if(A){var E=function(e,t){var n,r=this instanceof E,o=s(e),a=void 0===t;if(!r&&o&&e.constructor===E&&a)return e;y?o&&!a&&(e=e.source):e instanceof E&&(a&&(t=l.call(e)),e=e.source),R&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var c=i(y?new v(e,t):v(e,t),r?this:_,E);return R&&n&&p(c,{sticky:n}),c},S=function(e){e in E||c(E,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},w=u(v),k=0;while(w.length>k)S(w[k++]);_.constructor=E,E.prototype=_,f(o,"RegExp",E)}g("RegExp")},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var a,i;return o&&"function"==typeof(a=t.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&o(e,i),e}},b680:function(e,t,n){"use strict";var r=n("23e7"),o=n("a691"),a=n("408a"),i=n("1148"),c=n("d039"),u=1..toFixed,s=Math.floor,l=function(e,t,n){return 0===t?n:t%2===1?l(e,t-1,n*e):l(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},f=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}));r({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,n,r,c,u=a(this),f=o(e),h=[0,0,0,0,0,0],p="",g="0",m=function(e,t){var n=-1,r=t;while(++n<6)r+=e*h[n],h[n]=r%1e7,r=s(r/1e7)},b=function(e){var t=6,n=0;while(--t>=0)n+=h[t],h[t]=s(n/e),n=n%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==h[e]){var n=String(h[e]);t=""===t?n:t+i.call("0",7-n.length)+n}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(p="-",u=-u),u>1e-21)if(t=d(u*l(2,69,1))-69,n=t<0?u*l(2,-t,1):u/l(2,t,1),n*=4503599627370496,t=52-t,t>0){m(0,n),r=f;while(r>=7)m(1e7,0),r-=7;m(l(10,r,1),0),r=t-1;while(r>=23)b(1<<23),r-=23;b(1<<r),m(1,1),b(2),g=v()}else m(0,n),m(1<<-t,0),g=v()+i.call("0",f);return f>0?(c=g.length,g=p+(c<=f?"0."+i.call("0",f-c)+g:g.slice(0,c-f)+"."+g.slice(c-f))):g=p+g,g}})},d4d2:function(e,t,n){"use strict";(function(e){n("d3b7"),n("25f0");var r=n("3905"),o=n("45d8");t["a"]={components:{TopLinks:r["default"]},data:function(){return{apiurl:"",audiourl:""}},methods:{render:function(){this.audiourl=window.location.origin+encodeURI(this.url),this.apiurl=this.audiourl}},activated:function(){this.render()},computed:{url:function(){return this.$route.params.path?Object(o["d"])(this.$route.params.path):""},players:function(){return[{name:"IINA",icon:this.$cdnpath("images/player/iina.png"),scheme:"iina://weblink?url="+this.videourl},{name:"PotPlayer",icon:this.$cdnpath("images/player/potplayer.png"),scheme:"potplayer://"+this.videourl},{name:"VLC",icon:this.$cdnpath("images/player/vlc.png"),scheme:"vlc://"+this.videourl},{name:"Thunder",icon:this.$cdnpath("images/player/thunder.png"),scheme:"thunder://"+this.getThunder},{name:"Aria2",icon:this.$cdnpath("images/player/aria2.png"),scheme:'javascript:alert("Not Yet Supported")'},{name:"nPlayer",icon:this.$cdnpath("images/player/nplayer.png"),scheme:"nplayer-"+this.videourl},{name:"MXPlayer(Free)",icon:this.$cdnpath("images/player/mxplayer.png"),scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.ad;S.title="+this.title+";end"},{name:"MXPlayer(Pro)",icon:this.$cdnpath("images/player/mxplayer.png"),scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.pro;S.title="+this.title+";end"}]},getThunder:function(){return e.from("AA"+this.audiourl+"ZZ").toString("base64")}}}}).call(this,n("b639").Buffer)},f9b3:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content g2-content"},[n("TopLinks"),n("div",{staticClass:"audio-card"},[n("vue-plyr",[n("audio",{attrs:{controls:"",autoplay:"",preload:"auto",src:e.apiurl}},[e._v("Does Not Support")])])],1),n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._m(0),e._v(" "+e._s(e.$t("page.video.play"))+" / "),e._m(1),e._v(" "+e._s(e.$t("page.video.download"))+" ")])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v(e._s(e.$t("page.video.link")))]),n("div",{staticClass:"control"},[n("div",{staticClass:"link-text copy-download-link"},[n("input",{staticClass:"input download-link",attrs:{type:"text"},domProps:{value:e.audiourl}})]),n("center",[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.audiourl,expression:"audiourl",arg:"copy"}],attrs:{id:"copy-url",type:"button"}},[e._v("Copy Link "),n("i",{staticClass:"fa fa-copy"})]),n("a",{staticClass:"download-button",attrs:{href:e.audiourl,target:"_blank"}},[e._v("Download "),n("i",{staticClass:"fa fa-download"})])])],1)]),n("div",{staticClass:"columns is-mobile is-multiline has-text-centered"},e._l(e.players,(function(t,r){return n("div",{key:r,staticClass:"column audiocolumn"},[n("p",{staticClass:"heading"},[n("a",{attrs:{href:t.scheme}},[n("figure",{staticClass:"image is-48x48",staticStyle:{margin:"0 auto"}},[n("img",{staticClass:"icon",attrs:{src:t.icon}})])])]),n("p",{},[e._v(e._s(t.name))])])})),0)])])])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",staticStyle:{color:"#ff9595"}},[n("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",staticStyle:{color:"#ff9595"}},[n("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})])}],a=n("d4d2"),i=a["a"],c=n("2877"),u=Object(c["a"])(i,r,o,!1,null,null,null);t["default"]=u.exports}}]);