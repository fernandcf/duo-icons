(function(l,n){typeof exports=="object"&&typeof module!="undefined"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(l=typeof globalThis!="undefined"?globalThis:l||self,n(l.duoIcons={}))})(this,function(l){"use strict";const n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24"},u=(e,a="")=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.innerHTML=a;let r=Object.assign(n,e);return Object.keys(r).forEach(o=>{t.setAttribute(o,r[o])}),t},y=e=>{let a={};return Array.from(e.attributes).forEach(({name:t,value:r})=>{a[t]=r}),a},i=(e,a=[])=>{let t=[];return typeof e=="string"&&(t=e.split(" ")),e.class&&typeof e.class=="string"&&(t=e.class.split(" ")),t.push(...a),t.filter((r,o,c)=>c.indexOf(r)==o).join(" ")},h=(e,a={},t={})=>{var p;const r=e.getAttribute("data-duoicon");if(!r)return;const o=r.replace("-","_");if(!a||!a.hasOwnProperty(o)||!a[o])return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const c=a[o],s=y(e),m=i(s,["duo-icon",`duo-icon-${r}`]);s.class=i(m,t.hasOwnProperty("class")?t.class:[]);const b=Object.assign(t,s),g=u(b,c);return(p=e.parentNode)==null?void 0:p.replaceChild(g,e)},d={add_circle:'<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="secondary-layer" style="opacity:.3"></path><path fill="currentColor" d="M12 7a1 1 0 0 0-.993.883L11 8v3H8a1 1 0 0 0-.117 1.993L8 13h3v3a1 1 0 0 0 1.993.117L13 16v-3h3a1 1 0 0 0 .117-1.993L16 11h-3V8a1 1 0 0 0-1-1Z" class="primary-layer"></path>',airplay:'<path fill="currentColor" d="M11.514 16.903a.6.6 0 0 1 .976 0l2.766 3.868a.6.6 0 0 1-.488.949H9.237a.6.6 0 0 1-.488-.949l2.765-3.868Z" class="primary-layer"></path><path fill="currentColor" d="M20 4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3.71l-3.151-4.407a1.4 1.4 0 0 0-2.278 0L7.711 19H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16Z" class="secondary-layer" opacity=".3"></path>',alert_octagon:'<path fill="currentColor" fill-rule="evenodd" d="M15.314 2a2 2 0 0 1 1.414.586l4.686 4.686A2 2 0 0 1 22 8.686v6.628a2 2 0 0 1-.586 1.414l-4.686 4.686a2 2 0 0 1-1.414.586H8.686a2 2 0 0 1-1.414-.586l-4.686-4.686A2 2 0 0 1 2 15.314V8.686a2 2 0 0 1 .586-1.414l4.686-4.686A2 2 0 0 1 8.686 2h6.628Z" class="secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M12 6a1 1 0 0 0-.993.883L11 7v6a1 1 0 0 0 1.993.117L13 13V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" class="primary-layer"></path>',alert_triangle:'<path fill="currentColor" d="m13.299 3.148 8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0Z" class="secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 8a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1Zm0 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" class="primary-layer"></path>'},f=(e={})=>{if(e=Object.assign({icons:{},attributes:{}},e),typeof document=="undefined")throw new Error("`createIcons()` only works in a browser environment.");const a=document.querySelectorAll("[data-duoicon]");Array.from(a).forEach(t=>h(t,d,e.attributes))};l.createIcons=f,l.icons=d,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});