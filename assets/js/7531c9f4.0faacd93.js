"use strict";(self.webpackChunksheet_uploader_docs=self.webpackChunksheet_uploader_docs||[]).push([[308],{5282:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=["components"],s={sidebar_position:2},r="Installation with Docker",d={unversionedId:"Installation/installation-docker",id:"Installation/installation-docker",isDocsHomePage:!1,title:"Installation with Docker",description:"Prerequisites",source:"@site/docs/Installation/installation-docker.md",sourceDirName:"Installation",slug:"/Installation/installation-docker",permalink:"/docs/Installation/installation-docker",editUrl:"https://github.com/SheetAble/SheetAble-Documentations/edit/main/docs/Installation/installation-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/Installation/installation"},next:{title:"Native Installation",permalink:"/docs/Installation/native-installation"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install it via Docker CLI",id:"install-it-via-docker-cli",children:[{value:"Port",id:"port",children:[]},{value:"Volumes",id:"volumes",children:[]}]}],p={toc:c};function u(t){var e=t.components,a=(0,o.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-with-docker"},"Installation with Docker"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In case you do ",(0,i.kt)("strong",{parentName:"p"},"not")," have Docker installed on your machine here are the URLs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install on ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/mac/install/"},"Mac")),(0,i.kt)("li",{parentName:"ul"},"Install on ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Windows")),(0,i.kt)("li",{parentName:"ul"},"Install on ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Linux"))),(0,i.kt)("h2",{id:"install-it-via-docker-cli"},"Install it via Docker CLI"),(0,i.kt)("p",null,"With the Docker CLI it is pretty simple. You just need to run one command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f docker run -p 80:8080 vallezw/sheetable \n")),(0,i.kt)("h3",{id:"port"},"Port"),(0,i.kt)("p",null,"As you can see in the command above the image exposes the ",(0,i.kt)("strong",{parentName:"p"},"8080")," port."),(0,i.kt)("h3",{id:"volumes"},"Volumes"),(0,i.kt)("p",null,"If you want to save the data (uploaded sheets, etc) in a docker volume you have to add\n",(0,i.kt)("inlineCode",{parentName:"p"},"-v your_volume:/app/config"),".\nIn case you do not know how volumes work here the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"official Docker docs")," to that topic."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Login Data")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default login credentials for the admin user are:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Email:")," admin",(0,i.kt)("span",null),"@admin.com"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password:")," sheetable")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"To configure")," those and/or change other settings use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration"},"Configuration guide")))))}u.isMDXComponent=!0}}]);