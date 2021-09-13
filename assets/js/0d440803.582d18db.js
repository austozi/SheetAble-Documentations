"use strict";(self.webpackChunksheet_uploader_docs=self.webpackChunksheet_uploader_docs||[]).push([[359],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},929:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Installation with Docker",c={unversionedId:"Installation/installation-docker",id:"version-0.2/Installation/installation-docker",isDocsHomePage:!1,title:"Installation with Docker",description:"Prerequisites",source:"@site/versioned_docs/version-0.2/Installation/installation-docker.md",sourceDirName:"Installation",slug:"/Installation/installation-docker",permalink:"/docs/Installation/installation-docker",editUrl:"https://github.com/SheetAble/SheetAble-Documentations/edit/main/versioned_docs/version-0.2/Installation/installation-docker.md",tags:[],version:"0.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.2/tutorialSidebar",previous:{title:"Installation",permalink:"/docs/Installation/installation"},next:{title:"Native Installation",permalink:"/docs/Installation/native-installation"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install it via Docker CLI",id:"install-it-via-docker-cli",children:[{value:"Port",id:"port",children:[]},{value:"Volumes",id:"volumes",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-with-docker"},"Installation with Docker"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In case you do ",(0,o.kt)("strong",{parentName:"p"},"not")," have Docker installed on your machine here are the URLs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"Mac")),(0,o.kt)("li",{parentName:"ul"},"Install on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Windows")),(0,o.kt)("li",{parentName:"ul"},"Install on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Linux"))),(0,o.kt)("h2",{id:"install-it-via-docker-cli"},"Install it via Docker CLI"),(0,o.kt)("p",null,"With the Docker CLI it is pretty simple. You just need to run one command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f docker run -p 80:8080 vallezw/sheetable \n")),(0,o.kt)("h3",{id:"port"},"Port"),(0,o.kt)("p",null,"As you can see in the command above the image exposes the ",(0,o.kt)("strong",{parentName:"p"},"8080")," port."),(0,o.kt)("h3",{id:"volumes"},"Volumes"),(0,o.kt)("p",null,"If you want to save the data (uploaded sheets, etc) in a docker volume you have to add\n",(0,o.kt)("inlineCode",{parentName:"p"},"-v your_volume:/app/config"),".\nIn case you do not know how volumes work here the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"official Docker docs")," to that topic."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Login Data")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default login credentials for the admin user are:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Email:")," admin",(0,o.kt)("span",null),"@admin.com"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password:")," sheetable")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"To configure")," those and/or change other settings use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration"},"Configuration guide")))))}d.isMDXComponent=!0}}]);