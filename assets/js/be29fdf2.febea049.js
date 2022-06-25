"use strict";(self.webpackChunksoul_anti_cheat=self.webpackChunksoul_anti_cheat||[]).push([[555],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=c,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3275:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),c=n(3366),a=(n(7294),n(3905)),o=["components"],i={sidebar_position:1},l="Checks",s={unversionedId:"docs/checks",id:"docs/checks",isDocsHomePage:!1,title:"Checks",description:"A check is a module detecting anomalies in player behavior.",source:"@site/docs/docs/checks.md",sourceDirName:"docs",slug:"/docs/checks",permalink:"/Soul-Anti-Cheat/docs/docs/checks",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Settings",permalink:"/Soul-Anti-Cheat/docs/docs/settings"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Check Structure",id:"check-structure",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checks"},"Checks"),(0,a.kt)("p",null,"A check is a module detecting anomalies in player behavior.",(0,a.kt)("br",{parentName:"p"}),"\n","To be registered as a check, a check must have a '.check' extension."),(0,a.kt)("h4",{id:"example"},"Example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Fly.check")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"table Check.Connections\nfunction Check:Start(player: Player)\n")),(0,a.kt)("p",null,"Make sure to add RBXScriptConnections in Check.Connections","[player]"," to avoid performance issues."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example"',title:'"Example"'},"Connections[player].OnHeartbeat = RunService.Heartbeat:Connect(function()\n\nend)\n")),(0,a.kt)("h2",{id:"check-structure"},"Check Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="TestCheck.lua"',title:'"TestCheck.lua"'},'local TestCheck = {}\nTestCheck.Connections = {}\n\nfunction TestCheck:Start(player: Player)\n    self.Connections[player].OnChatted = player.Chatted:Connect(function(msg: string)\n        if msg == "debug" then\n            _G.SoulAntiCheat:Kick(player, "reasonName", "extraData")\n        end\n    end)\nend\n\nreturn TestCheck\n')),(0,a.kt)("p",null,'This custom example check will kick any player if they chat "debug".'))}d.isMDXComponent=!0}}]);