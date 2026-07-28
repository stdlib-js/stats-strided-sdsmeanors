"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=u(function(k,q){
var l=require('@stdlib/number-float64-base-to-float32/dist');function x(e,r,a,v){var s,i,t;if(e<=0)return NaN;if(e===1||a===0)return r[v];for(i=v,s=0,t=0;t<e;t++)s+=r[i],i+=a;return l(s/e)}q.exports=x
});var m=u(function(w,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),R=n();function _(e,r,a){return R(e,r,a,j(e,a))}d.exports=_
});var p=u(function(z,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=m(),F=n();E(f,"ndarray",F);c.exports=f
});var O=require("path").join,T=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=p(),o,y=T(O(__dirname,"./native.js"));b(y)?o=g:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
