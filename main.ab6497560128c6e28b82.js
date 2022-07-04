(()=>{"use strict";var e,t={734:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r=a.p+"0f135d92fcdb93d912bdc3c4ac55c5aa.png"},425:(e,t,a)=>{a.r(t)},370:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(a(294)),l=a(879),o=a(434),u=r(a(734)),i=()=>n.default.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",width:"28px",height:"28px"},n.default.createElement("path",{clipRule:"evenodd",d:"M11 2a9 9 0 1 0 3.88 17.123l5.777 5.777a3 3 0 0 0 4.243-4.243l-5.777-5.777A9 9 0 0 0 11 2zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm14.032 5.618a9.054 9.054 0 0 1-1.414 1.414l5.453 5.453a1 1 0 0 0 1.414-1.414z",fill:"currentColor",fillRule:"evenodd"})),c=({onClick:e})=>n.default.createElement(o.MdOutlineClear,{onClick:e,size:28});t.default=()=>{const e=(0,l.useNavigate)(),t=t=>{e({pathname:"/",search:(0,l.createSearchParams)({searchKey:t.target.value}).toString()})},[a]=(0,l.useSearchParams)(),r=a.get("searchKey")||"";return n.default.createElement("header",null,n.default.createElement("div",{className:"header-items"},n.default.createElement("img",{onClick:()=>e("/"),src:u.default}),n.default.createElement("div",{className:"search-icon"},n.default.createElement("input",{value:r,onChange:t,onBlur:t,placeholder:"Search for cards…"}),r?n.default.createElement(c,{onClick:()=>{e("/")}}):n.default.createElement(i,null))))}},352:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const o=l(a(294)),u=a(872);t.default=({images:e})=>{const[t,a]=(0,o.useState)(0),r=e=>{a(t+e)},n=0===t,l=e.length-1===t;return o.default.createElement("div",{"data-testid":"carousel",className:"img-carousel"},o.default.createElement("button",{"data-testid":"goto-previous-image",className:"carousel-buttons",disabled:n,onClick:()=>r(-1)},o.default.createElement(u.FcPrevious,null)),o.default.createElement("div",{className:"image-container"},o.default.createElement("div",{className:"image-display"},o.default.createElement("img",{"data-testid":"preview-img",src:e[t].ImageUrl})),o.default.createElement("div",{"data-testid":"dotted-toggle-option",className:"dotted-toggle"},e.map(((e,r)=>o.default.createElement("button",{onClick:()=>a(r),style:{backgroundColor:r===t?"#ce3356":"#ffd7df"},key:`dotted-toggle-${e.ImageNo}`,"data-testid":"dotted-toggle-buttons",className:"dotted-toggle-buttons"}))))),o.default.createElement("button",{"data-testid":"goto-next-image",className:"carousel-buttons",disabled:l,onClick:()=>r(1)},o.default.createElement(u.FcNext,null)))}},402:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(a(294));t.default=({showLoading:e})=>e?n.default.createElement("div",{"data-testid":"loading",className:"lds-ellipsis"},Array.from(Array(4).keys()).map((e=>n.default.createElement("div",{key:`loading-${e}`})))):null},152:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(294);t.default=e=>{const[t,a]=(0,r.useState)(!1);(0,r.useEffect)((()=>(window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n))),[t]);const n=()=>{window.innerHeight+window.scrollY>=document.documentElement.offsetHeight||t||(a(!0),e())};return[t,a]}},629:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(a(294)),l=r(a(745)),o=a(879),u=r(a(341)),i=r(a(370)),c=r(a(490));a(425);const s=document.getElementById("root");l.default.createRoot(s).render(n.default.createElement((function(){return console.log("/moonpig-assessment.github.io"),n.default.createElement(o.BrowserRouter,{basename:"/moonpig-assessment.github.io"},n.default.createElement(i.default,null),n.default.createElement("div",{className:"main-content"},n.default.createElement(o.Routes,null,n.default.createElement(o.Route,{path:"/",element:n.default.createElement(u.default,null)}),n.default.createElement(o.Route,{path:"/card/:id",element:n.default.createElement(c.default,null)}))))}),null))},341:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(a(294)),i=o(a(152)),c=a(516),s=o(a(402)),d=a(879),f=e=>e.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();t.default=function(){const[e,t]=(0,u.useState)([]),[a,r]=(0,u.useState)(!1),[n]=(0,d.useSearchParams)(),l=(0,d.useNavigate)(),o=n.get("searchKey")||"",m=((e,t)=>t?e.filter((e=>{const a=f(e.Title),r=f(t);return a.includes(r)})):e)(e,o),[g,p]=(0,u.useState)({currentPage:1,entriesPerPage:20}),[h,v]=(0,i.default)((()=>{setTimeout((()=>{p((e=>{const t=e.currentPage+1;return{currentPage:t,entriesPerPage:20*t}})),v(!1)}),2e3)}));(0,u.useEffect)((()=>{fetch("https://moonpig.github.io/tech-test-frontend/search.json").then((e=>e.json())).then((e=>{t(e.Products)})).catch((e=>{console.log(e),r(!0)}))}),[]);const b=m.slice(0,g.entriesPerPage);return a?u.default.createElement("div",{"data-testid":"error-msg",className:"error-display"},u.default.createElement(c.BiMessageError,{color:"#ffa2c1",size:"10em"}),u.default.createElement("div",null,"Sorry, we are currently encountering issues, we‘ll be back soon!")):u.default.createElement(u.default.Fragment,null,o?u.default.createElement("div",{className:"results-info","data-testid":"results-info"},"Found ",u.default.createElement("span",null,m.length)," results related to ",u.default.createElement("span",null,n.get("searchKey"))):null,e.length?u.default.createElement("div",{"data-testid":"cards-list",className:"cards"},b.map((e=>u.default.createElement("div",{onClick:()=>{return t=e.MoonpigProductNo,void l(`/card/${t}`);var t},"data-testid":"card-info",className:"card",key:e.ProductId},u.default.createElement("img",{className:"card-image",alt:e.Title,src:e.ProductImage.Link.Href}))))):null,b.length<m.length?u.default.createElement(s.default,{showLoading:h}):null)}},490:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(a(294)),i=o(a(402)),c=a(879),s=o(a(352));t.default=function(){const[e,t]=(0,u.useState)(),[a,r]=(0,u.useState)(!0),{id:n}=(0,c.useParams)();return(0,u.useEffect)((()=>{fetch(`https://moonpig.github.io/tech-test-frontend/product/${n}.json`).then((e=>e.json())).then((e=>{r(!1),t(e)})).catch((e=>{console.log(e)}))}),[]),a&&!e?u.default.createElement(i.default,{showLoading:a}):u.default.createElement("div",{"data-testid":"card-view-container",className:"card-view-container"},u.default.createElement("div",{className:"image-section"},u.default.createElement(s.default,{images:(null==e?void 0:e.ImageUrls)||[]})),u.default.createElement("div",{className:"content-section"},u.default.createElement("h3",{"data-testid":"title",className:"card-title"},null==e?void 0:e.Title),u.default.createElement("button",{className:"purchase-button"},"Buy now")))}}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var l=a[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,a,n,l)=>{if(!a){var o=1/0;for(s=0;s<e.length;s++){for(var[a,n,l]=e[s],u=!0,i=0;i<a.length;i++)(!1&l||o>=l)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(u=!1,l<o&&(o=l));if(u){e.splice(s--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[a,n,l]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,l,[o,u,i]=a,c=0;if(o.some((t=>0!==e[t]))){for(n in u)r.o(u,n)&&(r.m[n]=u[n]);if(i)var s=i(r)}for(t&&t(a);c<o.length;c++)l=o[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},a=self.webpackChunkmoonpig_frontend_test=self.webpackChunkmoonpig_frontend_test||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[397],(()=>r(629)));n=r.O(n)})();