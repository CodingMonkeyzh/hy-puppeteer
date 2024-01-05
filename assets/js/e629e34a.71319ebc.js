/*! For license information please see e629e34a.71319ebc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42822],{87249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(85893),d=n(11151);const i={sidebar_label:"PDFOptions"},s="PDFOptions interface",c={id:"api/puppeteer.pdfoptions",title:"PDFOptions interface",description:"Valid options to configure PDF generation via Page.pdf().",source:"@site/../docs/api/puppeteer.pdfoptions.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions",permalink:"/next/api/puppeteer.pdfoptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"PDFOptions"},sidebar:"api",previous:{title:"PDFMargin",permalink:"/next/api/puppeteer.pdfmargin"},next:{title:"Permission",permalink:"/next/api/puppeteer.permission"}},l={},o=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pdfoptions-interface",children:"PDFOptions interface"}),"\n",(0,r.jsxs)(t.p,{children:["Valid options to configure PDF generation via ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.pdf",children:"Page.pdf()"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface PDFOptions\n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"displayHeaderFooter"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Whether to show the header and footer."}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"footerTemplate"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["HTML template for the print footer. Has the same constraints and support for special classes as ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.pdfoptions",children:"PDFOptions.headerTemplate"}),"."]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"format"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.paperformat",children:"PaperFormat"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("code",{children:"letter"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"headerTemplate"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("p",{children:"HTML template for the print header. Should be valid HTML with the following classes used to inject values into them:"}),(0,r.jsxs)("p",{children:["- ",(0,r.jsx)("code",{children:"date"})," formatted print date"]}),(0,r.jsxs)("p",{children:["- ",(0,r.jsx)("code",{children:"title"})," document title"]}),(0,r.jsxs)("p",{children:["- ",(0,r.jsx)("code",{children:"url"})," document location"]}),(0,r.jsxs)("p",{children:["- ",(0,r.jsx)("code",{children:"pageNumber"})," current page number"]}),(0,r.jsxs)("p",{children:["- ",(0,r.jsx)("code",{children:"totalPages"})," total pages in the document"]})]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"height"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"string | number"}),(0,r.jsx)(t.td,{children:"Sets the height of paper. You can pass in a number or a string with a unit."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"landscape"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Whether to print in landscape orientation."}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"margin"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.pdfmargin",children:"PDFMargin"})}),(0,r.jsx)(t.td,{children:"Set the PDF margins."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("code",{children:"undefined"})," no margins are set."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"omitBackground"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Hides default white background and allows generating pdfs with transparency."}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pageRanges"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["Paper ranges to print, e.g. ",(0,r.jsx)("code",{children:"1-5, 8, 11-13"}),"."]}),(0,r.jsx)(t.td,{children:"The empty string, which means all pages are printed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The path to save the file to."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("code",{children:"undefined"}),", which means the PDF will not be written to disk."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"preferCSSPageSize"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsxs)(t.td,{children:["Give any CSS ",(0,r.jsx)("code",{children:"@page"})," size declared in the page priority over what is declared in the ",(0,r.jsx)("code",{children:"width"})," or ",(0,r.jsx)("code",{children:"height"})," or ",(0,r.jsx)("code",{children:"format"})," option."]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("code",{children:"false"}),", which will scale the content to fit the paper size."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"printBackground"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsxs)(t.td,{children:["Set to ",(0,r.jsx)("code",{children:"true"})," to print background graphics."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scale"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsxs)(t.td,{children:["Scales the rendering of the web page. Amount must be between ",(0,r.jsx)("code",{children:"0.1"})," and ",(0,r.jsx)("code",{children:"2"}),"."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"1"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tagged"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Generate tagged (accessible) PDF."}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsxs)(t.td,{children:["Timeout in milliseconds. Pass ",(0,r.jsx)("code",{children:"0"})," to disable timeout."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"30_000"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"width"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:"optional"})}),(0,r.jsx)(t.td,{children:"string | number"}),(0,r.jsx)(t.td,{children:"Sets the width of paper. You can pass in a number or a string with a unit."}),(0,r.jsx)(t.td,{})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},75251:(e,t,n)=>{var r=n(67294),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,i={},o=null,h=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:d,type:e,key:o,ref:h,props:i,_owner:c.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(67294);const d={},i=r.createContext(d);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);