import{r as t}from"./crypto-js-fe439614.js";var e="function"==typeof Map&&Map.prototype,r=Object.getOwnPropertyDescriptor&&e?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,n=e&&r&&"function"==typeof r.get?r.get:null,o=e&&Map.prototype.forEach,i="function"==typeof Set&&Set.prototype,u=Object.getOwnPropertyDescriptor&&i?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,c=i&&u&&"function"==typeof u.get?u.get:null,l=i&&Set.prototype.forEach,f="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,a="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,p="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,y=Boolean.prototype.valueOf,g=Object.prototype.toString,b=Function.prototype.toString,s=String.prototype.match,S=String.prototype.slice,h=String.prototype.replace,m=String.prototype.toUpperCase,v=String.prototype.toLowerCase,j=RegExp.prototype.test,d=Array.prototype.concat,O=Array.prototype.join,w=Array.prototype.slice,x=Math.floor,k="function"==typeof BigInt?BigInt.prototype.valueOf:null,E=Object.getOwnPropertySymbols,M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,W="function"==typeof Symbol&&"object"==typeof Symbol.iterator,_="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===W||"symbol")?Symbol.toStringTag:null,L=Object.prototype.propertyIsEnumerable,$=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function A(t,e){if(t===1/0||t===-1/0||t!=t||t&&t>-1e3&&t<1e3||j.call(/e/,e))return e;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof t){var n=t<0?-x(-t):x(t);if(n!==t){var o=String(n),i=S.call(e,o.length+1);return h.call(o,r,"$&_")+"."+h.call(h.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return h.call(e,r,"$&_")}var T=t,q=T.custom,I=C(q)?q:null,N=function t(e,r,i,u){var g=r||{};if(F(g,"quoteStyle")&&"single"!==g.quoteStyle&&"double"!==g.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(F(g,"maxStringLength")&&("number"==typeof g.maxStringLength?g.maxStringLength<0&&g.maxStringLength!==1/0:null!==g.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var m=!F(g,"customInspect")||g.customInspect;if("boolean"!=typeof m&&"symbol"!==m)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(F(g,"indent")&&null!==g.indent&&"\t"!==g.indent&&!(parseInt(g.indent,10)===g.indent&&g.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(F(g,"numericSeparator")&&"boolean"!=typeof g.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var j=g.numericSeparator;if(void 0===e)return"undefined";if(null===e)return"null";if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e)return G(e,g);if("number"==typeof e){if(0===e)return 1/0/e>0?"0":"-0";var x=String(e);return j?A(e,x):x}if("bigint"==typeof e){var E=String(e)+"n";return j?A(e,E):E}var q=void 0===g.depth?5:g.depth;if(void 0===i&&(i=0),i>=q&&q>0&&"object"==typeof e)return D(e)?"[Array]":"[Object]";var N=function(t,e){var r;if("\t"===t.indent)r="\t";else{if(!("number"==typeof t.indent&&t.indent>0))return null;r=O.call(Array(t.indent+1)," ")}return{base:r,prev:O.call(Array(e+1),r)}}(g,i);if(void 0===u)u=[];else if(U(u,e)>=0)return"[Circular]";function z(e,r,n){if(r&&(u=w.call(u)).push(r),n){var o={depth:g.depth};return F(g,"quoteStyle")&&(o.quoteStyle=g.quoteStyle),t(e,o,i+1,u)}return t(e,g,i+1,u)}if("function"==typeof e&&!B(e)){var J=function(t){if(t.name)return t.name;var e=s.call(b.call(t),/^function\s*([\w$]+)/);if(e)return e[1];return null}(e),Z=Y(e,z);return"[Function"+(J?": "+J:" (anonymous)")+"]"+(Z.length>0?" { "+O.call(Z,", ")+" }":"")}if(C(e)){var tt=W?h.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):M.call(e);return"object"!=typeof e||W?tt:K(tt)}if(function(t){if(!t||"object"!=typeof t)return!1;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)return!0;return"string"==typeof t.nodeName&&"function"==typeof t.getAttribute}(e)){for(var et="<"+v.call(String(e.nodeName)),rt=e.attributes||[],nt=0;nt<rt.length;nt++)et+=" "+rt[nt].name+"="+P(R(rt[nt].value),"double",g);return et+=">",e.childNodes&&e.childNodes.length&&(et+="..."),et+="</"+v.call(String(e.nodeName))+">"}if(D(e)){if(0===e.length)return"[]";var ot=Y(e,z);return N&&!function(t){for(var e=0;e<t.length;e++)if(U(t[e],"\n")>=0)return!1;return!0}(ot)?"["+X(ot,N)+"]":"[ "+O.call(ot,", ")+" ]"}if(function(t){return!("[object Error]"!==H(t)||_&&"object"==typeof t&&_ in t)}(e)){var it=Y(e,z);return"cause"in Error.prototype||!("cause"in e)||L.call(e,"cause")?0===it.length?"["+String(e)+"]":"{ ["+String(e)+"] "+O.call(it,", ")+" }":"{ ["+String(e)+"] "+O.call(d.call("[cause]: "+z(e.cause),it),", ")+" }"}if("object"==typeof e&&m){if(I&&"function"==typeof e[I]&&T)return T(e,{depth:q-i});if("symbol"!==m&&"function"==typeof e.inspect)return e.inspect()}if(function(t){if(!n||!t||"object"!=typeof t)return!1;try{n.call(t);try{c.call(t)}catch(et){return!0}return t instanceof Map}catch(e){}return!1}(e)){var ut=[];return o&&o.call(e,(function(t,r){ut.push(z(r,e,!0)+" => "+z(t,e))})),V("Map",n.call(e),ut,N)}if(function(t){if(!c||!t||"object"!=typeof t)return!1;try{c.call(t);try{n.call(t)}catch(e){return!0}return t instanceof Set}catch(r){}return!1}(e)){var ct=[];return l&&l.call(e,(function(t){ct.push(z(t,e))})),V("Set",c.call(e),ct,N)}if(function(t){if(!f||!t||"object"!=typeof t)return!1;try{f.call(t,f);try{a.call(t,a)}catch(et){return!0}return t instanceof WeakMap}catch(e){}return!1}(e))return Q("WeakMap");if(function(t){if(!a||!t||"object"!=typeof t)return!1;try{a.call(t,a);try{f.call(t,f)}catch(et){return!0}return t instanceof WeakSet}catch(e){}return!1}(e))return Q("WeakSet");if(function(t){if(!p||!t||"object"!=typeof t)return!1;try{return p.call(t),!0}catch(e){}return!1}(e))return Q("WeakRef");if(function(t){return!("[object Number]"!==H(t)||_&&"object"==typeof t&&_ in t)}(e))return K(z(Number(e)));if(function(t){if(!t||"object"!=typeof t||!k)return!1;try{return k.call(t),!0}catch(e){}return!1}(e))return K(z(k.call(e)));if(function(t){return!("[object Boolean]"!==H(t)||_&&"object"==typeof t&&_ in t)}(e))return K(y.call(e));if(function(t){return!("[object String]"!==H(t)||_&&"object"==typeof t&&_ in t)}(e))return K(z(String(e)));if(!function(t){return!("[object Date]"!==H(t)||_&&"object"==typeof t&&_ in t)}(e)&&!B(e)){var lt=Y(e,z),ft=$?$(e)===Object.prototype:e instanceof Object||e.constructor===Object,at=e instanceof Object?"":"null prototype",pt=!ft&&_&&Object(e)===e&&_ in e?S.call(H(e),8,-1):at?"Object":"",yt=(ft||"function"!=typeof e.constructor?"":e.constructor.name?e.constructor.name+" ":"")+(pt||at?"["+O.call(d.call([],pt||[],at||[]),": ")+"] ":"");return 0===lt.length?yt+"{}":N?yt+"{"+X(lt,N)+"}":yt+"{ "+O.call(lt,", ")+" }"}return String(e)};function P(t,e,r){var n="double"===(r.quoteStyle||e)?'"':"'";return n+t+n}function R(t){return h.call(String(t),/"/g,"&quot;")}function D(t){return!("[object Array]"!==H(t)||_&&"object"==typeof t&&_ in t)}function B(t){return!("[object RegExp]"!==H(t)||_&&"object"==typeof t&&_ in t)}function C(t){if(W)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!M)return!1;try{return M.call(t),!0}catch(e){}return!1}var z=Object.prototype.hasOwnProperty||function(t){return t in this};function F(t,e){return z.call(t,e)}function H(t){return g.call(t)}function U(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function G(t,e){if(t.length>e.maxStringLength){var r=t.length-e.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return G(S.call(t,0,e.maxStringLength),e)+n}return P(h.call(h.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,J),"single",e)}function J(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+m.call(e.toString(16))}function K(t){return"Object("+t+")"}function Q(t){return t+" { ? }"}function V(t,e,r,n){return t+" ("+e+") {"+(n?X(r,n):O.call(r,", "))+"}"}function X(t,e){if(0===t.length)return"";var r="\n"+e.prev+e.base;return r+O.call(t,","+r)+"\n"+e.prev}function Y(t,e){var r=D(t),n=[];if(r){n.length=t.length;for(var o=0;o<t.length;o++)n[o]=F(t,o)?e(t[o],t):""}var i,u="function"==typeof E?E(t):[];if(W){i={};for(var c=0;c<u.length;c++)i["$"+u[c]]=u[c]}for(var l in t)F(t,l)&&(r&&String(Number(l))===l&&l<t.length||W&&i["$"+l]instanceof Symbol||(j.call(/[^\w$]/,l)?n.push(e(l,t)+": "+e(t[l],t)):n.push(l+": "+e(t[l],t))));if("function"==typeof E)for(var f=0;f<u.length;f++)L.call(t,u[f])&&n.push("["+e(u[f])+"]: "+e(t[u[f]],t));return n}export{N as o};
