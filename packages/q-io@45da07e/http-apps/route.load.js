montageDefine("45da07e","http-apps/route",{dependencies:["q","./status"],factory:function(e,t){var n=e("q"),i=e("./status");t.Cap=function(e,t){return t=t||i.notFound,function(n,i){return""===n.pathInfo||"/"===n.pathInfo?e(n,i):t(n,i)}},t.Tap=function(e,t){return function(){var i=this,r=arguments;return n.when(t.apply(this,arguments),function(t){return t?t:e.apply(i,r)})}},t.Trap=function(e,t){return function(i){return n.when(e.apply(this,arguments),function(e){return e?(e.headers=e.headers||{},t(e,i)||e):void 0})}},t.Branch=function(e,t){return e||(e={}),t||(t=i.notFound),function(n,i){if(!/^\//.test(n.pathInfo))return t(n,i);var r=n.pathInfo.slice(1),a=r.split("/"),s=decodeURIComponent(a.shift());return Object.has(e,s)?(n.scriptName=n.scriptName+s+"/",n.pathInfo=r.slice(s.length),Object.get(e,s)(n,i)):t(n,i)}},t.FirstFound=function(e){return function(t){function i(){var s=e[r++](t,s);return a>r?n.when(s,function(e){return 404===e.status?i():e}):s}var r=0,a=e.length;return i()}}}});