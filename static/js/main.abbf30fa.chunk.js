(this["webpackJsonpmonster-roladex"]=this["webpackJsonpmonster-roladex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(14),n(3)),l=n(4),i=n(5),u=n(7),m=n(6),h=n(8),d=(n(15),function(e){var t=e.monsters,n=t.name,a=t.email,o=t.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(o,"?set=set2&size=200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))}),f=(n(16),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-list"}," ",e.monsters.map((function(e,t){return r.a.createElement(d,{key:t,monsters:e})}))))}),p=(n(17),function(e){var t=e.callSearch,n=e.placeholder;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"search",type:"text",name:"searchField",placeholder:n,onChange:t}))}),v=(n(18),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={monsters:[],searchField:""},n.searchFieldFunction=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(p,{callSearch:this.searchFieldFunction,placeholder:"search monsters"}),r.a.createElement(f,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.abbf30fa.chunk.js.map