import{c as d}from"/build/_shared/chunk-RAQ24GF6.js";var E=d((T,u)=>{function m(e){return e?typeof e=="string"?e:e.source:null}function g(e){return n("(?=",e,")")}function _(e){return n("(",e,")?")}function n(...e){return e.map(s=>m(s)).join("")}function b(...e){return"("+e.map(s=>m(s)).join("|")+")"}function N(e){let a=n(/[A-Z_]/,_(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s=/[A-Za-z0-9._:-]+/,t={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},r=e.inherit(i,{begin:/\(/,end:/\)/}),o=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,l,o,r,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,r,l,o]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},t,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n(/</,g(n(a,b(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:a,relevance:0,starts:c}]},{className:"tag",begin:n(/<\//,g(n(a,/>/))),contains:[{className:"name",begin:a,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}u.exports=N});export{E as a};
