/*! For license information please see d96fc6a1.5d2de016.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34131],{46263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(85893),n=r(11151);const s={sidebar_label:"Frame.evaluate"},i="Frame.evaluate() method",l={id:"api/puppeteer.frame.evaluate",title:"Frame.evaluate() method",description:"Behaves identically to Page.evaluate() except it's run within the the context of this frame.",source:"@site/versioned_docs/version-21.7.0/api/puppeteer.frame.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.frame.evaluate",permalink:"/api/puppeteer.frame.evaluate",draft:!1,unlisted:!1,tags:[],version:"21.7.0",frontMatter:{sidebar_label:"Frame.evaluate"},sidebar:"api",previous:{title:"Frame.content",permalink:"/api/puppeteer.frame.content"},next:{title:"Frame.evaluateHandle",permalink:"/api/puppeteer.frame.evaluatehandle"}},o={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"frameevaluate-method",children:"Frame.evaluate() method"}),"\n",(0,a.jsxs)(t.p,{children:["Behaves identically to ",(0,a.jsx)(t.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"})," except it's run within the the context of this frame."]}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  evaluate<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"pageFunction"}),(0,a.jsx)(t.td,{children:"Func | string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"args"}),(0,a.jsx)(t.td,{children:"Params"}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,s={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!o.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var a=r(67294);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);