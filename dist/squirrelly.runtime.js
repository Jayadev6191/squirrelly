!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Sqrl=e():n.Sqrl=e()}("undefined"!=typeof self?self:this,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(r,u,function(e){return n[e]}.bind(null,u));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"__express",function(){return v}),t.d(r,"H",function(){return l}),t.d(r,"Compile",function(){return a}),t.d(r,"defineFilter",function(){return p}),t.d(r,"defineHelper",function(){return s}),t.d(r,"Render",function(){return y}),t.d(r,"F",function(){return u}),t.d(r,"setDefaultFilters",function(){return f}),t.d(r,"autoEscape",function(){return d}),t.d(r,"autoEscaping",function(){return c});var u={d:function(n){return n},e:function(n){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};var t=String(n);return/[&<>"'\/]/.test(t)?t.replace(/[&<>"'\/]/g,function(n){return e[n]}):t}},o={},i={start:"",end:""};function f(n){if("clear"===n)o={};else for(var e in n)n.hasOwnProperty(e)&&(o[e]=n[e]);!function(){for(var n in i={start:"",end:""},o)o.hasOwnProperty(n)&&o[n]&&(i.start+="Sqrl.F."+n+"(",i.end+=")")}()}function c(n){d=!!n}var d=!0;var a={},l={};function p(n,e){u[n]=e}function s(n,e){l[n]=e}function y(n,e){return"function"==typeof n?n(e,r):"string"==typeof n?a(n)(e,r):void 0}var v=function(n,e,t){fs.readFile(n,function(n,r){if(n)return t(n);var u=r.toString(),o=y(a(u),e);return t(null,o)})};t.d(e,"__express",function(){return v}),t.d(e,"H",function(){return l}),t.d(e,"Compile",function(){return a}),t.d(e,"defineFilter",function(){return p}),t.d(e,"defineHelper",function(){return s}),t.d(e,"Render",function(){return y}),t.d(e,"F",function(){return u}),t.d(e,"setDefaultFilters",function(){return f}),t.d(e,"autoEscape",function(){return d}),t.d(e,"autoEscaping",function(){return c})}])});
//# sourceMappingURL=squirrelly.runtime.js.map