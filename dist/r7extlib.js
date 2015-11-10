!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.R7=t():e.R7=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function i(e,t){return function(){return console.warn("R7 deprecated method "+e),t.apply(null,arguments)}}function u(e){if("object"===("undefined"==typeof e?"undefined":o(e))&&(e=Object.keys(e)[0]),!x[e])throw new Error("non available key");return e}function a(e){var t=e.match(/(\w+):(\w+)/);return{source:t[1],event:t[2]}}function s(e){var t=e.data;return t.id?R.rpc(t):t.key?R.key(t):R.stream(t)}function c(e,t,n,r){"function"==typeof t&&(r=n,n=t,t=null),n=n.bind(r);var o=L(e,t);return O[o]=function(e,t){n(e||t)},o}function f(e,t,n,r){"function"==typeof t&&(r=n,n=t,t=null);var o=L(e,t);return O[o]=n.bind(r),o}function d(e,t,n,r){return f("navigate",{control:e,context:t},n,r)}function l(e,t,n){var r=u(e);"object"===("undefined"==typeof e?"undefined":o(e))?L("addKeys",e):L("addKeys",[r]),j[r]=t.bind(n)}function h(e){e=u(e),delete j[e],L("removeKeys",[e])}function y(e,t){window.addEventListener("load",function(){f("ready",function(n,r){r&&window.history.init(r.clearHistory),e.call(t)})},!1)}function v(e,t,n){"focus"===e||"blur"===e?S[e]=t.bind(n):(L("addStreamListener",a(e)),S["stream:"+e]=t.bind(n))}function m(e){"focus"===e||"blur"===e?delete S[e]:delete S["stream:"+e]}function w(e,t,n){function r(){for(var e in j)h(e);for(var t in S)m(t)}function o(){r(),K.unload(),K=null;for(var e in u)l(e,u[e]);for(var t in a)v(t,a[t])}function i(){o(),a.focus&&a.focus()}if(K)return void console.error("iframe: already loaded");var u=Object.assign({},j),a=Object.assign({},S);r(),K=new k["default"](e),K.use("exit",i),l("Back",function(){return K.onKeyBack()?K.goBack():void i()}),("undefined"==typeof e.exit||null===e.exit||e.exit)&&l("Exit",function(){return K.onKeyExit()?K.resume():void i()}),K.load(function(e){e&&o(),t.call(n,e),!e&&a.blur&&a.blur()})}function p(){L("exit")}function b(e,t,n,r){return f(e,t,n,r)}n(2),n(3);var g=n(4),k=r(g),E="0.1.9",x={Up:!0,Down:!0,Right:!0,Left:!0,Enter:!0,Mute:!0,Vdown:!0,Vup:!0,Zoom:!0,Back:!0,Exit:!0,Guide:!0,Menu:!0,Numeric:!0,Rewind:!0,Play:!0,Forward:!0,Stop:!0,Pause:!0,Rec:!0,TV:!0},O={},j={},S={},K=null,R={rpc:function(e){var t=e.id,n=O[t];n&&e.id&&(e.hasOwnProperty("error")||e.hasOwnProperty("result"))&&(delete O[t],e.error?n(new Error(e.error.message)):n(null,e.result))},key:function P(e){var P=e.key,t=P.match(/Numeric([0-9])/i);t&&(P="Numeric",e.number=+t[1]);var n=j[P];n&&n(e)},stream:function(e){for(var t in e)if(S[t]){var n=S[t];n(e[t])}}},L=function(){var e=1;return function(t,n){return window.parent.postMessage({jsonrpc:"2.0",id:e,method:t,params:n},"*"),e++}}();b.version=E,b.ready=y,b.grabKey=l,b.releaseKey=h,b.navigate=d,b.addStreamListener=v,b.removeStreamListener=m,b.loadIframe=w,b.exit=p,b.rpc=i("rpc",c),b.send=i("send",c),b.onReadyState=i("onReadyState",y),window.addEventListener("message",s,!1),e.exports=b},function(e,t){"use strict";Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(void 0!==r&&null!==r){r=Object(r);for(var o=Object.keys(r),i=0,u=o.length;u>i;i++){var a=o[i],s=Object.getOwnPropertyDescriptor(r,a);void 0!==s&&s.enumerable&&(t[a]=r[a])}}}return t}})},function(e,t){"use strict";var n=window.sessionStorage,r=function(){if(!n)return!1;try{return n.setItem("test","1"),n.removeItem("test"),!0}catch(e){return!1}};if(r()){var o,i={stack:[window.location.href],state:0};try{o=JSON.parse(n.getItem("R7History"))}catch(u){}o=o||Object.assign({},i),o.clear=function(){Object.assign(o,i),o.save()},o.save=function(){return this.stack[this.state]!==window.location.href&&(this.stack.length=this.state+1,this.stack.push(window.location.href),this.state=this.stack.length-1),n.setItem("R7History",JSON.stringify(this))},o.go=function(e){e=e||0;var t=this.state+e;if(0===e||!o.stack[t])return!1;this.state=t,window.location.href=this.stack[t];var n;void 0!==window.CustomEvent?(n=new CustomEvent("popstate",{state:{url:this.stack[t]}}),window.dispatchEvent(n)):(n=document.createEvent("Event"),n.initEvent("popstate",!0,!0,{state:{url:this.stack[t]}}),window.dispatchEvent(n))},o.pushState=function(e,t,r){return r?(this.stack.push(r),this.state=this.stack.length-1,n.setItem("R7History",JSON.stringify(this))):void 0},o.replaceState=function(e,t,r){return r?(this.stack[this.state]=r,n.setItem("R7History",JSON.stringify(this))):void 0},window.history=function(){};var a=window.history instanceof Function;a&&(window.History=function(){},window.History.prototype={}),Object.defineProperties(window.History.prototype,{init:{value:function(e){e?o.clear():o.save()}},save:{value:function(){o.save()}},state:{get:function(){return o.state}},go:{value:function(e){o.go(e)}},back:{value:function(){o.go(-1)}},forward:{value:function(){o.go(1)}},length:{get:function(){return o.stack.length}},pushState:{value:function(e,t,n){o.pushState(e,t,n)}},replaceState:{value:function(e,t,n){o.replaceState(e,t,n)}}}),window.__history=o,a&&(window.history=new window.History),window.addEventListener("hashchange",function(){history.save()},!1),window.Backbone&&window.Backbone.history&&(window.Backbone.history.history=window.history)}else console.warn("History can not be rewritten: window.sessionStorage not available!")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),a=r(u),s="allow-scripts allow-same-origin allow-forms",c=45e3,f={display:"none",width:"1280px",height:"720px",border:"0"},d=function(e){var t=document.createElement("a");t.href=e;for(var n=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=/(?:^|&)([^&=]*)=?([^&]*)/g,o=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],i={},u=o.length,a=n.exec(t.href);u--;)i[o[u]]=a[u]||"";return i.queryKey={},i.query.replace(r,function(e,t,n){t&&(i.queryKey[t]=n)}),i},l=function(){function e(t){o(this,e);var n=t.url;if(!this.iframe){this.iframe=document.createElement("iframe"),this.iframe.sandbox=s,this.iframe.src=n;var r=Object.assign({},f,t.style);for(var i in r)this.iframe.style[i]=r[i]}this.el=t.el||document.body;var u=d(n),c=u.protocol+"://"+u.authority;this.router=new a["default"](this.iframe,c)}return i(e,[{key:"load",value:function(e,t){var n=this;e=e.bind(t),this.iframe.dataset.loaded||(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(this.onTimeoutExpired.bind(this,e),c),window.addEventListener("message",this.router,!1),this.iframe.addEventListener("load",function(){n.loaded(e)},!1),this.el.appendChild(this.iframe))}},{key:"loaded",value:function(e){var t=this;this.iframe.removeEventListener("load",this._loaded,!1),this.iframe.dataset.loaded="loaded",this.router.use("ready",function(){clearTimeout(t.timeout),t.router.unuse("ready"),t.iframe.style.display="block",e()})}},{key:"onTimeoutExpired",value:function(e){e(new Error("iframe: timeout expired"))}},{key:"unload",value:function(){this.timeout&&clearTimeout(this.timeout),this.el.removeChild(this.iframe),window.removeEventListener("message",this.router,!1),this.iframe.removeEventListener("load",this._loaded,!1),delete this.router,delete this._loaded}},{key:"use",value:function(e,t,n){this.router.use(e,t,n)}},{key:"onKeyBack",value:function(){return!!this.router.onKeyBack}},{key:"goBack",value:function(){return this.router.onKeyBack()}},{key:"onKeyExit",value:function(){return!!this.router.onKeyExit}},{key:"resume",value:function(){return this.router.resume()}}]),e}();t["default"]=l},function(e,t){"use strict";function n(e,t){function n(e){return e?"function"==typeof e.toJSON?e.toJSON():e:null}function u(e,t,n){try{m({id:e,result:t,response:t},n)}catch(r){s(e,o,r,n)}}function a(e){return e instanceof Error?e.message:e instanceof XMLHttpRequest?"Request error: "+[e.status,e.method,e.url].join(" "):"string"==typeof e?e:"unknown error"}function s(e,t,n,r){var o=a(n);return m({id:e,error:{code:t,message:o}},r),new Promise(function(e,t){t(new Error(o))})}function c(e,t){var r={},o=n(t);r[e]="undefined"==typeof o?!0:o,m(r,null)}function f(e){return{handler:function(t){return new Promise(function(n,r){R7(e,t,function(e,t){e&&r(e),n(t)})})}}}function d(e){var t=e.source+":"+e.event,n="stream:"+t;R7.addStreamListener(t,c.bind(null,n))}function l(e){var t=e.control,n=e.context;return new Promise(function(e,r){R7.navigate(t,n,function(t,n){t&&r(t),e(n)})})}function h(e){if(e){Array.isArray(e)&&(e=i(e,!1));for(var t in e){var n=c.bind(null,"key",t);"Back"===t||"Exit"===t?w["onKey"+t]=n:R7.grabKey(t,n)}}}function y(e){if(e){Array.isArray(e)||(e=Object.keys(e));for(var t=0;t<e.length;t++){var n=e[t];"Back"===n||"Exit"===n?w["onKey"+n]=null:R7.releaseKey(n)}}}var v=function(e){return e.source!==window&&e.origin===t?e:void 0},m=function(t){e.contentWindow.postMessage(t,"*")},w=function(e){if(e=v(e)){if(!p)return new Promise(function(e,t){t(new Error("router: not mounted"))});var t=e.data,i=e.source;if("number"!=typeof t.id)return s(-1,r,"invalid request",i);var a=t.method||t.action;if("string"!=typeof a)return s(t.id,r,"invalid request",i);var c=p[a];c||(c=f(a));var d,l=c.handler;try{d="function"==typeof l?l.call(c.context,t.params):l}catch(h){d=new Error(h)}return new Promise(function(e,t){d instanceof Error&&t(d),e(d)}).then(n).then(function(e){u(t.id,e,i)},function(e){s(t.id,o,e,i)})}},p={};return w.use=function(e,t,n){return p[e]={handler:t,context:n},w},w.unuse=function(e){return delete p[e],w},w.broadcast=c,w.mount=function(){p||(p={}),w.use("addStreamListener",d),w.use("navigate",l),w.use("addKeys",h),w.use("removeKeys",y),R7.addStreamListener("focus",c.bind(null,"focus")),R7.addStreamListener("blur",c.bind(null,"blur"))},w.unmount=function(){p&&(p=null)},w.onKeyBack=w.onKeyExit=null,w.mount(),w}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var r=-32600,o=-32603,i=function(e,t){return t="undefined"!=typeof t&&null!==t?t:!0,(e||[]).reduce(function(e,n){return e[n]=t,e},{})}}])});