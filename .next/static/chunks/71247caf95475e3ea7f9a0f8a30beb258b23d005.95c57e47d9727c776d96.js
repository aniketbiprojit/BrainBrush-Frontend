(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/eHF":function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function o(e,t){var i=t.distance,n=t.left,o=t.right,s=t.up,r=t.down,a=t.top,c=t.bottom,d=t.big,u=t.mirror,m=t.opposite,h=(i?i.toString():0)+((n?1:0)|(o?2:0)|(a||r?4:0)|(c||s?8:0)|(u?16:0)|(m?32:0)|(e?64:0)|(d?128:0));if(p.hasOwnProperty(h))return p[h];var f=n||o||s||r||a||c,b=void 0,v=void 0;if(f){if(!u!=!(e&&m)){var y=[o,n,c,a,r,s];n=y[0],o=y[1],a=y[2],c=y[3],s=y[4],r=y[5]}var x=i||(d?"2000px":"100%");b=n?"-"+x:o?x:"0",v=r||a?"-"+x:s||c?x:"0"}return p[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+b+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[h]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,s=(e.out,e.forever),r=e.timeout,a=e.duration,c=void 0===a?l.defaults.duration:a,u=e.delay,p=void 0===u?l.defaults.delay:u,m=e.count,h=void 0===m?l.defaults.count:m,f=n(e,["children","out","forever","timeout","duration","delay","count"]),b={make:o,duration:void 0===r?c:r,delay:p,forever:s,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,d.default)(f,b,b,i):b}Object.defineProperty(t,"__esModule",{value:!0});var r,a=i("17x9"),l=i("ar19"),c=i("eH+L"),d=(r=c)&&r.__esModule?r:{default:r},u={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},p={};s.propTypes=u,t.default=s,e.exports=t.default},"23aj":function(e,t,i){"use strict";i.r(t),i.d(t,"firebase_config",(function(){return P}));var n=i("1OyB"),o=i("vuIU"),s=i("Ji7U"),r=i("md7G"),a=i("foSv"),l=i("nKUr"),c=i("q1tI"),d=i.n(c),u=i("/MKj"),p=i("ANjH"),m=i("8Kt/"),h=i.n(m),f=i("/eHF"),b=i.n(f),v=function(e){return Object(l.jsx)(b.a,{left:!0,children:Object(l.jsxs)("div",{className:"grid grid-cols-2 grid-rows-6 p-10 mx-10 my-10 duration-300 bg-white hover:shadow-xl w-96 align-items-center rounded-2xl",id:"blog-card",children:[Object(l.jsx)("h1",{className:"text-4xl font-semibold text-primary justify-self-start",children:e.companyName}),Object(l.jsx)("span",{className:"rounded-full w-9 h-9 justify-self-end "+e.color}),Object(l.jsx)("p",{className:"col-span-2 row-span-4 m-auto text-sm text-justify text-gray-700 lg:text-md justify-self-start",children:e.msg}),Object(l.jsx)("button",{className:"row-start-6 rounded-full red-button mx-2 "+e.color,children:"Share"}),Object(l.jsx)("button",{className:"row-start-6 rounded-full red-button mx-2 white borderButton",children:"View More"})]})})},y=function(){return Object(l.jsxs)("section",{className:"flex flex-col justify-center w-full pt-48 pb-48",id:"blog-bg",children:[Object(l.jsx)("h1",{className:"px-5 mb-10 text-6xl font-semibold text-center text-white header lg:px-0",children:"Here are some relevant stories for you!"}),Object(l.jsxs)("div",{className:"flex flex-row flex-wrap justify-center m-auto blogs",children:[Object(l.jsx)(v,{companyName:"Microsoft",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.",color:"bg-yellow-300"}),Object(l.jsx)(v,{companyName:"Uber",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.",color:"bg-gray-400"}),Object(l.jsx)(v,{companyName:"LinkedIn",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.",color:"bg-blue-400"}),Object(l.jsx)(v,{companyName:"Apple",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.",color:"bg-gray-300"})]}),Object(l.jsx)("button",{className:"p-5 m-auto mt-10 text-2xl font-bold text-center text-white duration-200 bg-transparent border-4 hover:text-black rounded-xl border-secondary-highlight hover:bg-secondary-highlight max-w-max",children:"View More!"})]})},x=i("hXnw"),g=i.n(x),j=i("wHSu"),w=i("IP2g"),O=function(e){var t;return t="left"===e.pos?"m-auto row-start-1":"m-auto row-start-1 lg:col-start-2",Object(l.jsxs)("section",{className:"grid grid-cols-1 gap-5 p-16 lg:p-48 duration-200 lg:h-full lg:w-4/5 lg:grid-cols-2 start align-items-center rounded-2xl "+("yes"===e.colored?" bg-gradient-to-r from-indigo-900 to-blue-900 text-white ":""),id:"feature-card",children:[Object(l.jsxs)("div",{id:"text",className:"flex flex-col max-h-max",children:[Object(l.jsx)("h1",{className:"mb-24 font-light uppercase text-7xl",children:"Feature Name"}),Object(l.jsx)("span",{style:{height:"3px",width:"250px",backgroundColor:"yes"===e.colored?"#eee":"#333"},className:"mb-24"}),Object(l.jsx)("p",{className:"text-2xl font-thin leading-relaxed text-justify",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat perspiciatis incidunt voluptatum mollitia corporis accusamus impedit sint voluptate? Debitis dignissimos vitae veritatis. Mollitia laborum aperiam id rerum excepturi illo neque animi rem quo perferendis officiis vitae corrupti perspiciatis consequuntur, quibusdam nemo itaque quia vel accusamus."})]}),Object(l.jsx)("div",{id:"image",className:t,children:e.img})]})},E=function(){return Object(l.jsxs)("section",{className:"bg-gray-200 lg:mb-10",children:[Object(l.jsx)("div",{className:"grid text-6xl text-white justify-items-center grid-col-1 ",children:Object(l.jsx)(w.a,{icon:j.a,className:"p-2 duration-500 transform -translate-y-32 bg-transparent lg:-translate-y-56 rounded-xl ring-4 ring-secondary-highlight hover:-translate-y-24 lg:hover:-translate-y-48 hover:bg-secondary-highlight hover:text-black",onClick:function(){return document.getElementById("features").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}})}),Object(l.jsx)("h1",{className:"text-2xl font-semibold text-center lg:text-5xl text-primary",id:"features",children:"What is BrainBrush?"}),Object(l.jsx)("div",{className:"object-box",id:"image",children:Object(l.jsx)(g.a,{children:Object(l.jsx)("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"img1",alt:""})})}),Object(l.jsx)("div",{className:"object2-box",onMouseMove:function(e){document.querySelectorAll(".object2-box").forEach((function(){var t=.05*e.clientX,i=-.11*e.clientY;document.getElementById("image2").style.transform="translateX("+t+"px) translateY("+i+"px)"}))},id:"image2",children:Object(l.jsx)(g.a,{children:Object(l.jsx)("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"img2"})})}),Object(l.jsxs)("div",{className:"grid items-center grid-cols-1 py-20 gap-y-20 lg:gap-y-28 justify-items-center",children:[Object(l.jsx)(O,{className:"text-secondary fbox",pos:"left"}),Object(l.jsx)(O,{className:"text-indigo-500 fbox",colored:"yes"}),Object(l.jsx)(O,{className:"text-secondary-light fbox",pos:"left"})]})]})},N=i("R9g/"),A=i("VeCx"),R=function(e){return Object(l.jsx)(g.a,{children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"  review  grid grid-cols-2 grid-rows-7 gap-5 p-10 mx-2 mb-10 text-center duration-300   border-2 border-grey-600 hover:shadow-xl w-400px lg:mb-0 align-items-center rounded-2xl "+e.center,id:"blog-card",children:[Object(l.jsx)("h1",{className:"text-3xl font-semibold justify-self-start text-800",children:e.companyName}),Object(l.jsx)("div",{className:"col-span-2 row-span-4 m-auto text-xl text-justify justify-self-start text-700",children:Object(l.jsx)("p",{children:e.msg})})]}),Object(l.jsx)("div",{className:"image",children:Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{className:"imagetestimonials",src:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",alt:""})})})]})})},k=function(){return Object(l.jsxs)("section",{className:"flex flex-col justify-center w-full p-4 pt-10 lg:p-20 lg:py-48",children:[Object(l.jsx)("h1",{className:"p-6 mb-20 text-5xl font-semibold text-center lg:p-0 text-primary header ",children:"Hear from our Customers!"}),Object(l.jsxs)("div",{className:"flex flex-row flex-wrap justify-center m-auto lg:gap-28 blogs",children:[Object(l.jsx)(R,{companyName:"Miran A.",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!",color:"bg-yellow-300",center:"bg-safed padbutoon"}),Object(l.jsx)(R,{companyName:"John R.",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!",color:"bg-gray-400",center:"bg-red whitetext"}),Object(l.jsx)(R,{companyName:"Bella B.",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!",color:"bg-blue-400",center:"bg-safed padbutoon"})]})]})},q=function(e){var t={box:"grid text-center gap-3 w-full mb-48 mt-20",container:"justify-self-center relative w-full md:w-7/12 lg:w-6/12 flex-wrap items-stretch flex text-center",text:"px-4 py-8 lg:py-10 h-10 border border-solid border-black rounded-xl lg:text-2xl leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal flex-1 placeholder-primary border-r-0 rounded-r-none",button:"px-4 pt-4 lg:py-6 border-solid border-black rounded-xl text-center align-middle h-full text-black text-2xl bg-primary-highlight border-black border outline-none red-button rounded-l-none",head:"text-primary text-center text-xl md:text-3xl font-bold pb-4"};return"black"===e.color&&(t.head="text-gray-300 text-center font-bold",t.box="grid text-center gap-5 w-full"),Object(l.jsxs)("section",{className:t.box,children:[Object(l.jsx)("h1",{className:t.head+" text-3xl md:text-4xl",children:e.line1}),Object(l.jsx)("h2",{className:t.head+" text-xl md:text-3xl text-primary-highlight",children:e.line2}),Object(l.jsxs)("div",{className:t.container,style:{boxShadow:e.shadow},children:[Object(l.jsx)("input",{type:"text",className:t.text,placeholder:e.placeholder}),Object(l.jsxs)("a",{href:"#",className:t.button,children:[Object(l.jsx)(w.a,{icon:j.b,className:"mx-2"}),Object(l.jsx)("div",{className:"hidden mx-2 sm:inline-block",children:e.button})]})]})]})},S=i("ma3e"),L=i("YFqc"),H=i.n(L),I=function(){var e="flex flex-col items-center w-screen pt-96 lg:pt-96",t="grid w-screen px-10 lg:px-20 justify-items-center",i="mb-64 mt-10 lg:mb-0";return Object(l.jsxs)("section",{className:e,id:"nav",children:[Object(l.jsx)("div",{className:t,children:Object(l.jsx)(q,{line1:"Get up to date with the latest happenings!",line2:"Last updated 15 minutes ago!",placeholder:"Search for listing, financial reports, companies ...",button:"Search",color:"black",search:"true"})}),Object(l.jsxs)("div",{id:"recent",className:i+" bg-gray-400 bg-opacity-70 p-2 rounded-full flex flex-row items-center",children:[Object(l.jsx)(H.a,{href:"/company/Google",children:Object(l.jsxs)("h2",{className:"flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400",children:[Object(l.jsx)(S.e,{size:20,className:"self-center ml-1 mr-1 lg:mr-2 lg:ml-0"}),"Google"]})}),Object(l.jsx)(H.a,{href:"company/Airbnb",children:Object(l.jsxs)("h2",{className:"flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400",children:[Object(l.jsx)(S.b,{size:20,className:"self-center ml-1 mr-1 lg:mr-2 lg:ml-2"}),"Airbnb"]})}),Object(l.jsx)(H.a,{href:"company/Adobe",children:Object(l.jsxs)("h2",{className:"flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400",children:[Object(l.jsx)(S.a,{size:20,className:"self-center ml-1 mr-1 lg:mr-2 lg:ml-2"}),"Adobe"]})}),Object(l.jsx)(H.a,{href:"company/Uber",children:Object(l.jsxs)("h2",{className:"flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400",children:[Object(l.jsx)(S.i,{size:20,className:"self-center ml-1 mr-1 lg:mr-2 lg:ml-2"}),"Uber"]})})]}),Object(l.jsx)("svg",{className:"relative w-screen transform translate-y-2",viewBox:"0 0 3108 650",fill:"none",children:Object(l.jsx)("path",{d:"M554 193.5C386.5 86 135 19 0.5 0.5V1159H3108V480.12C2948.57 344.348 2661.49 288.314 2266.5 391C1953 472.5 1850 537 1434 537C1018 537 725.25 303.407 554 193.5Z",fill:"rgb(229, 231, 235)"})})]})};function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=Object(a.a)(e);if(t){var o=Object(a.a)(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return Object(r.a)(this,i)}}var T=function(e){Object(s.a)(i,e);var t=M(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"bg-gray-200",children:[Object(l.jsxs)(h.a,{children:[Object(l.jsx)("title",{children:"BrainBrush"}),Object(l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.70, maximum-scale=0.70"})]}),Object(l.jsx)(A.a,{pad:!1}),Object(l.jsx)("div",{id:"search",children:Object(l.jsx)(I,{})}),Object(l.jsx)("div",{className:"",id:"features",children:Object(l.jsx)(E,{})}),Object(l.jsx)("div",{className:"",id:"blogs",children:Object(l.jsx)(y,{})}),Object(l.jsx)("div",{className:"p-0 m-0",children:Object(l.jsx)(k,{})}),Object(l.jsx)(N.a,{})]})}}]),i}(d.a.Component),B=i("O07O");function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=Object(a.a)(e);if(t){var o=Object(a.a)(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return Object(r.a)(this,i)}}var P={apiKey:"AIzaSyBh2o3MomQpCFYdxLX_cOILJRsrh82HPrk",authDomain:"brainbrush-a7722.firebaseapp.com",projectId:"brainbrush-a7722",storageBucket:"brainbrush-a7722.appspot.com",messagingSenderId:"84726731717",appId:"1:84726731717:web:3136435aaccd76ddf6b1ac"},_=Object(u.b)((function(e){return{ApplicationState:e.ApplicationState}}),(function(e){return Object(p.b)({updateLogin:B.a.updateLogInStatus},e)})),D=function(e){Object(s.a)(i,e);var t=C(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.ApplicationState),this.props.updateLogin(!0),console.log(this.props.ApplicationState),window.addEventListener("scroll",(function(){e.scollHandler()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("scroll",(function(){e.scollHandler()}))}},{key:"scollHandler",value:function(){try{window.pageYOffset>=document.getElementById("features").offsetTop-window.innerHeight/2?(document.getElementById("nav-container").classList.add("bg-gray-900"),document.getElementById("nav-container").classList.add("shadow-xl"),document.getElementById("nav-container").classList.remove("bg-transparent"),document.getElementById("searchbar").classList.add("sm:flex")):(document.getElementById("nav-container").classList.add("bg-transparent"),document.getElementById("nav-container").classList.remove("bg-gray-900"),document.getElementById("nav-container").classList.remove("shadow-xl"),document.getElementById("searchbar").classList.add("hidden"),document.getElementById("searchbar").classList.remove("sm:flex"))}catch(e){console.error(e)}}},{key:"render",value:function(){return Object(l.jsx)(T,{})}}]),i}(d.a.Component);t.default=_(D)},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i("q1tI"),c=(n=l)&&n.__esModule?n:{default:n},d=i("17x9"),u=i("ar19"),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),m={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},h={transitionGroup:d.object},f=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,r=i.delay,a=i.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),r+(a+(t?a:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,r=void 0;if(t.collapseOnly)s=i.duration/3,r=i.delay;else{var a=n>>2,l=a>>1;s=a,r=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,a=n.reverse,l=i.length,d=2*s;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),s=d/2);var p=a?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(a?p--:p++,0,l,s,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,s=n.className,a=n.children,l=this.props.disabled?s:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(i=this.cascade(a),d=r({},o,{opacity:1})):d=this.props.disabled?o:r({},o,this.state.style);var p=r({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),m=c.default.cloneElement(t,p,e?i||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:m}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:m}):m}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);f.propTypes=m,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=h,f.displayName="RevealBase",t.default=f,e.exports=t.default},ar19:function(e,t,i){"use strict";function n(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",o,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,o){var s=Math.log(n),r=(Math.log(o)-s)/(i-t);return Math.exp(s+r*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(f+p)+"{"+e+"}",i=m[e];return i?""+f+i:(h.insertRule(t,h.cssRules.length),m[e]=p,""+f+p++)},t.hideAll=o,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var s=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,m={},h=!1,f=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),a||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var b=document.createElement("style");document.head.appendChild(b),b.sheet&&b.sheet.cssRules&&b.sheet.insertRule&&(h=b.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},"eH+L":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,(function(n){return s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i("q1tI")),r=n(i("28nh"));e.exports=t.default},hXnw:function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function o(e,t){var i=t.left,n=t.right,o=t.up,s=t.down,r=t.top,a=t.bottom,l=t.mirror,c=t.opposite,u=(i?1:0)|(n?2:0)|(r||s?4:0)|(a||o?8:0)|(l?16:0)|(c?32:0)|(e?64:0);if(p.hasOwnProperty(u))return p[u];if(!l!=!(e&&c)){var m=[n,i,a,r,s,o];i=m[0],n=m[1],r=m[2],a=m[3],o=m[4],s=m[5]}var h=i||n,f=r||a||o||s,b=void 0;return h||f?e?b="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(h?(i?"":"-")+"42px":"0")+", "+(f?(s||r?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(h?(n?"":"-")+"2000px":"0")+", "+(f?(o||a?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(f?"center bottom":(i?"left":"right")+" center")+";\n        }":b="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(h?(i?"-":"")+"1000px":"0")+", "+(f?(s||r?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(h?(n?"-":"")+"10px":"0")+", "+(f?(o||a?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":b=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",p[u]=(0,d.animation)(b),p[u]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,i=(e.out,e.forever),s=e.timeout,r=e.duration,a=void 0===r?d.defaults.duration:r,l=e.delay,u=void 0===l?d.defaults.delay:l,p=e.count,m=void 0===p?d.defaults.count:p,h=n(e,["children","out","forever","timeout","duration","delay","count"]),f={make:o,duration:void 0===s?a:s,delay:u,forever:i,count:m,style:{animationFillMode:"both"},reverse:h.left};return(0,c.default)(h,f,f,t)}Object.defineProperty(t,"__esModule",{value:!0});var r,a=i("17x9"),l=i("eH+L"),c=(r=l)&&r.__esModule?r:{default:r},d=i("ar19"),u={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,delay:a.number,count:a.number,forever:a.bool},p={};s.propTypes=u,t.default=s,e.exports=t.default}}]);