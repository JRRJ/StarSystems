(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Bl7J:function(t,e,n){"use strict";var c=n("IRj2"),r=n("q1tI"),a=n.n(r),i=n("Wbzz"),l=n("PcS7"),s=n("2A+t"),o=function(t){var e=t.siteTitle;return Object(s.c)("header",null,Object(s.c)("div",null,Object(s.c)(i.Link,{to:"/"},Object(s.c)("h1",{sx:{textAlign:"center",fontSize:7}},e))))};o.defaultProps={siteTitle:""};var u=o;e.a=function(t){var e=t.children,n=Object(l.b)(),r=n[0],o=n[1],b=c.data;return Object(s.c)(a.a.Fragment,null,Object(s.c)("div",{sx:{margin:"0 auto",maxWidth:960,padding:"0 5"}},Object(s.c)(u,{siteTitle:b.site.siteMetadata.title}),Object(s.c)("nav",null,Object(s.c)("ul",{sx:{display:"grid",gridAutoFlow:"column",li:{display:"inline"}}},Object(s.c)("li",null,Object(s.c)(i.Link,{to:"/stars-in-10-ly/"},"Star Systems: 10ly")),Object(s.c)("li",null,Object(s.c)(i.Link,{to:"/planets-in-100-ly/"},"Planets: 100ly")),Object(s.c)("li",null,Object(s.c)(i.Link,{to:"/search"},"Search Systems")),Object(s.c)("li",null,Object(s.c)("button",{onClick:function(t){o("default"===r?"dark":"default")}},"default"===r?"Light":"Dark")))),Object(s.c)("main",null,e)))}},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Near Stars"}}}}')},a5FG:function(t,e,n){"use strict";n.r(e);n("f3/d"),n("q1tI");var c=n("Bl7J"),r=(n("Vd3H"),n("2A+t")),a=function(t){var e=t.planet;return Object(r.c)("div",null,Object(r.c)("h3",null,e.planetName),Object(r.c)("div",{sx:{display:"grid",gridTemplateColumns:"auto 1fr",gridAutoRows:"1.75rem",gridGap:"0 20px"}},e.mass?Object(r.c)("strong",null,"Mass:"):"",e.mass?Object(r.c)("span",null,e.mass.toFixed(2)," M",Object(r.c)("sub",null,"E")):"",Object(r.c)("strong",null,"Radius:"),Object(r.c)("span",null,e.radius.toFixed(2)," R",Object(r.c)("sub",null,"E")),Object(r.c)("strong",null,"Temperature:"),Object(r.c)("span",null,e.temperature," K"),Object(r.c)("strong",null,"Length of Year:"),Object(r.c)("span",null,e.orbit.period.toFixed(2)," Earth Days"),Object(r.c)("strong",null,"Distance From Star:"),Object(r.c)("span",null,e.orbit.semiMajorAxis.toFixed(3)," AU"),Object(r.c)("strong",null,"Discovery Method:"),Object(r.c)("span",null,e.discoveryMethod)))},i=function(t){var e=t.star;return Object(r.c)("div",null,Object(r.c)("h2",null,e.starName),Object(r.c)("div",{sx:{display:"grid",gridTemplateColumns:"auto 1fr",gridAutoRows:"1.75rem",gridGap:"0 20px"}},console.log(e),Object(r.c)("strong",null,"Spectral Classification:"),Object(r.c)("span",null,e.spectralType),Object(r.c)("strong",null,"Absolute Magnitude:"),Object(r.c)("span",null,e.absoluteMagnitude?e.absoluteMagnitude.toFixed(3):"0.000"),Object(r.c)("strong",null,"Mass:"),Object(r.c)("span",null,e.mass?e.mass.toFixed(3):"?"," M",Object(r.c)("sub",null,"Sun")),Object(r.c)("strong",null,"Luminosity:"),Object(r.c)("span",null,e.luminosity?e.luminosity.toFixed(3):""," L",Object(r.c)("sub",null,"Sun")),Object(r.c)("strong",null,"Temperature:"),Object(r.c)("span",null,e.temperature," K")),Object(r.c)("div",{sx:{marginLeft:20}},e.planets.sort((function(t,e){return t.orbit.semiMajorAxis<e.orbit.semiMajorAxis?-1:1})).map((function(t){return Object(r.c)(a,{key:t.id,planet:t})}))))};n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo");function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(t){var e=t.star,n=99/Math.max.apply(Math,l(e.planets.map((function(t){return t.orbit.semiMajorAxis}))));return Object(r.c)("svg",{width:"200px",height:"200px",viewBox:"0 0 200 200"},e.planets.map((function(t){return Object(r.c)("circle",{key:t.id,stroke:"black",fill:"none",cx:"100",cy:"100",r:t.orbit.semiMajorAxis*n})})))},o=function(t){var e=t.size,n=t.xPosition,c=t.color;t.name;return Object(r.c)("g",null,Object(r.c)("circle",{cx:n,cy:100,r:e,fill:c}))},u=function(t){var e=t.star,n=0,c=e.planets.map((function(t){var e,c,r,a=n+=10*t.radius;return n+=10*t.radius+10,{size:10*t.radius,xPosition:a,color:t.temperature?(e=t.temperature,c=Math.floor(Math.min(255,Math.max(e-300,0))),r=Math.floor(Math.max(255-e,0)),"rgb("+c+","+Math.floor(Math.max(0,255-2*Math.abs(300-e)))+","+r+")"):"#777"}}));return Object(r.c)("svg",{width:"700px",height:"200px",viewBox:"0 0 800 200"},c.map((function(t){return Object(r.c)(o,{key:t.id,size:t.size,xPosition:t.xPosition,color:t.color})})))},b=function(t){var e=t.stars;return Object(r.c)("div",{sx:{display:"grid",gridTemplateColumns:"700px 200px",gridTemplateRows:e.map((function(t){return"200px"})).join(" "),gridAutoFlow:"column",gridGap:10}},e.map((function(t){return Object(r.c)(u,{key:t.starId,star:t})})),e.map((function(t){return Object(r.c)(s,{key:t.starId,star:t})})))};e.default=function(t){var e=t.pageContext;return Object(r.c)(c.a,null,Object(r.c)("h1",null,e.name),Object(r.c)("strong",null,"Distance to Earth:"),Object(r.c)("span",null," ",e.distance.toFixed(2)," LY"),Object(r.c)(b,{stars:e.stars}),e.stars.map((function(t){return Object(r.c)(i,{key:t.starId,star:t})})))}}}]);
//# sourceMappingURL=component---src-components-star-system-js-9044eb2a8670111500b8.js.map