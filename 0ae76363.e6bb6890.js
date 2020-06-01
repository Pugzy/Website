(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var l=n(1),a=n(9),b=(n(0),n(208)),r={id:"cleaning-files",title:"Cleaning Files"},c={id:"guides/packaging/cleaning-files",title:"Cleaning Files",description:"Minecraft will generate quite a few files in your world folder when you create a world. Most of these files are not needed and by deleting them you can reduce the file size when it comes to uploading your world.",source:"@site/docs/guides/packaging/cleaning-files.mdx",permalink:"/docs/guides/packaging/cleaning-files",editUrl:"https://github.com/PGMDev/Website/docs/guides/packaging/cleaning-files.mdx",sidebar:"Guides",previous:{title:"XML Conventions",permalink:"/docs/guides/xml-pointers/conventions"},next:{title:"Pruning Chunks",permalink:"/docs/guides/packaging/pruning-chunks"}},d=[],o={rightToc:d};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Minecraft will generate quite a few files in your world folder when you create a world. Most of these files are not needed and by deleting them you can reduce the file size when it comes to uploading your world."),Object(b.b)("p",null,"Below is a table which displays all the files that may be generated in your world folder, along with a description and whether or not the file is required."),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",{style:{minWidth:"230px"}},"File Name"),Object(b.b)("th",null,"Required?"),Object(b.b)("th",null,"Description"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"level.dat")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--success"},"YES")),Object(b.b)("td",null,"Stores global information about the world such as name and generation type")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"region/")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--success"},"YES")),Object(b.b)("td",null,"Contains all the region files of your world")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"data/map_[#].dat")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--warning"},"DEPENDS")),Object(b.b)("td",null,"Stores map data for craft-able maps -- remove if you are not using custom map items")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"level.dat_mcr")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"A backup of level.dat before the map was converted from the MCRegion world format to Anvil")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"level.dat_old")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"A backup level.dat")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"session.lock")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"A timestamp when the level was last accessed")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"playerdata/"),"or",Object(b.b)("label",null,"players/")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Contains files which store the individual states of each player")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"data/villages.dat")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Stores information about Villages in the world")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"DIM-1/ & DIM1/")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Contains all the region files for the Nether and The End")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"stats/")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Contains achievements and other stats")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"##MCEDIT.TEMP##/")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Generated by MCEdit")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"forcedchunks.dat")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Forced chunks")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"customnpcs")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Generated by MCEdit/NBTEdit")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"NEI")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Generated by Not Enough Items")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"spc")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"NO")),Object(b.b)("td",null,"Generated by Single Player Commands"))))))}u.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return j}));var l=n(0),a=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},i=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),i=u(n),O=l,j=i["".concat(r,".").concat(O)]||i[O]||s[O]||b;return n?a.a.createElement(j,c({ref:t},o,{components:n})):a.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,r=new Array(b);r[0]=O;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var o=2;o<b;o++)r[o]=n[o];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);