!function(t){function n(n){for(var r,c,u=n[0],a=n[1],s=n[2],l=0,p=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(f&&f(n);p.length;)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,u=1;u<e.length;u++){var a=e[u];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},o={2:0},i=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="./";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var f=a;i.push([57,1,0]),e()}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(24)("wks"),o=e(25),i=e(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(6),o=e(14);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(2),o=e(37),i=e(22),c=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(62),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(0),o=e(13),i=e(5),c=e(12),u=e(40),a=function(t,n,e){var s,f,l,p,h=t&a.F,v=t&a.G,d=t&a.S,y=t&a.P,g=t&a.B,x=v?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,m=v?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});for(s in v&&(e=n),e)l=((f=!h&&x&&void 0!==x[s])?x:e)[s],p=g&&f?u(l,r):y&&"function"==typeof l?u(Function.call,l):l,x&&c(x,s,l,t&a.U),m[s]!=l&&i(m,s,p),y&&b[s]!=l&&(b[s]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(0),o=e(5),i=e(8),c=e(25)("src"),u=e(64),a=(""+u).split("toString");e(13).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,c)||o(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){t.exports=!e(51)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){},function(t,n,e){},,function(t,n,e){t.exports=e(93)},,function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){for(var r=e(59),o=e(27),i=e(12),c=e(0),u=e(5),a=e(26),s=e(1),f=s("iterator"),l=s("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(h),d=0;d<v.length;d++){var y,g=v[d],x=h[g],m=c[g],b=m&&m.prototype;if(b&&(b[f]||u(b,f,p),b[l]||u(b,l,g),a[g]=p,x))for(y in r)b[y]||i(b,y,r[y],!0)}},function(t,n,e){var r=e(13),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(39)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports={}},function(t,n,e){var r=e(43),o=e(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(24)("keys"),o=e(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(74),o=e(14),i=e(9),c=e(22),u=e(8),a=e(37),s=Object.getOwnPropertyDescriptor;n.f=e(3)?s:function(t,n){if(t=i(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(u(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r,o,i=e(90),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(a=function(t){var n,e,r,o,a=this;return f&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(n=a.lastIndex),r=c.call(a,t),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),f&&r&&r.length>1&&u.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},,function(t,n,e){t.exports=e.p+"media/KBHD.eac0c14c.mov"},function(t,n,e){var r=e(6).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(3)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,n,e){t.exports=!e(3)&&!e(4)((function(){return 7!=Object.defineProperty(e(38)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(7),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(41);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(2),o=e(66),i=e(30),c=e(29)("IE_PROTO"),u=function(){},a=function(){var t,n=e(38)("iframe"),r=i.length;for(n.style.display="none",e(69).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(8),o=e(9),i=e(67)(!1),c=e(29)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)e!=c&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(6).f,o=e(8),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(10);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(43),o=e(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(99),o=e(100),i=e(102),c=Object.defineProperty;n.f=e(16)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,,,,,function(t,n,e){t.exports=e(107)},function(t,n,e){t.exports=e.p+"img/logo.4bcba01c.png"},function(t,n,e){"use strict";var r=e(60),o=e(61),i=e(26),c=e(9);t.exports=e(63)(Array,"Array",(function(t,n){this._t=c(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(1)("unscopables"),o=Array.prototype;null==o[r]&&e(5)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(39),o=e(11),i=e(12),c=e(5),u=e(26),a=e(65),s=e(45),f=e(70),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,y,g){a(e,n,v);var x,m,b,_=function(t){if(!p&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",O="values"==d,S=!1,E=t.prototype,j=E[l]||E["@@iterator"]||d&&E[d],C=j||_(d),P=d?O?_("entries"):C:void 0,I="Array"==n&&E.entries||j;if(I&&(b=f(I.call(new t)))!==Object.prototype&&b.next&&(s(b,w,!0),r||"function"==typeof b[l]||c(b,l,h)),O&&j&&"values"!==j.name&&(S=!0,C=function(){return j.call(this)}),r&&!g||!p&&!S&&E[l]||c(E,l,C),u[n]=C,u[w]=h,d)if(x={values:O?C:_("values"),keys:y?C:_("keys"),entries:P},g)for(m in x)m in E||i(E,m,x[m]);else o(o.P+o.F*(p||S),n,x);return x}},function(t,n,e){t.exports=e(24)("native-function-to-string",Function.toString)},function(t,n,e){"use strict";var r=e(42),o=e(14),i=e(45),c={};e(5)(c,e(1)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(6),o=e(2),i=e(27);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,a=0;u>a;)r.f(t,e=c[a++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(44),i=e(68);t.exports=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(8),o=e(46),i=e(29)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){"use strict";var r=e(0),o=e(8),i=e(15),c=e(72),u=e(22),a=e(4),s=e(47).f,f=e(31).f,l=e(6).f,p=e(75).trim,h=r.Number,v=h,d=h.prototype,y="Number"==i(e(42)(d)),g="trim"in String.prototype,x=function(t){var n=u(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,i=(n=g?n.trim():p(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var c,a=n.slice(2),s=0,f=a.length;s<f;s++)if((c=a.charCodeAt(s))<48||c>o)return NaN;return parseInt(a,r)}}return+n};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof h&&(y?a((function(){d.valueOf.call(e)})):"Number"!=i(e))?c(new v(x(n)),e,h):x(n)};for(var m,b=e(3)?s(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;b.length>_;_++)o(v,m=b[_])&&!o(h,m)&&l(h,m,f(v,m));h.prototype=d,d.constructor=h,e(12)(r,"Number",h)}},function(t,n,e){var r=e(7),o=e(73).set;t.exports=function(t,n,e){var i,c=n.constructor;return c!==e&&"function"==typeof c&&(i=c.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r=e(7),o=e(2),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(40)(Function.call,e(31).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(11),o=e(10),i=e(4),c=e(76),u="["+c+"]",a=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),f=function(t,n,e){var o={},u=i((function(){return!!c[t]()||"​"!="​"[t]()})),a=o[t]=u?n(l):c[t];e&&(o[e]=a),r(r.P+r.F*u,"String",o)},l=f.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(s,"")),t};t.exports=f},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,e){var r=e(11),o=e(78),i=e(9),c=e(31),u=e(80);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=i(t),a=c.f,s=o(r),f={},l=0;s.length>l;)void 0!==(e=a(r,n=s[l++]))&&u(f,n,e);return f}})},function(t,n,e){var r=e(47),o=e(79),i=e(2),c=e(0).Reflect;t.exports=c&&c.ownKeys||function(t){var n=r.f(i(t)),e=o.f;return e?n.concat(e(t)):n}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";var r=e(6),o=e(14);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){var r=e(46),o=e(27);e(82)("keys",(function(){return function(t){return o(r(t))}}))},function(t,n,e){var r=e(11),o=e(13),i=e(4);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],c={};c[t]=n(e),r(r.S+r.F*i((function(){e(1)})),"Object",c)}},function(t,n,e){"use strict";var r=e(84),o=e(2),i=e(85),c=e(86),u=e(44),a=e(88),s=e(32),f=e(4),l=Math.min,p=[].push,h=!f((function(){RegExp(4294967295,"y")}));e(91)("split",2,(function(t,n,e,f){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(o,t,n);for(var i,c,u,a=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,h=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,f+"g");(i=s.call(v,o))&&!((c=v.lastIndex)>l&&(a.push(o.slice(l,i.index)),i.length>1&&i.index<o.length&&p.apply(a,i.slice(1)),u=i[0].length,l=c,a.length>=h));)v.lastIndex===i.index&&v.lastIndex++;return l===o.length?!u&&v.test("")||a.push(""):a.push(o.slice(l)),a.length>h?a.slice(0,h):a}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var o=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,o,r):v.call(String(o),e,r)},function(t,n){var r=f(v,t,this,n,v!==e);if(r.done)return r.value;var s=o(t),p=String(this),d=i(s,RegExp),y=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(h?"y":"g"),x=new d(h?s:"^(?:"+s.source+")",g),m=void 0===n?4294967295:n>>>0;if(0===m)return[];if(0===p.length)return null===a(x,p)?[p]:[];for(var b=0,_=0,w=[];_<p.length;){x.lastIndex=h?_:0;var O,S=a(x,h?p:p.slice(_));if(null===S||(O=l(u(x.lastIndex+(h?0:_)),p.length))===b)_=c(p,_,y);else{if(w.push(p.slice(b,_)),w.length===m)return w;for(var E=1;E<=S.length-1;E++)if(w.push(S[E]),w.length===m)return w;_=b=O}}return w.push(p.slice(b)),w}]}))},function(t,n,e){var r=e(7),o=e(15),i=e(1)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){var r=e(2),o=e(41),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){"use strict";var r=e(87)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(28),o=e(10);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(89),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){var r=e(15),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){"use strict";var r=e(2);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";e(92);var r=e(12),o=e(5),i=e(4),c=e(10),u=e(1),a=e(32),s=u("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=u(t),h=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),v=h?!i((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[p](""),!n})):void 0;if(!h||!v||"replace"===t&&!f||"split"===t&&!l){var d=/./[p],y=e(c,p,""[t],(function(t,n,e,r,o){return n.exec===a?h&&!o?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),g=y[0],x=y[1];r(String.prototype,t,g),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},function(t,n,e){"use strict";var r=e(32);e(11)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){e(94);var r=e(49).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(95);r(r.S+r.F*!e(16),"Object",{defineProperty:e(50).f})},function(t,n,e){var r=e(48),o=e(49),i=e(96),c=e(98),u=e(104),a=function(t,n,e){var s,f,l,p=t&a.F,h=t&a.G,v=t&a.S,d=t&a.P,y=t&a.B,g=t&a.W,x=h?o:o[n]||(o[n]={}),m=x.prototype,b=h?r:v?r[n]:(r[n]||{}).prototype;for(s in h&&(e=n),e)(f=!p&&b&&void 0!==b[s])&&u(x,s)||(l=f?b[s]:e[s],x[s]=h&&"function"!=typeof b[s]?e[s]:y&&f?i(l,r):g&&b[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((x.virtual||(x.virtual={}))[s]=l,t&a.R&&m&&!m[s]&&c(m,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(97);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(50),o=e(103);t.exports=e(16)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(33);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(16)&&!e(51)((function(){return 7!=Object.defineProperty(e(101)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(33),o=e(48).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(33);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){"use strict";var r=e(17);e.n(r).a},function(t,n,e){"use strict";var r=e(18);e.n(r).a},function(t,n,e){"use strict";e.r(n);var r=e(19),o=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"grid-cell"},[n("video",{attrs:{src:e(35),controls:"controls",crossorigin:""}})])}],i=e(34),c=(e(36),e(23),e(71),e(77),e(81),e(83),e(20)),u=e.n(c);function a(t,n,e){return n in t?u()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),u()(t,r.key,r)}}function l(t,n,e){return n&&f(t.prototype,n),e&&f(t,e),t}function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(e,!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v=function(t,n,e){return.299*t+.578*n+.114*e},d=function(t){var n=["@","W","#","$","O","E","X","C","[","(","/","?","=","^","~","_",".","`"];return n[Math.floor(n.length*t/255)]},y=function(){function t(n,e,r){s(this,t),this.video=n,this.options=h({charppi:1,color:"#000000"},r),this.canvas=e,this.ctx=e.getContext("2d"),this.frameLoader=document.createElement("canvas"),this.frameLoaderCtx=this.frameLoader.getContext("2d"),this.frameLoader.width=this.canvas.width,this.frameLoader.height=this.canvas.height}return l(t,[{key:"changecharppi",value:function(t){var n={charppi:t};this.changeOptions(n)}},{key:"changeColor",value:function(t){var n={color:t};this.changeOptions(n)}},{key:"changeOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=h({},this.options,{},t)}},{key:"drawChars",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=this.options.color;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.font="".concat(e,"px Courier"),this.ctx.fillStyle=r,t.split("\n").forEach((function(t,r){n.ctx.fillText(t,0,r*e)}))}},{key:"getFrameFromVideo",value:function(){this.frameLoaderCtx.drawImage(this.video,0,0,this.frameLoader.width,this.frameLoader.height)}},{key:"frameToChar",value:function(){for(var t=this.frameLoaderCtx.getImageData(0,0,this.frameLoader.width,this.frameLoader.height),n=t.data,e=t.width,r=t.height,o="",i=this.options.charppi,c=10/i,u=6/i,a=0;a<r;a+=c){for(var s=0;s<e;s+=u){var f=4*(s+e*a),l=n[f+0],p=n[f+1],h=n[f+2],y=v(l,p,h);o+="".concat(d(y))}o+="\n"}return o}},{key:"update",value:function(){this.getFrameFromVideo();var t=this.frameToChar(),n=this.options.charppi;this.drawChars(t,10/n)}}]),t}(),g=function(){function t(n,e,r){s(this,t),this.handlerCatch=n.addEventListener(e,r,!1)}return l(t,[{key:"destroy",value:function(){removeEventListener(this.handlerCatch)}}]),t}(),x={name:"Video2ASCIIArt",props:{charppi:{type:[Number,String],default:1},color:{type:String,default:"#000000"}},data:function(){return{canvasW:0,canvasH:0,canvas:null,video:null,animationHook:null,processor:null,handlers:[]}},mounted:function(){var t=this;this.canvas=this.$refs.canvasDOMRef,this.video=this.$slots.default[0].elm,this.setCanvasRect(),this.handlers.push(new g(this.video,"canplay",(function(){t.processor=t.processor||new y(t.video,t.canvas,{charppi:+t.charppi,color:t.color})}))),this.handlers.push(new g(this.video,"play",(function(){t.play()}))),this.handlers.push(new g(this.video,"pause",(function(){t.pause()}))),this.handlers.push(new g(this.video,"ended",(function(){t.end()})))},destroyed:function(){this.handlers.forEach((function(t){t.destroy()}))},watch:{charppi:function(t){this.updatecharppi(t)},color:function(t){this.updateColor(t)}},methods:{loop:function(){this.animationHook=requestAnimationFrame(this.loop),this.processor.update()},setCanvasRect:function(){var t=this;this.video.addEventListener("canplay",(function(){var n=t.video.getBoundingClientRect(),e=n.width,r=n.height;t.canvasW=e,t.canvasH=r}))},updatecharppi:function(t){this.processor.changecharppi(t)},updateColor:function(t){this.processor.changeColor(t)},play:function(){requestAnimationFrame(this.loop)},pause:function(){this.end()},end:function(){this.animationHook&&cancelAnimationFrame(this.animationHook)}}};e(105);function m(t,n,e,r,o,i,c,u){var a,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,n){return a.call(n),f(t,n)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:s}}var b=m(x,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"asciiart__main"},[n("div",{staticClass:"asciiart__video"},[this._t("default")],2),this._v(" "),n("div",{staticClass:"asciiart__canvas"},[n("canvas",{ref:"canvasDOMRef",attrs:{width:this.canvasW,height:this.canvasH}})])])}),[],!1,null,"747f1d7e",null).exports;b.install=function(t){t.component(b.name,b)};var _,w=b,O=[w];"undefined"!=typeof window&&window.Vue&&(_=window.Vue,O.forEach((function(t){_.component(t.name,t)})));var S={components:{Video2ASCIIArt:w},name:"app",data:function(){return{charppi:1,color:"rgb(120,120,120)",isDarkMode:!0}},mounted:function(){this.initDatGui()},methods:{initDatGui:function(){var t=new i.GUI,n=this.$data;t.add(n,"isDarkMode"),t.add(n,"charppi",{"@x0.5":.25,"@x1":.5,"@x2":1,"@x4":2}),t.addColor(n,"color")}}},E=(e(106),m(S,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{class:{"app--dark-mode":t.isDarkMode},attrs:{id:"app"}},[r("h1",{staticClass:"app__title",class:{"app__title--dark-mode":t.isDarkMode}},[r("img",{staticClass:"app__logo",class:{"app__logo--dark-mode":t.isDarkMode},attrs:{src:e(58),alt:"logo"}}),t._v(" "),r("span",[t._v("Video2ASCIIArt DEMO")])]),t._v(" "),r("div",{staticClass:"app__main"},[t._m(0),t._v(" "),r("div",{staticClass:"grid-cell"},[r("Video2ASCIIArt",{attrs:{charppi:t.charppi,color:t.color}},[r("video",{attrs:{src:e(35),controls:"controls",crossorigin:""}})])],1)])])}),o,!1,null,null,null).exports);r.default.config.productionTip=!1,new r.default({render:function(t){return t(E)}}).$mount("#app")}]);