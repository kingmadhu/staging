(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logos.a9b0546c.svg"},,,function(e,t,n){e.exports=n(11)},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(16),n(1)),s=n.n(l),i=n(2),u=n(5),p=n(6),m=n(9),d=n(8),h=n(7),f=n.n(h),w=(n(18),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={count:"loading..."},e.componentDidMount=Object(i.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.fetch("/api/count").then(function(e){return e.json()});case 2:n=t.sent,a=n.count,e.setState({count:a});case 5:case"end":return t.stop()}},t)})),e.increment=Object(i.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.fetch("/api/count/increment",{method:"POST"}).then(function(e){return e.json()});case 2:n=t.sent,a=n.count,e.setState({count:a});case 5:case"end":return t.stop()}},t)})),e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Learn ",r.a.createElement("a",{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"React"),", ",r.a.createElement("a",{href:"https://expressjs.com",target:"_blank",rel:"noopener noreferrer"},"Express"),", and ",r.a.createElement("a",{href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"},"Kubernetes")),r.a.createElement("p",null,"Modify ",r.a.createElement("code",null,"src/www/App.js")," or ",r.a.createElement("code",null,"src/api/index.js")," to reload UI or API."),r.a.createElement("p",null,r.a.createElement("code",null,"yarn deploy")," to build containers and deploy them to production"),r.a.createElement("hr",null),r.a.createElement("h2",null,"Count: ",this.state.count),r.a.createElement("p",null,"Call ",r.a.createElement("code",null,"/api/count/increment"),r.a.createElement("button",{onClick:this.increment,className:"App-button"},"Go"))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.c478f2e9.chunk.js.map