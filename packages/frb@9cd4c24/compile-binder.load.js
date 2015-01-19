montageDefine("9cd4c24","compile-binder",{dependencies:["./compile-observer","./observers","./binders","./algebra"],factory:function(e,t,n){function i(e){return i.semantics.compile(e)}var r=e("./compile-observer");e("./observers");var a=e("./binders"),s=e("./algebra"),o={type:"value"},l={type:"literal",value:!0};n.exports=i,i.semantics={compilers:{property:a.makePropertyBinder,get:a.makeGetBinder,has:a.makeHasBinder,only:a.makeOnlyBinder,one:a.makeOneBinder,rangeContent:a.makeRangeContentBinder,mapContent:a.makeMapContentBinder,reversed:a.makeReversedBinder,and:a.makeAndBinder,or:a.makeOrBinder},compile:function(e){var t=this.compilers;if("default"===e.type)return this.compile(e.args[0]);if("literal"===e.type){if(null==e.value)return Function.noop;throw Error("Can't bind to literal: "+e.value)}if("equals"===e.type){var n=this.compile(e.args[0]),i=r(e.args[1]);return a.makeEqualityBinder(n,i)}if("if"===e.type){var c=r(e.args[0]),u=this.compile(e.args[1]),h=this.compile(e.args[2]);return a.makeConditionalBinder(c,u,h)}if("and"===e.type||"or"===e.type){var d=s(e.args[0],o),p=s(e.args[1],o),n=this.compile(d[0]),f=this.compile(p[0]),g=r(d[1]),m=r(p[1]),v=r(e.args[0]),i=r(e.args[1]);return this.compilers[e.type](n,f,v,i,g,m)}if("everyBlock"===e.type){var _=r(e.args[0]),y=s(e.args[1],l),b=this.compile(y[0]),C=r(y[1]);return a.makeEveryBlockBinder(_,b,C)}if("rangeContent"===e.type){var L,w=r(e.args[0]);try{L=this.compile(e.args[0])}catch(x){L=Function.noop}return a.makeRangeContentBinder(w,L)}if("defined"===e.type){var L=this.compile(e.args[0]);return a.makeDefinedBinder(L)}if("parent"===e.type){var L=this.compile(e.args[0]);return a.makeParentBinder(L)}if("with"===e.type){var w=r(e.args[0]),L=this.compile(e.args[1]);return a.makeWithBinder(w,L)}if(t.hasOwnProperty(e.type)){var M=e.args.map(r,r.semantics);return t[e.type].apply(null,M)}throw Error("Can't compile binder for "+JSON.stringify(e.type))}}}});