/*! For license information please see 59df6d65.6f00173d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45633],{68046:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(85893),n=t(11151);const s={sidebar_label:"Page.emulateMediaFeatures"},i="Page.emulateMediaFeatures() method",l={id:"api/puppeteer.page.emulatemediafeatures",title:"Page.emulateMediaFeatures() method",description:"Signature:",source:"@site/versioned_docs/version-21.7.0/api/puppeteer.page.emulatemediafeatures.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatemediafeatures",permalink:"/api/puppeteer.page.emulatemediafeatures",draft:!1,unlisted:!1,tags:[],version:"21.7.0",frontMatter:{sidebar_label:"Page.emulateMediaFeatures"},sidebar:"api",previous:{title:"Page.emulateIdleState",permalink:"/api/puppeteer.page.emulateidlestate"},next:{title:"Page.emulateMediaType",permalink:"/api/puppeteer.page.emulatemediatype"}},d={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"pageemulatemediafeatures-method",children:"Page.emulateMediaFeatures() method"}),"\n",(0,r.jsx)(a.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-typescript",children:"class Page {\n  abstract emulateMediaFeatures(features?: MediaFeature[]): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Parameter"}),(0,r.jsx)(a.th,{children:"Type"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"features"}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.a,{href:"/api/puppeteer.mediafeature",children:"MediaFeature"}),"[]"]}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.em,{children:"(Optional)"})," ",(0,r.jsx)("code",{children:"<?Array<Object>>"})," Given an array of media feature objects, emulates CSS media features on the page. Each media feature object must have the following properties:"]})]})})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(a.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ts",children:"await page.emulateMediaFeatures([\n  {name: 'prefers-color-scheme', value: 'dark'},\n]);\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);\n// \u2192 false\n\nawait page.emulateMediaFeatures([\n  {name: 'prefers-reduced-motion', value: 'reduce'},\n]);\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: reduce)').matches\n);\n// \u2192 true\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: no-preference)').matches\n);\n// \u2192 false\n\nawait page.emulateMediaFeatures([\n  {name: 'prefers-color-scheme', value: 'dark'},\n  {name: 'prefers-reduced-motion', value: 'reduce'},\n]);\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);\n// \u2192 false\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: reduce)').matches\n);\n// \u2192 true\nawait page.evaluate(\n  () => matchMedia('(prefers-reduced-motion: no-preference)').matches\n);\n// \u2192 false\n\nawait page.emulateMediaFeatures([{name: 'color-gamut', value: 'p3'}]);\nawait page.evaluate(() => matchMedia('(color-gamut: srgb)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(color-gamut: p3)').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('(color-gamut: rec2020)').matches);\n// \u2192 false\n"})})]})}function o(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,a,t)=>{var r=t(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,a,t){var r,s={},u=null,c=null;for(r in void 0!==t&&(u=""+t),void 0!==a.key&&(u=""+a.key),void 0!==a.ref&&(c=a.ref),a)i.call(a,r)&&!d.hasOwnProperty(r)&&(s[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:n,type:e,key:u,ref:c,props:s,_owner:l.current}}a.Fragment=s,a.jsx=u,a.jsxs=u},85893:(e,a,t)=>{e.exports=t(75251)},11151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>i});var r=t(67294);const n={},s=r.createContext(n);function i(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);