montageDefine("d3ad6fa","lib/_stream_writable",{dependencies:["buffer","core-util-is","inherits","stream","./_stream_duplex"],factory:function(e,t,n){function r(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function i(e,t){e=e||{};var n=e.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var r=e.decodeStrings===!1;this.decodeStrings=!r,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){p(t,e)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function a(t){var n=e("./_stream_duplex");return this instanceof a||this instanceof n?(this._writableState=new i(t,this),this.writable=!0,w.call(this),void 0):new a(t)}function s(e,t,n){var r=Error("write after end");e.emit("error",r),process.nextTick(function(){n(r)})}function o(e,t,n,r){var i=!0;if(!b.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!t.objectMode){var a=new TypeError("Invalid non-string/buffer chunk");e.emit("error",a),process.nextTick(function(){r(a)}),i=!1}return i}function l(e,t,n){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new b(t,n)),t}function c(e,t,n,i,a){n=l(t,n,i),b.isBuffer(n)&&(i="buffer");var s=t.objectMode?1:n.length;t.length+=s;var o=t.length<t.highWaterMark;return o||(t.needDrain=!0),t.writing?t.buffer.push(new r(n,i,a)):u(e,t,s,n,i,a),o}function u(e,t,n,r,i,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,e._write(r,i,t.onwrite),t.sync=!1}function h(e,t,n,r,i){n?process.nextTick(function(){i(r)}):i(r),e._writableState.errorEmitted=!0,e.emit("error",r)}function d(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function p(e,t){var n=e._writableState,r=n.sync,i=n.writecb;if(d(n),t)h(e,n,r,t,i);else{var a=v(e,n);a||n.bufferProcessing||!n.buffer.length||g(e,n),r?process.nextTick(function(){f(e,n,a,i)}):f(e,n,a,i)}}function f(e,t,n,r){n||m(e,t),r(),n&&_(e,t)}function m(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function g(e,t){t.bufferProcessing=!0;for(var n=0;t.buffer.length>n;n++){var r=t.buffer[n],i=r.chunk,a=r.encoding,s=r.callback,o=t.objectMode?1:i.length;if(u(e,t,o,i,a,s),t.writing){n++;break}}t.bufferProcessing=!1,t.buffer.length>n?t.buffer=t.buffer.slice(n):t.buffer.length=0}function v(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function _(e,t){var n=v(e,t);return n&&(t.finished=!0,e.emit("finish")),n}function y(e,t,n){t.ending=!0,_(e,t),n&&(t.finished?process.nextTick(n):e.once("finish",n)),t.ended=!0}n.exports=a;var b=e("buffer").Buffer;a.WritableState=i;var C=e("core-util-is");C.inherits=e("inherits");var w=e("stream");C.inherits(a,w),a.prototype.pipe=function(){this.emit("error",Error("Cannot pipe. Not readable."))},a.prototype.write=function(e,t,n){var r=this._writableState,i=!1;return"function"==typeof t&&(n=t,t=null),b.isBuffer(e)?t="buffer":t||(t=r.defaultEncoding),"function"!=typeof n&&(n=function(){}),r.ended?s(this,r,n):o(this,r,e,n)&&(i=c(this,r,e,t,n)),i},a.prototype._write=function(e,t,n){n(Error("not implemented"))},a.prototype.end=function(e,t,n){var r=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),e!==void 0&&null!==e&&this.write(e,t),r.ending||r.finished||y(this,r,n)}}});