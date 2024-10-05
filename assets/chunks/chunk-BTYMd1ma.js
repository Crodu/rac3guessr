function _(e){return Array.from(new Set(e))}const V="0.4.197",b={projectName:"Vike",projectVersion:V},L=`_${b.projectName.toLowerCase()}`;function m(e,n){const t=B();return t[e]=t[e]||n}function B(){return globalThis[L]=globalThis[L]||{}}const l=new Proxy({},{get:(e,n)=>t=>n==="code"?`\`${t}\``:n==="string"?`'${t}'`:t}),u=m("assertSingleInstance.ts",{instances:[],alreadyLogged:new Set}),O="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",P="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";function R(){{const e=_(u.instances);H(e.length<=1,`vike@${l.bold(e[0])} and vike@${l.bold(e[1])} loaded but only one version should be loaded`)}u.checkSingleInstance&&u.instances.length>1&&T(!1,P,{onlyOnce:!0,showStackTrace:!0})}function X(e){T(u.isClientRouting!==!1,O,{onlyOnce:!0,showStackTrace:!0}),T(u.isClientRouting===void 0,P,{onlyOnce:!0,showStackTrace:!0}),u.isClientRouting=!0,u.checkSingleInstance=!0,R()}function A(){u.instances.push(b.projectVersion),R()}function H(e,n){if(e)return;const t=`[vike][Wrong Usage] ${n}`;throw new Error(t)}function T(e,n,{onlyOnce:t,showStackTrace:o}){if(e)return;const r=`[vike][Warning] ${n}`;if(t){const{alreadyLogged:i}=u,c=t===!0?r:t;if(i.has(c))return;i.add(c)}console.warn(o?new Error(r):r)}function U(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function g(e,n){const t=new Error(e);return U()&&(t.stack=G(t.stack,n)),t}function G(e,n){if(!e)return e;const t=z(e);let o=0;return t.filter(i=>i.includes(" (internal/")||i.includes(" (node:internal")?!1:o<n&&J(i)?(o++,!1):!0).join(`
`)}function J(e){return e.startsWith("    at ")}function z(e){return e.split(/\r?\n/)}function D(e){return typeof e=="object"&&e!==null}const s=m("utils/assert.ts",{alreadyLogged:new Set,logger(e,n){n==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});A();const F="[vike]",q=`[vike@${b.projectVersion}]`,p=2;function Z(e,n){var c;if(e)return;const t=(()=>{if(!n)return null;const h=typeof n=="string"?n:JSON.stringify(n);return l.dim(`Debug info (for Vike maintainers; you can ignore this): ${h}`)})();let r=[`You stumbled upon a Vike bug. Go to ${l.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,t].filter(Boolean).join(" ");r=f(r),r=k(r,"Bug"),r=d(r,!0);const i=g(r,p);throw(c=s.onBeforeLog)==null||c.call(s),i}function M(e,n,{showStackTrace:t}={}){var r;if(e)return;t=t||s.alwaysShowStackTrace,n=f(n),n=k(n,"Wrong Usage"),n=d(n);const o=g(n,p);throw t&&s.showStackTraceList.add(o),(r=s.onBeforeLog)==null||r.call(s),o}function K(e){return e=f(e),e=k(e,"Error"),e=d(e),g(e,p)}function Y(e,n,{onlyOnce:t,showStackTrace:o}){var r;if(!e){if(o=o||s.alwaysShowStackTrace,n=f(n),n=k(n,"Warning"),n=d(n),t){const{alreadyLogged:i}=s,c=t===!0?n:t;if(i.has(c))return;i.add(c)}if((r=s.onBeforeLog)==null||r.call(s),o){const i=g(n,p);s.showStackTraceList.add(i),s.logger(i,"warn")}else s.logger(n,"warn")}}function ee(e,n,{onlyOnce:t}){var o;if(n=f(n),n=d(n),t){const{alreadyLogged:r}=s,i=n;if(r.has(i))return;r.add(i)}(o=s.onBeforeLog)==null||o.call(s),s.logger(n,"info")}function k(e,n){let t=`[${n}]`;const o=n==="Warning"?"yellow":"red";return t=l.bold(l[o](t)),`${t}${e}`}function f(e){return e.startsWith("[")?e:` ${e}`}function d(e,n=!1){return`${n?q:F}${e}`}function E(e){const n=e/1e3;if(n<120){const t=W(n);return`${t} second${C(t)}`}{const t=n/60,o=W(t);return`${o} minute${C(o)}`}}function W(e){let n=e.toFixed(1);return n.endsWith(".0")&&(n=n.slice(0,-2)),n}function C(e){return e==="1"?"":"s"}const v=m("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function ne(e,n,t){const{hookName:o,hookFilePath:r,hookTimeout:{error:i,warning:c}}=n;let h,w;const I=new Promise((a,N)=>{h=y=>{S(),a(y)},w=y=>{S(),N(y)}}),S=()=>{j&&clearTimeout(j),$&&clearTimeout($)},j=x(c)&&setTimeout(()=>{Y(!1,`The ${o}() hook defined by ${r} is slow: it's taking more than ${E(c)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},c),$=x(i)&&setTimeout(()=>{const a=K(`The ${o}() hook defined by ${r} timed out: it didn't finish after ${E(i)} (https://vike.dev/hooksTimeout)`);w(a)},i);return(async()=>{try{Q(t);const a=await e();h(a)}catch(a){D(a)&&v.userHookErrors.set(a,{hookName:o,hookFilePath:r}),w(a)}})(),I}function x(e){return!!e&&e!==1/0}function Q(e){v.pageContext=e,Promise.resolve().then(()=>{v.pageContext=null})}export{Z as a,X as b,M as c,l as d,Y as e,ne as f,m as g,K as h,D as i,ee as j,Q as p,_ as u};
