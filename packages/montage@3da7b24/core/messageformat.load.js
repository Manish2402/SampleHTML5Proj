montageDefine("3da7b24","core/messageformat",{dependencies:[],factory:function(e,t,n){(function(e){function r(e,t){var n;if(e&&t&&(r.locale[e]=t),n=e=e||"en",t=t||r.locale[n=r.Utils.getFallbackLocale(e)],!t)throw Error("Plural Function not found for locale: "+e);this.pluralFunc=t,this.locale=e,this.fallbackLocale=n}r.locale={en:function(e){return 1===e?"one":"other"}},r.SafeString=function(e){this.string=e},r.SafeString.prototype.toString=function(){return""+this.string},r.Utils={numSub:function(e,t,n){return e.replace(/^#|[^\\]#/g,function(e){var r=e&&2===e.length?e.charAt(0):"";return r+'" + (function(){ var x = '+t+';\nif( isNaN(x) ){\nthrow new Error("MessageFormat: `"+lastkey_'+n+'+"` isnt a number.");\n}\nreturn x;\n})() + "'})},escapeExpression:function(e){var t={"\n":"\\n",'"':'\\"'},n=/[\n"]/g,i=/[\n"]/,a=function(e){return t[e]||"&amp;"};return e instanceof r.SafeString?""+e:null===e||e===!1?"":i.test(e)?e.replace(n,a):e},getFallbackLocale:function(e){for(var t=e.indexOf("-")>=0?"-":"_";!r.locale.hasOwnProperty(e);)if(e=e.substring(0,e.lastIndexOf(t)),0===e.length)return null;return e}};var i=function(){var e={parse:function(e,t){function n(e,t,n){for(var r=e,i=n-e.length,a=0;i>a;a++)r=t+r;return r}function r(e){var t=e.charCodeAt(0);if(255>=t)var r="x",i=2;else var r="u",i=4;return"\\"+r+n(t.toString(16).toUpperCase(),"0",i)}function i(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,r)+'"'}function a(e){k>D||(D>k&&(k=D,L=[]),L.push(e))}function o(){var e="start@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=D,r=s(),i=null!==r?function(e){return{type:"program",program:e}}(r):null;if(null!==i)var a=i;else{var a=null;D=n}return A[e]={nextPos:D,result:a},a}function s(){var e="messageFormatPattern@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=D,r=D,i=b();if(null!==i){for(var a=[],o=l();null!==o;){a.push(o);var o=l()}if(null!==a)var s=[i,a];else{var s=null;D=r}}else{var s=null;D=r}var u=null!==s?function(e,t){var n=[];e&&e.val&&n.push(e);for(var r in t)t.hasOwnProperty(r)&&n.push(t[r]);return{type:"messageFormatPattern",statements:n}}(s[0],s[1]):null;if(null!==u)var c=u;else{var c=null;D=n}return A[e]={nextPos:D,result:c},c}function l(){var t="messageFormatPatternRight@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D,i=D;if("{"===e.substr(D,1)){var o="{";D+=1}else{var o=null;x&&a('"{"')}if(null!==o){var s=P();if(null!==s){var l=u();if(null!==l){var c=P();if(null!==c){if("}"===e.substr(D,1)){var h="}";D+=1}else{var h=null;x&&a('"}"')}if(null!==h){var d=b();if(null!==d)var f=[o,s,l,c,h,d];else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}var p=null!==f?function(e,t){var n=[];return e&&n.push(e),t&&t.val&&n.push(t),{type:"messageFormatPatternRight",statements:n}}(f[2],f[5]):null;if(null!==p)var v=p;else{var v=null;D=r}return A[t]={nextPos:D,result:v},v}function u(){var t="messageFormatElement@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D,i=D,o=y();if(null!==o){var s=D;if(","===e.substr(D,1)){var l=",";D+=1}else{var l=null;x&&a('","')}if(null!==l){var u=c();if(null!==u)var h=[l,u];else{var h=null;D=s}}else{var h=null;D=s}var d=null!==h?h:"";if(null!==d)var f=[o,d];else{var f=null;D=i}}else{var f=null;D=i}var p=null!==f?function(e,t){var n={type:"messageFormatElement",argumentIndex:e};return t&&t.length?n.elementFormat=t[1]:n.output=!0,n}(f[0],f[1]):null;if(null!==p)var v=p;else{var v=null;D=r}return A[t]={nextPos:D,result:v},v}function c(){var t="elementFormat@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D,i=D,o=P();if(null!==o){if("plural"===e.substr(D,6)){var s="plural";D+=6}else{var s=null;x&&a('"plural"')}if(null!==s){var l=P();if(null!==l){if(","===e.substr(D,1)){var u=",";D+=1}else{var u=null;x&&a('","')}if(null!==u){var c=P();if(null!==c){var f=h();if(null!==f){var p=P();if(null!==p)var v=[o,s,l,u,c,f,p];else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}var m=null!==v?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(v[1],v[5]):null;if(null!==m)var g=m;else{var g=null;D=r}if(null!==g)var b=g;else{var y=D,_=D,E=P();if(null!==E){if("select"===e.substr(D,6)){var w="select";D+=6}else{var w=null;x&&a('"select"')}if(null!==w){var M=P();if(null!==M){if(","===e.substr(D,1)){var T=",";D+=1}else{var T=null;x&&a('","')}if(null!==T){var C=P();if(null!==C){var S=d();if(null!==S){var O=P();if(null!==O)var k=[E,w,M,T,C,S,O];else{var k=null;D=_}}else{var k=null;D=_}}else{var k=null;D=_}}else{var k=null;D=_}}else{var k=null;D=_}}else{var k=null;D=_}}else{var k=null;D=_}var L=null!==k?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(k[1],k[5]):null;if(null!==L)var I=L;else{var I=null;D=y}if(null!==I)var b=I;else var b=null}return A[t]={nextPos:D,result:b},b}function h(){var e="pluralStyle@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=D,r=f(),i=null!==r?function(e){return{type:"pluralStyle",val:e}}(r):null;if(null!==i)var a=i;else{var a=null;D=n}return A[e]={nextPos:D,result:a},a}function d(){var e="selectStyle@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=D,r=v(),i=null!==r?function(e){return{type:"selectStyle",val:e}}(r):null;if(null!==i)var a=i;else{var a=null;D=n}return A[e]={nextPos:D,result:a},a}function f(){var e="pluralFormatPattern@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=D,r=D,i=p(),a=null!==i?i:"";if(null!==a){for(var o=[],s=m();null!==s;){o.push(s);var s=m()}if(null!==o)var l=[a,o];else{var l=null;D=r}}else{var l=null;D=r}var u=null!==l?function(e,t){var n={type:"pluralFormatPattern",pluralForms:t};return n.offset=e?e:0,n}(l[0],l[1]):null;if(null!==u)var c=u;else{var c=null;D=n}return A[e]={nextPos:D,result:c},c}function p(){var t="offsetPattern@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D,i=D,o=P();if(null!==o){if("offset"===e.substr(D,6)){var s="offset";D+=6}else{var s=null;x&&a('"offset"')}if(null!==s){var l=P();if(null!==l){if(":"===e.substr(D,1)){var u=":";D+=1}else{var u=null;x&&a('":"')}if(null!==u){var c=P();if(null!==c){var h=w();if(null!==h){var d=P();if(null!==d)var f=[o,s,l,u,c,h,d];else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}}else{var f=null;D=i}var p=null!==f?function(e){return e}(f[5]):null;if(null!==p)var v=p;else{var v=null;D=r}return A[t]={nextPos:D,result:v},v}function v(){var e="selectFormatPattern@"+D,t=A[e];if(t)return D=t.nextPos,t.result;for(var n=D,r=[],i=m();null!==i;){r.push(i);var i=m()}var a=null!==r?function(e){return{type:"selectFormatPattern",pluralForms:e}}(r):null;if(null!==a)var o=a;else{var o=null;D=n}return A[e]={nextPos:D,result:o},o}function m(){var t="pluralForms@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D,i=D,o=P();if(null!==o){var l=g();if(null!==l){var u=P();if(null!==u){if("{"===e.substr(D,1)){var c="{";D+=1}else{var c=null;x&&a('"{"')}if(null!==c){var h=P();if(null!==h){var d=s();if(null!==d){var f=P();if(null!==f){if("}"===e.substr(D,1)){var p="}";D+=1}else{var p=null;x&&a('"}"')}if(null!==p)var v=[o,l,u,c,h,d,f,p];else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}}else{var v=null;D=i}var m=null!==v?function(e,t){return{type:"pluralForms",key:e,val:t}}(v[1],v[5]):null;if(null!==m)var b=m;else{var b=null;D=r}return A[t]={nextPos:D,result:b},b}function g(){var t="stringKey@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D,i=y(),o=null!==i?function(e){return e}(i):null;if(null!==o)var s=o;else{var s=null;D=r}if(null!==s)var l=s;else{var u=D,c=D;if("="===e.substr(D,1)){var h="=";D+=1}else{var h=null;x&&a('"="')}if(null!==h){var d=w();if(null!==d)var f=[h,d];else{var f=null;D=c}}else{var f=null;D=c}var p=null!==f?function(e){return e}(f[1]):null;if(null!==p)var v=p;else{var v=null;D=u}if(null!==v)var l=v;else var l=null}return A[t]={nextPos:D,result:l},l}function b(){var e="string@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=D,r=D,i=P();if(null!==i){var a=[],o=D,s=P();if(null!==s){var l=_();if(null!==l){var u=P();if(null!==u)var c=[s,l,u];else{var c=null;D=o}}else{var c=null;D=o}}else{var c=null;D=o}for(;null!==c;){a.push(c);var o=D,s=P();if(null!==s){var l=_();if(null!==l){var u=P();if(null!==u)var c=[s,l,u];else{var c=null;D=o}}else{var c=null;D=o}}else{var c=null;D=o}}if(null!==a)var h=[i,a];else{var h=null;D=r}}else{var h=null;D=r}var d=null!==h?function(e,t){for(var n=[],r=0;t.length>r;++r)for(var i=0;t[r].length>i;++i)n.push(t[r][i]);return{type:"string",val:e+n.join("")}}(h[0],h[1]):null;if(null!==d)var f=d;else{var f=null;D=n}return A[e]={nextPos:D,result:f},f}function y(){var t="id@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D,i=D,o=P();if(null!==o){if(null!==e.substr(D).match(/^[a-zA-Z$_]/)){var s=e.charAt(D);D++}else{var s=null;x&&a("[a-zA-Z$_]")}if(null!==s){var l=[];if(null!==e.substr(D).match(/^[^ 	\n\r,.+={}]/)){var u=e.charAt(D);D++}else{var u=null;x&&a("[^ 	\\n\\r,.+={}]")}for(;null!==u;)if(l.push(u),null!==e.substr(D).match(/^[^ 	\n\r,.+={}]/)){var u=e.charAt(D);D++}else{var u=null;x&&a("[^ 	\\n\\r,.+={}]")}if(null!==l){var c=P();if(null!==c)var h=[o,s,l,c];else{var h=null;D=i}}else{var h=null;D=i}}else{var h=null;D=i}}else{var h=null;D=i}var d=null!==h?function(e,t){return e+(t?t.join(""):"")}(h[1],h[2]):null;if(null!==d)var f=d;else{var f=null;D=r}return A[t]={nextPos:D,result:f},f}function _(){var e="chars@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=D,r=E();if(null!==r)for(var i=[];null!==r;){i.push(r);var r=E()}else var i=null;var a=null!==i?function(e){return e.join("")}(i):null;if(null!==a)var o=a;else{var o=null;D=n}return A[e]={nextPos:D,result:o},o}function E(){var t="char@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D;if(null!==e.substr(D).match(/^[^{}\\\0- 	\n\r]/)){var i=e.charAt(D);D++}else{var i=null;x&&a("[^{}\\\\\\0- 	\\n\\r]")}var o=null!==i?function(e){return e}(i):null;if(null!==o)var s=o;else{var s=null;D=r}if(null!==s)var l=s;else{var u=D;if("\\#"===e.substr(D,2)){var c="\\#";D+=2}else{var c=null;x&&a('"\\\\#"')}var h=null!==c?function(){return"\\#"}():null;if(null!==h)var d=h;else{var d=null;D=u}if(null!==d)var l=d;else{var f=D;if("\\{"===e.substr(D,2)){var p="\\{";D+=2}else{var p=null;x&&a('"\\\\{"')}var v=null!==p?function(){return"{"}():null;if(null!==v)var m=v;else{var m=null;D=f}if(null!==m)var l=m;else{var g=D;if("\\}"===e.substr(D,2)){var b="\\}";D+=2}else{var b=null;x&&a('"\\\\}"')}var y=null!==b?function(){return"}"}():null;if(null!==y)var _=y;else{var _=null;D=g}if(null!==_)var l=_;else{var E=D,w=D;if("\\u"===e.substr(D,2)){var P="\\u";D+=2}else{var P=null;x&&a('"\\\\u"')}if(null!==P){var T=M();if(null!==T){var C=M();if(null!==C){var S=M();if(null!==S){var O=M();if(null!==O)var k=[P,T,C,S,O];else{var k=null;D=w}}else{var k=null;D=w}}else{var k=null;D=w}}else{var k=null;D=w}}else{var k=null;D=w}var L=null!==k?function(e,t,n,r){return String.fromCharCode(parseInt("0x"+e+t+n+r))}(k[1],k[2],k[3],k[4]):null;if(null!==L)var I=L;else{var I=null;D=E}if(null!==I)var l=I;else var l=null}}}}return A[t]={nextPos:D,result:l},l}function w(){var t="digits@"+D,n=A[t];if(n)return D=n.nextPos,n.result;var r=D;if(null!==e.substr(D).match(/^[0-9]/)){var i=e.charAt(D);D++}else{var i=null;x&&a("[0-9]")}if(null!==i)for(var o=[];null!==i;)if(o.push(i),null!==e.substr(D).match(/^[0-9]/)){var i=e.charAt(D);D++}else{var i=null;x&&a("[0-9]")}else var o=null;var s=null!==o?function(e){return parseInt(e.join(""),10)}(o):null;if(null!==s)var l=s;else{var l=null;D=r}return A[t]={nextPos:D,result:l},l}function M(){var t="hexDigit@"+D,n=A[t];if(n)return D=n.nextPos,n.result;if(null!==e.substr(D).match(/^[0-9a-fA-F]/)){var r=e.charAt(D);D++}else{var r=null;x&&a("[0-9a-fA-F]")}return A[t]={nextPos:D,result:r},r}function P(){var e="_@"+D,t=A[e];if(t)return D=t.nextPos,t.result;var n=x;x=!1;for(var r=D,i=[],o=T();null!==o;){i.push(o);var o=T()}var s=null!==i?function(e){return e.join("")}(i):null;if(null!==s)var l=s;else{var l=null;D=r}return x=n,x&&null===l&&a("whitespace"),A[e]={nextPos:D,result:l},l}function T(){var t="whitespace@"+D,n=A[t];if(n)return D=n.nextPos,n.result;if(null!==e.substr(D).match(/^[ 	\n\r]/)){var r=e.charAt(D);D++}else{var r=null;x&&a("[ 	\\n\\r]")}return A[t]={nextPos:D,result:r},r}function C(){function t(e){e.sort();for(var t=null,n=[],r=0;e.length>r;r++)e[r]!==t&&(n.push(e[r]),t=e[r]);switch(n.length){case 0:return"end of input";case 1:return n[0];default:return n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}}var n=t(L),r=Math.max(D,k),a=e.length>r?i(e.charAt(r)):"end of input";return"Expected "+n+" but "+a+" found."}function S(){for(var t=1,n=1,r=!1,i=0;k>i;i++){var a=e.charAt(i);"\n"===a?(r||t++,n=1,r=!1):"\r"===a|"\u2028"===a||"\u2029"===a?(t++,n=1,r=!0):(n++,r=!1)}return{line:t,column:n}}var O={_:P,"char":E,chars:_,digits:w,elementFormat:c,hexDigit:M,id:y,messageFormatElement:u,messageFormatPattern:s,messageFormatPatternRight:l,offsetPattern:p,pluralFormatPattern:f,pluralForms:m,pluralStyle:h,selectFormatPattern:v,selectStyle:d,start:o,string:b,stringKey:g,whitespace:T};if(void 0!==t){if(void 0===O[t])throw Error("Invalid rule name: "+i(t)+".")}else t="start";var D=0,x=!0,k=0,L=[],A={},I=O[t]();if(null===I||D!==e.length){var F=S();throw new this.SyntaxError(C(),F.line,F.column)}return I},toSource:function(){return this._source}};return e.SyntaxError=function(e,t,n){this.name="SyntaxError",this.message=e,this.line=t,this.column=n},e.SyntaxError.prototype=Error.prototype,e}();r.prototype.parse=function(){return i.parse.apply(i,arguments)},r.prototype.precompile=function(e){function t(e,o){o=o||{};var s,l,u,c="";switch(e.type){case"program":return t(e.program);case"messageFormatPattern":for(s=0;e.statements.length>s;++s)c+=t(e.statements[s],o);return a.begin+c+a.end;case"messageFormatPatternRight":for(s=0;e.statements.length>s;++s)c+=t(e.statements[s],o);return c;case"messageFormatElement":return o.pf_count=o.pf_count||0,c+='if(!d){\nthrow new Error("MessageFormat: No data passed to function.");\n}\n',e.output?c+='r += d["'+e.argumentIndex+'"];\n':(u="lastkey_"+(o.pf_count+1),c+="var "+u+' = "'+e.argumentIndex+'";\n',c+="var k_"+(o.pf_count+1)+"=d["+u+"];\n",c+=t(e.elementFormat,o)),c;case"elementFormat":return"select"===e.key?(c+=t(e.val,o),c+="r += (pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+" ] || pf_"+o.pf_count+'[ "other" ])( d );\n'):"plural"===e.key&&(c+=t(e.val,o),c+="if ( pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ] ) {\n',c+="r += pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ]( d ); \n',c+="}\nelse {\n",c+="r += (pf_"+o.pf_count+'[ MessageFormat.locale["'+n.fallbackLocale+'"]( k_'+(o.pf_count+1)+" - off_"+o.pf_count+" ) ] || pf_"+o.pf_count+'[ "other" ] )( d );\n',c+="}\n"),c;case"pluralFormatPattern":for(o.pf_count=o.pf_count||0,c+="var off_"+o.pf_count+" = "+e.offset+";\n",c+="var pf_"+o.pf_count+" = { \n",i=!0,s=0;e.pluralForms.length>s;++s)"other"===e.pluralForms[s].key&&(i=!1),l?c+=",\n":l=1,c+='"'+e.pluralForms[s].key+'" : '+t(e.pluralForms[s].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());if(c+="\n};\n",i)throw Error("No 'other' form found in pluralFormatPattern "+o.pf_count);return c;case"selectFormatPattern":for(o.pf_count=o.pf_count||0,c+="var off_"+o.pf_count+" = 0;\n",c+="var pf_"+o.pf_count+" = { \n",i=!0,s=0;e.pluralForms.length>s;++s)"other"===e.pluralForms[s].key&&(i=!1),l?c+=",\n":l=1,c+='"'+e.pluralForms[s].key+'" : '+t(e.pluralForms[s].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());if(c+="\n};\n",i)throw Error("No 'other' form found in selectFormatPattern "+o.pf_count);return c;case"string":return'r += "'+r.Utils.numSub(r.Utils.escapeExpression(e.val),"k_"+o.pf_count+" - off_"+(o.pf_count-1),o.pf_count)+'";\n';default:throw Error("Bad AST type: "+e.type)}}var n=this,i=!1,a={begin:'function(d){\nvar r = "";\n',end:"return r;\n}"};return t(e)},r.prototype.compile=function(e){return Function("MessageFormat","return "+this.precompile(this.parse(e)))(r)},t!==void 0?(n!==void 0&&n.exports&&(t=n.exports=r),t.MessageFormat=r):"function"==typeof define&&define.amd?define(function(){return r}):e.MessageFormat=r})(this)}});