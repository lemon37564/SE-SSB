(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,a,t){e.exports=t(88)},60:function(e,a,t){},61:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),o=(t(60),t(27)),i=t(49),s=t(8),m=(t(61),t(62),[{_id:"1",name:"Airpods Wireless Bluetooth Headphones",image:"./images/airpods.jpg",description:"Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",brand:"Apple",category:"Electronics",price:89.99,countInStock:10,rating:4.5,numReviews:12,shippingCost:30},{_id:"2",name:"iPhone 11 Pro 256GB Memory",image:"./images/phone.jpg",description:"Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",brand:"Apple",category:"Electronics",price:599.99,countInStock:7,rating:4,numReviews:8,shippingCost:30},{_id:"3",name:"Cannon EOS 80D DSLR Camera",image:"./images/camera.jpg",description:"Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",brand:"Cannon",category:"Electronics",price:929.99,countInStock:5,rating:3,numReviews:12,shippingCost:60},{_id:"4",name:"Sony Playstation 4 Pro White Version",image:"./images/playstation.jpg",description:"The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",brand:"Sony",category:"Electronics",price:399.99,countInStock:11,rating:5,numReviews:12,shippingCost:60},{_id:"5",name:"Logitech G-Series Gaming Mouse",image:"./images/mouse.jpg",description:"Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",brand:"Logitech",category:"Electronics",price:49.99,countInStock:7,rating:3.5,numReviews:10,shippingCost:60},{_id:"6",name:"Amazon Echo Dot 3rd Generation",image:"./images/alexa.jpg",description:"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",brand:"Amazon",category:"Electronics",price:29.99,countInStock:0,rating:4,numReviews:12,shippingCost:90}]),u=t(23),p=t(37),E=t(25),g=t(24),f=t(6),d=t(5),h=Object(f.f)(function(e){var a=e.handleSearchTitle,t=e.handleSearch,l=e.handleBacktoMainPage,c=e.history,o=e.log,i=e.setLog,m=Object(n.useState)(!1),f=Object(s.a)(m,2),h=f[0],b=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{bg:"light",expand:"lg"},r.a.createElement("div",{className:"hamburger",onClick:function(){return b(!h)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),h?r.a.createElement("div",{className:"hamburger_content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/cart"},"Cart")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/order"},"Order")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/history"},"History")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/sell"},"Sell")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/logout"},"Log out")))):"",r.a.createElement(d.b,{to:"",onClick:l},r.a.createElement(u.a.Brand,{style:{fontWeight:"bold"}},"\u6d77\u5927\u62cd\u8ce3")),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{inline:!0,onSubmit:t},r.a.createElement(p.a.Control,{name:"searchTitle",onChange:a,as:"select"},r.a.createElement("option",{value:"price"},"\u50f9\u683c"),r.a.createElement("option",{value:"name"},"\u540d\u7a31"),r.a.createElement("option",{value:"rating"},"\u8a55\u50f9"),r.a.createElement("option",{value:"shippingCost"},"\u904b\u8cbb")),r.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2",name:"searchValue",onChange:a}),r.a.createElement(E.a,{variant:"outline-success",type:"button",onClick:t},"Search"))),o?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a.Brand,null,"hello,  ",localStorage.getItem("userName")),r.a.createElement(E.a,{type:"button",onClick:function(){localStorage.removeItem("userInfo"),localStorage.removeItem("userName"),i(""),c.push("/")}},"\u767b\u51fa")):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/register",style:{marginRight:"1.5rem"}},r.a.createElement(E.a,{type:"button"},"\u8a3b\u518a")),r.a.createElement(d.b,{to:"/login"},r.a.createElement(E.a,{type:"button"},"\u767b\u5165")))))}),b=t(16),v=t.n(b),y=t(20),S=t(54),w=t(28),j=t(53),O=function(e){var a=e.children;return r.a.createElement(j.a,{style:{marginTop:"1rem"}},r.a.createElement(S.a,{className:"justify-content-md-center"},r.a.createElement(w.a,{xs:12,md:6},a)))},C=t(21),I=t.n(C),k=Object(f.f)(function(e){var a=e.location,t=e.history,l=e.setLog,c=Object(n.useState)(""),o=Object(s.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(""),g=Object(s.a)(u,2),f=g[0],h=g[1],b=(a.search&&a.search.split("=")[1],function(){var e=Object(y.a)(v.a.mark(function e(a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,I.a.post("/api/users/login",{email:i,password:f});case 4:n=e.sent,localStorage.setItem("userInfo",n.data.token),localStorage.setItem("userName",n.data.name),l(localStorage.getItem("userInfo")),t.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert("\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4");case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a){return e.apply(this,arguments)}}());return r.a.createElement(O,null,r.a.createElement("h1",null,"Sign In"),r.a.createElement(p.a,{onSubmit:b},r.a.createElement(p.a.Group,{controlId:"email"},r.a.createElement(p.a.Label,null,"Email Address"),r.a.createElement(p.a.Control,{type:"email",placeholder:"Enter email",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement(p.a.Group,{controlId:"password"},r.a.createElement(p.a.Label,null,"password Address"),r.a.createElement(p.a.Control,{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return h(e.target.value)}})),r.a.createElement(E.a,{type:"submit",variant:"primary"},"Sign In")),r.a.createElement(S.a,{className:"py-3"},r.a.createElement(w.a,null,"New Customer?"," ",r.a.createElement(d.b,{to:"/register"},"Register"))))}),x=Object(f.f)(function(e){e.location;var a=e.history,t=Object(n.useState)(""),l=Object(s.a)(t,2),c=l[0],o=l[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],g=m[1],f=Object(n.useState)(""),d=Object(s.a)(f,2),h=d[0],b=d[1],S=Object(n.useState)(""),w=Object(s.a)(S,2),j=w[0],C=w[1],k=Object(n.useState)(null),x=Object(s.a)(k,2),N=(x[0],x[1],function(){var e=Object(y.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),h===j){e.next=5;break}alert("\u5169\u6b21\u5bc6\u78bc\u4e0d\u540c"),e.next=10;break;case 5:return e.next=7,I.a.post("/api/users",{name:u,email:c,password:h});case 7:e.sent,alert("\u8a3b\u518a\u6210\u529f"),a.push("/");case 10:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}());return r.a.createElement(O,null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement(p.a,{onSubmit:N},r.a.createElement(p.a.Group,{controlId:"name"},r.a.createElement(p.a.Label,null,"Name"),r.a.createElement(p.a.Control,{type:"name",placeholder:"Enter name",value:u,onChange:function(e){return g(e.target.value)}})),r.a.createElement(p.a.Group,{controlId:"email"},r.a.createElement(p.a.Label,null,"Email Address"),r.a.createElement(p.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement(p.a.Group,{controlId:"password"},r.a.createElement(p.a.Label,null,"password "),r.a.createElement(p.a.Control,{type:"password",placeholder:"Enter password",value:h,onChange:function(e){return b(e.target.value)}})),r.a.createElement(p.a.Group,{controlId:"confirmPassword"},r.a.createElement(p.a.Label,null,"Confirm Password"),r.a.createElement(p.a.Control,{type:"password",placeholder:"Confirm Password",value:j,onChange:function(e){return C(e.target.value)}})),r.a.createElement(E.a,{type:"submit",variant:"primary"},"Register")))}),N=t(18),L=function(e){var a=e.value,t=e.text,n=e.color;return r.a.createElement("div",{className:"rating"},r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=5?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,t&&t))};L.defaultProps={color:"#f8e825"};var A=L,P=function(e){var a=e.product;return r.a.createElement(N.a,{className:"my-3 p-3 rounded"},r.a.createElement(d.b,{to:"/product/".concat(a._id)},r.a.createElement(N.a.Img,{src:a.image,variant:"top"})),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,{as:"div"},r.a.createElement("strong",null,a.name)),r.a.createElement(N.a.Text,{as:"div"},r.a.createElement(A,{value:a.rating,text:"".concat(a.numReviews," reviews")})),r.a.createElement(N.a.Text,{as:"h3"},"$",a.price)))},G=function(e){var a=e.products;return r.a.createElement(j.a,null,r.a.createElement(S.a,null,a.map(function(e){return r.a.createElement(w.a,{key:e._id,sm:12,md:6,lg:4,xl:3},r.a.createElement(P,{product:e}))})))},T=t(38),R=t(91),B=t(92),D=Object(f.f)(function(e){e.history;var a=e.match,t=e.products,l=Object(n.useState)(t),c=Object(s.a)(l,2),o=c[0],i=c[1];return Object(n.useEffect)(function(){I.a.get("/product/all").then(function(e){return console.log(e)}),function(){var e=t.filter(function(e){return e._id===a.params.id});i.apply(void 0,Object(T.a)(e))}()},[o]),Object(n.useEffect)(Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{className:"btn btn-light my-3 ",to:"/"},"Go Back"),r.a.createElement(S.a,null,r.a.createElement(w.a,{md:6},r.a.createElement(R.a,{src:o.image,alt:o.name,fluid:!0})),r.a.createElement(w.a,{md:3},r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,null,r.a.createElement("h2",null,o.name)),r.a.createElement(B.a.Item,null,r.a.createElement(A,{value:o.rating,text:"".concat(o.numReviews," reviews")})),r.a.createElement(B.a.Item,null,"Price : $",o.price),r.a.createElement(B.a.Item,null,"Description : ",o.description))),r.a.createElement(w.a,{md:3},r.a.createElement(N.a,null,r.a.createElement(B.a,{variant:"flush"},r.a.createElement(B.a.Item,null,r.a.createElement(S.a,null,r.a.createElement(w.a,null,"Price:"),r.a.createElement(w.a,null,r.a.createElement("strong",null,"$",o.price)))),r.a.createElement(B.a.Item,null,r.a.createElement(S.a,null,r.a.createElement(w.a,null,"Status:"),r.a.createElement(w.a,null,o.countInStock>0?"In Stock":"Out of Stock"))),o.countInStock>0&&r.a.createElement(B.a.Item,null,r.a.createElement(S.a,null,r.a.createElement(w.a,null,"Qty"),r.a.createElement(w.a,null,r.a.createElement(p.a.Control,{as:"select"},Object(T.a)(Array(o.countInStock).keys()).map(function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)}))))),r.a.createElement(B.a.Item,null,r.a.createElement(E.a,{className:"btn-block",type:"button",disabled:0===o.countInStock},"Add to cart")))))),")")});var _=function(){var e=Object(n.useState)({searchTitle:"price"}),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(s.a)(c,2),p=(u[0],u[1],Object(n.useState)(m)),E=Object(s.a)(p,2),g=E[0],b=E[1],v=Object(n.useState)(),y=Object(s.a)(v,2),S=y[0],w=y[1];return Object(n.useEffect)(function(){w(localStorage.getItem("userInfo"))},[]),r.a.createElement(d.a,null,r.a.createElement(h,{handleSearch:function(e){e.preventDefault();var a=t.searchValue,n={};switch(t.searchTitle){case"name":n=m.filter(function(e){return e.name.toUpperCase().includes(a.toUpperCase())});break;case"price":n=m.filter(function(e){return e.price<=a});break;case"rating":n=m.filter(function(e){return e.rating>=a});break;case"shippingCost":n=m.filter(function(e){return e.shippingCost<=a})}b(n)},handleSearchTitle:function(e){var a=e.target,t=a.value,n=a.name;l(function(e){return Object(i.a)({},e,Object(o.a)({},n,t))})},handleBacktoMainPage:function(){b(m)},log:S,setLog:w}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(G,{products:g})}}),r.a.createElement(f.a,{path:"/login",render:function(){return r.a.createElement(k,{setLog:w})}}),r.a.createElement(f.a,{path:"/register",render:function(){return r.a.createElement(x,{setLog:w})}}),r.a.createElement(f.a,{path:"/product/:id",render:function(){return r.a.createElement(D,{products:g})}})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.b2c6177d.chunk.js.map