(this.webpackJsonprick=this.webpackJsonprick||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/HeroImage.42d6efdb.png"},41:function(e,t,a){e.exports=a(59)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),l=a.n(c),i=a(19),m=a(6),u=(a(46),a(33)),o=a.n(u);var s=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"hero"},r.a.createElement("img",{className:"hero__image",src:o.a,alt:"Hero"})))},d=a(23);a(47),a(48);var E=function(e){var t=e.character;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"characterCard"},r.a.createElement("section",{className:"characterCard__image"},r.a.createElement("img",{src:t.image,alt:"character"})),r.a.createElement("section",{className:"characterCard__info"},r.a.createElement("h2",{id:"name"},t.name),r.a.createElement("p",{id:"status"},"Status: ",t.status),r.a.createElement("p",{id:"origin"},"Origin: ",t.origin.name))))};var p=function(){var e=Object(n.useState)(1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(2),m=Object(d.a)(l,2),u=m[0],o=m[1],s="https://rickandmortyapi.com/api/character/?page=".concat(a),p=Object(n.useState)([]),f=Object(d.a)(p,2),h=f[0],g=f[1];function v(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&a<u&&c(a+1)}return Object(n.useEffect)((function(){return fetch(s).then((function(e){return e.json()})).then((function(e){g((function(t){return t.concat(e.results)})),o(e.info.pages)})),window.addEventListener("scroll",v),function(){return window.removeEventListener("scroll",v)}}),[s,a]),r.a.createElement(n.Fragment,null,r.a.createElement("main",null,r.a.createElement("ul",{className:"listCharacters"},h.map((function(e){return r.a.createElement("li",{className:"characters",key:e.id},r.a.createElement(i.b,{to:{pathname:"/".concat(e.id),id:e.id}},r.a.createElement(E,{character:e})))})))))};var f=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(s,null),r.a.createElement(p,null))},h=(a(53),a(35)),g=a(60),v=a(22);a(54);var b=function(e){var t=e.character;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"detailsCard"},r.a.createElement("section",{className:"detailsCard__image"},r.a.createElement("img",{src:t.image,alt:"character"})),r.a.createElement("section",{className:"detailsCard__info"},r.a.createElement("small",{id:"id"},t.id),r.a.createElement("h1",{id:"name"},t.name),r.a.createElement("p",{id:"status"},"Status: ",t.status),r.a.createElement("p",{id:"species"},"Species: ",t.species),r.a.createElement("p",{id:"type"},"Type: ",t.type),r.a.createElement("p",{id:"gender"},"Gender: ",t.gender))))};function N(){var e=Object(h.a)(["\n        {\n          character(id: ",") {\n            id\n            name\n            status \n            species\n            type\n            gender\n           image\n          }\n        }\n      "]);return N=function(){return e},e}var j=function(e){var t=e.id;return r.a.createElement(g.a,{query:Object(v.b)(N(),t)},(function(e){var t=e.loading,a=e.error,c=e.data;if(t)return r.a.createElement("p",null,"Loading...");if(a)return r.a.createElement("p",null,"error...");var l=c.character;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"cardContainer"},r.a.createElement(b,{character:l})))}))};var O=function(e){var t=e.location.id;return r.a.createElement(n.Fragment,null,r.a.createElement(s,null),r.a.createElement(j,{id:t}))};var _=function(){return r.a.createElement(i.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:f}),r.a.createElement(m.a,{exact:!0,path:"/:characterId",component:O}),r.a.createElement(m.a,{component:r.a.createElement("p",null,"notfound ")})))},w=(a(57),a(7)),y=new v.a({uri:"https://rickandmortyapi.com/graphql/"});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w.a,{client:y},r.a.createElement(_,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c47391fd.chunk.js.map