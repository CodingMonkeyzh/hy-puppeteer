/*! For license information please see f52e504a.667a868c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42222],{98045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=r(85893),n=r(11151);const a={sidebar_label:"Page.setExtraHTTPHeaders"},i="Page.setExtraHTTPHeaders() method",o={id:"api/puppeteer.page.setextrahttpheaders",title:"Page.setExtraHTTPHeaders() method",description:"The extra HTTP headers will be sent with every request the page initiates.",source:"@site/versioned_docs/version-21.7.0/api/puppeteer.page.setextrahttpheaders.md",sourceDirName:"api",slug:"/api/puppeteer.page.setextrahttpheaders",permalink:"/api/puppeteer.page.setextrahttpheaders",draft:!1,unlisted:!1,tags:[],version:"21.7.0",frontMatter:{sidebar_label:"Page.setExtraHTTPHeaders"},sidebar:"api",previous:{title:"Page.setDragInterception",permalink:"/api/puppeteer.page.setdraginterception"},next:{title:"Page.setGeolocation",permalink:"/api/puppeteer.page.setgeolocation"}},d={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagesetextrahttpheaders-method",children:"Page.setExtraHTTPHeaders() method"}),"\n",(0,s.jsx)(t.p,{children:"The extra HTTP headers will be sent with every request the page initiates."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"All HTTP header names are lowercased. (HTTP headers are case-insensitive, so this shouldn\u2019t impact your server code.)"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"page.setExtraHTTPHeaders does not guarantee the order of headers in the outgoing requests."})}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"headers"}),(0,s.jsx)(t.td,{children:"Record<string, string>"}),(0,s.jsx)(t.td,{children:"An object containing additional HTTP headers to be sent with every request. All header values must be strings."})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var s,a={},p=null,l=null;for(s in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:p,ref:l,props:a,_owner:o.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var s=r(67294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);