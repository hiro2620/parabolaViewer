(this["webpackJsonpuct-graph"]=this["webpackJsonpuct-graph"]||[]).push([[0],{113:function(t,e,a){},115:function(t,e,a){},264:function(t,e,a){"use strict";a.r(e);var c=a(2),n=a(1),r=a.n(n),i=a(22),o=a.n(i),s=(a(113),a(20)),l=(a(114),a(115),a(268)),j=a(269),x=a(99),u=a(59),b="10";function d(t){var e=t.viewBoxSize,a=t.lineCount,n=t.viewBoxPadding,r=e/2/a;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("path",{d:"M0 ".concat(e/2+n," h").concat(e+n/2," l-5 2 l2 -2 l-2 -2 l5 2"),fill:"gray",stroke:"gray",strokeWidth:"0.5"}),Object(c.jsx)("text",{x:"".concat(e+n/2),y:"".concat(n+e/2),dx:8,dy:3,fontFamily:"serif",fontSize:b,strokeWidth:"0",fill:"gray",children:"x"}),Object(c.jsx)("path",{d:"M".concat(e/2," ").concat(n/2," l2 5 l-2 -2 l-2 2 l 2 -5 v").concat(e+n/2),fill:"gray",stroke:"gray",strokeWidth:"0.5"}),Object(c.jsx)("text",{x:"".concat(e/2),y:"".concat(n/2),dx:-3,dy:-8,fontFamily:"serif",fontSize:b,strokeWidth:"0",fill:"gray",children:"y"}),Object(c.jsx)("text",{x:"".concat(e/2),y:"".concat(e/2+n),dx:2,dy:10,fontFamily:"serif",fontSize:b,strokeWidth:"0",fill:"gray",children:"O"}),Object(u.a)(Array(2*a+1).keys()).map((function(t){return Object(c.jsx)("path",{d:"M0 ".concat(r*t+n," h200"),fill:"none",stroke:"gray",strokeWidth:"0.15"},t.toString())})),Object(u.a)(Array(2*a+1).keys()).map((function(t){return Object(c.jsx)("path",{d:"M".concat(r*t," ").concat(n," v200"),fill:"none",stroke:"gray",strokeWidth:"0.15"},t.toString())}))]})}var h="#0075FF";function O(t){var e=t.viewBoxSize,a=t.viewBoxPadding,n=t.maxValue,r=t.showControlPoints,i=t.showVertexPoint,o=t.funcParams,s=o.a,l=o.b,j=o.c,x=function(t){return e/(2*n)*t+e/2},u=function(t){return-e/(2*n)*t+e/2},b=function(t){return s*Math.pow(t,2)+l*t+j},d=function(t){return 2*s*t+l},O=2*n/3,y={x:x(n),y:u(b(n))},p={x:x(n-O),y:u(b(n)-d(n)*O)},f={x:x(-n+O),y:u(b(-n)+d(-n)*O)},g={x:x(-n),y:u(b(-n))};return Object(c.jsxs)("svg",{width:e,height:e,x:0,y:a,children:[Object(c.jsx)("path",{d:"M ".concat(y.x," ").concat(y.y," C ").concat(p.x," ").concat(p.y,", ").concat(f.x," ").concat(f.y,", ").concat(g.x," ").concat(g.y),stroke:"#263165",fill:"transparent"}),r&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("circle",{cx:y.x,cy:y.y,r:"2",fill:h,opacity:.5}),Object(c.jsx)("circle",{cx:p.x,cy:p.y,r:"2",fill:h,opacity:.5}),Object(c.jsx)("path",{d:"M ".concat(y.x," ").concat(y.y," L").concat(p.x," ").concat(p.y),stroke:h,opacity:.5}),Object(c.jsx)("circle",{cx:f.x,cy:f.y,r:"2",fill:h,opacity:.5}),Object(c.jsx)("circle",{cx:g.x,cy:g.y,r:"2",fill:h,opacity:.5}),Object(c.jsx)("path",{d:"M ".concat(g.x," ").concat(g.y," L").concat(f.x," ").concat(f.y),stroke:h,opacity:.5})]}),i&&Object(c.jsx)("rect",{x:x(-l/(2*s))-3,y:u(b(-l/(2*s)))-3,width:"6",height:"6",fill:h,opacity:.8})]})}var y=a(271),p=a(266),f=a(267),g=a(39);function m(t){var e=t.value,a=t.allowZero,n=t.label;return Object(c.jsxs)(y.a.Group,{children:[Object(c.jsx)(y.a.Label,{style:{display:"block"},children:n}),Object(c.jsxs)(p.a,{children:[Object(c.jsx)(f.a,{variant:"secondary",onClick:function(){(a||e>1)&&t.setValue(e-1)},children:Object(c.jsx)(g.a,{})}),Object(c.jsx)(y.a.Control,{type:"text","aria-label":n,style:{maxWidth:"3rem"},value:e,readOnly:!0}),Object(c.jsx)(f.a,{variant:"secondary",onClick:function(){t.setValue(e+1)},children:Object(c.jsx)(g.b,{})})]})]})}var v=200;function w(t){var e=t.label,a=t.value;return Object(c.jsx)("span",{style:t.style,children:Object(c.jsx)(y.a.Group,{children:Object(c.jsx)(y.a.Check,{type:"checkbox",label:e,onChange:t.handleChange,value:a})})})}function k(t){var e=t.maxValue,a=t.funcParams,n=r.a.useState(!1),i=Object(s.a)(n,2),o=i[0],l=i[1],j=r.a.useState(!1),x=Object(s.a)(j,2),u=x[0],b=x[1];return Object(c.jsxs)("section",{style:{position:"relative"},children:[Object(c.jsxs)("svg",{viewBox:"0 0 ".concat(230," ").concat(230),xmlns:"http://www.w3.org/2000/svg",style:{width:"100%"},children:[Object(c.jsx)(d,{viewBoxSize:v,viewBoxPadding:30,lineCount:e}),Object(c.jsx)(O,{viewBoxSize:v,viewBoxPadding:30,maxValue:e,funcParams:a,showControlPoints:o,showVertexPoint:u})]}),Object(c.jsxs)("section",{style:{position:"absolute",top:0,right:10},children:[Object(c.jsx)(w,{label:"\u5236\u5fa1\u70b9\u3092\u8868\u793a",value:o,handleChange:function(){return l(!o)}}),Object(c.jsx)(w,{label:"\u9802\u70b9\u3092\u8868\u793a",value:u,handleChange:function(){return b(!u)}}),Object(c.jsx)(m,{value:e,setValue:t.setMaxValue,label:"\u8ef8\u306e\u7bc4\u56f2",allowZero:!1})]})]})}var C=a(57),S=a(58),P=a(40);function V(t,e){return Math.round(t*e)/e}function M(t){var e,a=t.letter,n=t.funcParams,r=t.maxInputValue,i=n.a,o=n.b,s=n.c,l="p"===a?-o/(2*i):"q"===a?s-Math.pow(o,2)/(4*i):Number(n[a]),j=function(e){t.handleChange("p"===a?{b:Number(-2*i*e),c:Number(i*Math.pow(e,2)+s-Math.pow(o,2)/(4*i))}:"q"===a?{c:Number(i*Math.pow(-o/(2*i),2)+e)}:Object(P.a)({},a,Number(e)))};return Object(c.jsx)(y.a,{style:{width:"100%",marginBottom:30},children:Object(c.jsxs)(y.a.Group,{children:[Object(c.jsx)(y.a.Label,{style:{fontFamily:"serif",fontSize:20,color:"#333"},children:a}),Object(c.jsx)(y.a.Control,{value:V(l,100),onChange:function(t){j(t.target.value)},type:"number",style:{display:"inline-block",width:"7rem",marginLeft:20}}),Object(c.jsx)(y.a.Control,{type:"range",onChange:function(t){var e=(t.target.value-50)/(100/(2*r));j(e)},value:(e=l,100*(e+r)/(2*r)),style:{color:"black"}})]})})}var F=a(100);function B(t){var e=t.texString;return Object(c.jsx)(F.a,{tex:e})}function z(){var t=Object(C.a)(["y=a(x-p)^2+q"]);return z=function(){return t},t}function I(){var t=Object(C.a)(["y=ax^2+bx+c"]);return I=function(){return t},t}function L(t){return Object(c.jsx)("section",{style:{padding:"10px 20px",border:"3px solid #0075FF",borderRadius:4,marginBottom:10},children:t.children})}function W(t){var e=t.funcParams,a=t.maxInputValue,n=function(a){t.setFuncParams(Object(S.a)(Object(S.a)({},e),a))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L,{children:Object(c.jsx)(B,{texString:String.raw(I())})}),Object(c.jsx)(L,{children:["a","b","c"].map((function(t){return Object(c.jsx)(M,{letter:t,funcParams:e,handleChange:n,maxInputValue:a},t)}))}),Object(c.jsx)(L,{children:Object(c.jsx)(B,{texString:String.raw(z())})}),Object(c.jsx)(L,{children:["a","p","q"].map((function(t){return Object(c.jsx)(M,{letter:t,funcParams:e,handleChange:n,maxInputValue:a},t)}))}),Object(c.jsx)(m,{value:a,setValue:t.setMaxInputValue,allowZero:!1,label:"\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u7bc4\u56f2"})]})}var N=a(270),q=a(272),A=a.p+"static/media/icon1.8804d4aa.svg",G=a.p+"static/media/icon2.24d755a4.svg",T=a.p+"static/media/icon3.bb197821.svg",Z=a.p+"static/media/icon4.aab7457b.svg",J=a.p+"static/media/icon5.7b577b64.svg",D=a.p+"static/media/icon6.bda9a303.svg",E=a(107);function R(){return Object(c.jsx)(N.a,{bg:"sub",fixed:"top",style:{borderBottom:"4px solid #263165",boxSizing:"border-box",padding:0},children:Object(c.jsxs)(N.a.Collapse,{children:[Object(c.jsx)(q.a,{className:"mr-auto",children:[A,G,T,Z,J,D].map((function(t,e){return Object(c.jsx)(q.a.Link,{href:"#",children:Object(c.jsx)("img",{src:t,alt:"icon".concat(e+1),style:{padding:0,background:"white",border:"3px solid #263165"}})},e)}))}),Object(c.jsx)(q.a.Link,{href:"https://github.com/hiro2620/parabolaViewer/tree/master",children:Object(c.jsx)(E.a,{style:{width:28,height:28}})})]})})}var H={a:1,b:0,c:0};var K=function(){var t=Object(n.useState)(H),e=Object(s.a)(t,2),a=e[0],r=e[1],i=Object(n.useState)(10),o=Object(s.a)(i,2),u=o[0],b=o[1],d=Object(n.useState)(10),h=Object(s.a)(d,2),O=h[0],y=h[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(R,{}),Object(c.jsx)(l.a,{style:{marginTop:70},children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(x.a,{xs:12,lg:4,children:Object(c.jsx)("section",{children:Object(c.jsx)(W,{funcParams:a,setFuncParams:r,maxInputValue:O,setMaxInputValue:y})})}),Object(c.jsx)(x.a,{xs:12,lg:8,children:Object(c.jsx)(k,{maxValue:u,setMaxValue:b,funcParams:a})})]})})]})},Q=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,273)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),r(t),i(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root")),Q()}},[[264,1,2]]]);
//# sourceMappingURL=main.5a0ba966.chunk.js.map