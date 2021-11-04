(()=>{"use strict";var __webpack_modules__={"./src/helloworld.js":
/*!***************************!*\
  !*** ./src/helloworld.js ***!
  \***************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"helloworld\": () => (/* binding */ helloworld)\n/* harmony export */ });\nvar helloworld = function helloworld() {\n  return 'helloworld';\n};\n\n//# sourceURL=webpack://webpack-primary/./src/helloworld.js?")},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helloworld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helloworld */ "./src/helloworld.js");\n\ndocument.write((0,_helloworld__WEBPACK_IMPORTED_MODULE_0__.helloworld)());\n\n//# sourceURL=webpack://webpack-primary/./src/index.js?')}},__webpack_module_cache__={},o,p,I,M,N,O,G,H,J,K,L,k0,l0,n0,o0,p0,fb,gb,hb,ib,bb,db;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}r=__webpack_module_cache__[e]={exports:{}};try{var _={id:e,module:r,factory:__webpack_modules__[e],require:__webpack_require__};__webpack_require__.i.forEach(function(e){e(_)}),r=_.module,_.factory.call(r.exports,r,r.exports,_.require)}catch(e){throw r.error=e}return r.exports}function R(e){L=e;for(var r=[],_=0;_<K.length;_++)r[_]=K[_].call(null,e);return Promise.all(r)}function T(e){if(0===M.length)return e();var r=M;return M=[],Promise.all(r).then(function(){return T(e)})}function U(e){if("idle"!==L)throw new Error("check() is only allowed in idle status");return R("check").then(__webpack_require__.hmrM).then(function(n){return n?R("prepare").then(function(){var _=[];return M=[],N=[],Promise.all(Object.keys(__webpack_require__.hmrC).reduce(function(e,r){return __webpack_require__.hmrC[r](n.c,n.r,n.m,e,N,_),e},[])).then(function(){return T(function(){return e?W(e):R("ready").then(function(){return _})})})}):R(X()?"ready":"idle").then(function(){return null})})}function V(e){return"ready"!==L?Promise.resolve().then(function(){throw new Error("apply() is only allowed in ready status")}):W(e)}function W(r){r=r||{},X();var e=N.map(function(e){return e(r)});N=void 0;var _=e.map(function(e){return e.error}).filter(Boolean);if(0<_.length)return R("abort").then(function(){throw _[0]});var n=R("dispose");e.forEach(function(e){e.dispose&&e.dispose()});function t(e){o=o||e}var o,i=R("apply"),c=[];return e.forEach(function(e){if(e.apply){var r=e.apply(t);if(r)for(var _=0;_<r.length;_++)c.push(r[_])}}),Promise.all([n,i]).then(function(){return o?R("fail").then(function(){throw o}):O?W(r).then(function(r){return c.forEach(function(e){r.indexOf(e)<0&&r.push(e)}),r}):R("idle").then(function(){return c})})}function X(){return O&&(N=N||[],Object.keys(__webpack_require__.hmrI).forEach(function(r){O.forEach(function(e){__webpack_require__.hmrI[r](e,N)})}),O=void 0,1)}function eb(t){return new Promise((e,_)=>{db[t]=e;var e=__webpack_require__.p+__webpack_require__.hu(t),n=new Error;__webpack_require__.l(e,e=>{var r;db[t]&&(db[t]=void 0,r=e&&("load"===e.type?"missing":e.type),e=e&&e.target&&e.target.src,n.message="Loading hot update chunk "+t+" failed.\n("+r+": "+e+")",n.name="ChunkLoadError",n.type=r,n.request=e,_(n))})})}function jb(b){function p(e,r){for(var _=0;_<r.length;_++){var n=r[_];-1===e.indexOf(n)&&e.push(n)}}__webpack_require__.f&&delete __webpack_require__.f.jsonpHmr,fb=void 0;function e(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")}var r,w={},k=[],m={};for(r in gb)if(__webpack_require__.o(gb,r)){var _=gb[r],n=_?function(e){for(var r=[e],_={},n=r.map(function(e){return{chain:[e],id:e}});0<n.length;){var t=n.pop(),o=t.id,i=t.chain,c=__webpack_require__.c[o];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var a=0;a<c.parents.length;a++){var d=c.parents[a],u=__webpack_require__.c[d];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([d]),moduleId:o,parentId:d};-1===r.indexOf(d)&&(u.hot._acceptedDependencies[o]?(_[d]||(_[d]=[]),p(_[d],[o])):(delete _[d],r.push(d),n.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:_}}(r):{type:"disposed",moduleId:r},t=!1,o=!1,i=!1,c="";switch(n.chain&&(c="\nUpdate propagation: "+n.chain.join(" -> ")),n.type){case"self-declined":b.onDeclined&&b.onDeclined(n),b.ignoreDeclined||(t=new Error("Aborted because of self decline: "+n.moduleId+c));break;case"declined":b.onDeclined&&b.onDeclined(n),b.ignoreDeclined||(t=new Error("Aborted because of declined dependency: "+n.moduleId+" in "+n.parentId+c));break;case"unaccepted":b.onUnaccepted&&b.onUnaccepted(n),b.ignoreUnaccepted||(t=new Error("Aborted because "+r+" is not accepted"+c));break;case"accepted":b.onAccepted&&b.onAccepted(n),o=!0;break;case"disposed":b.onDisposed&&b.onDisposed(n),i=!0;break;default:throw new Error("Unexception type "+n.type)}if(t)return{error:t};if(o)for(r in m[r]=_,p(k,n.outdatedModules),n.outdatedDependencies)__webpack_require__.o(n.outdatedDependencies,r)&&(w[r]||(w[r]=[]),p(w[r],n.outdatedDependencies[r]));i&&(p(k,[n.moduleId]),m[r]=e)}gb=void 0;for(var v,q=[],d=0;d<k.length;d++){var a=k[d],u=__webpack_require__.c[a];u&&(u.hot._selfAccepted||u.hot._main)&&m[a]!==e&&!u.hot._selfInvalidated&&q.push({module:a,require:u.hot._requireSelf,errorHandler:u.hot._selfAccepted})}return{dispose:function(){var e;hb.forEach(function(e){delete bb[e]}),hb=void 0;for(var r,_,n=k.slice();0<n.length;){var t=n.pop(),o=__webpack_require__.c[t];if(o){var i={},c=o.hot._disposeHandlers;for(d=0;d<c.length;d++)c[d].call(null,i);for(__webpack_require__.hmrD[t]=i,o.hot.active=!1,delete __webpack_require__.c[t],delete w[t],d=0;d<o.children.length;d++){var a=__webpack_require__.c[o.children[d]];a&&0<=(e=a.parents.indexOf(t))&&a.parents.splice(e,1)}}}for(_ in w)if(__webpack_require__.o(w,_)&&(o=__webpack_require__.c[_]))for(v=w[_],d=0;d<v.length;d++)r=v[d],0<=(e=o.children.indexOf(r))&&o.children.splice(e,1)},apply:function(_){for(var e in m)__webpack_require__.o(m,e)&&(__webpack_require__.m[e]=m[e]);for(var n,r=0;r<ib.length;r++)ib[r](__webpack_require__);for(n in w)if(__webpack_require__.o(w,n)){var t=__webpack_require__.c[n];if(t){v=w[n];for(var o=[],i=[],c=[],a=0;a<v.length;a++){var d=v[a],u=t.hot._acceptedDependencies[d],p=t.hot._acceptedErrorHandlers[d];u&&-1===o.indexOf(u)&&(o.push(u),i.push(p),c.push(d))}for(var l=0;l<o.length;l++)try{o[l].call(null,v)}catch(r){if("function"==typeof i[l])try{i[l](r,{moduleId:n,dependencyId:c[l]})}catch(e){b.onErrored&&b.onErrored({type:"accept-error-handler-errored",moduleId:n,dependencyId:c[l],error:e,originalError:r}),b.ignoreErrored||(_(e),_(r))}else b.onErrored&&b.onErrored({type:"accept-errored",moduleId:n,dependencyId:c[l],error:r}),b.ignoreErrored||_(r)}}}for(var s=0;s<q.length;s++){var f=q[s],h=f.module;try{f.require(h)}catch(r){if("function"==typeof f.errorHandler)try{f.errorHandler(r,{moduleId:h,module:__webpack_require__.c[h]})}catch(e){b.onErrored&&b.onErrored({type:"self-accept-error-handler-errored",moduleId:h,error:e,originalError:r}),b.ignoreErrored||(_(e),_(r))}else b.onErrored&&b.onErrored({type:"self-accept-errored",moduleId:h,error:r}),b.ignoreErrored||_(r)}}return k}}}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.i=[],__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.hu=e=>e+"."+__webpack_require__.h()+".hot-update.js",__webpack_require__.miniCssF=e=>{},__webpack_require__.hmrF=()=>"index."+__webpack_require__.h()+".hot-update.json",__webpack_require__.h=()=>"4d88d57cb2dd002c6082",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},p="webpack-primary:",__webpack_require__.l=(n,e,r,_)=>{if(o[n])o[n].push(e);else{var t,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==p+r){t=d;break}}t||(i=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,__webpack_require__.nc&&t.setAttribute("nonce",__webpack_require__.nc),t.setAttribute("data-webpack",p+r),t.src=n),o[n]=[e];var e=(e,r)=>{t.onerror=t.onload=null,clearTimeout(u);var _=o[n];if(delete o[n],t.parentNode&&t.parentNode.removeChild(t),_&&_.forEach(e=>e(r)),e)return e(r)},u=setTimeout(e.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=e.bind(null,t.onerror),t.onload=e.bind(null,t.onload),i&&document.head.appendChild(t)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},G={},H=__webpack_require__.c,J=[],K=[],L="idle",__webpack_require__.hmrD=G,__webpack_require__.i.push(function(e){var r,_,n,t,o=e.module,i=function(_,n){var t=H[n];if(!t)return _;function e(e){var r;return t.hot.active?(H[e]?-1===(r=H[e].parents).indexOf(n)&&r.push(n):(J=[n],I=e),-1===t.children.indexOf(e)&&t.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+n),J=[]),_(e)}for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&"e"!==r&&Object.defineProperty(e,r,function(r){return{configurable:!0,enumerable:!0,get:function(){return _[r]},set:function(e){_[r]=e}}}(r));return e.e=function(e){return function(e){switch(L){case"ready":return R("prepare"),M.push(e),T(function(){return R("ready")}),e;case"prepare":return M.push(e),e;default:return e}}(_.e(e))},e}(e.require,e.id);o.hot=(r=e.id,_=o,t={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:n=I!==r,_requireSelf:function(){J=_.parents.slice(),I=n?void 0:r,__webpack_require__(r)},active:!0,accept:function(e,r,_){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){},t._acceptedErrorHandlers[e[n]]=_;else t._acceptedDependencies[e]=r||function(){},t._acceptedErrorHandlers[e]=_},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){e=t._disposeHandlers.indexOf(e);0<=e&&t._disposeHandlers.splice(e,1)},invalidate:function(){switch(this._selfInvalidated=!0,L){case"idle":N=[],Object.keys(__webpack_require__.hmrI).forEach(function(e){__webpack_require__.hmrI[e](r,N)}),R("ready");break;case"ready":Object.keys(__webpack_require__.hmrI).forEach(function(e){__webpack_require__.hmrI[e](r,N)});break;case"prepare":case"check":case"dispose":case"apply":(O=O||[]).push(r)}},check:U,apply:V,status:function(e){if(!e)return L;K.push(e)},addStatusHandler:function(e){K.push(e)},removeStatusHandler:function(e){e=K.indexOf(e);0<=e&&K.splice(e,1)},data:G[r]},I=void 0,t),o.parents=J,o.children=[],J=[],e.require=i}),__webpack_require__.hmrC={},__webpack_require__.hmrI={},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&((e=r.currentScript?r.currentScript.src:e)||(r=r.getElementsByTagName("script")).length&&(e=r[r.length-1].src)),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),k0=(n,t,o,i)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css";return c.onerror=c.onload=e=>{var r,_;c.onerror=c.onload=null,"load"===e.type?o():(r=e&&("load"===e.type?"missing":e.type),_=e&&e.target&&e.target.href||t,(e=new Error("Loading CSS chunk "+n+" failed.\n("+_+")")).code="CSS_CHUNK_LOAD_FAILED",e.type=r,e.request=_,c.parentNode.removeChild(c),i(e))},c.href=t,document.head.appendChild(c),c},l0=(e,r)=>{for(var _=document.getElementsByTagName("link"),n=0;n<_.length;n++){var t=(o=_[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(t===e||t===r))return o}for(var o,i=document.getElementsByTagName("style"),n=0;n<i.length;n++)if((t=(o=i[n]).getAttribute("data-href"))===e||t===r)return o},n0=[],o0=[],p0=e=>({dispose:()=>{for(var e=0;e<n0.length;e++){var r=n0[e];r.parentNode&&r.parentNode.removeChild(r)}n0.length=0},apply:()=>{for(var e=0;e<o0.length;e++)o0[e].rel="stylesheet";o0.length=0}}),__webpack_require__.hmrC.miniCss=(e,r,_,i,n,t)=>{n.push(p0),e.forEach(n=>{var e=__webpack_require__.miniCssF(n),t=__webpack_require__.p+e,o=l0(e,t);o&&i.push(new Promise((e,r)=>{var _=k0(n,t,()=>{_.as="style",_.rel="preload",e()},r);n0.push(o),o0.push(_)}))})},bb=__webpack_require__.hmrS_jsonp=__webpack_require__.hmrS_jsonp||{index:0},db={},self.webpackHotUpdatewebpack_primary=(e,r,_)=>{for(var n in r)__webpack_require__.o(r,n)&&(gb[n]=r[n]);_&&ib.push(_),db[e]&&(db[e](),db[e]=void 0)},__webpack_require__.hmrI.jsonp=function(e,r){gb||(gb={},ib=[],hb=[],r.push(jb)),__webpack_require__.o(gb,e)||(gb[e]=__webpack_require__.m[e])},__webpack_require__.hmrC.jsonp=function(e,r,_,n,t,o){t.push(jb),fb={},hb=r,gb=_.reduce(function(e,r){return e[r]=!1,e},{}),ib=[],e.forEach(function(e){__webpack_require__.o(bb,e)&&void 0!==bb[e]&&(n.push(eb(e)),fb[e]=!0)}),__webpack_require__.f&&(__webpack_require__.f.jsonpHmr=function(e,r){fb&&!__webpack_require__.o(fb,e)&&__webpack_require__.o(bb,e)&&void 0!==bb[e]&&(r.push(eb(e)),fb[e]=!0)})},__webpack_require__.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(__webpack_require__.p+__webpack_require__.hmrF()).then(e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}})};var __webpack_exports__=__webpack_require__("./src/index.js")})();