/*!
 *                          . .
 *                          | |            o
 *      ;-. ;-. ,-. ;-. ,-. | | ,-. ;-.    , ,-.
 *      | | |   | | | | |-' | | |-' |      | `-.
 *      |-' '   `-' |-' `-' ' ' `-' '   o  | `-'
 *      '           '                     -'
 *
 *      http://pixelscommander.com/polygon/propeller/example/
 *      jQuery plugin to rotate HTML elements by mouse. With inertia or without it.
 *
 *      Copyright (c) 2014 Denis Radin
 *      Licensed under the MIT license.
 *
 *      Title generated using "speed" http://patorjk.com/software/taag/#p=display&f=Shimrod&t=propeller.js
 *      Inspired by Brian Gonzalez
 */
!function(t){var e="propeller",i={angle:0,speed:0,inertia:0,minimalSpeed:.001,minimalAngleChange:.1,step:0,stepTransitionTime:0,stepTransitionEasing:"linear",rotateParentInstantly:!1,touchElement:null},n=function(t,e){if("string"==typeof t&&(t=document.querySelectorAll(t)),t.length>1)return n.createMany(t,e);1===t.length&&(t=t[0]),this.element=t,this.active=!1,this.transiting=!1,this.update=this.update.bind(this),this.initCSSPrefix(),this.initAngleGetterSetter(),this.initOptions(e),this.initHardwareAcceleration(),this.initTransition(),this.bindHandlers(),this.addListeners(),this.update()};n.createMany=function(t,e){for(var i=[],s=0;s<t.length;s++)i.push(new n(t[s],e));return i};var s=n.prototype;s.initAngleGetterSetter=function(){Object.defineProperty(this,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.virtualAngle=t,this.updateCSS()}})},s.bindHandlers=function(){this.onRotationStart=this.onRotationStart.bind(this),this.onRotationStop=this.onRotationStop.bind(this),this.onRotated=this.onRotated.bind(this)},s.addListeners=function(){this.listenersInstalled=!0,"ontouchstart"in document.documentElement?(this.touchElement.addEventListener("touchstart",this.onRotationStart),this.touchElement.addEventListener("touchmove",this.onRotated),this.touchElement.addEventListener("touchend",this.onRotationStop),this.touchElement.addEventListener("touchcancel",this.onRotationStop),this.touchElement.addEventListener("dragstart",this.returnFalse)):(this.touchElement.addEventListener("mousedown",this.onRotationStart),this.touchElement.addEventListener("mousemove",this.onRotated),this.touchElement.addEventListener("mouseup",this.onRotationStop),this.touchElement.addEventListener("mouseleave",this.onRotationStop),this.touchElement.addEventListener("dragstart",this.returnFalse)),this.touchElement.ondragstart=this.returnFalse},s.removeListeners=function(){this.listenersInstalled=!1,"ontouchstart"in document.documentElement?(this.touchElement.removeEventListener("touchstart",this.onRotationStart),this.touchElement.removeEventListener("touchmove",this.onRotated),this.touchElement.removeEventListener("touchend",this.onRotationStop),this.touchElement.removeEventListener("touchcancel",this.onRotationStop),this.touchElement.removeEventListener("dragstart",this.returnFalse)):(this.touchElement.removeEventListener("mousedown",this.onRotationStart),this.touchElement.removeEventListener("mousemove",this.onRotated),this.touchElement.removeEventListener("mouseup",this.onRotationStop),this.touchElement.removeEventListener("mouseleave",this.onRotationStop),this.touchElement.removeEventListener("dragstart",this.returnFalse))},s.bind=function(){!0!==this.listenersInstalled&&this.addListeners()},s.unbind=function(){!0===this.listenersInstalled&&(this.removeListeners(),this.onRotationStop())},s.stop=function(){this.speed=0,this.onRotationStop()},s.onRotationStart=function(t){this.initCoordinates(),this.initDrag(),this.active=!0,void 0!==this.onDragStart&&this.onDragStart(),!1===this.rotateParentInstantly&&t.stopPropagation()},s.onRotationStop=function(){void 0!==this.onDragStop&&!0===this.active&&this.onDragStop(),this.active=!1},s.onRotated=function(t){!0===this.active&&(t.stopPropagation(),t.preventDefault(),void 0!==t.targetTouches&&void 0!==t.targetTouches[0]?this.lastMouseEvent={pageX:t.targetTouches[0].pageX,pageY:t.targetTouches[0].pageY}:this.lastMouseEvent={pageX:t.pageX||t.clientX,pageY:t.pageY||t.clientY})},s.update=function(){void 0!==this.lastMouseEvent&&!0===this.active&&this.updateAngleToMouse(this.lastMouseEvent),this.updateAngle(),this.applySpeed(),this.applyInertia(),Math.abs(this.lastAppliedAngle-this._angle)>=this.minimalAngleChange&&!1===this.transiting&&(this.updateCSS(),this.blockTransition(),void 0!==this.onRotate&&"function"==typeof this.onRotate&&this.onRotate.bind(this)(),this.lastAppliedAngle=this._angle),window.requestAnimFrame(this.update)},s.updateAngle=function(){this.step>0?this._angle=this.getAngleFromVirtual():this._angle=this.normalizeAngle(this.virtualAngle)},s.getAngleFromVirtual=function(){return Math.ceil(this.virtualAngle/this.step)*this.step},s.normalizeAngle=function(t){var e=t;return(e%=360)<0&&(e=360+e),e},s.differenceBetweenAngles=function(t,e){var i=t*(Math.PI/180),n=e*(Math.PI/180),s=Math.atan2(Math.sin(i-n),Math.cos(i-n))*(180/Math.PI);return Math.round(100*s)/100},s.applySpeed=function(){this.inertia>0&&0!==this.speed&&!1===this.active&&(this.virtualAngle+=this.speed)},s.applyInertia=function(){this.inertia>0&&(Math.abs(this.speed)>=this.minimalSpeed?(this.speed=this.speed*this.inertia,!1===this.active&&Math.abs(this.speed)<this.minimalSpeed&&void 0!==this.onStop&&this.onStop()):0!==this.speed&&(this.speed=0))},s.updateAngleToMouse=function(t){var e=t.pageX-this.cx,n=t.pageY-this.cy,s=Math.atan2(e,n)*(180/Math.PI*-1)+180;if(void 0===this.lastMouseAngle&&(this.lastElementAngle=this.virtualAngle,this.lastMouseAngle=s),this.stepTransitionTime!==i.stepTransitionTime)this.speed=this.mouseDiff=this.differenceBetweenAngles(s,this.lastMouseAngle),this.virtualAngle=this.lastElementAngle+this.mouseDiff,this.lastElementAngle=this.virtualAngle,this.lastMouseAngle=s;else{var o=this.virtualAngle;this.mouseDiff=s-this.lastMouseAngle,this.virtualAngle=this.lastElementAngle+this.mouseDiff;var a=this.virtualAngle;this.speed=this.differenceBetweenAngles(a,o)}},s.initCoordinates=function(){var t=this.getViewOffset();this.cx=t.x+this.element.offsetWidth/2,this.cy=t.y+this.element.offsetHeight/2},s.initDrag=function(){this.speed=0,this.lastMouseAngle=void 0,this.lastElementAngle=void 0,this.lastMouseEvent=void 0},s.initOptions=function(t){t=t||i,this.touchElement=document.querySelectorAll(t.touchElement)[0]||this.element,this.onRotate=t.onRotate||t.onrotate,this.onStop=t.onStop||t.onstop,this.onDragStop=t.onDragStop||t.ondragstop,this.onDragStart=t.onDragStart||t.ondragstart,this.step=t.step||i.step,this.stepTransitionTime=t.stepTransitionTime||i.stepTransitionTime,this.stepTransitionEasing=t.stepTransitionEasing||i.stepTransitionEasing,this.angle=t.angle||i.angle,this.speed=t.speed||i.speed,this.inertia=t.inertia||i.inertia,this.minimalSpeed=t.minimalSpeed||i.minimalSpeed,this.lastAppliedAngle=this.virtualAngle=this._angle=t.angle||i.angle,this.minimalAngleChange=this.step!==i.step?this.step:i.minimalAngleChange,this.rotateParentInstantly=t.rotateParentInstantly||i.rotateParentInstantly},s.initCSSPrefix=function(){void 0===n.cssPrefix&&(void 0!==document.body.style.transform?n.cssPrefix="":void 0!==document.body.style.mozTransform?n.cssPrefix="-moz-":void 0!==document.body.style.webkitTransform?n.cssPrefix="-webkit-":void 0!==document.body.style.msTransform&&(n.cssPrefix="-ms-"))},s.initHardwareAcceleration=function(){this.accelerationPostfix="";var t,e=document.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var s in document.body.insertBefore(e,null),i)void 0!==e.style[s]&&(e.style[s]="translate3d(1px,1px,1px)",t=window.getComputedStyle(e).getPropertyValue(i[s]));document.body.removeChild(e),!0===(void 0!==t&&t.length>0&&"none"!==t)&&(this.accelerationPostfix="translateZ(0)",this.element.style[n.cssPrefix+"transform"]=this.accelerationPostfix,this.updateCSS())},s.initTransition=function(){if(this.stepTransitionTime!==i.stepTransitionTime){var t="all "+this.stepTransitionTime+"ms "+this.stepTransitionEasing;this.element.style[n.cssPrefix+"transition"]=t}},s.updateCSS=function(){this.element.style[n.cssPrefix+"transform"]="rotate("+this._angle+"deg) "+this.accelerationPostfix},s.blockTransition=function(){if(this.stepTransitionTime!==i.stepTransitionTime){var t=this;setTimeout((function(){t.transiting=!1}),this.stepTransitionTime),this.transiting=!0}},s.getViewOffset=function(t){var e={x:0,y:0};return this.element&&this.addOffset(this.element,e,"defaultView"in document?document.defaultView:document.parentWindow),e},s.addOffset=function(t,e,i){var n=t.offsetParent;if(e.x+=t.offsetLeft-(n?n.scrollLeft:0),e.y+=t.offsetTop-(n?n.scrollTop:0),n){if(1==n.nodeType){var s=i.getComputedStyle(n,"");if("static"!=s.position){if(e.x+=parseInt(s.borderLeftWidth),e.y+=parseInt(s.borderTopWidth),"table"==n.localName.toLowerCase())e.x+=parseInt(s.paddingLeft),e.y+=parseInt(s.paddingTop);else if("body"==n.localName.toLowerCase()){var o=i.getComputedStyle(t,"");e.x+=parseInt(o.marginLeft),e.y+=parseInt(o.marginTop)}}else"body"==n.localName.toLowerCase()&&(e.x+=parseInt(s.borderLeftWidth),e.y+=parseInt(s.borderTopWidth));for(var a=t.parentNode;n!=a;)e.x-=a.scrollLeft,e.y-=a.scrollTop,a=a.parentNode;this.addOffset(n,e,i)}}else{if("body"==t.localName.toLowerCase()){o=i.getComputedStyle(t,"");e.x+=parseInt(o.borderLeftWidth),e.y+=parseInt(o.borderTopWidth);var r=i.getComputedStyle(t.parentNode,"");e.x+=parseInt(r.paddingLeft),e.y+=parseInt(r.paddingTop),e.x+=parseInt(r.marginLeft),e.y+=parseInt(r.marginTop)}t.scrollLeft&&(e.x+=t.scrollLeft),t.scrollTop&&(e.y+=t.scrollTop);var h=t.ownerDocument.defaultView;h&&h.frameElement&&this.addOffset(h.frameElement,e,h)}},s.returnFalse=function(){return!1},void 0!==t.$&&($.propeller={},$.propeller.propellers=[],$.fn[e]=function(t){return this.each((function(){if(!$.data(this,"plugin_"+e)){var i=new n(this,t);$.data(this,"plugin_"+e,i),$.propeller.propellers.push(i)}}))}),n.deg2radians=2*Math.PI/360,t.Propeller=n}(window),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};
