import{l as o}from"/mybook/build/_shared/chunk-QCCLA5MS.js";import"/mybook/build/_shared/chunk-RAQ24GF6.js";var n={name:"tab-set",alias:"tabSet",options:{class:{type:o.string}},body:{type:o.parsed},run(e){var t;return[{type:"tabSet",class:(t=e.options)===null||t===void 0?void 0:t.class,children:e.body||[]}]}},r={name:"tab-item",alias:"tabItem",arg:{type:o.string},options:{sync:{type:o.string},selected:{type:o.boolean}},body:{type:o.parsed},run(e){var t,s,i;return[{type:"tabItem",title:(t=e.arg)!==null&&t!==void 0?t:"Tab Title",sync:(s=e.options)===null||s===void 0?void 0:s.sync,selected:(i=e.options)===null||i===void 0?void 0:i.selected,children:e.body||[]}]}},l=[n,r];export{l as tabDirectives,r as tabItemDirective,n as tabSetDirective};
