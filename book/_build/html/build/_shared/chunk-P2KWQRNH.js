import{c as b}from"/build/_shared/chunk-RAQ24GF6.js";var N=b((A,E)=>{function c(n){return n?typeof n=="string"?n:n.source:null}function d(n){return r("(?=",n,")")}function r(...n){return n.map(e=>c(e)).join("")}function u(...n){return"("+n.map(e=>c(e)).join("|")+")"}function g(n){let s={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:n.NUMBER_RE}]},e=n.COMMENT();e.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];let t={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},i={className:"literal",begin:/\bon|off|true|false|yes|no\b/},a={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},_={begin:/\[/,end:/\]/,contains:[e,i,t,a,s,"self"],relevance:0},o=u(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/),l=r(o,"(\\s*\\.\\s*",o,")*",d(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[e,{className:"section",begin:/\[+/,end:/\]+/},{begin:l,className:"attr",starts:{end:/$/,contains:[e,_,i,t,a,s]}}]}}E.exports=g});export{N as a};
