"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:6},a="tsconfig",s={unversionedId:"Tutorial - Others/tsconfig",id:"Tutorial - Others/tsconfig",title:"tsconfig",description:"Typescript is recommended for every project for static typing. To run typescript, we need a tsconfig.json file must be included in the root level of the client folder.",source:"@site/docs/Tutorial - Others/tsconfig.md",sourceDirName:"Tutorial - Others",slug:"/Tutorial - Others/tsconfig",permalink:"/WebAppTemplateDoc/docs/Tutorial - Others/tsconfig",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Lints configuration",permalink:"/WebAppTemplateDoc/docs/Tutorial - Others/lint"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Related links",id:"related-links",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tsconfig"},"tsconfig"),(0,o.kt)("p",null,"Typescript is recommended for every project for static typing. To run typescript, we need a tsconfig.json file must be included in the root level of the client folder."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "allowSyntheticDefaultImports": true, // Allows importing "default" from modules, which don\'t have actually it. E.g., "import React", instead of "import * as React"\n    "baseUrl": "./", // Base directory to resolve non-relative module names\n    "jsx": "react", // Required for TS to work with JSX syntax\n    "lib": ["dom", "esnext"], // Uses provided type definitions\n    "noEmit": true, // Won\'t produce any files when running \'tsc\' command\n    "paths": {\n      // Necessary for aliased imports. Two entries are required, so that TS can resolve root level and nested imports\n      "utils": ["src/utils"],\n      "utils/*": ["src/utils/*"]\n    },\n    "skipLibCheck": true, // Skips type checking of .d.ts libs, especially in node_modules, for performance\n    "strict": true // Enables all strict type checking options\n  },\n  "include": ["src"] // Specifies an array of filenames or patterns to include in the program\n}\n')),(0,o.kt)("h2",{id:"related-links"},"Related links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"\ud83c\udf0ftypescript"))))}f.isMDXComponent=!0}}]);