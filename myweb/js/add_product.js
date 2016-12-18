function setImagePreview(avalue) {
    var docObj = document.getElementById("doc");
    
    var imgObjPreview =document.getElementById("localImag").getElementsByTagName("img");
    var divs = document.getElementById("localImag");
    if (docObj.files && docObj.files[0]) {
       for(var i=0;i<docObj.files.length;i++){
          var oimg=document.createElement("img");
          oimg.setAttribute("class",'preview');
          document.getElementById("localImag").appendChild(oimg);
          imgObjPreview[i].src = window.URL.createObjectURL(docObj.files[i]);
        }
    } else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag");
        //必须设置初始大小
        localImagId.style.width = "100px";
        localImagId.style.height = "100px";
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        } catch(e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}
$(function(){
	$("#btn").click(function(){
		console.log($(".froala-element").html());
	});
	(function(){
		 $('#edit').editable({inlineMode: false, alwaysBlank: true});
	})();

});
