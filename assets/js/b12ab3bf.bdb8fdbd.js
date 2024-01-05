/*! For license information please see b12ab3bf.bdb8fdbd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43289],{16277:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var s=t(85893),n=t(11151);const i={sidebar_label:"BrowserContext"},o="BrowserContext class",p={id:"api/puppeteer.browsercontext",title:"BrowserContext class",description:"BrowserContext represents individual sessions within a browser.",source:"@site/versioned_docs/version-21.7.0/api/puppeteer.browsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext",permalink:"/api/puppeteer.browsercontext",draft:!1,unlisted:!1,tags:[],version:"21.7.0",frontMatter:{sidebar_label:"BrowserContext"},sidebar:"api",previous:{title:"Browser.wsEndpoint",permalink:"/api/puppeteer.browser.wsendpoint"},next:{title:"BrowserContext.browser",permalink:"/api/puppeteer.browsercontext.browser"}},c={},a=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"browsercontext-class",children:"BrowserContext class"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"})," represents individual sessions within a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["When a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"})," is launched, it has a single ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," by default. Others can be created using ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser.createincognitobrowsercontext",children:"Browser.createIncognitoBrowserContext()"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"})," ",(0,s.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"emits"})," various events which are documented in the ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontextevent",children:"BrowserContextEvent"})," enum."]}),"\n",(0,s.jsxs)(r.p,{children:["If a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"})," opens another ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"}),", e.g. using ",(0,s.jsx)(r.code,{children:"window.open"}),", the popup will belong to the parent ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.browsercontext",children:"page's browser context"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class BrowserContext extends EventEmitter<BrowserContextEvents>\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Extends:"})," ",(0,s.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontextevents",children:"BrowserContextEvents"}),">"]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(r.code,{children:"BrowserContext"})," class."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["Creating an incognito ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// Create a new incognito browser context\nconst context = await browser.createIncognitoBrowserContext();\n// Create a new page inside context.\nconst page = await context.newPage();\n// ... do stuff with page ...\nawait page.goto('https://example.com');\n// Dispose context once it's no longer needed.\nawait context.close();\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Modifiers"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"closed"}),(0,s.jsx)(r.td,{children:(0,s.jsx)("code",{children:"readonly"})}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsxs)(r.td,{children:["Whether this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," is closed."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"id"}),(0,s.jsx)(r.td,{children:(0,s.jsx)("code",{children:"readonly"})}),(0,s.jsx)(r.td,{children:"string | undefined"}),(0,s.jsxs)(r.td,{children:["Identifier for this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"Modifiers"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.browser",children:"browser()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Gets the ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"})," associated with this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.clearpermissionoverrides",children:"clearPermissionOverrides()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Clears all permission overrides for this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.close",children:"close()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Closes this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," and all associated ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.isincognito",children:"isIncognito()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsxs)("p",{children:["Whether this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," is incognito."]}),(0,s.jsxs)("p",{children:["The ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"})," is the only non-incognito browser context."]})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.newpage",children:"newPage()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Creates a new ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"})," in this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.overridepermissions",children:"overridePermissions(origin, permissions)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Grants this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," the given ",(0,s.jsx)("code",{children:"permissions"})," within the given ",(0,s.jsx)("code",{children:"origin"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.pages",children:"pages()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Gets a list of all open ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," inside this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.targets",children:"targets()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Gets all active ",(0,s.jsx)(r.a,{href:"/api/puppeteer.target",children:"targets"})," inside this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.waitfortarget",children:"waitForTarget(predicate, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsxs)("p",{children:["Waits until a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.target",children:"target"})," matching the given ",(0,s.jsx)("code",{children:"predicate"})," appears and returns it."]}),(0,s.jsxs)("p",{children:["This will look all open ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var s,i={},a=null,d=null;for(s in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:n,type:e,key:a,ref:d,props:i,_owner:p.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>o});var s=t(67294);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);