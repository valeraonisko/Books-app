(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(57)},48:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),l=(n(47),n(48),n(16)),c=n(28),u=n(9),s={BOOK_LIST:"book_list",BOOK_CREATE:"book_create"},d="/api",p={BOOK_LIST:{FETCH_START:"fetch_books_start",FETCH_END:"fetch_books_end",SHOW_BOOKS:"show_books"},BOOK_CREATE:{UPDATE_TITLE:"update_title",UPDATE_AUTHOR:"update_author",UPDATE_DESCRIPTION:"update_description",UPDATE_RATING:"update_rating",POST_START:"post_book_start",POST_END:"post_book_end"},AUTH:{UPDATE_LOGIN:"update_login",UPDATE_PASSWORD:"update_password",LOG_IN:"log_in",LOG_OUT:"log_out",REQUEST_START:"start_auth_request"},MISC:{SWITCH_PAGE:"switch_page"}};function E(){return function(e){e({type:p.BOOK_LIST.FETCH_START});var t=new XMLHttpRequest;t.open("GET","".concat(d,"/books")),t.withCredentials=!0,t.addEventListener("load",function(){var n;e({type:p.BOOK_LIST.FETCH_END}),401===t.status?e(T()):e((n=JSON.parse(t.response),{type:p.BOOK_LIST.SHOW_BOOKS,books:n}))}),t.send()}}function O(){return function(e,t){var n=t().bookCreate,a=n.title,r=n.author,o=n.description,i=n.rating;e({type:p.BOOK_CREATE.POST_START});var l=new XMLHttpRequest;l.open("POST","".concat(d,"/books")),l.withCredentials=!0,l.setRequestHeader("Content-Type","application/json"),l.addEventListener("load",function(){e({type:p.BOOK_CREATE.POST_END}),401===l.status?e(T()):e(_(s.BOOK_LIST))}),l.send(JSON.stringify({title:a,author:r,description:o,rating:i}))}}function T(){return{type:p.AUTH.LOG_OUT}}function g(){return{type:p.AUTH.REQUEST_START}}function m(){return function(e,t){var n=t().auth,a=n.login,r=n.password;e(g());var o=new XMLHttpRequest;o.open("POST","".concat(d,"/login")),o.withCredentials=!0,o.setRequestHeader("Content-Type","application/json"),o.addEventListener("load",function(){e(401===o.status?T():{type:p.AUTH.LOG_IN})}),o.send(JSON.stringify({login:a,password:r}))}}function _(e){return{type:p.MISC.SWITCH_PAGE,page:e}}var f={bookList:{books:null,loading:!1},bookCreate:{title:"",text:"",description:"",rating:null,posting:!1},auth:{login:"",password:"",loggedIn:!0,requesting:!1},misc:{page:s.BOOK_LIST}},h=Object(l.c)({bookList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.bookList,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.BOOK_LIST.FETCH_START:return Object(u.a)({},e,{loading:!0});case p.BOOK_LIST.FETCH_END:return Object(u.a)({},e,{loading:!1});case p.BOOK_LIST.SHOW_BOOKS:return Object(u.a)({},e,{books:t.books});default:return e}},bookCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.bookCreate,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.BOOK_CREATE.UPDATE_TITLE:return Object(u.a)({},e,{title:t.title});case p.BOOK_CREATE.UPDATE_AUTHOR:return Object(u.a)({},e,{author:t.author});case p.BOOK_CREATE.UPDATE_DESCRIPTION:return Object(u.a)({},e,{description:t.description});case p.BOOK_CREATE.UPDATE_RATING:return Object(u.a)({},e,{rating:t.rating});case p.BOOK_CREATE.POST_START:return Object(u.a)({},e,{posting:!0});case p.BOOK_CREATE.POST_END:return Object(u.a)({},e,{posting:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.auth,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.AUTH.LOG_IN:return Object(u.a)({},e,{loggedIn:!0,requesting:!1});case p.AUTH.LOG_OUT:return Object(u.a)({},e,{loggedIn:!1,requesting:!1});case p.AUTH.REQUEST_START:return Object(u.a)({},e,{requesting:!0});case p.AUTH.UPDATE_LOGIN:return Object(u.a)({},e,{login:t.login});case p.AUTH.UPDATE_PASSWORD:return Object(u.a)({},e,{password:t.password});default:return e}},misc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.misc,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.MISC.SWITCH_PAGE:return Object(u.a)({},e,{page:t.page});default:return e}}});var b=n(11),A=n(30),k=n(31),w=n(40),v=n(32),S=n(41),C=n(39),R=n(60),L=n(61),I=n(62),B=n(63),P=n(64),U=n(65),N=n(66);function y(e){for(var t=r.a.createElement("i",{className:"fa fa-star"}),n=[],a=0;a<e.rating;a++)n.push(t);return r.a.createElement("div",{className:"text-warning"},n)}var D=function(e){function t(){return Object(A.a)(this,t),Object(w.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.loadBooks()}},{key:"render",value:function(){if(null===this.props.books||this.props.loading)return"Loading...";var e={columns:[{label:"Title",field:"title",sort:"asc",width:150},{label:"Author",field:"author",sort:"asc",width:150},{label:"Description",field:"description",sort:"asc",width:150},{label:"Rating",field:"rating",sort:"asc",width:150}],rows:this.props.books.map(function(e){return{title:e.booktitle,author:e.bookauthor,description:e.bookdescription,rating:r.a.createElement(y,{rating:e.rating})}})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{expand:"md"},r.a.createElement(L.a,{navbar:!0,className:"mr-auto"},r.a.createElement(I.a,null,r.a.createElement(B.a,{active:!0,href:"#",onClick:this.props.switchToNewBook},"Add new book")),r.a.createElement(L.a,{navbar:!0,className:"ml-auto"},r.a.createElement(I.a,null,r.a.createElement(B.a,{active:!0,href:"#",onClick:this.props.logOut},"Sign out"))))),r.a.createElement(P.a,null,r.a.createElement(U.a,null,r.a.createElement(N.a,null,"Book List"),r.a.createElement(C.a,{striped:!0,hover:!0,fixed:!0,data:e}))))}}]),t}(r.a.Component);var H=Object(b.b)(function(e){return{books:e.bookList.books,loading:e.bookList.loading}},function(e){return{loadBooks:function(){return e(E())},switchToNewBook:function(){return e(_(s.BOOK_CREATE))},logOut:function(){return e(function(e){e(g());var t=new XMLHttpRequest;t.open("POST","".concat(d,"/logout")),t.withCredentials=!0,t.addEventListener("load",function(){e(T())}),t.send()})}}})(D),K=n(67),j=n(68),G=n(69),q=n(70),x=n(71),W=n(72),F=n(73),M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{expand:"md"},r.a.createElement(L.a,{navbar:!0,className:"mr-auto"},r.a.createElement(I.a,null,r.a.createElement(B.a,{active:!0,href:"#",onClick:e.switchToBookList},"Switch to list of books")))),r.a.createElement(K.a,{className:"mt-4"},r.a.createElement(j.a,{sm:"3"}),r.a.createElement(j.a,{sm:"6"},r.a.createElement(P.a,null,r.a.createElement(U.a,null,r.a.createElement(N.a,null,"Add new article"),r.a.createElement(G.a,null,r.a.createElement(q.a,null,r.a.createElement(x.a,{for:"title"},"New book title"),r.a.createElement(W.a,{type:"text",id:"title",value:e.title,onChange:function(t){return e.updateTitle(t.target.value)},placeholder:"Book title"})),r.a.createElement(q.a,null,r.a.createElement(x.a,{for:"author"},"New book author"),r.a.createElement(W.a,{type:"text",id:"author",value:e.author,onChange:function(t){return e.updateAuthor(t.target.value)},placeholder:"Book author"})),r.a.createElement(q.a,null,r.a.createElement(x.a,{for:"description"},"New book description"),r.a.createElement(W.a,{type:"textarea",id:"description",value:e.description,onChange:function(t){return e.updateDescription(t.target.value)},placeholder:"Book desctiption"})),r.a.createElement(q.a,null,r.a.createElement(x.a,{for:"rating"},"New book rating"),r.a.createElement(W.a,{type:"text",id:"rating",value:e.rating,onChange:function(t){return e.updateRating(t.target.value)},placeholder:"Rating: please, enter number from 0 to 10"})),r.a.createElement(F.a,{onClick:e.postBook},"Submit")))))))};var J=Object(b.b)(function(e){return{title:e.bookCreate.title,author:e.bookCreate.author,description:e.bookCreate.description,rating:e.bookCreate.rating,posting:e.bookCreate.posting}},function(e){return{updateTitle:function(t){return e(function(e){return{type:p.BOOK_CREATE.UPDATE_TITLE,title:e}}(t))},updateAuthor:function(t){return e(function(e){return{type:p.BOOK_CREATE.UPDATE_AUTHOR,author:e}}(t))},updateDescription:function(t){return e(function(e){return{type:p.BOOK_CREATE.UPDATE_DESCRIPTION,description:e}}(t))},updateRating:function(t){return e(function(e){return{type:p.BOOK_CREATE.UPDATE_RATING,rating:e}}(t))},postBook:function(){return e(O())},switchToBookList:function(){return e(_(s.BOOK_LIST))}}})(M),X=function(e){return r.a.createElement(K.a,{className:"mt-4"},r.a.createElement(j.a,{sm:"3"}),r.a.createElement(j.a,{sm:"6"},r.a.createElement(P.a,null,r.a.createElement(U.a,null,r.a.createElement(N.a,null,"Login form"),r.a.createElement(G.a,null,r.a.createElement(q.a,null,r.a.createElement(x.a,{for:"login"},"Login"),r.a.createElement(W.a,{type:"text",id:"login",value:e.login,onChange:function(t){return e.updateLogin(t.target.value)},placeholder:"Login: please, enter 'foo'"})),r.a.createElement(q.a,null,r.a.createElement(x.a,{for:"password"},"Password"),r.a.createElement(W.a,{type:"password",id:"password",value:e.password,onChange:function(t){return e.updatePassword(t.target.value)},placeholder:"Password: please, enter 'bar'"})),r.a.createElement(F.a,{onClick:e.logIn},"Submit"))))))};var Q=Object(b.b)(function(e){return{login:e.auth.login,password:e.auth.password}},function(e){return{updateLogin:function(t){return e(function(e){return{type:p.AUTH.UPDATE_LOGIN,login:e}}(t))},updatePassword:function(t){return e(function(e){return{type:p.AUTH.UPDATE_PASSWORD,password:e}}(t))},logIn:function(){return e(m())}}})(X),$=function(e){return e.loggedIn?e.page===s.BOOK_LIST?r.a.createElement(H,null):r.a.createElement(J,null):r.a.createElement(Q,null)};var z=Object(b.b)(function(e){return{loggedIn:e.auth.loggedIn,page:e.misc.page}})($),V=n(38),Y=Object(l.d)(h,Object(l.a)(c.a,V.logger));var Z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{store:Y},r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.0c1c0f8a.chunk.js.map