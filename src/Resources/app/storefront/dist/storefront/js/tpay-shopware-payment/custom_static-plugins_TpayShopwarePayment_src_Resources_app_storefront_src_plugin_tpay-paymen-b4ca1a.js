"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["custom_static-plugins_TpayShopwarePayment_src_Resources_app_storefront_src_plugin_tpay-paymen-b4ca1a"],{857:t=>{var e=function(t){var e;return!!t&&"object"==typeof t&&"[object RegExp]"!==(e=Object.prototype.toString.call(t))&&"[object Date]"!==e&&t.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?a(Array.isArray(t)?[]:{},t,e):t}function n(t,e,r){return t.concat(e).map(function(t){return i(t,r)})}function s(t){return Object.keys(t).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[])}function o(t,e){try{return e in t}catch(t){return!1}}function a(t,r,c){(c=c||{}).arrayMerge=c.arrayMerge||n,c.isMergeableObject=c.isMergeableObject||e,c.cloneUnlessOtherwiseSpecified=i;var l,h,u=Array.isArray(r);return u!==Array.isArray(t)?i(r,c):u?c.arrayMerge(t,r,c):(h={},(l=c).isMergeableObject(t)&&s(t).forEach(function(e){h[e]=i(t[e],l)}),s(r).forEach(function(e){(!o(t,e)||Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))&&(o(t,e)&&l.isMergeableObject(r[e])?h[e]=(function(t,e){if(!e.customMerge)return a;var r=e.customMerge(t);return"function"==typeof r?r:a})(e,l)(t[e],r[e],l):h[e]=i(r[e],l))}),h)}a.all=function(t,e){if(!Array.isArray(t))throw Error("first argument should be an array");return t.reduce(function(t,r){return a(t,r,e)},{})},t.exports=a},917:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var i=r(293),n=r(107);class s extends i.Z{init(){this._errors=[],this._client=new n.Z,this.checksCount=0,this.totalChecksCount=Math.floor(6e4*this.options.waitingTime/1e4),this._checkOrderPayment(),this._checkPaymentStateInterval(),this._hideChangePaymentFormButton()}_checkPaymentStateInterval(){this.loopInterval=setInterval(this._loop.bind(this),1e4)}_loop(){this._checkOrderPayment(),this.checksCount===this.totalChecksCount&&(clearInterval(this.loopInterval),this._changeButtonText(this.options.waitingFailText),this._changeLocation(this.options.failUrl))}_checkOrderPayment(){this.checksCount++,this._client.post(this.options.checkUrl,JSON.stringify({transactionId:this.options.transactionId}),this._showPaymentState.bind(this))}_showPaymentState(t){let e=JSON.parse(t);e.success?(this._changeButtonText(this.options.waitingSuccessText),this._changeLocation(this.options.successUrl)):e.waiting||(this._changeButtonText(this.options.waitingFailText),this._changeLocation(this.options.failUrl))}_changeButtonText(t){console.log(t),this.el.querySelector("[data-info-text]").innerText=t}_changeLocation(t){setTimeout(()=>{window.location.href=t},1500)}_hideChangePaymentFormButton(){let t=this._getWaitingTimeFromPluginConfig(),e=this.el.querySelector(".change-payment-method-btn");setTimeout(()=>{e.style.display="block"},Math.floor(60*t/2*1e3))}_getWaitingTimeFromPluginConfig(){return JSON.parse(this.el.dataset.tpayPaymentCheckOptions).waitingTime}}s.options={transactionId:"",successUrl:"",failUrl:"",checkUrl:"",waitingTime:2,waitingSuccessText:"",waitingFailText:""}},49:(t,e,r)=>{r.d(e,{Z:()=>n});var i=r(140);class n{static isNode(t){return"object"==typeof t&&null!==t&&(t===document||t===window||t instanceof Node)}static hasAttribute(t,e){if(!n.isNode(t))throw Error("The element must be a valid HTML Node!");return"function"==typeof t.hasAttribute&&t.hasAttribute(e)}static getAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!1===n.hasAttribute(t,e))throw Error('The required property "'.concat(e,'" does not exist!'));if("function"!=typeof t.getAttribute){if(r)throw Error("This node doesn't support the getAttribute function!");return}return t.getAttribute(e)}static getDataAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=e.replace(/^data(|-)/,""),o=i.Z.toLowerCamelCase(s,"-");if(!n.isNode(t)){if(r)throw Error("The passed node is not a valid HTML Node!");return}if(void 0===t.dataset){if(r)throw Error("This node doesn't support the dataset attribute!");return}let a=t.dataset[o];if(void 0===a){if(r)throw Error('The required data attribute "'.concat(e,'" does not exist on ').concat(t,"!"));return a}return i.Z.parsePrimitive(a)}static querySelector(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!n.isNode(t))throw Error("The parent node is not a valid HTML Node!");let i=t.querySelector(e)||!1;if(r&&!1===i)throw Error('The required element "'.concat(e,'" does not exist in parent node!'));return i}static querySelectorAll(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!n.isNode(t))throw Error("The parent node is not a valid HTML Node!");let i=t.querySelectorAll(e);if(0===i.length&&(i=!1),r&&!1===i)throw Error('At least one item of "'.concat(e,'" must exist in parent node!'));return i}}},140:(t,e,r)=>{r.d(e,{Z:()=>i});class i{static ucFirst(t){return t.charAt(0).toUpperCase()+t.slice(1)}static lcFirst(t){return t.charAt(0).toLowerCase()+t.slice(1)}static toDashCase(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()}static toLowerCamelCase(t,e){let r=i.toUpperCamelCase(t,e);return i.lcFirst(r)}static toUpperCamelCase(t,e){return e?t.split(e).map(t=>i.ucFirst(t.toLowerCase())).join(""):i.ucFirst(t.toLowerCase())}static parsePrimitive(t){try{return/^\d+(.|,)\d+$/.test(t)&&(t=t.replace(",",".")),JSON.parse(t)}catch(e){return t.toString()}}}},293:(t,e,r)=>{r.d(e,{Z:()=>c});var i=r(857),n=r.n(i),s=r(49),o=r(140);class a{publish(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new CustomEvent(t,{detail:e,cancelable:r});return this.el.dispatchEvent(i),i}subscribe(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this,n=t.split("."),s=r.scope?e.bind(r.scope):e;if(r.once&&!0===r.once){let e=s;s=function(r){i.unsubscribe(t),e(r)}}return this.el.addEventListener(n[0],s),this.listeners.push({splitEventName:n,opts:r,cb:s}),!0}unsubscribe(t){let e=t.split(".");return this.listeners=this.listeners.reduce((t,r)=>([...r.splitEventName].sort().toString()===e.sort().toString()?this.el.removeEventListener(r.splitEventName[0],r.cb):t.push(r),t),[]),!0}reset(){return this.listeners.forEach(t=>{this.el.removeEventListener(t.splitEventName[0],t.cb)}),this.listeners=[],!0}get el(){return this._el}set el(t){this._el=t}get listeners(){return this._listeners}set listeners(t){this._listeners=t}constructor(t=document){this._el=t,t.$emitter=this,this._listeners=[]}}class c{init(){throw Error('The "init" method for the plugin "'.concat(this._pluginName,'" is not defined.'))}update(){}_init(){this._initialized||(this.init(),this._initialized=!0)}_update(){this._initialized&&this.update()}_mergeOptions(t){let e=o.Z.toDashCase(this._pluginName),r=s.Z.getDataAttribute(this.el,"data-".concat(e,"-config"),!1),i=s.Z.getAttribute(this.el,"data-".concat(e,"-options"),!1),a=[this.constructor.options,this.options,t];r&&a.push(window.PluginConfigManager.get(this._pluginName,r));try{i&&a.push(JSON.parse(i))}catch(t){throw console.error(this.el),Error('The data attribute "data-'.concat(e,'-options" could not be parsed to json: ').concat(t.message))}return n().all(a.filter(t=>t instanceof Object&&!(t instanceof Array)).map(t=>t||{}))}_registerInstance(){window.PluginManager.getPluginInstancesFromElement(this.el).set(this._pluginName,this),window.PluginManager.getPlugin(this._pluginName,!1).get("instances").push(this)}_getPluginName(t){return t||(t=this.constructor.name),t}constructor(t,e={},r=!1){if(!s.Z.isNode(t))throw Error("There is no valid element given.");this.el=t,this.$emitter=new a(this.el),this._pluginName=this._getPluginName(r),this.options=this._mergeOptions(e),this._initialized=!1,this._registerInstance(),this._init()}}},107:(t,e,r)=>{r.d(e,{Z:()=>i});class i{get(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",i=this._createPreparedRequest("GET",t,r);return this._sendRequest(i,null,e)}post(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(e,i);let n=this._createPreparedRequest("POST",t,i);return this._sendRequest(n,e,r)}delete(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(e,i);let n=this._createPreparedRequest("DELETE",t,i);return this._sendRequest(n,e,r)}patch(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(e,i);let n=this._createPreparedRequest("PATCH",t,i);return this._sendRequest(n,e,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(t){this._errorHandlingInternal=t}_registerOnLoaded(t,e){e&&(!0===this._errorHandlingInternal?(t.addEventListener("load",()=>{e(t.responseText,t)}),t.addEventListener("abort",()=>{console.warn("the request to ".concat(t.responseURL," was aborted"))}),t.addEventListener("error",()=>{console.warn("the request to ".concat(t.responseURL," failed with status ").concat(t.status))}),t.addEventListener("timeout",()=>{console.warn("the request to ".concat(t.responseURL," timed out"))})):t.addEventListener("loadend",()=>{e(t.responseText,t)}))}_sendRequest(t,e,r){return this._registerOnLoaded(t,r),t.send(e),t}_getContentType(t,e){return t instanceof FormData&&(e=!1),e}_createPreparedRequest(t,e,r){return this._request=new XMLHttpRequest,this._request.open(t,e),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}}}]);