const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-PKQXORMH-CA7p5zYe.js","assets/iframe-B6EApwU_.js","assets/index-RYns6xqu.js","assets/react-18-DBL1hgnh.js","assets/index-D16Yfzz8.js","assets/index-KAimkRVX.js","assets/index-D-8MO0q_.js","assets/index-B23dhaOI.js","assets/index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./iframe-B6EApwU_.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-PKQXORMH-CA7p5zYe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};