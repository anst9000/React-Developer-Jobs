(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,a){e.exports=a(59)},52:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),i=(a(52),a(32)),c=a.n(i),s=a(23),u=a(35),m=(a(54),a(41)),d=a(100),p=a(99),h=a(96),f=a(97),E=a(88),b=a(90),g=Object(E.a)((function(e){return{flex:{display:"flex",alignItems:"center"},topicsWindow:{width:"30%",height:"250px",borderRight:"1px solid grey"},chatWindow:{width:"70%",height:"250px",padding:"20px"},chatBox:{width:"85%"},button:{width:"85%"},chip:{background:"pink",marginBottom:"3px",marginRight:"3px",fontWeight:"bold"}}}));function v(e){var t=e.job,a=e.onClick,n=(g(),function(e){var t=e.split(" ").slice(0,3),a=e.split(" ").slice(-1);return t[0]+" "+t[2]+" "+t[1]+" "+a}(t.created_at));return l.a.createElement(b.a,{onClick:a,className:"job"},l.a.createElement("div",null,l.a.createElement(m.a,{variant:"h5"},t.title),l.a.createElement(m.a,{variant:"h6"},t.company),l.a.createElement(m.a,null,t.location)),l.a.createElement("div",null,l.a.createElement(m.a,null,n)))}var k=a(98),j=a(95),y=a(93),w=a(94),x=a(92),C=a(102),S=l.a.forwardRef((function(e,t){return l.a.createElement(C.a,Object.assign({direction:"up",ref:t},e))}));function B(e){var t=e.job,a=e.open,n=e.handleClose;return t.title?l.a.createElement("div",null,l.a.createElement(k.a,{open:a,TransitionComponent:S,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(x.a,{id:"alert-dialog-slide-title"},t.company,l.a.createElement("img",{className:"detail-logo",src:t.company_logo}),l.a.createElement("hr",null),t.title),l.a.createElement(y.a,null,l.a.createElement(w.a,{id:"alert-dialog-slide-description",dangerouslySetInnerHTML:{__html:t.description}})),l.a.createElement(j.a,null,l.a.createElement(p.a,{onClick:n,color:"primary"},"Close"),l.a.createElement("a",{href:t.url,target:"_blank"},l.a.createElement(p.a,{onClick:n,color:"primary"},"Apply"))))):l.a.createElement("div",null)}function O(e){var t=e.jobs,a=l.a.useState(!1),n=Object(s.a)(a,2),o=n[0],r=n[1],i=l.a.useState({}),c=Object(s.a)(i,2),u=c[0],E=c[1],b=l.a.useState(0),g=Object(s.a)(b,2),k=g[0],j=g[1],y=t.length,w=Math.ceil(y/25),x=t.slice(25*k,25*k+25);return l.a.createElement("div",{className:"jobs"},l.a.createElement(B,{open:o,job:u,handleClose:function(){r(!1)}}),l.a.createElement(m.a,{variant:"h4",component:"h1",style:{fontWeight:"bold",letterSpacing:"2px",color:"#171D1C"}},"Entry Level Software Jobs"),l.a.createElement(m.a,{variant:"h6",component:"h2",style:{fontWeight:"bold",letterSpacing:"2px",color:"#171D1C"}},"Found ",y," jobs"),x.map((function(e){return l.a.createElement(v,{job:e,key:e.id,onClick:function(){console.log("clicked"),r(!0),E(e)}})})),l.a.createElement("div",null,"Page"),l.a.createElement(d.a,{steps:w,position:"static",variant:"text",activeStep:k,nextButton:l.a.createElement(p.a,{size:"small",onClick:function(){j((function(e){return e+1}))},disabled:k===w-1},"Next",l.a.createElement(h.a,null)),backButton:l.a.createElement(p.a,{size:"small",onClick:function(){j((function(e){return e-1}))},disabled:0===k},l.a.createElement(f.a,null),"Back")}))}function W(){return(W=Object(u.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/jobs");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t(n),console.log({json:n});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(){var e=l.a.useState([]),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){!function(e){W.apply(this,arguments)}(n)}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(O,{jobs:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.64026c36.chunk.js.map