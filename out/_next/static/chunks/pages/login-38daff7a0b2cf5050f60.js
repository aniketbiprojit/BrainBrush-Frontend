_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"08SE":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return e("0jUE")}])},"0jUE":function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),c=e.n(r);function o(t,n,e,r,c,o,a){try{var i=t[o](a),u=i.value}catch(s){return void e(s)}i.done?n(u):Promise.resolve(u).then(r,c)}var a=e("1OyB"),i=e("vuIU"),u=e("JX7q"),s=e("Ji7U"),f=e("md7G"),p=e("foSv"),l=e("rePB"),h=e("nKUr"),d=e("JZFu"),v=e("q1tI"),j=e("/MKj"),b=e("ANjH"),O=e("O07O");function y(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(p.a)(t);if(n){var c=Object(p.a)(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return Object(f.a)(this,e)}}var w=Object(j.b)((function(t){return{ApplicationState:t.ApplicationState}}),(function(t){return Object(b.b)({updateLogin:O.a.updateLogInStatus},t)})),m=function(t){Object(s.a)(e,t);var n=y(e);function e(t){var r;return Object(a.a)(this,e),r=n.call(this,t),Object(l.a)(Object(u.a)(r),"state",{displayName:""}),r}return Object(i.a)(e,[{key:"componentDidMount",value:function(){console.log(this.props.ApplicationState)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)(v.Fragment,{children:[Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("h1",{onClick:function(){var n,e=(n=c.a.mark((function n(e){var r,o,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),r=new d.a.auth.GoogleAuthProvider,n.next=4,d.a.auth().signInWithPopup(r);case 4:o=n.sent,a=o.user.displayName,t.setState({displayName:a});case 7:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,c){var a=n.apply(t,e);function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),children:"Google Login"})}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:this.state.displayName})]})}}]),e}(v.Component);n.default=w(m)}},[["08SE",1,2,8,11,12,0,7,10]]]);