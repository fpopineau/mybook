import{b as m,c as E,d as Ce,e as K}from"/mybook/build/_shared/chunk-RAQ24GF6.js";function k(e,t){let n=t||{};function i(r,...o){let s=i.invalid,u=i.handlers;if(r&&X.call(r,e)){let f=String(r[e]);s=X.call(u,f)?u[f]:i.unknown}if(s)return s.call(this,r,...o)}return i.handlers=n.handlers||{},i.invalid=n.invalid,i.unknown=n.unknown,i}var X,Q=m(()=>{X={}.hasOwnProperty});function Y(e,t){let n=-1;for(;++n<e.attrs.length;)if(!Se(e.attrs[n],t))return!1;return!0}function V(e,t){return t[e.name]!==null&&t[e.name]!==void 0}function Ae(e,t){return V(e,t)&&String(t[e.name])===e.value}function Ee(e,t){let n=t[e.name];return n==null?!1:Array.isArray(n)&&n.includes(e.value)?!0:String(n)===e.value}function Ie(e,t){let n=t[e.name];return Boolean(e.value&&typeof n=="string"&&n.slice(0,e.value.length)===e.value)}function Ne(e,t){let n=t[e.name];return Boolean(e.value&&typeof n=="string"&&n.slice(-e.value.length)===e.value)}function ke(e,t){let n=t[e.name];return Boolean(e.value&&typeof n=="string"&&n.includes(e.value))}function Oe(e){throw new Error("Unknown operator `"+e.operator+"`")}var Se,q=m(()=>{Q();Se=k("operator",{unknown:Oe,invalid:V,handlers:{"=":Ae,"^=":Ie,"$=":Ne,"*=":ke,"~=":Ee}})});function ee(e,t){return e.tagName==="*"||e.tagName===t.type}var te=m(()=>{});function re(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,n=0,i=o(),r=s();if(t<e.length&&e.charAt(t)==="n"&&(t++,n=i*(r??1),u(),t<e.length?(i=o(),u(),r=s()):i=r=0),r===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[n,i*r];function o(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function s(){let f=t,c=0;for(;t<e.length&&e.charCodeAt(t)>=ne&&e.charCodeAt(t)<=Pe;)c=c*10+(e.charCodeAt(t)-ne),t++;return t===f?null:c}function u(){for(;t<e.length&&Te.has(e.charCodeAt(t));)t++}}var Te,ne,Pe,ie=m(()=>{Te=new Set([9,10,12,13,32]),ne="0".charCodeAt(0),Pe="9".charCodeAt(0)});var oe=E((wt,ue)=>{ue.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}});function le(e){let t=e[0],n=e[1]-1;if(n<0&&t<=0)return _.default.falseFunc;if(t===-1)return o=>o<=n;if(t===0)return o=>o===n;if(t===1)return n<0?_.default.trueFunc:o=>o>=n;let i=Math.abs(t),r=(n%i+i)%i;return t>1?o=>o>=n&&o%i===r:o=>o<=n&&o%i===r}var _,se=m(()=>{_=K(oe(),1)});function O(e){return le(re(e))}var ae=m(()=>{ie();se()});function x(e){return Array.isArray(e.children)}var T=m(()=>{});function U(e,t,n,i,r){let o=e.pseudos,s=-1;for(;++s<o.length;)if(!Me(o[s],t,n,i,r))return!1;return!0}function fe(e,t){return x(t)?t.children.length===0:!("value"in t)}function je(e,t,n,i,r){return y(r,e),r.nodeIndex===0}function Re(e,t,n,i,r){return y(r,e),r.typeIndex===0}function Qe(e,t,n,i,r){let o={type:"root",children:x(t)?t.children:[]},s={...r,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:I(e.value)};return C(s,o),s.results.length>0}function _e(e,t,n,i,r){return y(r,e),typeof r.nodeCount=="number"&&r.nodeIndex===r.nodeCount-1}function $e(e,t,n,i,r){return y(r,e),typeof r.typeCount=="number"&&r.typeIndex===r.typeCount-1}function $(e,t,n,i,r){let o={...r,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:I(e.value)};return C(o,t),o.results[0]===t}function Ue(e,t,n,i,r){return!$(e,t,n,i,r)}function ze(e,t,n,i,r){let o=P(e);return y(r,e),typeof r.nodeIndex=="number"&&o(r.nodeIndex)}function He(e,t,n,i,r){let o=P(e);return y(r,e),typeof r.nodeCount=="number"&&typeof r.nodeIndex=="number"&&o(r.nodeCount-r.nodeIndex-1)}function Be(e,t,n,i,r){let o=P(e);return y(r,e),typeof r.typeIndex=="number"&&typeof r.typeCount=="number"&&o(r.typeCount-1-r.typeIndex)}function De(e,t,n,i,r){let o=P(e);return y(r,e),typeof r.typeIndex=="number"&&o(r.typeIndex)}function Ze(e,t,n,i,r){return y(r,e),r.nodeCount===1}function Le(e,t,n,i,r){return y(r,e),r.typeCount===1}function We(e,t,n,i){return t&&!i}function Ge(e,t,n,i,r){return t&&r.scopeNodes.includes(t)}function Je(){throw new Error("Invalid pseudo-selector")}function Ke(e){throw e.name?new Error("Unknown pseudo-selector `"+e.name+"`"):new Error("Unexpected pseudo-element or empty pseudo-class")}function y(e,t){if(e.shallow)throw new Error("Cannot use `:"+t.name+"` without parent")}function P(e){let t=e._cachedFn;return t||(t=Fe(e.value),e._cachedFn=t),t}var Fe,Me,ce=m(()=>{ae();Q();T();z();Fe=O.default||O,Me=k("name",{unknown:Ke,invalid:Je,handlers:{any:$,blank:fe,empty:fe,"first-child":je,"first-of-type":Re,has:Qe,"last-child":_e,"last-of-type":$e,matches:$,not:Ue,"nth-child":ze,"nth-last-child":He,"nth-of-type":De,"nth-last-of-type":Be,"only-child":Ze,"only-of-type":Le,root:We,scope:Ge}});U.needsIndex=["any","first-child","first-of-type","last-child","last-of-type","matches","not","nth-child","nth-last-child","nth-of-type","nth-last-of-type","only-child","only-of-type"]});function de(e,t,n,i,r){if(e.id)throw new Error("Invalid selector: id");if(e.classNames)throw new Error("Invalid selector: class");return Boolean(t&&(!e.tagName||ee(e,t))&&(!e.attrs||Y(e,t))&&(!e.pseudos||U(e,t,n,i,r)))}var he=m(()=>{q();te();ce()});function I(e){return e===null?{type:"selectors",selectors:[]}:e.type==="ruleSet"?{type:"selectors",selectors:[e]}:e}function C(e,t){t&&ge(e,[],t,void 0,void 0)}function ge(e,t,n,i,r){let o={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};return o=Ve(e,F(t,e.rootQuery.selectors),n,i,r),x(n)&&!e.shallow&&!(e.one&&e.found)&&Ye(e,o,n),o}function Ye(e,t,n){let i=F(t.descendant,t.directChild),r,o=-1,s={count:0,types:new Map},u={count:0,types:new Map};for(;++o<n.children.length;)pe(s,n.children[o]);for(o=-1;++o<n.children.length;){let c=n.children[o].type.toUpperCase();e.nodeIndex=u.count,e.typeIndex=u.types.get(c)||0,e.nodeCount=s.count,e.typeCount=s.types.get(c);let d=F(i,r),N=ge(e,d,n.children[o],o,n);if(r=F(N.generalSibling,N.adjacentSibling),e.one&&e.found)break;pe(u,n.children[o])}}function Ve(e,t,n,i,r){let o={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0},s=-1;for(;++s<t.length;){let u=t[s];if(e.one&&e.found)break;if(e.shallow&&u.rule.rule)throw new Error("Expected selector without nesting");if(de(u.rule,n,i,r,e)){let f=u.rule.rule;if(f){let c={type:"ruleSet",rule:f},d=f.nestingOperator==="+"?"adjacentSibling":f.nestingOperator==="~"?"generalSibling":f.nestingOperator===">"?"directChild":"descendant";H(o,d,c)}else e.found=!0,e.results.includes(n)||e.results.push(n)}u.rule.nestingOperator===null?H(o,"descendant",u):u.rule.nestingOperator==="~"&&H(o,"generalSibling",u)}return o}function F(e,t){return e&&t&&e.length>0&&t.length>0?[...e,...t]:e&&e.length>0?e:t&&t.length>0?t:Xe}function H(e,t,n){let i=e[t];i?i.push(n):e[t]=[n]}function pe(e,t){let n=t.type.toUpperCase(),i=(e.types.get(n)||0)+1;e.count++,e.types.set(n,i)}var Xe,z=m(()=>{he();T();Xe=[]});var B=E(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});function qe(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="-"||e==="_"}g.isIdentStart=qe;function et(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="-"||e==="_"}g.isIdent=et;function tt(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"}g.isHex=tt;function nt(e){for(var t=e.length,n="",i=0;i<t;){var r=e.charAt(i);if(g.identSpecialChars[r])n+="\\"+r;else if(r==="_"||r==="-"||r>="A"&&r<="Z"||r>="a"&&r<="z"||i!==0&&r>="0"&&r<="9")n+=r;else{var o=r.charCodeAt(0);if((o&63488)===55296){var s=e.charCodeAt(i++);if((o&64512)!==55296||(s&64512)!==56320)throw Error("UCS-2(decode): illegal sequence");o=((o&1023)<<10)+(s&1023)+65536}n+="\\"+o.toString(16)+" "}i++}return n}g.escapeIdentifier=nt;function rt(e){for(var t=e.length,n="",i=0,r;i<t;){var o=e.charAt(i);o==='"'?o='\\"':o==="\\"?o="\\\\":(r=g.strReplacementsRev[o])!==void 0&&(o=r),n+=o,i++}return'"'+n+'"'}g.escapeStr=rt;g.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0};g.strReplacementsRev={"\n":"\\n","\r":"\\r","	":"\\t","\f":"\\f","\v":"\\v"};g.singleQuoteEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\","'":"'"};g.doubleQuotesEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\",'"':'"'}});var ve=E(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});var w=B();function it(e,t,n,i,r,o){var s=e.length,u="";function f(l,a){var h="";for(t++,u=e.charAt(t);t<s;){if(u===l)return t++,h;if(u==="\\"){t++,u=e.charAt(t);var p=void 0;if(u===l)h+=l;else if((p=a[u])!==void 0)h+=p;else if(w.isHex(u)){var S=u;for(t++,u=e.charAt(t);w.isHex(u);)S+=u,t++,u=e.charAt(t);u===" "&&(t++,u=e.charAt(t)),h+=String.fromCharCode(parseInt(S,16));continue}else h+=u}else h+=u;t++,u=e.charAt(t)}return h}function c(){var l="";for(u=e.charAt(t);t<s;){if(w.isIdent(u))l+=u;else if(u==="\\"){if(t++,t>=s)throw Error("Expected symbol but end of file reached.");if(u=e.charAt(t),w.identSpecialChars[u])l+=u;else if(w.isHex(u)){var a=u;for(t++,u=e.charAt(t);w.isHex(u);)a+=u,t++,u=e.charAt(t);u===" "&&(t++,u=e.charAt(t)),l+=String.fromCharCode(parseInt(a,16));continue}else l+=u}else return l;t++,u=e.charAt(t)}return l}function d(){u=e.charAt(t);for(var l=!1;u===" "||u==="	"||u===`
`||u==="\r"||u==="\f";)l=!0,t++,u=e.charAt(t);return l}function N(){var l=G();if(t<s)throw Error('Rule expected but "'+e.charAt(t)+'" found.');return l}function G(){var l=J();if(!l)return null;var a=l;for(u=e.charAt(t);u===",";){if(t++,d(),a.type!=="selectors"&&(a={type:"selectors",selectors:[l]}),l=J(),!l)throw Error('Rule expected after ",".');a.selectors.push(l)}return a}function J(){d();var l={type:"ruleSet"},a=R();if(!a)return null;for(var h=l;a&&(a.type="rule",h.rule=a,h=a,d(),u=e.charAt(t),!(t>=s||u===","||u===")"));)if(r[u]){var p=u;if(t++,d(),a=R(),!a)throw Error('Rule expected after "'+p+'".');a.nestingOperator=p}else a=R(),a&&(a.nestingOperator=null);return l}function R(){for(var l=null;t<s;)if(u=e.charAt(t),u==="*")t++,(l=l||{}).tagName="*";else if(w.isIdentStart(u)||u==="\\")(l=l||{}).tagName=c();else if(u===".")t++,l=l||{},(l.classNames=l.classNames||[]).push(c());else if(u==="#")t++,(l=l||{}).id=c();else if(u==="["){t++,d();var a={name:c()};if(d(),u==="]")t++;else{var h="";if(i[u]&&(h=u,t++,u=e.charAt(t)),t>=s)throw Error('Expected "=" but end of file reached.');if(u!=="=")throw Error('Expected "=" but "'+u+'" found.');a.operator=h+"=",t++,d();var p="";if(a.valueType="string",u==='"')p=f('"',w.doubleQuotesEscapeChars);else if(u==="'")p=f("'",w.singleQuoteEscapeChars);else if(o&&u==="$")t++,p=c(),a.valueType="substitute";else{for(;t<s&&u!=="]";)p+=u,t++,u=e.charAt(t);p=p.trim()}if(d(),t>=s)throw Error('Expected "]" but end of file reached.');if(u!=="]")throw Error('Expected "]" but "'+u+'" found.');t++,a.value=p}l=l||{},(l.attrs=l.attrs||[]).push(a)}else if(u===":"){t++;var S=c(),A={name:S};if(u==="("){t++;var b="";if(d(),n[S]==="selector")A.valueType="selector",b=G();else{if(A.valueType=n[S]||"string",u==='"')b=f('"',w.doubleQuotesEscapeChars);else if(u==="'")b=f("'",w.singleQuoteEscapeChars);else if(o&&u==="$")t++,b=c(),A.valueType="substitute";else{for(;t<s&&u!==")";)b+=u,t++,u=e.charAt(t);b=b.trim()}d()}if(t>=s)throw Error('Expected ")" but end of file reached.');if(u!==")")throw Error('Expected ")" but "'+u+'" found.');t++,A.value=b}l=l||{},(l.pseudos=l.pseudos||[]).push(A)}else break;return l}return N()}D.parseCssSelector=it});var me=E(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});var v=B();function M(e){var t="";switch(e.type){case"ruleSet":for(var n=e.rule,i=[];n;)n.nestingOperator&&i.push(n.nestingOperator),i.push(M(n)),n=n.rule;t=i.join(" ");break;case"selectors":t=e.selectors.map(M).join(", ");break;case"rule":e.tagName&&(e.tagName==="*"?t="*":t=v.escapeIdentifier(e.tagName)),e.id&&(t+="#"+v.escapeIdentifier(e.id)),e.classNames&&(t+=e.classNames.map(function(r){return"."+v.escapeIdentifier(r)}).join("")),e.attrs&&(t+=e.attrs.map(function(r){return"operator"in r?r.valueType==="substitute"?"["+v.escapeIdentifier(r.name)+r.operator+"$"+r.value+"]":"["+v.escapeIdentifier(r.name)+r.operator+v.escapeStr(r.value)+"]":"["+v.escapeIdentifier(r.name)+"]"}).join("")),e.pseudos&&(t+=e.pseudos.map(function(r){return r.valueType?r.valueType==="selector"?":"+v.escapeIdentifier(r.name)+"("+M(r.value)+")":r.valueType==="substitute"?":"+v.escapeIdentifier(r.name)+"($"+r.value+")":r.valueType==="numeric"?":"+v.escapeIdentifier(r.name)+"("+r.value+")":":"+v.escapeIdentifier(r.name)+"("+v.escapeIdentifier(r.value)+")":":"+v.escapeIdentifier(r.name)}).join(""));break;default:throw Error('Unknown entity type: "'+e.type+'".')}return t}Z.renderEntity=M});var we=E(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});var ut=ve(),ot=me(),lt=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];this.pseudos[o]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];delete this.pseudos[o]}return this},e.prototype.registerNumericPseudos=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];this.pseudos[o]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];delete this.pseudos[o]}return this},e.prototype.registerNestingOperators=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];this.ruleNestingOperators[o]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];delete this.ruleNestingOperators[o]}return this},e.prototype.registerAttrEqualityMods=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];this.attrEqualityMods[o]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];delete this.attrEqualityMods[o]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(t){return ut.parseCssSelector(t,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(t){return ot.renderEntity(t).trim()},e}();L.CssSelectorParser=lt});function be(e){if(typeof e!="string")throw new TypeError("Expected `string` as selector, not `"+e+"`");return j.parse(e)}var ye,j,xe=m(()=>{ye=K(we(),1),j=new ye.CssSelectorParser;j.registerAttrEqualityMods("~","^","$","*");j.registerSelectorPseudos("any","matches","not","has");j.registerNestingOperators(">","+","~")});var ct={};Ce(ct,{matches:()=>st,select:()=>at,selectAll:()=>ft});function st(e,t){let n=W(e,t);return n.one=!0,n.shallow=!0,C(n,t||void 0),n.results.length>0}function at(e,t){let n=W(e,t);return n.one=!0,C(n,t||void 0),n.results[0]||null}function ft(e,t){let n=W(e,t);return C(n,t||void 0),n.results}function W(e,t){return{rootQuery:I(be(e)),results:[],scopeNodes:t?x(t)&&(t.type==="RootNode"||t.type==="root")?t.children:[t]:[],one:!1,shallow:!1,found:!1,typeIndex:void 0,nodeIndex:void 0,typeCount:void 0,nodeCount:void 0}}var dt=m(()=>{z();xe();T()});export{k as a,Q as b,at as c,ft as d,ct as e,dt as f};
