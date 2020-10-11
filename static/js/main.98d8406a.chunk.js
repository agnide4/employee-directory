(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{149:function(e,t,a){},175:function(e,t,a){e.exports=a(480)},180:function(e,t,a){},480:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),o=a.n(c),l=(a(180),a(181),a(7)),s=(a(149),a(76)),u=a(489),i=a(491),E=a(487),m=a(488),d=a(169),p=a(168),b=a(35),f=a(162),h=a.n(f),S=function(e){return{type:"SEARCH_BY_NAME",payload:e}},y=function(e){return{type:"SORT_BY_AGE",payload:e}};function O(){var e=Object(b.c)((function(e){return[e.searchTerm,e.error,e.sortTerm]})),t=Object(s.a)(e,3),a=t[0],r=(t[1],t[2]),c=Object(b.b)();return n.a.createElement("div",null,n.a.createElement(u.a,{bg:"light",expand:"lg"},n.a.createElement(u.a.Brand,{href:"/"},"User Directory"),n.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(i.a,{className:"mr-auto"},n.a.createElement(i.a.Link,{href:"/About"},"About"),n.a.createElement(E.a,{title:"Sort List by Age",id:"basic-nav-dropdown",value:r,onSelect:function(e){var t=e;console.log(t),c(function(e){return function(t,a){var r;t({type:"GET_SORDER_REQUEST"}),t(e?{type:"GET_SORDER_SUCCESS",payload:e}:{type:"GET_SORDER_FAILURE",payload:r})}}(t))}},n.a.createElement(E.a.Item,{eventKey:"asc"},"ASCENDING"),n.a.createElement(E.a.Item,{eventKey:"dsc"},"DESCENDING"))),n.a.createElement(m.a,{inline:!0},n.a.createElement(d.a,{type:"text",placeholder:"Search by first name",className:"search",value:a,onChange:function(e){var t,a=e.target.value;c((t=a,function(e,a){var r;e({type:"GET_SVALUE_REQUEST"}),e(t?{type:"GET_SVALUE_SUCCESS",payload:t}:{type:"GET_SVALUE_FAILURE",payload:r})}))}}),n.a.createElement(p.a,{variant:"outline-success"},"Search")))))}function g(){return n.a.createElement("div",null,n.a.createElement("h1",null,"This is a react based app with functionality of a directory"),n.a.createElement("h2",null,'Apped was created using "create-react-app'),n.a.createElement("p",null," Other techlogies used are react-redux, redux thunk, react-bootstrap, react-router and bootstrap cdn"),n.a.createElement("p",null,"Within the scope of this assignment no database is required and all data is reset once page is refreshed"),n.a.createElement("p",null," Api Used for random user generation is randomme.com"),n.a.createElement("h2",null," App relies mainly on hooks to pass states from component to component"),n.a.createElement("p",null," User can sort list by age ascending and descending"),n.a.createElement("p",null," User can search by first name and component rerenders as you type in seacr bar. If no match original state is returned"),n.a.createElement("h3",null,"Checkout git repo for code details https://github.com/agnide4/employee-directory "))}var _=a(490);function v(){var e=Object(b.b)(),t=Object(b.c)((function(e){return[e.users,e.error,e.searchTerm,e.filteredList,e.sortOrder]})),a=Object(s.a)(t,5),c=a[0],o=(a[1],a[2]),l=a[3],u=a[4];return Object(r.useEffect)((function(){e((function(e,t){e({type:"GET_USERS_REQUEST"}),h.a.get("https://randomuser.me/api/?inc=gender,name,picture,dob,phone&results=5").then((function(t){console.log(t.data.results),e({type:"GET_USERS_SUCCESS",payload:t.data.results})})).catch((function(t){e(function(e){return{type:"GET_USERS_FAILURE",payload:e}}(t))}))}))}),[]),Object(r.useEffect)((function(){e(function(e,t){return function(a,r){var n=[];e?t.filter((function(t){return t.name.first.toLowerCase().includes(e)})).map((function(e){n.push(e),a(S(n))})):a(S())}}(o,c))}),[o]),Object(r.useEffect)((function(){e(function(e,t){return function(a,r){switch(e){case"asc":t.sort((function(e,t){return e.dob.age>t.dob.age?1:-1})),console.log(t),a(y(t));break;case"dsc":t.sort((function(e,t){return e.dob.age<t.dob.age?1:-1})),console.log(t),a(y(t));break;default:return t}}}(u,c))}),[u]),n.a.createElement("div",null,l?l.map((function(e,t){return n.a.createElement("div",{key:e.id,className:"userDiv"},n.a.createElement("span",null,n.a.createElement("img",{src:e.picture.medium}))," ",n.a.createElement("h3",null,e.name.first," ",e.name.last," "),n.a.createElement("p",null,"Gender: ",e.gender," Phone number: ",e.phone," Age: ",e.dob.age))})):c?c.map((function(e,t){return n.a.createElement("div",{key:Object(_.a)(),className:"userDiv"},n.a.createElement("span",null,n.a.createElement("img",{src:e.picture.medium}))," ",n.a.createElement("h3",null,e.name.first," ",e.name.last," "),n.a.createElement("p",null,"Gender: ",e.gender," Phone number: ",e.phone," Age: ",e.dob.age))})):n.a.createElement("p",null,"none"))}var j=function(){return n.a.createElement("div",{className:"App container-fluid"},n.a.createElement(l.a,{exact:!0,path:"/",component:O}),n.a.createElement(l.a,{exact:!0,path:"/",component:v}),n.a.createElement(l.a,{exact:!0,path:"/About",component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(43),U=a(8),R={users:[],searchTerm:"",filteredList:[],sortOrder:"",error:""},A=a(170),G=a(171),C=Object(T.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_REQUEST":return Object(U.a)(Object(U.a)({},e),{},{users:[],error:null});case"GET_USERS_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{users:t.payload,error:null});case"GET_USERS_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{error:t.payload});case"GET_SVALUE_REQUEST":return Object(U.a)(Object(U.a)({},e),{},{searchTerm:"",error:null});case"GET_SVALUE_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{searchTerm:t.payload,error:null});case"GET_SVALUE_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{error:t.payload});case"GET_SORDER_REQUEST":return Object(U.a)(Object(U.a)({},e),{},{sortOrder:"",error:null});case"GET_SORDER_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{sortOrder:t.payload,error:null});case"GET_SORDER_FAILURE":return Object(U.a)(Object(U.a)({},e),{},{error:t.payload});case"SEARCH_BY_NAME":return Object(U.a)(Object(U.a)({},e),{},{filteredList:t.payload,error:null});default:return e}}),R,Object(T.compose)(Object(T.applyMiddleware)(G.a),Object(A.composeWithDevTools)())),L=a(99);o.a.render(n.a.createElement(b.a,{store:C},n.a.createElement(L.a,{basename:"/#"},n.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.98d8406a.chunk.js.map