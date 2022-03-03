var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(){return u("")}function h(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function g(t){p=t}const v=[],$=[],k=[],b=[],M=Promise.resolve();let w=!1;function y(t){k.push(t)}const x=new Set;let _=0;function D(){const t=p;do{for(;_<v.length;){const t=v[_];_++,g(t),E(t.$$)}for(g(null),v.length=0,_=0;$.length;)$.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];x.has(e)||(x.add(e),e())}k.length=0}while(v.length);for(;b.length;)b.pop()();w=!1,x.clear(),g(t)}function E(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const S=new Set;function q(t,e){t&&t.i&&(S.delete(t),t.i(e))}function A(t,e){t.d(1),e.delete(t.key)}function N(t,e,n,r,o,s,a,c,i,l,u,f){let d=t.length,h=s.length,m=d;const p={};for(;m--;)p[t[m].key]=m;const g=[],v=new Map,$=new Map;for(m=h;m--;){const t=f(o,s,m),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),v.set(c,g[m]=i),c in p&&$.set(c,Math.abs(m-p[c]))}const k=new Set,b=new Set;function M(t){q(t,1),t.m(c,u),a.set(t.key,t),u=t.first,h--}for(;d&&h;){const e=g[h-1],n=t[d-1],r=e.key,o=n.key;e===n?(u=e.first,d--,h--):v.has(o)?!a.has(r)||k.has(r)?M(e):b.has(o)?d--:$.get(r)>$.get(o)?(b.add(r),M(e)):(k.add(o),d--):(i(n,a),d--)}for(;d--;){const e=t[d];v.has(e.key)||i(e,a)}for(;h;)M(g[h-1]);return g}function C(t,n,s,a){const{fragment:c,on_mount:i,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,s),a||y((()=>{const n=i.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(y)}function B(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(v.push(t),w||(w=!0,M.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,o,s,a,c,l,u,f=[-1]){const d=p;g(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};u&&u(h.root);let m=!1;if(h.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&R(e,t)),n})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();o.intro&&q(e.$$.fragment),C(e,o.target,o.anchor,o.customElement),D()}g(d)}class G{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class L{static handleMovement(t,e,n){switch(e){case"up":return L.up(t,n);case"down":return L.down(t,n);case"right":return L.right(t,n);case"left":return L.left(t,n)}}static up(t,e){const n=e[0],[r,o]=n,s=[r-1,o];return!!L.validateMove(s,t)&&L.makeMove(s,e,t)}static down(t,e){const n=e[0],[r,o]=n,s=[r+1,o];return!!L.validateMove(s,t)&&L.makeMove(s,e,t)}static right(t,e){const n=e[0],[r,o]=n,s=[r,o+1];return!!L.validateMove(s,t)&&L.makeMove(s,e,t)}static left(t,e){const n=e[0],[r,o]=n,s=[r,o-1];return!!L.validateMove(s,t)&&L.makeMove(s,e,t)}static validateMove(t,e){const[n,r]=t;if(!e[n]&&""!==e[n])return!1;if(!e[n][r]&&""!==e[n][r])return!1;const o=e[n][r];return""===o||"."===o}static makeMove(t,e,n){const[r,o]=t,s=n[r][o];if(n[r][o]="snek",e.unshift([r,o]),"."===s)return[!0,!0];const[a,c]=e.pop();return n[a][c]="",[!0,!1]}}class O{constructor(){this.board=this.generateGameBoard(),this.status=!0,this.travelDirection=this.startRandomDirection(),this.snake=this.placeSnake(),this.spawnDot(),document.addEventListener("keypress",(t=>{this.changeDirection(t.key)}))}generateGameBoard(){return new Array(30).fill(1).map((t=>this.generateRow()))}generateRow(){return new Array(30).fill(1).map((t=>""))}placeSnake(){const t=Math.floor(15*Math.random()+4),e=Math.floor(15*Math.random()+4);return this.board[t][e]="snek",[[t,e]]}startRandomDirection(){const t=["up","right","down","left"];return t[Math.floor(Math.random()*t.length)]}changeDirection(t){switch(t){case"w":return"down"!==this.travelDirection?this.travelDirection="up":void 0;case"s":return"up"!==this.travelDirection?this.travelDirection="down":void 0;case"d":return"left"!==this.travelDirection?this.travelDirection="right":void 0;case"a":return"right"!==this.travelDirection?this.travelDirection="left":void 0;default:return}}snakeMovement(){const t=L.handleMovement(this.board,this.travelDirection,this.snake);if(!t)return this.status=!1,!1;const[e,n]=t;return n&&this.spawnDot(),t}spawnDot(){let t=Math.floor(28*Math.random())+1,e=Math.floor(28*Math.random())+1;for(;""!==this.board[t][e];)e=Math.floor(28*Math.random())+1,t=Math.floor(28*Math.random())+1;this.board[t][e]="."}}function I(t,e,n){const r=t.slice();return r[8]=e[n],r[10]=n,r}function T(t,e,n){const r=t.slice();return r[11]=e[n],r[13]=n,r}function P(e){let n,r,o;return{c(){n=l("button"),n.textContent="start over"},m(t,s){c(t,n,s),r||(o=h(n,"click",e[4]),r=!0)},p:t,d(t){t&&i(n),r=!1,o()}}}function z(e){let n,r,o;return{c(){n=l("button"),n.textContent="Start Game"},m(t,s){c(t,n,s),r||(o=h(n,"click",e[4]),r=!0)},p:t,d(t){t&&i(n),r=!1,o()}}}function F(t){let e,n=[],r=new Map,o=t[1];const s=t=>t[10];for(let e=0;e<o.length;e+=1){let a=I(t,o,e),c=s(a);r.set(c,n[e]=U(c,a))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=d()},m(t,r){for(let e=0;e<n.length;e+=1)n[e].m(t,r);c(t,e,r)},p(t,a){2&a&&(o=t[1],n=N(n,a,s,1,t,o,r,e.parentNode,A,U,e,I))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&i(e)}}}function H(t){let e;return{c(){e=l("span"),m(e,"class","block svelte-1r3qkbg")},m(t,n){c(t,e,n)},d(t){t&&i(e)}}}function J(t){let e;return{c(){e=l("span"),m(e,"class","dot svelte-1r3qkbg")},m(t,n){c(t,e,n)},d(t){t&&i(e)}}}function K(t){let e;return{c(){e=l("span"),m(e,"class","snake svelte-1r3qkbg")},m(t,n){c(t,e,n)},d(t){t&&i(e)}}}function Q(t,e){let n,r;function o(t,e){return"snek"===t[11]?K:"."===t[11]?J:H}let s=o(e),a=s(e);return{key:t,first:null,c(){n=d(),a.c(),r=d(),this.first=n},m(t,e){c(t,n,e),a.m(t,e),c(t,r,e)},p(t,n){s!==(s=o(e=t))&&(a.d(1),a=s(e),a&&(a.c(),a.m(r.parentNode,r)))},d(t){t&&i(n),a.d(t),t&&i(r)}}}function U(t,e){let n,r,o=[],s=new Map,u=e[8];const d=t=>`${t[10]}-${t[13]}`;for(let t=0;t<u.length;t+=1){let n=T(e,u,t),r=d(n);s.set(r,o[t]=Q(r,n))}return{key:t,first:null,c(){n=l("div");for(let t=0;t<o.length;t+=1)o[t].c();r=f(),m(n,"class","row svelte-1r3qkbg"),this.first=n},m(t,e){c(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null);a(n,r)},p(t,a){e=t,2&a&&(u=e[8],o=N(o,a,d,1,e,u,s,n,A,Q,r,T))},d(t){t&&i(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}function V(e){let n,r,o,s,d,h,p,g,v;function $(t,e){return t[0]?t[0]&&!t[2]?P:void 0:z}let k=$(e),b=k&&k(e),M=e[0]&&F(e);return{c(){b&&b.c(),n=f(),r=l("section"),o=l("div"),s=l("h3"),d=u("Score: "),h=u(e[3]),p=f(),M&&M.c(),g=f(),v=l("br"),m(o,"class","gameBoard svelte-1r3qkbg")},m(t,e){b&&b.m(t,e),c(t,n,e),c(t,r,e),a(r,o),a(o,s),a(s,d),a(s,h),a(o,p),M&&M.m(o,null),c(t,g,e),c(t,v,e)},p(t,[e]){k===(k=$(t))&&b?b.p(t,e):(b&&b.d(1),b=k&&k(t),b&&(b.c(),b.m(n.parentNode,n))),8&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(h,t[3]),t[0]?M?M.p(t,e):(M=F(t),M.c(),M.m(o,null)):M&&(M.d(1),M=null)},i:t,o:t,d(t){b&&b.d(t),t&&i(n),t&&i(r),M&&M.d(),t&&i(g),t&&i(v)}}}function W(t,e,n){let r,o=!0,s=new O,a=s.board,c=!1,i=0;return[s,a,c,i,function(){n(3,i=0),r=setInterval((()=>function(){const t=s.snakeMovement();if(console.log(t),!t)return n(2,c=!1),void clearInterval(r);const[e,o]=t;o&&n(3,i++,i);n(1,a=s.board)}()),70),o?o=!1:(n(0,s=new O),n(1,a=s.board))}]}class X extends G{constructor(t){super(),j(this,t,W,V,s,{})}}function Y(e){let n,r,o,s,u;return s=new X({}),{c(){var t;n=l("main"),r=l("h1"),r.textContent="Snek game",o=f(),(t=s.$$.fragment)&&t.c()},m(t,e){c(t,n,e),a(n,r),a(n,o),C(s,n,null),u=!0},p:t,i(t){u||(q(s.$$.fragment,t),u=!0)},o(t){!function(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),(void 0).c.push((()=>{S.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}(s.$$.fragment,t),u=!1},d(t){t&&i(n),B(s)}}}return new class extends G{constructor(t){super(),j(this,t,null,Y,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
