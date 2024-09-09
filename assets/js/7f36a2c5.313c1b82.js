"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,v=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(v,i(i({ref:t},s),{},{components:r})):a.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3416:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,tags:["Templates","Vui","Base"]},i="Overview",l={unversionedId:"Tutorial - templates/vui/overview",id:"Tutorial - templates/vui/overview",title:"Overview",description:"Start your project",source:"@site/docs/Tutorial - templates/vui/overview.md",sourceDirName:"Tutorial - templates/vui",slug:"/Tutorial - templates/vui/overview",permalink:"/docs/Tutorial - templates/vui/overview",draft:!1,tags:[{label:"Templates",permalink:"/docs/tags/templates"},{label:"Vui",permalink:"/docs/tags/vui"},{label:"Base",permalink:"/docs/tags/base"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Templates","Vui","Base"]},sidebar:"tutorialSidebar",previous:{title:"Tenant Management",permalink:"/docs/Tutorial - templates/antd/tenant-management"},next:{title:"Code structure",permalink:"/docs/Tutorial - templates/vui/codeStructure"}},u={},p=[{value:"Start your project",id:"start-your-project",level:3},{value:"Teches overview",id:"teches-overview",level:3}],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h3",{id:"start-your-project"},"Start your project"),(0,n.kt)("p",null,"To download the vui-base, select ",(0,n.kt)("inlineCode",{parentName:"p"},"Vui - Base")," when you run ",(0,n.kt)("inlineCode",{parentName:"p"},"npx dnv-cli init"),"."),(0,n.kt)("p",null,"After your project is download, to start the project, run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n\nyarn start\n")),(0,n.kt)("p",null,"Then project is running in ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")),(0,n.kt)("h3",{id:"teches-overview"},"Teches overview"),(0,n.kt)("p",null,"We provided a base version of vui template including an empty dashboard page with a vui header and a vui footer. You could extend the template based on your business requirement after download our template."),(0,n.kt)("p",null,"Here's the teches we are using in our template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"react v17.x.x"),(0,n.kt)("li",{parentName:"ul"},"react-router-dom v6.x.x"),(0,n.kt)("li",{parentName:"ul"},"typescript v4.x.x"),(0,n.kt)("li",{parentName:"ul"},"vui v1.x.x"),(0,n.kt)("li",{parentName:"ul"},"react-query v3.x.x"),(0,n.kt)("li",{parentName:"ul"},"zustand v4.x.x"),(0,n.kt)("li",{parentName:"ul"},"vite v2.x.x"),(0,n.kt)("li",{parentName:"ul"},"eslit v8.x.x"),(0,n.kt)("li",{parentName:"ul"},"prettier v2.x.x")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We are following the latest agreed state management pattern ",(0,n.kt)("strong",{parentName:"p"},"zustand + react-query")," to simply the react state management. If you are not familiar with these teches yet, we provided some example code in our template so you could have a fisrt insight of it. To get more deep understand of these, please go to website to see some tutorals of them.")),(0,n.kt)("p",null,"For more details, please check the ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," file in ",(0,n.kt)("inlineCode",{parentName:"p"},"yourProject/package.json"),"."),(0,n.kt)("h1",{id:"more-details"},"More details?"),(0,n.kt)("p",null,"To understand more about vui-base template, you could go to code-structure page to see the code structure."))}m.isMDXComponent=!0}}]);