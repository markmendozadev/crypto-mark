(this["webpackJsonpcrypto-mark"]=this["webpackJsonpcrypto-mark"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(5),s=c.n(a),i=(c(11),c(3)),l=c.n(i),o=c(6),u=c(4),j=c(0),h=function(e){var t=e.name,c=e.curr_price,r=e.img,n=e.percentage;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{className:"flex-child",children:Object(j.jsx)("img",{src:r,alt:t,width:"50px",height:"100%"})}),Object(j.jsx)("div",{className:"flex-child",children:t}),Object(j.jsx)("div",{className:"flex-child",children:c}),Object(j.jsxs)("div",{className:"flex-child",style:{color:n>=1?"green":"red"},children:[n,"%"]})]})})};var d=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),i=s[0],d=s[1];Object(r.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){n(e)}))}),[]);var p=c.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Market Value"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{onChange:function(e){d(e.target.value)}})}),p.length>0?p.map((function(e){return Object(j.jsx)(h,{name:e.name,curr_price:e.current_price,img:e.image,percentage:e.price_change_percentage_24h},e.id)})):Object(j.jsx)("h1",{children:"Cool Hello There's no coin like that."})]})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.db0ead32.chunk.js.map