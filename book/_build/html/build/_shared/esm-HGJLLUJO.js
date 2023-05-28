import{c as y,d as A,f as H}from"/build/_shared/chunk-MMC7DYY7.js";import{b as k,i as B}from"/build/_shared/chunk-QCCLA5MS.js";import"/build/_shared/chunk-RAQ24GF6.js";H();function P(r){return r===1?"p{\\dimexpr \\linewidth-2\\tabcolsep}":`p{\\dimexpr ${r.toFixed(3)}\\linewidth-2\\tabcolsep}`}function T(r){var e,i,n;let t=[],l=0;for(let u=0;u<r.children.length;u+=1){let p=r.children[u].children.reduce((h,g)=>{var v,L;let J=new Array((v=g.colspan)!==null&&v!==void 0?v:1).fill(g.width?g.width/((L=g.colspan)!==null&&L!==void 0?L:1):null);return[...h,...J]},[]),w=p.filter(h=>h>0).length;if((u===0||w>=l)&&(l=w,t=p,l===p.length))break}let o;if(l===t.length)o=t;else{let m=886-t.reduce((h,g)=>g==null?h:h+g,0),p=t.length-l,w=Math.floor(m/p);o=t.map(h=>h==null||h===0?w:h)}let a=o.reduce((u,m)=>u+m,0),c=o.map(u=>u/a),d=c.map(u=>P(u)).join(""),s=o.length>0?o.length:(n=(i=(e=r?.children[0])===null||e===void 0?void 0:e.children)===null||i===void 0?void 0:i.length)!==null&&n!==void 0?n:0;return{widths:c,columnSpec:d,numColumns:s}}function E(r,e,i,n,t,l){var o;let a=1,c=(o=e.colspan)!==null&&o!==void 0?o:1;if(c>1){let d=0;for(let s=0;s<c;s+=1)d+=t[n+s];r.write(`\\multicolumn{${c}}{${P(d)}}{`),a=c}return e.children.length===1&&e.children[0].type==="paragraph"?r.renderChildren(e.children[0],!0):r.renderChildren(e,!0),c>1&&r.write("}"),i<l-1&&r.write(" & "),a}function W(r,e){e.usePackages("booktabs");let{widths:i,columnSpec:n,numColumns:t}=T(r);if(!t)throw new Error("invalid table format, no columns");e.data.isInTable=!0,e.ensureNewLine();let l=0;if(e.data.longFigure){e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine();let o=!1;r.children.forEach(({children:a})=>{var c,d;if(!o){if(!((c=a[0])===null||c===void 0)&&c.header){l+=1;let s=0;a.forEach((u,m)=>{s+=E(e,u,m,s,i,a.length)}),e.write(" \\\\"),e.ensureNewLine()}!((d=a[0])===null||d===void 0)&&d.header||(o=!0)}}),l>0&&(e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endfirsthead"),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write(`\\multicolumn{${t}}{c}{\\tablename\\ \\thetable\\ -- \\textit{Continued from previous page}}\\\\`),e.ensureNewLine(),r.children.forEach(({children:a},c)=>{if(c>=l)return;let d=0;a.forEach((s,u)=>{d+=E(e,s,u,d,i,a.length)}),e.write(" \\\\"),e.ensureNewLine()}),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endhead"),e.ensureNewLine())}else e.write(`\\begin{tabular}{${n}}`),e.ensureNewLine(),e.write("\\toprule"),e.ensureNewLine();r.children.forEach(({children:o},a)=>{var c;if(a<l)return;let d=0;o.forEach((s,u)=>{d+=E(e,s,u,d,i,o.length)}),e.write(" \\\\"),e.ensureNewLine(),!((c=o[0])===null||c===void 0)&&c.header&&(e.write("\\hline"),e.ensureNewLine())}),e.data.longFigure?e.write("\\hline"):(e.write("\\bottomrule"),e.ensureNewLine(),e.write("\\end{tabular}")),e.closeBlock(r),e.data.isInTable=!1}var f;(function(r){r.fig="fig",r.eq="eq",r.code="code",r.table="table"})(f||(f={}));function Q(r){switch(r.type){case"iframe":case"image":return f.fig;case"table":return f.table;case"code":return f.code;case"math":return f.eq;default:return null}}function $(r){var e;let i=Q(r);return(e=r.children)===null||e===void 0||e.forEach(n=>{i||(i=$(n))}),i}function V(r){switch($(r)){case f.fig:return r.fullpage?"figure*":"figure";case f.table:return r.fullpage?"table*":"table";case f.code:return"code";case f.eq:return"figure";default:return"figure"}}function Y(r){switch($(r)){case f.fig:case f.table:return"!htbp";case f.code:return"H";case f.eq:default:return}}var D=(r,e)=>{var i;if(e.data.isInTable){e.renderChildren(r);return}let n=y("table",r),t=!!n,l;n&&r.multipage&&(l=T(n));let o,a;r.landscape&&(e.usePackages("pdflscape"),o="\\begin{landscape}",a="\\end{landscape}");let{enumerated:c,label:d,identifier:s,multipage:u}=r,m=(i=d??s)!==null&&i!==void 0?i:void 0,p=t&&u?"longtable":V(r);p==="longtable"&&e.usePackages("longtable");let w=t&&l?l.columnSpec:void 0,h=t?void 0:Y(r);o&&e.write(o);let g=w?`{${w}}`:"",v=h?`[${h}]`:"";e.write(`\\begin{${p}}${g}${v}
`),(!u||!t)&&e.write("\\centering"),e.ensureNewLine(),e.data.longFigure=u,e.data.nextCaptionNumbered=c??!!m,e.data.nextCaptionId=m,e.renderChildren(r),e.trimEnd(),e.data.longFigure=void 0,e.write(`
\\end{${p}}`),a&&e.write(a),e.closeBlock(r)},S=(r,e)=>{if(e.data.isInTable&&r.type!==f.table)return null;e.ensureNewLine(!0);let{nextCaptionNumbered:i,nextCaptionId:n}=e.data,t=i===!1?"caption*":"caption",l=i&&n?`\\label{${n}}`:"";e.renderInlineEnvironment(r,t,{after:l})};function M(r,e=" "){return r.replace(/\u00A0/g,e).replace(/[\u200B-\u200D\uFEFF]/g,"")}var O="\u{1F4A5}\u{1F3AF}BACKSLASHSPACE\u{1F3AF}\u{1F4A5}",j="\u{1F4A5}\u{1F3AF}BACKSLASH\u{1F3AF}\u{1F4A5}",F="\u{1F4A5}\u{1F3AF}TILDE\u{1F3AF}\u{1F4A5}",N={"&":"\\&","%":"\\%",$:"\\$","#":"\\#",_:"\\_","{":"\\{","}":"\\}","^":"\\^"},re=Object.assign(Object.assign({},N),{"\u2019":"'","\u2018":"`","\u201D":"''","\u201C":"``","\xBB":">>","\xAB":"<<","\u2026":"\\dots","\u2013":"--","\u2014":"---","\xA9":"\\textcopyright ","\xAE":"\\textregistered ","\u2122":"\\texttrademark ","<":"\\textless ",">":"\\textgreater ","\u202F":"~"}),q={"\u2194":"\\leftrightarrow","\u21D4":"\\Leftrightarrow","\u2192":"\\rightarrow","\u21D2":"\\Rightarrow","\u2190":"\\leftarrow","\u21D0":"\\Leftarrow"},U={"\u2212":"-","-":"-","\uFE63":"-","\uFF0D":"-","\uFF0B":"+"},R=Object.assign(Object.assign(Object.assign({},re),q),U),x=Object.assign(Object.assign(Object.assign({},q),U),{"\xBD":"\\frac{1}{2}","\u2153":"\\frac{1}{3}","\u2154":"\\frac{2}{3}","\xBC":"\\frac{1}{4}","\u2155":"\\frac{1}{5}","\u2156":"\\frac{2}{5}","\u2157":"\\frac{3}{5}","\u2158":"\\frac{4}{5}","\u2159":"\\frac{1}{6}","\u215A":"\\frac{5}{6}","\u2150":"\\frac{1}{7}","\u215B":"\\frac{1}{8}","\u215C":"\\frac{3}{8}","\u215D":"\\frac{5}{8}","\u215E":"\\frac{7}{8}","\u2151":"\\frac{1}{9}","\u2152":"\\frac{1}{10}","\xB1":"\\pm","\xD7":"\\times",\u0391:"A",\u03B1:"\\alpha",\u0392:"B",\u03B2:"\\beta",\u00DF:"\\beta",\u0393:"\\Gamma",\u03B3:"\\gamma",\u0394:"\\Delta","\u2206":"\\Delta",\u03B4:"\\delta",\u0395:"E",\u03B5:"\\epsilon",\u0396:"Z",\u03B6:"\\zeta",\u0397:"H",\u03B7:"\\eta",\u0398:"\\Theta",\u03B8:"\\theta",\u03D1:"\\vartheta",\u0399:"I",\u03B9:"\\iota",\u039A:"K",\u03BA:"\\kappa",\u039B:"\\Lambda",\u03BB:"\\lambda",\u039C:"M",\u03BC:"\\mu",\u039D:"N",\u03BD:"\\nu",\u039E:"\\Xi",\u03BE:"\\xi",\u039F:"O",\u03BF:"o",\u03A0:"\\Pi",\u03C0:"\\pi",\u03A1:"P",\u03C1:"\\rho",\u03A3:"\\Sigma",\u03C3:"\\sigma",\u03A4:"T",\u03C4:"\\tau",\u03A5:"\\Upsilon",\u03C5:"\\upsilon",\u03A6:"\\Phi",\u03D5:"\\phi",\u03C6:"\\varphi",\u03A7:"X",\u03C7:"\\chi",\u03A8:"\\Psi",\u03C8:"\\psi",\u03A9:"\\Omega",\u03C9:"\\omega","\u2202":"\\partial","\u221E":"\\infty","\u2248":"\\approx","\u2260":"\\neq","\u2022":"\\cdot"});function _(r){return Array(...r??"").map(n=>N[n]?{kind:"text",text:N[n]}:{kind:"text",text:n}).reduce((n,t)=>{let l=n.slice(-1)[0];return l?.kind===t.kind?l.text+=t.text:n.push(t),n},[]).reduce((n,t)=>n+t.text,"")}function G(r){let e=(r??"").replace(/\\ /g,O).replace(/\\/g,j).replace(/~/g,F),t=Array(...e).map(l=>R[l]?{kind:"text",text:R[l]}:x[l]?{kind:"math",text:x[l]}:{kind:"text",text:l}).reduce((l,o)=>{let a=l.slice(-1)[0];return a?.kind===o.kind?a.text+=o.text:l.push(o),l},[]).reduce((l,o)=>o.kind==="math"?`${l}$${o.text}$`:l+o.text,"").replace(new RegExp(O,"g"),"{\\textbackslash}~").replace(new RegExp(j,"g"),"{\\textbackslash}").replace(new RegExp(F,"g"),"{\\textasciitilde}");return M(t,"~")}function X(r){let i=Array(...r??"").reduce((n,t)=>{if(x[t]){let l=n.slice(-1)===" "?"":" ";return`${n}${l}${x[t]}`}return n+t},"").trim();return M(i)}function b(r){if(typeof r=="number"&&Number.isNaN(r))return b(.7);if(typeof r=="string")return r.endsWith("%")?b(Number(r.replace("%",""))):r.endsWith("px")?b(Number(r.replace("px",""))/800):(console.log(`Unknown width ${r} in getLatexImageWidth`),b(.7));let e=r??.7;return e<1&&(e*=100),`${e/100}\\linewidth`}function K(r,e){!e.options.math||Object.entries(e.options.math).forEach(([i,n])=>{r.includes(i)&&(e.data.mathPlugins[i]=n)})}var ne=(r,e)=>{let{label:i,enumerated:n}=r;e.usePackages("amsmath"),K(r.value,e),e.data.isInTable?(e.write("\\(\\displaystyle "),e.write(r.value),e.write(" \\)")):(e.write(`\\begin{equation${n===!1?"*":""}}
`),i&&e.write(`\\label{${i}}`),e.ensureNewLine(),e.write(r.value),e.ensureNewLine(!0),e.write(`\\end{equation${n===!1?"*":""}}`)),e.data.isInTable||e.closeBlock(r)},ie=(r,e)=>{e.usePackages("amsmath"),K(r.value,e),e.write("$"),e.text(r.value,!0),e.write("$")},le={math:ne,inlineMath:ie},z=le;H();var Z=Object.assign(Object.assign({text(r,e){e.text(r.value)},paragraph(r,e){e.renderChildren(r)},heading(r,e){let{depth:i,label:n,enumerated:t}=r;if(e.data.nextHeadingIsFrameTitle)e.write("\\frametitle{"),e.data.nextHeadingIsFrameTitle=!1;else{let l=t!==!1||e.options.beamer?"":"*";i===1&&e.write(`\\section${l}{`),i===2&&e.write(`\\subsection${l}{`),i===3&&e.write(`\\subsubsection${l}{`),i===4&&e.write(`\\paragraph${l}{`),i===5&&e.write(`\\subparagraph${l}{`),i===6&&e.write(`\\subparagraph${l}{`)}e.renderChildren(r,!0),e.write("}"),t!==!1&&n&&e.write(`\\label{${n}}`),e.closeBlock(r)},block(r,e){var i,n,t;if(e.options.beamer){if(!((i=r.data)===null||i===void 0)&&i.outline){e.data.nextHeadingIsFrameTitle=!1,e.renderChildren(r,!1);return}((t=(n=r.children)===null||n===void 0?void 0:n[0])===null||t===void 0?void 0:t.type)==="heading"&&(e.data.nextHeadingIsFrameTitle=!0),e.write(`

\\begin{frame}
`),e.renderChildren(r,!1),e.write(`\\end{frame}

`);return}e.renderChildren(r,!1)},blockquote(r,e){e.renderEnvironment(r,"quote")},definitionList(r,e){e.write(`\\begin{description}
`),e.renderChildren(r,!0),e.ensureNewLine(),e.write("\\end{description}"),e.closeBlock(r)},definitionTerm(r,e){e.ensureNewLine(),e.write("\\item["),e.renderChildren(r,!0),e.write("] ")},definitionDescription(r,e){e.renderChildren(r,!0)},code(r,e){e.write(`\\begin{verbatim}
`),e.text(r.value,!0),e.write(`
\\end{verbatim}`),e.closeBlock(r)},list(r,e){e.data.isInTable?r.children.forEach((i,n)=>{e.write(r.ordered?`${n}.~~`:"\\textbullet~~"),e.renderChildren(i,!0),e.write("\\newline"),e.ensureNewLine()}):e.renderEnvironment(r,r.ordered?"enumerate":"itemize",{parameters:r.ordered&&r.start!==1?"resume":void 0})},listItem(r,e){e.write("\\item "),e.renderChildren(r,!0),e.write(`
`)},thematicBreak(r,e){e.write(`
\\bigskip
\\centerline{\\rule{13cm}{0.4pt}}
\\bigskip`),e.closeBlock(r)}},z),{mystRole(r,e){e.renderChildren(r,!0)},mystDirective(r,e){e.renderChildren(r,!1)},mystComment(r,e){var i,n;e.ensureNewLine(),e.write(`% ${(n=(i=r.value)===null||i===void 0?void 0:i.split(`
`).join(`
% `))!==null&&n!==void 0?n:""}`),e.closeBlock(r)},comment(r,e){var i,n;e.ensureNewLine(),e.write(`% ${(n=(i=r.value)===null||i===void 0?void 0:i.split(`
`).join(`
% `))!==null&&n!==void 0?n:""}`),e.closeBlock(r)},strong(r,e){e.renderInlineEnvironment(r,"textbf")},emphasis(r,e){e.renderInlineEnvironment(r,"textit")},underline(r,e){e.renderInlineEnvironment(r,"uline")},inlineCode(r,e){e.write("\\texttt{"),e.text(r.value,!1),e.write("}")},subscript(r,e){e.renderInlineEnvironment(r,"textsubscript")},superscript(r,e){e.renderInlineEnvironment(r,"textsuperscript")},delete(r,e){e.usePackages("ulem"),e.renderInlineEnvironment(r,"sout")},break(r,e){e.write("\\newline"),e.ensureNewLine()},abbreviation(r,e){e.renderChildren(r,!0)},link(r,e){var i;e.usePackages("url","hyperref");let n=r.url;if(((i=r.children[0])===null||i===void 0?void 0:i.value)===n){e.write("\\url{"),e.write(_(n)),e.write("}");return}e.write("\\href{"),e.write(_(n)),e.write("}{"),e.renderChildren(r,!0),e.write("}")},admonition(r,e){e.usePackages("framed"),e.renderEnvironment(r,"framed")},admonitionTitle(r,e){e.renderInlineEnvironment(r,"textbf"),e.write(`\\\\
`)},table:W,image(r,e){e.usePackages("graphicx");let{width:i,url:n,align:t}=r,l=n,o=b(i);e.write(`\\includegraphics[width=${o}]{${l}}`),e.closeBlock(r)},container:D,caption:S,captionNumber:()=>{},crossReference(r,e){var i,n;let t=((n=(i=r.template)!==null&&i!==void 0?i:B(r))===null||n===void 0?void 0:n.replace(/\s/g,"~"))||"%s",l=r.label;e.write(t.replace(/%s/g,`\\ref{${l}}`))},citeGroup(r,e){if(e.options.citestyle==="numerical-only")e.write("\\cite{");else if(e.options.bibliography==="biblatex"){let i=r.kind==="narrative"?"textcite":"parencite";e.write(`\\${i}{`)}else{let i=r.kind==="narrative"?"t":"p";e.write(`\\cite${i}{`)}e.renderChildren(r,!0,", "),e.write("}")},cite(r,e,i){e.options.bibliography||e.usePackages("natbib"),i.type==="citeGroup"?e.write(r.label):e.options.bibliography==="biblatex"?e.write(`\\textcite{${r.label}}`):e.write(`\\cite{${r.label}}`)},embed(r,e){e.renderChildren(r,!0)},include(r,e){e.renderChildren(r,!0)},footnoteReference(r,e){if(!r.identifier)return;let i=e.footnotes[r.identifier];if(!i){k(e.file,`Unknown footnote identifier "${r.identifier}"`,{node:r,source:"myst-to-tex"});return}e.write("\\footnote{"),e.renderChildren(i,!0),e.trimEnd(),e.write("}")}}),C=class{constructor(e,i,n){var t,l;e.result="",this.file=e,this.options=n??{},this.data={mathPlugins:{},imports:new Set},this.handlers=(t=n?.handlers)!==null&&t!==void 0?t:Z,this.references=(l=n?.references)!==null&&l!==void 0?l:{},this.footnotes=Object.fromEntries(A("footnoteDefinition",i).map(o=>{let a=o;return[a.identifier,a]})),this.renderChildren(i)}get out(){return this.file.result}usePackages(...e){e.forEach(i=>{this.data.imports.add(i)})}write(e){this.file.result+=e}text(e,i=!1){let n=i?X(e):G(e);this.write(n)}trimEnd(){this.file.result=this.out.trimEnd()}ensureNewLine(e=!1){e&&this.trimEnd(),!this.out.endsWith(`
`)&&this.write(`
`)}renderChildren(e,i=!1,n=""){var t,l,o;let a=(l=(t=e.children)===null||t===void 0?void 0:t.length)!==null&&l!==void 0?l:0;(o=e.children)===null||o===void 0||o.forEach((c,d)=>{let s=this.handlers[c.type];s?s(c,this,e):k(this.file,`Unhandled LaTeX conversion for node of "${c.type}"`,{node:c,source:"myst-to-tex"}),n&&d+1<a&&this.write(n)}),i||this.closeBlock(e)}renderEnvironment(e,i,n){let t=n?.parameters?`[${n.parameters}]`:"",l=n?.arguments?`{${n.arguments.join("}{")}}`:"";this.file.result+=`\\begin{${i}}${t}${l}
`,this.renderChildren(e,!0),this.ensureNewLine(!0),this.file.result+=`\\end{${i}}`,this.closeBlock(e)}renderInlineEnvironment(e,i,n){this.file.result+=`\\${i}{`,this.renderChildren(e,!0),this.trimEnd(),this.file.result+="}",n?.after&&(this.ensureNewLine(!0),this.write(n.after))}closeBlock(e){this.ensureNewLine(!0),this.file.result+=`
`}},te=function(r){return this.Compiler=(e,i)=>{let n=new C(i,e,r??{handlers:Z}),t=i.result.trim(),l={imports:[...n.data.imports],commands:n.data.mathPlugins,value:t};return i.result=l,i},e=>e},xe=te;export{xe as default};
