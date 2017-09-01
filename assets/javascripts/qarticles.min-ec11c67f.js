"use strict";function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Qarticles=e()}(this,function(){var t=[],e=function(t){for(var e=void 0,i=1;i<arguments.length;i++)e=arguments[i],Array.prototype.push.apply(t,e)},i=function(t,e,i){var s=void 0,h=void 0;for(s=e+i,h=t.length;h>s;s++)t[s-i]=t[s];t.length=h-i,s=h=null},s=function(){function s(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?null:arguments[2];_classCallCheck(this,s),this.objects=[],this.nodes=[],this.level=e,this.bounds=t,this.parent=i,this.MAX_OBJECTS=10,this.MAX_LEVELS=5,this.INDEX_TMP_TOP=0,this.INDEX_TMP_BOTTOM=0,this.INDEX_TMP_LEFT=0,this.INDEX_TMP_RIGHT=0}return _createClass(s,[{key:"clear",value:function(){for(this.objects.length=0;this.nodes.length;){var t=this.nodes.shift();t.clear()}}},{key:"split",value:function(){var t=this.bounds.x,e=this.bounds.y,i=this.bounds.sWidth,n=this.bounds.sHeight;this.nodes.push(new s(new h(this.bounds.cX,e,i,n),this.level+1,this),new s(new h(t,e,i,n),this.level+1,this),new s(new h(t,this.bounds.cY,i,n),this.level+1,this),new s(new h(this.bounds.cX,this.bounds.cY,i,n),this.level+1,this)),t=e=i=n=null}},{key:"getIndex",value:function(t,e){if(this.INDEX_TMP_TOP=t.y+t.h<=this.bounds.cY,this.INDEX_TMP_BOTTOM=t.y>=this.bounds.cY,this.INDEX_TMP_LEFT=t.x+t.w<=this.bounds.cX,this.INDEX_TMP_RIGHT=t.x>=this.bounds.cX,e&&(Math.abs(t.cX-this.bounds.cX)+t.sWidth>this.bounds.sWidth||Math.abs(t.cY-this.bounds.cY)+t.sHeight>this.bounds.sHeight))return-1;if(this.INDEX_TMP_TOP){if(this.INDEX_TMP_RIGHT)return 0;if(this.INDEX_TMP_LEFT)return 1}else if(this.INDEX_TMP_BOTTOM){if(this.INDEX_TMP_LEFT)return 2;if(this.INDEX_TMP_RIGHT)return 3}return-1}},{key:"insert",value:function(t){var e=void 0,s=void 0;if(this.nodes.length){var h=this.getIndex(t);if(-1!==h)return void this.nodes[h].insert(t)}if(this.objects.push(t),!this.nodes.length&&this.objects.length>this.MAX_OBJECTS&&this.level<this.MAX_LEVELS){this.split();for(var n=this.objects.length-1;n>=0;n--)e=this.getIndex(this.objects[n]),-1!==e&&(s=this.objects[n],i(this.objects,n,1),this.nodes[e].insert(s))}e=null,s=null}},{key:"refresh",value:function(t){var e=void 0,s=void 0;t=t||this;for(var h=this.objects.length-1;h>=0;h--)e=this.getIndex(this.objects[h],!0),-1===e?this.parent&&(s=this.objects[h],i(this.objects,h,1),this.parent.insert(s)):this.nodes.length&&(s=this.objects[h],i(this.objects,h,1),this.nodes[e].insert(s));for(var n=0,r=this.nodes.length;r>n;n++)this.nodes[n].refresh(t);e=null,s=null}},{key:"retrieve",value:function(i){var s=t,h=void 0;if(0===this.level&&(s.length=0),e(s,this.objects),this.nodes.length)if(h=this.getIndex(i),-1!==h)this.nodes[h].retrieve(i);else for(var n=i.carve(this.bounds.cX,this.bounds.cY),r=n.length-1;r>=0;r--)h=this.getIndex(n[r]),this.nodes[h].retrieve(i);return h=null,s}}]),s}(),h=function(){function t(e,i,s,h){var n=arguments.length<=4||void 0===arguments[4]?{0:20,1:20}:arguments[4];_classCallCheck(this,t),this.speedArr=n,this.nextSpeedArr={0:this.speedArr[0],1:this.speedArr[1]},this.resize(s,h),this.moveTo(e,i)}return _createClass(t,[{key:"moveTo",value:function(t,e){this.x=t,this.y=e,this.cX=t+this.sWidth,this.cY=e+this.sHeight}},{key:"resize",value:function(t,e){this.w=t,this.h=e,this.sWidth=t/2,this.sHeight=e/2}},{key:"draw",value:function(t){t.save(),t.beginPath(),t.rect(this.x,this.y,this.w,this.h),t.closePath(),t.restore()}},{key:"run",value:function(){this.speedArr[0]=this.nextSpeedArr[0],this.speedArr[1]=this.nextSpeedArr[1],this.moveTo(this.x+.016*this.speedArr[0],this.y+.016*this.speedArr[1])}},{key:"copy",value:function(t){this.resize(t.w,t.h),this.moveTo(t.x,t.y),this.nextSpeedArr[0]=t.speedArr[0],this.nextSpeedArr[1]=t.speedArr[1]}},{key:"init",value:function(t,e,i,s,h){this.resize(i,s),this.moveTo(t,e)}},{key:"collide",value:function(t,e){var i=r[0],s=r[1],h=void 0,n=void 0,o=void 0,u=void 0,c=void 0,a=void 0,l=void 0,d=void 0;if(e)Math.abs(this.cX-t.cX)+this.sWidth>t.sWidth&&(this.nextSpeedArr[0]=-(this.nextSpeedArr[0]||this.speedArr[0]),this.moveTo(this.cX>t.cX?t.x+t.w-this.w:t.x,this.y)),Math.abs(this.cY-t.cY)+this.sHeight>t.sHeight&&(this.nextSpeedArr[1]=-(this.nextSpeedArr[1]||this.speedArr[1]),this.moveTo(this.x,this.cY>t.cY?t.y+t.h-this.h:t.y));else{for(i.copy(this),s.copy(t),n=i.sWidth+s.sWidth,o=i.sHeight+s.sHeight,u=n-Math.abs(i.cX-s.cX),c=o-Math.abs(i.cY-s.cY);u>0&&c>0;)i.run(-16),s.run(-16),u=n-Math.abs(i.cX-s.cX),c=o-Math.abs(i.cY-s.cY);a=0>=u,l=0>=c,a&&(d=this.cX>t.cX?1:-1,this.nextSpeedArr[0]=d*(Math.abs(this.nextSpeedArr[0])+Math.abs(t.speedArr[0]))/2),l&&(d=i.cY>s.cY?1:-1,this.nextSpeedArr[1]=d*(Math.abs(this.nextSpeedArr[1])+Math.abs(t.speedArr[1]))/2)}i=s=h=n=o=u=c=a=l=d=null}},{key:"carve",value:function(e,i){var s=[],h=[],n=e-this.x,r=i-this.y,o=n>0&&n<this.w,u=r>0&&r<this.h;if(o&&u)for(h=this.carve(e,this.y);h.length;)s=s.concat(h.shift().carve(this.x,i));else o?s.push(new t(this.x,this.y,n,this.h),new t(e,this.y,this.w-n,this.h)):u&&s.push(new t(this.x,this.y,this.w,r),new t(this.x,i,this.w,this.h-r));return h.length=0,n=r=o=u=null,s}},{key:"isApproach",value:function(t,e){var i=r[0],s=r[1];return i.copy(t),s.copy(e),i.run(),s.run(),+(Math.pow(t.cX-e.cX,2)-Math.pow(i.cX-s.cX,2)+Math.pow(t.cY-e.cY,2)-Math.pow(i.cY-s.cY,2)).toFixed(6)>0?!0:!1}},{key:"isCollide",value:function(t,e){Math.abs(t.cX-e.cX)<t.sWidth+e.sWidth&&Math.abs(t.cY-e.cY)<t.sHeight+e.sHeight&&this.isApproach(t,e)&&(t.collide(e),e.collide(t))}}]),t}(),n=function(t){function e(t,i,s,h){var n=arguments.length<=4||void 0===arguments[4]?{0:10,1:10}:arguments[4],r=arguments[5],o=arguments[6],u=arguments[7];_classCallCheck(this,e);var c=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this,t,i,s,h,n));return c.x=t,c.y=i,c.radius=.5*s,c.width=s,c.height=h,c.speedArr=n,c.nextSpeedArr={0:c.speedArr[0],1:c.speedArr[1]},c.linkCount=r,c.dotColorFuc=o,c.lineColorFuc=u,c.dotColor="#ccc",c.lineColor="#ccc",c.linkingCount=0,c.updateColor(),c}return _inherits(e,t),_createClass(e,[{key:"updateColor",value:function(t,e){this.dotColor=this.dotColorFuc(this,t,e),this.lineColor=this.lineColorFuc(this,t,e)}},{key:"run",value:function(t,e){this.limit(t,e),this.speedArr[0]=this.nextSpeedArr[0],this.speedArr[1]=this.nextSpeedArr[1],this.moveTo(this.x+.016*this.speedArr[0],this.y+.016*this.speedArr[1]),this.updateColor(t,e)}},{key:"draw",value:function(t){t.fillStyle=this.dotColor,t.save(),t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!0),t.fill(),t.restore(),this.linkingCount=0}},{key:"limit",value:function(t,e){(this.x+this.sWidth>=t||this.x-this.sWidth<=0)&&(this.nextSpeedArr[0]=-this.nextSpeedArr[0]),(this.y+this.sHeight>=e||this.y-this.sHeight<=0)&&(this.nextSpeedArr[1]=-this.nextSpeedArr[1])}},{key:"linkWith",value:function(t,e){e.strokeStyle=this.lineColor,e.lineWidth=.4,e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(t.x,t.y),e.stroke(),e.closePath(),e.save(),t.linkingCount++}},{key:"canLink",value:function(t,e){var i=this;t.forEach(function(t){t.linkingCount<t.linkCount&&i.linkWith(t,e)})}},{key:"isCollide",value:function(t,e){Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<Math.pow(t.radius+e.radius,2)&&this.isApproach(t,e)&&(t.collide(e),e.collide(t))}}]),e}(h),r=[];r.push(new h(0,0,0,0),new h(0,0,0,0));var o=window.innerWidth,u=window.innerHeight-10,c=function(t,e,i){return"rgb("+Math.floor(255*(1-t.x/e))+", "+Math.floor(255*(1-t.y/i))+","+Math.floor(255*(t.speedArr[0]/100))+")"},a=function(t){return Math.random()*t*(2*Math.random()-1)},l=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.min||0,i=t.max||20,s=t.random||!0,h=t.size||10;return s?t.size?function(){return Math.random()*h}:function(){return Math.random()*(i-e)+e}:function(){return h}},d=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.count||4,i=void 0===t.show?!0:t.show;return{count:e,show:i}},f=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=void 0===t.physical?!0:t.physical;return{physical:e,speed:t.speed||20,vxFuc:t.vxFuc||a,vyFuc:t.vyFuc||a,count:t.count||64,size:l(t.size)}},v=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return{dotColorFuc:t.dotColorFuc||c,lineColorFuc:t.lineColorFuc||c}},p=function(){function t(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,t),this.dot=f(i.dot),this.lineLink=d(i.lineLink),this.color=v(i.color),this.screenWidth=i.screenWidth||o,this.screenHeight=i.screenHeight||u,this.dotArr=[],this.tree,this.setCanvas(e),this.init(),this.loop(),this.DRAW_INDEX=0,this.DRAW_LEN=0,this.DRAW_J=0,this.DRAW_TMP_LEN=0,this.DRAW_TMP_RECT=[]}return _createClass(t,[{key:"setCanvas",value:function(t){return t?(this.canvas=t,t.height=this.screenHeight,t.width=this.screenWidth,t.setAttribute("style","height: "+this.screenHeight+"px; width: "+this.screenWidth+"px"),void(this.cxt=this.canvas.getContext("2d"))):console.error("canvas is must be requried")}},{key:"init",value:function(){var t=void 0,e=void 0;this.dotArr.length=0,this.tree=new s(new h(0,0,this.screenWidth,this.screenHeight));for(var i=0;i<this.dot.count;i++)t=this.dot.size(),e=new n(Math.floor(Math.random()*(this.screenWidth-20)),Math.floor(Math.random()*(this.screenHeight-20)),t,t,{0:this.dot.vxFuc(this.dot.speed),1:this.dot.vyFuc(this.dot.speed)},this.lineLink.count,this.color.dotColorFuc,this.color.lineColorFuc),this.dotArr.push(e),this.tree.insert(e)}},{key:"draw",value:function(){for(this.DRAW_TMP_RECT.length=0,this.cxt.clearRect(0,0,this.screenWidth,this.screenHeight),this.tree.refresh(),this.DRAW_INDEX=0,this.DRAW_LEN=this.dotArr.length;this.DRAW_INDEX<this.DRAW_LEN;this.DRAW_INDEX++){if(this.DRAW_TMP_RECT.length=0,this.DRAW_TMP_RECT=this.tree.retrieve(this.dotArr[this.DRAW_INDEX]),this.lineLink.show&&this.dotArr[this.DRAW_INDEX].canLink(this.DRAW_TMP_RECT,this.cxt),this.dot.physical)for(this.DRAW_J=0,this.DRAW_TMP_LEN=this.DRAW_TMP_RECT.length;this.DRAW_J<this.DRAW_TMP_LEN;this.DRAW_J++)this.dotArr[this.DRAW_INDEX].isCollide(this.dotArr[this.DRAW_INDEX],this.DRAW_TMP_RECT[this.DRAW_J]);this.dotArr[this.DRAW_INDEX].run(this.screenWidth,this.screenHeight),this.dotArr[this.DRAW_INDEX].draw(this.cxt)}requestAnimationFrame(this.draw.bind(this))}},{key:"loop",value:function(){requestAnimationFrame(this.draw.bind(this))}}]),t}();return p});
