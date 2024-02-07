(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r.n(n),i=r(4),c=r(1),o=r(7),s=r(2),l=(r(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=r(9),d=r.n(u),m=r(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todoInfo;return Object(m.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:t.user})]})},h=function(e){var t=e.visibleTodos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todoInfo:e},e.id)}))})},f={id:0,name:"",username:"",email:""},O={id:0,title:"",completed:!1,userId:0,user:f},p=function(e){return l.find((function(t){return t.id===e}))||f},x=function(e){return Math.max.apply(Math,Object(o.a)(e.map((function(e){return e.id}))))+1},v=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:p(e.userId)})})),y=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),r=t[0],n=t[1],a=Object(s.useState)(v),u=Object(i.a)(a,2),d=u[0],j=u[1],b=Object(s.useState)(O),f=Object(i.a)(b,2),y=f[0],I=f[1],S=Object(s.useState)({titleError:"",userError:""}),E=Object(i.a)(S,2),N=E[0],g=E[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),0===y.id||0===y.title.trim().length)return 0===(t=y).title.trim().length&&g((function(e){return Object(c.a)(Object(c.a)({},e),{},{titleError:"Please enter a title"})})),void(0===t.userId&&g((function(e){return Object(c.a)(Object(c.a)({},e),{},{userError:"Please choose a user"})})));var t;j((function(e){return[].concat(Object(o.a)(e),[y])})),I(O),g({titleError:"",userError:""}),n((function(e){return e+1}))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title-field",children:"Title: "}),Object(m.jsx)("input",{type:"text",id:"title-field",name:"title","data-cy":"titleInput",placeholder:"Please enter a title",value:y.title,onChange:function(e){g((function(e){return Object(c.a)(Object(c.a)({},e),{},{titleError:""})})),I((function(t){return Object(c.a)(Object(c.a)({},t),{},{title:e.target.value})}))}}),Object(m.jsx)("span",{className:"error",children:N.titleError})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"user-field",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"user-field",value:y.userId,onChange:function(e){var t=p(+e.target.value);t&&g((function(e){return Object(c.a)(Object(c.a)({},e),{},{userError:""})})),I((function(e){return Object(c.a)(Object(c.a)({},e),{},{id:x(d),userId:t.id,user:t})}))},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){var t=e.id,r=e.name;return Object(m.jsx)("option",{value:t,children:r},t)}))]}),Object(m.jsx)("span",{className:"error",children:N.userError})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]},r),Object(m.jsx)(h,{visibleTodos:d})]})};a.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.413cb534.chunk.js.map