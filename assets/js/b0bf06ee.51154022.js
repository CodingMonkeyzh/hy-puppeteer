/*! For license information please see b0bf06ee.51154022.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97059],{23446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(85893),l=n(11151);const a={sidebar_label:"ElementHandle.toElement"},s="ElementHandle.toElement() method",o={id:"api/puppeteer.elementhandle.toelement",title:"ElementHandle.toElement() method",description:"Converts the current handle to the given element type.",source:"@site/versioned_docs/version-21.7.0/api/puppeteer.elementhandle.toelement.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.toelement",permalink:"/api/puppeteer.elementhandle.toelement",draft:!1,unlisted:!1,tags:[],version:"21.7.0",frontMatter:{sidebar_label:"ElementHandle.toElement"},sidebar:"api",previous:{title:"ElementHandle.tap",permalink:"/api/puppeteer.elementhandle.tap"},next:{title:"ElementHandle.touchEnd",permalink:"/api/puppeteer.elementhandle.touchend"}},d={},i=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandletoelement-method",children:"ElementHandle.toElement() method"}),"\n",(0,r.jsx)(t.p,{children:"Converts the current handle to the given element type."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  toElement<K extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>(\n    tagName: K\n  ): Promise<HandleFor<ElementFor<K>>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tagName"}),(0,r.jsx)(t.td,{children:"K"}),(0,r.jsx)(t.td,{children:"The tag name of the desired element type."})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementfor",children:"ElementFor"}),"<K>>>"]}),"\n",(0,r.jsx)(t.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,r.jsxs)(t.p,{children:["An error if the handle does not match. ",(0,r.jsx)(t.strong,{children:"The handle will not be automatically disposed."})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const element: ElementHandle<Element> = await page.$('.class-name-of-anchor');\n// DO NOT DISPOSE `element`, this will be always be the same handle.\nconst anchor: ElementHandle<HTMLAnchorElement> = await element.toElement('a');\n"})})]})}function c(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var r=n(67294),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,p=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,r)&&!d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:i,ref:p,props:a,_owner:o.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);