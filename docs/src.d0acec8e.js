parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xJOT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.app=exports.h=exports.Lazy=void 0;var e=1,n=2,r=3,t={},o=[],i=o.map,l=Array.isArray,u="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,f=function(e){var n="";if("string"==typeof e)return e;if(l(e)&&e.length>0)for(var r,t=0;t<e.length;t++)""!==(r=f(e[t]))&&(n+=(n&&" ")+r);else for(var t in e)e[t]&&(n+=(n&&" ")+t);return n},a=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},s=function(e){return e.reduce(function(e,n){return e.concat(n&&!0!==n?"function"==typeof n[0]?[n]:s(n):0)},o)},c=function(e,n){return l(e)&&l(n)&&e[0]===n[0]&&"function"==typeof e[0]},d=function(e,n){if(e!==n)for(var r in a(e,n)){if(e[r]!==n[r]&&!c(e[r],n[r]))return!0;n[r]=e[r]}},p=function(e,n,r){for(var t,o,i=0,l=[];i<e.length||i<n.length;i++)t=e[i],o=n[i],l.push(o?!t||o[0]!==t[0]||d(o[1],t[1])?[o[0],o[1],o[0](r,o[1]),t&&t[2]()]:t:t&&t[2]());return l},v=function(e,n,r,t,o,i){if("key"===n);else if("style"===n)for(var l in a(r,t))r=null==t||null==t[l]?"":t[l],"-"===l[0]?e[n].setProperty(l,r):e[n][l]=r;else"o"===n[0]&&"n"===n[1]?((e.actions||(e.actions={}))[n=n.slice(2).toLowerCase()]=t)?r||e.addEventListener(n,o):e.removeEventListener(n,o):!i&&"list"!==n&&n in e?e[n]=null==t?"":t:null==t||!1===t||"class"===n&&!(t=f(t))?e.removeAttribute(n):e.setAttribute(n,t)},y=function(e,n,t){var o=e.props,i=e.type===r?document.createTextNode(e.name):(t=t||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:o.is}):document.createElement(e.name,{is:o.is});for(var l in o)v(i,l,null,o[l],n,t);for(var u=0,f=e.children.length;u<f;u++)i.appendChild(y(e.children[u]=w(e.children[u]),n,t));return e.node=i},h=function(e){return null==e?null:e.key},m=function(n,t,o,i,l,u){if(o===i);else if(null!=o&&o.type===r&&i.type===r)o.name!==i.name&&(t.nodeValue=i.name);else if(null==o||o.name!==i.name)t=n.insertBefore(y(i=w(i),l,u),t),null!=o&&n.removeChild(o.node);else{var f,s,c,d,p=o.props,g=i.props,z=o.children,x=i.children,C=0,k=0,A=z.length-1,L=x.length-1;for(var b in u=u||"svg"===i.name,a(p,g))("value"===b||"selected"===b||"checked"===b?t[b]:p[b])!==g[b]&&v(t,b,p[b],g[b],l,u);for(;k<=L&&C<=A&&null!=(c=h(z[C]))&&c===h(x[k]);)m(t,z[C].node,z[C],x[k]=w(x[k++],z[C++]),l,u);for(;k<=L&&C<=A&&null!=(c=h(z[A]))&&c===h(x[L]);)m(t,z[A].node,z[A],x[L]=w(x[L--],z[A--]),l,u);if(C>A)for(;k<=L;)t.insertBefore(y(x[k]=w(x[k++]),l,u),(s=z[C])&&s.node);else if(k>L)for(;C<=A;)t.removeChild(z[C++].node);else{b=C;for(var N={},E={};b<=A;b++)null!=(c=z[b].key)&&(N[c]=z[b]);for(;k<=L;)c=h(s=z[C]),d=h(x[k]=w(x[k],s)),E[c]||null!=d&&d===h(z[C+1])?(null==c&&t.removeChild(s.node),C++):null==d||o.type===e?(null==c&&(m(t,s&&s.node,s,x[k],l,u),k++),C++):(c===d?(m(t,s.node,s,x[k],l,u),E[d]=!0,C++):null!=(f=N[d])?(m(t,t.insertBefore(f.node,s&&s.node),f,x[k],l,u),E[d]=!0):m(t,s&&s.node,null,x[k],l,u),k++);for(;C<=A;)null==h(s=z[C++])&&t.removeChild(s.node);for(var b in N)null==E[b]&&t.removeChild(N[b].node)}}return i.node=t},g=function(e,n){for(var r in e)if(e[r]!==n[r])return!0;for(var r in n)if(e[r]!==n[r])return!0},z=function(e){return"object"==typeof e?e:C(e)},w=function(e,r){return e.type===n?((!r||!r.lazy||g(r.lazy,e.lazy))&&((r=z(e.lazy.view(e.lazy))).lazy=e.lazy),r):e},x=function(e,n,r,t,o,i){return{name:e,props:n,children:r,node:t,type:i,key:o}},C=function(e,n){return x(e,t,o,n,void 0,r)},k=function(n){return n.nodeType===r?C(n.nodeValue,n):x(n.nodeName.toLowerCase(),t,i.call(n.childNodes,k),n,void 0,e)},A=function(e){return{lazy:e,type:n}};exports.Lazy=A;var L=function(e,n){for(var r,o=[],i=[],u=arguments.length;u-- >2;)o.push(arguments[u]);for(;o.length>0;)if(l(r=o.pop()))for(u=r.length;u-- >0;)o.push(r[u]);else!1===r||!0===r||null==r||i.push(z(r));return n=n||t,"function"==typeof e?e(n,i):x(e,n,i,void 0,n.key)};exports.h=L;var b=function(e){var n={},r=!1,t=e.view,o=e.node,i=o&&k(o),f=e.subscriptions,a=[],c=function(e){v(this.actions[e.type],e)},d=function(e){return n!==e&&(n=e,f&&(a=p(a,s([f(n)]),v)),t&&!r&&u(y,r=!0)),n},v=(e.middleware||function(e){return e})(function(e,r){return"function"==typeof e?v(e(n,r)):l(e)?"function"==typeof e[0]||l(e[0])?v(e[0],"function"==typeof e[1]?e[1](r):e[1]):(s(e.slice(1)).map(function(e){e&&e[0](v,e[1])},d(e[0])),n):d(e)}),y=function(){r=!1,o=m(o.parentNode,o,i,i=z(t(n)),c)};v(e.init)};exports.app=b;
},{}],"j3yG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storeStateInStorage=exports.getStateFromStorage=void 0;var t=function(){return JSON.parse(window.localStorage.getItem("todoapp8"))};exports.getStateFromStorage=t;var e=function(t){return window.localStorage.setItem("todoapp8",JSON.stringify(t))};exports.storeStateInStorage=e;
},{}],"Zhng":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderView=void 0;var e=require("hyperapp"),l=function(){return(0,e.h)("header",null,(0,e.h)("h2",null,"todo"),(0,e.h)("p",null,(0,e.h)("em",null,(0,e.h)("small",null,"tap text to edit todo")),(0,e.h)("a",{href:"https://github.com/marcusasplund/hyperapp-todo-simple/"}," ",(0,e.h)("small",null,"source"))))};exports.HeaderView=l;
},{"hyperapp":"xJOT"}],"CgRe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RemoveButton=void 0;var e=require("hyperapp"),t=require("../utils/local-storage");function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e,r){var o=e.items.filter(function(e){return r.target.dataset.uuid!==e.id}),u=n({},e,{},{items:o});return(0,t.storeStateInStorage)(u),u},i=function(t){var r=t.id;return(0,e.h)("button",{"aria-label":"Remove",class:"button button-small button-outline","data-uuid":r,onClick:u},"x")};exports.RemoveButton=i;
},{"hyperapp":"xJOT","../utils/local-storage":"j3yG"}],"hrTH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ToggleButton=void 0;var e=require("hyperapp"),t=require("../utils/local-storage");function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e,r){var o=e.items.map(function(e){return r.target.dataset.uuid===e.id?n({},e,{},{done:!e.done}):e}),u=n({},e,{},{items:o});return(0,t.storeStateInStorage)(u),u},i=function(t){var r=t.id;return(0,e.h)("button",{"aria-label":"Toggle",class:"button button-small button-outline","data-uuid":r,onClick:u},"✓")};exports.ToggleButton=i;
},{"hyperapp":"xJOT","../utils/local-storage":"j3yG"}],"rlVO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoItem=void 0;var e=require("hyperapp"),t=require("../utils/local-storage"),r=require("./remove-button"),n=require("./toggle-button");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e,r){var n=e.items.map(function(e){return r.target.dataset.uuid===e.id?Object.assign({},e,{value:r.target.textContent}):e}),o=i({},e,{},{items:n});return(0,t.storeStateInStorage)(o),o},a=function(t){var o=t.item;return(0,e.h)("div",{class:"item row"},(0,e.h)("div",{class:"left"},(0,e.h)(r.RemoveButton,{id:o.id}),(0,e.h)(n.ToggleButton,{id:o.id})),(0,e.h)("div",{class:o.done?"done right":"right",onClick:function(e,t){return o.done||(t.target.contentEditable=!0,t.target.focus()),e},onKeyDown:function(e,t){return 13===t.keyCode&&(t.target.contentEditable=!1),e},"data-uuid":o.id,onInput:c},o.value))};exports.TodoItem=a;
},{"hyperapp":"xJOT","../utils/local-storage":"j3yG","./remove-button":"CgRe","./toggle-button":"hrTH"}],"AAAZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoList=void 0;var e=require("hyperapp"),t=require("./todo-item"),r=function(r){var o=r.items;return(0,e.h)("div",null,o&&o.length>0&&o.filter(function(e){return!e.done}).map(function(r){return(0,e.h)(t.TodoItem,{key:r.id,item:r})}))};exports.TodoList=r;
},{"hyperapp":"xJOT","./todo-item":"rlVO"}],"D1KR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.targetChecked=exports.targetValue=exports.eventKey=exports.stopPropagation=exports.preventDefault=exports.eventOptions=exports.onBlur=exports.onFocus=exports.onKeyUp=exports.onKeyDown=exports.onTouchEnd=exports.onTouchMove=exports.onTouchStart=exports.onMouseOut=exports.onMouseOver=exports.onMouseMove=exports.onMouseLeave=exports.onMouseEnter=exports.onMouseDown=exports.onMouseUp=exports.onAnimationFrame=exports.eventDetail=exports.createOnCustomEvent=exports.dispatchCustomEvent=void 0;var e=function(e){},t=function(e){return function(t){return[e,t]}},o=function(e){return t=function(t,o){var n=function(e){t(o.action,e)};return addEventListener(e,n),function(){removeEventListener(e,n)}},function(e){return[t,{action:e}]};var t},n=t(function(e,t){dispatchEvent(new CustomEvent(t.name,{detail:t}))});exports.dispatchCustomEvent=n;var r=function(e){return o(e)};exports.createOnCustomEvent=r;var u=function(e){return e.detail};exports.eventDetail=u;var s=function(e){return function(t){return[e,{action:t}]}}(function(e,t){var o=requestAnimationFrame(function n(r){o=requestAnimationFrame(n),e(t.action,r)});return function(){cancelAnimationFrame(o)}});exports.onAnimationFrame=s;var a=o("mouseup");exports.onMouseUp=a;var p=o("mousedown");exports.onMouseDown=p;var v=o("mouseenter");exports.onMouseEnter=v;var i=o("mouseleave");exports.onMouseLeave=i;var c=o("mousemove");exports.onMouseMove=c;var x=o("mouseover");exports.onMouseOver=x;var f=o("mouseout");exports.onMouseOut=f;var m=o("touchstart");exports.onTouchStart=m;var l=o("touchmove");exports.onTouchMove=l;var M=o("touchend");exports.onTouchEnd=M;var d=o("keydown");exports.onKeyDown=d;var h=o("keyup");exports.onKeyUp=h;var E=o("focus");exports.onFocus=E;var g=o("blur");exports.onBlur=g;var D=function(e){return function(t){return[e,t]}}(function(e,t){t.preventDefault&&t.event.preventDefault(),t.stopPropagation&&t.event.stopPropagation(),null!=t.action&&e(t.action,t.event)});exports.eventOptions=D;var y=function(e){return function(t,o){return[t,D({preventDefault:!0,action:e,event:o})]}};exports.preventDefault=y;var O=function(e){return function(t,o){return[t,D({stopPropagation:!0,action:e,event:o})]}};exports.stopPropagation=O;var w=function(e){return e.key};exports.eventKey=w;var C=function(e){return e.target.value};exports.targetValue=C;var F=function(e){return e.target.checked};exports.targetChecked=F;
},{}],"bnti":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateUUID=void 0;var e=function(){return(""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/1|0/g,function(){return(0|16*Math.random()).toString(16)})};exports.generateUUID=e;
},{}],"Iqkh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoInput=void 0;var e=require("hyperapp"),t=require("@hyperapp/events"),r=require("../utils/local-storage"),n=require("../utils/generate-uuid");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return{value:e,done:!1,id:(0,n.generateUUID)()}},i=function(e,t){var n=u({},e,{value:t});return(0,r.storeStateInStorage)(n),n},c=function(e){if(0===e.value.length)return e;var t=u({},e,{value:"",items:e.items.concat(l(e.value))});return(0,r.storeStateInStorage)(t),t},p=function(r){var n=r.state;return(0,e.h)("div",{class:"row"},(0,e.h)("form",{onSubmit:(0,t.preventDefault)(c)},(0,e.h)("label",{class:"row"},(0,e.h)("input",{type:"text",placeholder:n.placeholder,"aria-label":n.placeholder,value:n.value,onInput:[i,t.targetValue]}),(0,e.h)("button",null,"New #".concat(n.items.length+1)))))};exports.TodoInput=p;
},{"hyperapp":"xJOT","@hyperapp/events":"D1KR","../utils/local-storage":"j3yG","../utils/generate-uuid":"bnti"}],"Pllq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoListDone=void 0;var e=require("hyperapp"),t=require("./todo-item"),o=function(o){var r=o.items;return(0,e.h)("div",null,r&&r.length>0&&r.filter(function(e){return e.done}).map(function(o){return(0,e.h)(t.TodoItem,{key:o.id,item:o})}))};exports.TodoListDone=o;
},{"hyperapp":"xJOT","./todo-item":"rlVO"}],"js2M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StateDisplay=void 0;var e=require("hyperapp"),t=function(t){var r=t.state;return(0,e.h)("pre",null,(0,e.h)("code",null,JSON.stringify(r,null,2)))};exports.StateDisplay=t;
},{"hyperapp":"xJOT"}],"YiFH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.View=void 0;var e=require("hyperapp"),t=require("./header-view"),i=require("./todo-list"),r=require("./todo-input"),o=require("./todo-list-done"),s=require("./state-display"),u=function(u){return(0,e.h)("div",{class:"container"},(0,e.h)(t.HeaderView,null),(0,e.h)(r.TodoInput,{state:u}),(0,e.h)(i.TodoList,{items:u.items}),(0,e.h)("hr",null),(0,e.h)(o.TodoListDone,{items:u.items}),(0,e.h)(s.StateDisplay,{state:u}))};exports.View=u;
},{"hyperapp":"xJOT","./header-view":"Zhng","./todo-list":"AAAZ","./todo-input":"Iqkh","./todo-list-done":"Pllq","./state-display":"js2M"}],"Ns04":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("hyperapp"),r=require("./utils/local-storage"),t=require("./views/");require("bulma");var i=function(){return(0,r.getStateFromStorage)()||{items:[],value:"",placeholder:"Add new todo"}};(0,e.app)({init:i(),view:t.View,node:document.getElementById("todo")});
},{"hyperapp":"xJOT","./utils/local-storage":"j3yG","./views/":"YiFH","bulma":"Ns04"}]},{},["Focm"], null)
//# sourceMappingURL=src.d0acec8e.js.map