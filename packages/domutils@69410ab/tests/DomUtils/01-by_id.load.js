montageDefine("69410ab","tests/DomUtils/01-by_id",{dependencies:["../.."],factory:function(e,t){var n=e("../..");t.name="Get element by id",t.getElements=function(e){return n.getElements({id:"asdf"},e,!0,1)[0]},t.getByFunction=function(e){return n.getElementById("asdf",e,!0)},t.expected={type:"tag",name:"tag1",attribs:{id:"asdf"},children:[{data:" ",type:"text"},{type:"script",name:"script",attribs:{},children:[{data:"text",type:"text"}]},{data:" ",type:"text"},{data:" comment ",type:"comment"},{data:" ",type:"text"},{type:"tag",name:"tag2",attribs:{},children:[{data:" text ",type:"text"}]}]}}});