import{R as t,r as e,O as n,v as s,i as o,w as c,a,S as r,U as i,V as u,p as f,q as p,m as l,W as h,s as d}from"./@vue-1baf82e9.js";var y=!1;
/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let v;const b=t=>v=t,_=Symbol();function O(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,$;function g(){const s=t(!0),o=s.run((()=>e({})));let c=[],a=[];const r=n({install(t){b(r),r._a=t,t.provide(_,r),t.config.globalProperties.$pinia=r,a.forEach((t=>c.push(t))),a=[]},use(t){return this._a||y?c.push(t):a.push(t),this},_p:c,_a:null,_e:s,_s:new Map,state:o});return r}($=j||(j={})).direct="direct",$.patchObject="patch object",$.patchFunction="patch function";const m=()=>{};function S(t,e,n,s=m){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&f()&&p(o),o}function P(t,...e){t.slice().forEach((t=>{t(...e)}))}function w(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];O(o)&&O(s)&&t.hasOwnProperty(n)&&!r(s)&&!i(s)?t[n]=w(o,s):t[n]=s}return t}const E=Symbol();const{assign:I}=Object;function M(s,o,f={},p,h,d){let y;const v=I({actions:{}},f),_={deep:!0};let $,g,M,x=n([]),A=n([]);const F=p.state.value[s];let k;function q(t){let e;$=g=!1,"function"==typeof t?(t(p.state.value[s]),e={type:j.patchFunction,storeId:s,events:M}):(w(p.state.value[s],t),e={type:j.patchObject,payload:t,storeId:s,events:M});const n=k=Symbol();l().then((()=>{k===n&&($=!0)})),g=!0,P(x,e,p.state.value[s])}d||F||(p.state.value[s]={}),e({});const J=d?function(){const{state:t}=f,e=t?t():{};this.$patch((t=>{I(t,e)}))}:m;function N(t,e){return function(){b(p);const n=Array.from(arguments),o=[],c=[];let a;P(A,{args:n,name:t,store:U,after:function(t){o.push(t)},onError:function(t){c.push(t)}});try{a=e.apply(this&&this.$id===s?this:U,n)}catch(r){throw P(c,r),r}return a instanceof Promise?a.then((t=>(P(o,t),t))).catch((t=>(P(c,t),Promise.reject(t)))):(P(o,a),a)}}const R={_p:p,$id:s,$onAction:S.bind(null,A),$patch:q,$reset:J,$subscribe(t,e={}){const n=S(x,t,e.detached,(()=>o())),o=y.run((()=>c((()=>p.state.value[s]),(n=>{("sync"===e.flush?g:$)&&t({storeId:s,type:j.direct,events:M},n)}),I({},_,e))));return n},$dispose:function(){y.stop(),x=[],A=[],p._s.delete(s)}},U=a(R);p._s.set(s,U);const V=p._e.run((()=>(y=t(),y.run((()=>o())))));for(const t in V){const e=V[t];if(r(e)&&(!r(z=e)||!z.effect)||i(e))d||(!F||O(W=e)&&W.hasOwnProperty(E)||(r(e)?e.value=F[t]:w(e,F[t])),p.state.value[s][t]=e);else if("function"==typeof e){const n=N(t,e);V[t]=n,v.actions[t]=e}}var W,z;return I(U,V),I(u(U),V),Object.defineProperty(U,"$state",{get:()=>p.state.value[s],set:t=>{q((e=>{I(e,t)}))}}),p._p.forEach((t=>{I(U,y.run((()=>t({store:U,app:p._a,pinia:p,options:v}))))})),F&&d&&f.hydrate&&f.hydrate(U.$state,F),$=!0,g=!0,U}function x(t,e,c){let a,r;const i="function"==typeof e;function u(t,c){const u=s();(t=t||u&&o(_,null))&&b(t),(t=v)._s.has(a)||(i?M(a,e,r,t):function(t,e,s,o){const{state:c,actions:a,getters:r}=e,i=s.state.value[t];let u;u=M(t,(function(){i||(s.state.value[t]=c?c():{});const e=h(s.state.value[t]);return I(e,a,Object.keys(r||{}).reduce(((e,o)=>(e[o]=n(d((()=>{b(s);const e=s._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,s,0,!0)}(a,r,t));return t._s.get(a)}return"string"==typeof t?(a=t,r=i?c:e):(r=t,a=t.id),u.$id=a,u}export{g as c,x as d};
