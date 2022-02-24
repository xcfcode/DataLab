"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[637],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3852:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="What is the `task schema`?",c={unversionedId:"SDK/what_is_task_schema",id:"SDK/what_is_task_schema",title:"What is the `task schema`?",description:"We introduce the concept of task schema that defines the format of datasets belonging to this task. This is useful to",source:"@site/docs/SDK/what_is_task_schema.md",sourceDirName:"SDK",slug:"/SDK/what_is_task_schema",permalink:"/DataLab/docs/SDK/what_is_task_schema",editUrl:"https://github.com/ExpressAI/DataLab/tree/gh-pages/docs/SDK/what_is_task_schema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Progress",permalink:"/DataLab/docs/SDK/task_normalization"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-the-task-schema"},"What is the ",(0,i.kt)("inlineCode",{parentName:"h1"},"task schema"),"?"),(0,i.kt)("p",null,"We introduce the concept of ",(0,i.kt)("inlineCode",{parentName:"p"},"task schema")," that defines the format of datasets belonging to this task. This is useful to\nstandardize the formats of datasets from the same task.\nFor example, the schema of ",(0,i.kt)("inlineCode",{parentName:"p"},"text classification")," task is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),":str"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),":ClassLabel")),(0,i.kt)("p",null,"while for ",(0,i.kt)("inlineCode",{parentName:"p"},"text-matching")," task, its schema can be defined as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text1"),":str"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text2"),":str"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),":ClassLabel")),(0,i.kt)("p",null,"More detailed can refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpressAI/DataLab/tree/main/src/datalabs/tasks"},"folder"),"."),(0,i.kt)("p",null,"Also, this doc details ",(0,i.kt)("a",{parentName:"p",href:"/DataLab/docs/SDK/add_new_task_schema"},"how to add a new task schema"),"."))}m.isMDXComponent=!0}}]);