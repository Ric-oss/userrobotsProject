(this.webpackJsonpmysecondproject=this.webpackJsonpmysecondproject||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(3),i=n.n(o),r=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))}),a=(n(13),n(4)),h=n(5),l=n(7),j=n(6),p=n(0),u=function(e){var t=e.id,n=e.name,c=e.email;return Object(p.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(p.jsx)("img",{src:"https://robohash.org/".concat(t,"?150x150"),alt:"img"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:c})]})]})},d=function(e){var t=e.robots;return Object(p.jsx)("div",{children:t.map((function(e,n){return Object(p.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].emailid})}))})},b=function(e){var t=e.searchChange;return Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"search",placeholder:"Serch Robot",onChange:t})})},f=(n(15),function(e){return Object(p.jsx)("div",{style:{overflowY:"scroll",border:"1px solid pink",height:"500px"},children:e.children})}),O=(n(16),function(e){return Object(p.jsx)("div",{className:"popup--back",children:Object(p.jsx)("div",{className:"popup--content",children:Object(p.jsx)("div",{className:"popup--close",onClick:e.closePops,children:"X"})})})}),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.openPops=function(){e.setState({popup:!0})},e.closePops=function(){e.setState({popup:!1})},e.state={message:"Robofans",robots:[],searchfield:"",popup:!1},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===t.length?Object(p.jsx)("h1",{children:"Loading......."}):Object(p.jsxs)(s.a.Fragment,{children:[this.state.popup?Object(p.jsx)(O,{closePops:this.closePops}):"",Object(p.jsxs)("div",{className:"tc",children:[Object(p.jsx)("h1",{children:this.state.message}),Object(p.jsx)("button",{onClick:this.openPops,children:"popup"}),Object(p.jsx)(b,{searchChange:this.onSearchChange}),Object(p.jsx)(f,{children:Object(p.jsx)(d,{robots:t})})]})]})}}]),n}(s.a.Component);i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),r()}},[[17,1,2]]]);
//# sourceMappingURL=main.bd460985.chunk.js.map