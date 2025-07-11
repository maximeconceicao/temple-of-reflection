import{c as i,j as e}from"./utils.sI3-FOzH.js";import{c as a,D as h,a as d,b as x,d as m,e as p}from"./categories.Cmuev4HM.js";import"./index.BB0SbgvW.js";import"./index.BKWGwx0l.js";/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],j=i("list",u);/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]],k=i("sprout",g);function f({categories:s,className:r=""}){return e.jsx("ul",{className:r,children:s.map(({category:t,count:o})=>{const l=a[t].icon||k,c=a[t].color||"chart-0",n=a[t].label||t;return e.jsx("li",{children:e.jsxs("a",{href:`/${t}`,className:"center inline-flex items-center gap-2 py-1 text-sm",children:[e.jsx(l,{className:"w-4 h-4",style:{stroke:`var(--${c})`}}),e.jsx("span",{children:n.charAt(0).toUpperCase()+n.slice(1)}),e.jsxs("span",{className:"text-xs text-black-600",children:["(",o,")"]})]})},t)})})}function C({categories:s}){return e.jsxs(h,{children:[e.jsx(d,{asChild:!0,children:e.jsx("button",{"aria-label":"Catégories",title:"Catégories",className:"inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring",children:e.jsx(j,{className:"h-5 w-5"})})}),e.jsxs(x,{className:"sm:max-w-md",children:[e.jsx(m,{children:e.jsx(p,{children:"Catégories"})}),e.jsx(f,{categories:s,className:"text-center"})]})]})}export{C as CategoryDialog};
