montageDefine("3da7b24","core/converter/new-line-to-br-converter",{dependencies:["../core","./converter"],factory:function(e,t){e("../core").Montage;var n=e("./converter").Converter,i=function(e){return e.replace(/(\r\n|\r|\n)/g,"<br />")};t.NewLineToBrConverter=n.specialize({_convert:{value:function(e){return e&&"string"==typeof e?i(e):e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});