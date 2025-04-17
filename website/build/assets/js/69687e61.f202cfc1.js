"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},a="Lints configuration",s={unversionedId:"Tutorial - Others/lint",id:"Tutorial - Others/lint",title:"Lints configuration",description:"Lint tools helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. We recommand you to use all these linting tools during your development.",source:"@site/docs/Tutorial - Others/lint.md",sourceDirName:"Tutorial - Others",slug:"/Tutorial - Others/lint",permalink:"/docs/Tutorial - Others/lint",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"VSC setup",permalink:"/docs/Tutorial - Others/vsc"},next:{title:"tsconfig",permalink:"/docs/Tutorial - Others/tsconfig"}},l={},p=[{value:"EditorConfig",id:"editorconfig",level:3},{value:"To use EditorConfig in, there&#39;s two steps:",id:"to-use-editorconfig-in-theres-two-steps",level:4},{value:"ESLint",id:"eslint",level:3},{value:"Prettier",id:"prettier",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lints-configuration"},"Lints configuration"),(0,i.kt)("p",null,"Lint tools helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. We recommand you to use all these linting tools during your development."),(0,i.kt)("h3",{id:"editorconfig"},"EditorConfig"),(0,i.kt)("p",null,"The editorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using our wab app template, ",(0,i.kt)("inlineCode",{parentName:"p"},".editorConfig")," is already added to ",(0,i.kt)("inlineCode",{parentName:"p"},"/yourProject/.vscode/.editorConfig")," in our template. Just install plugin in VSCode to use it.")),(0,i.kt)("h4",{id:"to-use-editorconfig-in-theres-two-steps"},"To use EditorConfig in, there's two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"EditorConfig for VS Code")," plugin to your VS Code \ud83d\udc47 :")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"EditorConfig",src:n(2798).Z,width:"548",height:"114"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},".editorConfig")," to your root level of Front end project \ud83d\udc47 :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".editorConfig"',title:'".editorConfig"'},"\nroot = true                          # top-most EditorConfig file\n\n[*]\nindent_size = 2\nindent_style = space                 # Tab indentation -> 2 spaces\nend_of_line = lf                     # Unix-style newlines with a newline ending every file\ncharset = utf-8                      # Default charset\ntrim_trailing_whitespace = true      # Trim end line whitespace\ninsert_final_newline = true          # Inset a new line at the end of file\n\n")),(0,i.kt)("p",null,"Your editorConfig gets settle down after this two steps."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Visual studio also comes bundled with native support for EditorConfig.")),(0,i.kt)("p",null,"For more detials about editorConfig, please check ",(0,i.kt)("a",{parentName:"p",href:"https://editorconfig.org/"},"\ud83c\udf0fEditorConfig.org"),"."),(0,i.kt)("h3",{id:"eslint"},"ESLint"),(0,i.kt)("p",null,"ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using our wab app template, ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," is already added to ",(0,i.kt)("inlineCode",{parentName:"p"},"/yourProject/src/.eslintrc")," in our template. Just install plugin and enable autosave in VSCode to use it.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"ESLint")," plugin to your VS Code \ud83d\udc47 :")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ESLint",src:n(147).Z,width:"645",height:"101"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},".eslintrc")," to your root level of Front end project \ud83d\udc47 :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc"',title:'".eslintrc"'},'\n{\n    "extends": [\n        "plugin:react/recommended",\n        "plugin:react-hooks/recommended",\n        "plugin:@typescript-eslint/recommended",\n        "plugin:prettier/recommended"\n    ],\n    "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier", "simple-import-sort", "typescript-sort-keys"],\n    "rules": {\n        "@typescript-eslint/ban-types": 0,\n        "@typescript-eslint/explicit-module-boundary-types": 0,\n        "@typescript-eslint/no-empty-function": 0,\n        "@typescript-eslint/no-empty-interface": 0,\n        "@typescript-eslint/no-explicit-any": 0,\n        "@typescript-eslint/no-unused-vars": 0,\n        "react/no-unknown-property": [1, { "ignore": ["class"] }],\n        "eqeqeq": ["warn"],\n        "linebreak-style": ["warn", "unix"],\n        "no-alert": 2,\n        "no-console": 0,\n        "no-duplicate-imports": 2,\n        "prettier/prettier": "error",\n        "react/display-name": 0,\n        "react/jsx-sort-props": "error",\n        "react/no-danger": 1,\n        "react/prop-types": 0,\n        "react-hooks/rules-of-hooks": 2,\n        "react-hooks/exhaustive-deps": 0,\n        "react/react-in-jsx-scope": "off",\n        "simple-import-sort/imports": [\n            "error",\n            {\n                "groups": [\n                    ["^@?\\\\w"], // NPM Packages\n                    ["^(pages|stores|global|types|utils|apis|queries)(/.*|$)"], // Alias imports\n                    ["^\\\\."] // Anything that starts with a dot\n                ]\n            }\n        ],\n        "typescript-sort-keys/interface": "error",\n        "typescript-sort-keys/string-enum": "error"\n    },\n    "parserOptions": {\n        "sourceType": "module",\n        "ecmaFeatures": {\n            "jsx": true\n        }\n    },\n    "env": {\n        "browser": true,\n        "jest": true,\n        "node": true,\n        "es2020": true // adds ES 2020 globals and sets ecmaVersion to 11\n    },\n    "settings": {\n        "react": {\n            "version": "detect"\n        }\n    },\n    "parser": "@typescript-eslint/parser"\n}\n\n')),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," gets settle down after this two steps. For more detials, please check ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"\ud83c\udf0fESLint.org"),"."),(0,i.kt)("h3",{id:"prettier"},"Prettier"),(0,i.kt)("p",null,"Prettier is an opinionated code formatter."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using our wab app template, ",(0,i.kt)("inlineCode",{parentName:"p"},".prettierrc")," is already added to ",(0,i.kt)("inlineCode",{parentName:"p"},"/yourProject/src/.prettierrc")," in our template. Just install plugin and enable autosave in VSCode to use it.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"Prettier")," plugin to your VS Code \ud83d\udc47 :")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Prettier",src:n(4376).Z,width:"518",height:"97"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},".prettierrc")," to your root level of Front end project \ud83d\udc47 :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".prettierrc"',title:'".prettierrc"'},'{\n    "arrowParens": "avoid",\n    "printWidth": 150,\n    "semi": false,\n    "singleQuote": true,\n    "trailingComma": "none",\n    "useTabs": true\n}\n')),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," gets settle down after this two steps. For more detials, please check ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"\ud83c\udf0fPrettier.io"),"."))}u.isMDXComponent=!0},2798:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EditorConfig-281ac4665cff1390d522388454b2c9f4.PNG"},4376:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Prettier-4b513eb6b003f424cb4faa67ab10ae56.PNG"},147:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eslint-494f0bc9403bb9d540b1195fc208f585.PNG"}}]);