"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2,title:"Code structure",tags:["Templates","Vui","Base"]},l="Code structure",i={unversionedId:"Tutorial - templates/vui/codeStructure",id:"Tutorial - templates/vui/codeStructure",title:"Code structure",description:"We followed the similar code structures for all templates:",source:"@site/docs/Tutorial - templates/vui/codeStructure.md",sourceDirName:"Tutorial - templates/vui",slug:"/Tutorial - templates/vui/codeStructure",permalink:"/docs/Tutorial - templates/vui/codeStructure",draft:!1,tags:[{label:"Templates",permalink:"/docs/tags/templates"},{label:"Vui",permalink:"/docs/tags/vui"},{label:"Base",permalink:"/docs/tags/base"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Code structure",tags:["Templates","Vui","Base"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Tutorial - templates/vui/overview"},next:{title:"Code example",permalink:"/docs/Tutorial - templates/vui/code-example"}},s={},u=[],p={toc:u},m="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"code-structure"},"Code structure"),(0,n.kt)("p",null,"We followed the similar code structures for all templates:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"code-structure",src:r(6704).Z,width:"3058",height:"2674"})),(0,n.kt)("p",null,"Here's some basic rules of our code stucture:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"folder and file names are ",(0,n.kt)("strong",{parentName:"li"},"camal case")),(0,n.kt)("li",{parentName:"ul"},"website could be divided by pages, ",(0,n.kt)("strong",{parentName:"li"},"per page per folder")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"pages"),", name should be relevant with page content, path could be",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/pages/users/users.tsx")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"subpage of page")," could be put under page, path could be",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/pages/users/subPage/subPage.tsx")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"component level code")," including commonly or global or your customize component, path could be",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/components/global/yourGlobalComp/yourGloablComp.tsx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/components/common/yourCommonComp/yourCommonComp.tsx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/components/yourComp/yourComp.tsx")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"assets")," includes images and fonts, path could be",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/assets/img/yourImg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/assets/fonts/yourFonts")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"apis")," includes all apis, path could be",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/apis/users/users.ts")," (this will includes apis using in users page)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stores")," includes client side states, path could be",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/sotres/users/index.ts")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"queries")," includes query side states, path could be",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/queries/users/index.tsx"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We added few index.ts under some of folders, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"pages/index.ts"),", if you add yourPage inside of this index.ts like this ",(0,n.kt)("inlineCode",{parentName:"p"},"export { default as YourPage } from './yourpage/yourpage'"),", you could use ",(0,n.kt)("inlineCode",{parentName:"p"},"import { YourPage } from 'pages'")," inother page to use yourPage. We are recommand to add index.ts and use index.ts to make import path clean and easy to understand.")),(0,n.kt)("h1",{id:"more-details"},"More details?"),(0,n.kt)("p",null,"We provided some code example and explain for your code incase you are new to template, for more details, please check next section."))}c.isMDXComponent=!0},6704:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/codeStructure-5e978341d0af80666e4e38c2794b44d1.png"}}]);