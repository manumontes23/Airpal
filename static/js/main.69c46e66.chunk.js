(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,n){e.exports=n(317)},199:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),i=(n(199),n(11)),s=n.n(i),l=n(22),u=n(27),m=n(28),p=n(30),E=n(29),h=n(31),d=n(12),f=n(55),g=n.n(f),v=n(56),b=n.n(v),O=n(19),I=n.n(O),S=n(41),A=n.n(S),N=n(108),R=n.n(N),y=n(321);var L=Object(y.a)(Object(d.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},button:{margin:e.spacing.unit},hidden:{display:"none"}}})(function(e){var t=e.classes,n=e.isLoggedIn;return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(A.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(R.a,null),"AIRPAL"),r.a.createElement(I.a,{color:"inherit",className:n?t.button:t.hidden,onClick:function(){return e.history.push("/home")}},"Home"),r.a.createElement(I.a,{color:"inherit",className:n?t.button:t.hidden,onClick:function(){return e.history.push("/houses")}},"Houses"),r.a.createElement(I.a,{color:"inherit",className:n?t.button:t.hidden,onClick:function(){return e.history.push("/home")}},"Displays"),r.a.createElement(I.a,{color:"inherit",className:n?t.button:t.hidden,onClick:function(){return e.history.push("/home")}},"Admins"),r.a.createElement(I.a,{color:"inherit",className:n?t.button:t.hidden,onClick:function(){return e.history.push("/home")}},"Warnings"),r.a.createElement(I.a,{color:"inherit",className:n?t.button:t.hidden,onClick:function(){return console.log("Falta")}},"Log Out"))))})),T=n(110),D=n(58),w=n.n(D),k=n(57),j=n.n(k),x=n(42),M=n.n(x),C=n(59),U=n.n(C),P=n(60),H=n.n(P),F=n(44),B=n.n(F),W=n(43),_=n.n(W),G=n(111),Y=n.n(G),K=n(26),z=n.n(K),J=n(18),q=n.n(J),V=n(6),$=n.n(V);var Q=Object(y.a)($()(function(e){return{main:Object(T.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=function(){return e.history.push("/home")};e.isLoggedIn&&t();var n=e.classes;return r.a.createElement("main",{className:n.main},r.a.createElement(j.a,null),r.a.createElement(z.a,{className:n.paper},r.a.createElement(w.a,{className:n.avatar},r.a.createElement(Y.a,null)),r.a.createElement(q.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:n.form,onSubmit:function(n){n.preventDefault(),e.logCheck(n,t)}},r.a.createElement(M.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(_.a,{htmlFor:"email"},"ID"),r.a.createElement(B.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(M.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(_.a,{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement(B.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(U.a,{control:r.a.createElement(H.a,{value:"remember",color:"primary"}),label:"Remcuerdame"}),r.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit},"Ingresar"))))}));var X=function(e){return r.a.createElement("h1",null," Hola desde Home ")},Z=n(63),ee=n.n(Z),te=n(46),ne=n.n(te),ae=n(45),re=n.n(ae),ce=n(61),oe=n.n(ce),ie=n(24),se=n.n(ie),le="http://35.237.240.199:3002/api",ue={houses:"".concat(le,"/house"),housert:"".concat(le,"/house/rt"),admin_login:"".concat(le,"/admin/login")},me=function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ue.houses);case 2:return t=e.sent,e.next=5,t.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a,r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={ID:"".concat(t.ID),PASSWORD:"".concat(t.PASSWORD)},a={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},r=ue.admin_login,e.next=5,fetch(r,a);case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ee={getHouses:me,getHouseRT:function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL(ue.housert)).search=new URLSearchParams({houseid:t}),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),login:pe},he=n(25),de=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(E.a)(t).call(this,e))).getRT=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.houseid,e.prev=1,e.next=4,Ee.getHouseRT(t);case 4:a=e.sent,n.setState({rt:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setState({not_found:!0});case 11:case"end":return e.stop()}},e,null,[[1,8]])})),n.renderProgressIndicator=function(){return r.a.createElement(se.a,{container:!0,alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(he.a,{size:100,color:"primary"}))},n.state={rt:null,not_found:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getRT()}},{key:"renderInfo",value:function(){var e=this.state.rt;return r.a.createElement("div",null,r.a.createElement(z.a,null,r.a.createElement(se.a,{container:!0,spacing:16},r.a.createElement(se.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(se.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},r.a.createElement(se.a,{item:!0,xs:!0},r.a.createElement(q.a,{align:"center",variant:"subtitle1"},e.ID),r.a.createElement(q.a,{align:"center",variant:"inherit"},"TEMPERATURA: ",e.TEMPERATURE),r.a.createElement(q.a,{align:"center",variant:"inherit"},"FECHA: ",e.DATETIME),r.a.createElement(q.a,{align:"center",variant:"inherit"},"CONCENTRACI\xd3N: ",e.CONCENTRATION),r.a.createElement(q.a,{align:"center",variant:"inherit"},"HUMEDAD: ",e.HUMIDITY),r.a.createElement(q.a,{align:"center",variant:"inherit"},"PRESI\xd3N: ",e.PRESSURE)))))))}},{key:"render",value:function(){this.props.res_status;return this.state.not_found?r.a.createElement("h3",{style:{color:"red"}}," Error 418 I'm a teapot "):this.state.rt?this.renderInfo():this.renderProgressIndicator()}}]),t}(a.Component),fe=Object(d.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,margin:"auto",maxWidth:500}}})(de),ge=n(62),ve=n.n(ge),be=n(113),Oe=n.n(be),Ie=n(112),Se=n.n(Ie),Ae=n(23),Ne=n.n(Ae);function Re(e){return r.a.createElement(Ne.a,e,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}var ye=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(){n.setState(function(e){return{open:!e.open}})},n.state={open:!0,houseid:n.props.house.ID,rt:{}},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.house;return r.a.createElement("div",null,r.a.createElement(re.a,{button:!0,onClick:this.handleClick},r.a.createElement(oe.a,null,r.a.createElement(Re,null)),r.a.createElement("div",null,r.a.createElement("p",null,"ID: ",n.ID),r.a.createElement("p",null,"FULL NAME: ",n.LASTNAME," ",n.NAME),r.a.createElement("p",null,"ADDRESS: ",n.ADDRESS," ")),this.state.open?r.a.createElement(Se.a,null):r.a.createElement(Oe.a,null)),r.a.createElement(ve.a,{in:!this.state.open,timeout:"auto",unmountOnExit:!0},r.a.createElement(ne.a,{component:"div",disablePadding:!0},r.a.createElement(re.a,{className:t.nested},r.a.createElement(he.b,{container:!0},r.a.createElement(he.b,{item:!0,direction:"column"},r.a.createElement("div",null,r.a.createElement("p",null,"DISPLAY: ",n.DISPLAY," "),r.a.createElement("p",null,"EMAIL: ",n.EMAIL),r.a.createElement("p",null,"PHONE NUMBER: ",n.LASTNAME," ",n.NAME),r.a.createElement("p",null,"NUMBER OF RESIDENTS: ",n.ADDRESS," "),r.a.createElement("p",null,"NUMBER OF FLOORS: ",n.FLOORNUMBER," "),r.a.createElement("p",null,"NUMBER OF SMOKERS: ",n.SMOKERSNUMBER," "),r.a.createElement("p",null,"NUMBER OF PETS: ",n.PETSNUMBER," "),r.a.createElement("p",null,"IS REVOKED: ",n.REVOKEHOUSE," "),r.a.createElement("p",null,"FLOOR MATERIAL: ",n.FLOORMATERIAL," "),r.a.createElement("p",null,"WALLS MATERIAL: ",n.WALLSMATERIAL," "),r.a.createElement("p",null,"PAINT TYPE: ",n.PAINTTYPE," "),r.a.createElement("p",null,"LATITUDE: ",n.LATITUDE," "),r.a.createElement("p",null,"ALTITUDE: ",n.ALTITUDE," "),r.a.createElement("p",null,"LONGITUDE: ",n.LONGITUDE," "),r.a.createElement("p",null,"INSTALLED FOR: ",n.INSTALLER," ON: ",n.INSTALLDATE.substring(0,10)))),r.a.createElement(he.b,{item:!0,xs:!0},r.a.createElement(fe,{houseid:n.ID})))))))}}]),t}(a.Component),Le=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={houses:null},n.getHouses=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee.getHouses();case 2:t=e.sent,n.setState({houses:t});case 4:case"end":return e.stop()}},e)})),n.renderProgressIndicator=function(){var e=n.props.classes;return r.a.createElement(he.b,{container:!0,alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(he.a,{size:100,className:e.progress,color:"primary"}))},n.renderHouses=function(){var e=n.props.classes,t=n.state.houses;return r.a.createElement(ne.a,{component:"nav",subheader:r.a.createElement(ee.a,{component:"div"},"All the houses registered in Airpal DB"),className:e.root},t.map(function(t){return r.a.createElement(ye,{classes:e,house:t,key:t.ID})}))},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getHouses()}},{key:"render",value:function(){return this.state.houses?this.renderHouses():this.renderProgressIndicator()}}]),t}(a.Component),Te=Object(d.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:4*e.spacing.unit},info:{paddingLeft:5*e.spacing.unit}}})(Le),De=n(320),we=n(318),ke=n(319),je=n(35),xe=n.n(je),Me={saveCookie:function(){xe.a.set("OA","xd"),console.log(xe.a.get("OA"))},saveSession:function(e){xe.a.set("admid_id",e)},getSession:function(){return xe.a.get("admid_id")}},Ce=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={session_id:null},n.getSession=function(){var e=Me.getSession();e&&n.setState({session_id:e})},n.logCheck=function(){var e=Object(l.a)(s.a.mark(function e(t,a){var r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Me.saveSession("123321"),e.prev=1,e.next=4,Ee.login({ID:9908,PASSWORD:123});case 4:return r=e.sent,e.next=7,r.json();case 7:r=e.sent,c=r.ID,n.setState({session_id:c}),Me.saveSession(r.ID),a(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),n.userNotFound();case 17:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t,n){return e.apply(this,arguments)}}(),n.userNotFound=function(){console.log("USER NOT FOUND")},n.isLoggedIn=function(){return!!n.state.session_id},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getSession()}},{key:"render",value:function(){var e=this,t=this.isLoggedIn();return r.a.createElement(De.a,null,r.a.createElement("div",null,r.a.createElement(L,{isLoggedIn:t}),r.a.createElement(we.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Q,{isLoggedIn:t,logCheck:e.logCheck})}}),t?r.a.createElement("div",null,r.a.createElement(we.a,{exact:!0,path:"/houses",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(we.a,{exact:!0,path:"/home",component:X})):r.a.createElement(ke.a,{from:"*",to:"/"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[194,1,2]]]);
//# sourceMappingURL=main.69c46e66.chunk.js.map