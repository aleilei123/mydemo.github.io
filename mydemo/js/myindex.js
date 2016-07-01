$(function(){
	var img=['images/scroll_pic/1.jpg','images/scroll_pic/3.jpg','images/scroll_pic/3.jpg'];
	
	$str='<div class="pro" style="position:absolute;left:670px;top:20px;"><a href="#"><img src="images/scroll_pic/'+1+'.jpg"></a><p><span>Elegant MP3 player skin PSD download</span></p></div>';
    $('.display').append($str);
    var j=0;
    var $x=$('.pro').eq(3).offset().left;
    // alert($x);
	$(".prev").click(function(){
	 // alert($(".pro").eq(3).offset().left);
	  var i=0;
	  
	  var timer=setInterval(function(){
	  	for(var num=0;num<$('.pro').length;num++){
	  		var left=$(".pro").eq(num).offset().left-5;
	      if(i==40){
	      	clearInterval(timer);
	      	$(".pro").eq((j-1)%4).offset({left:$x+ 20});
	      	$(".pro").eq((j-1)%4).attr('src',img[(j%3-1)]);
	      	console.log(j);
	       }
	      	$(".pro").eq(num).offset({left:left});
	  	}

      	 i++;
  		},10);
	 j++;
	});

	var n=1;
	var timer1=setInterval(function(){
		var nn=n%3+1;
		// $('.con_top').eq(0).css('background-image','url(images/logo.png)');
		// console.log($('.con_top').eq(0).css('background-image','url(images/banner/'+nn+'.png)'));
	    
		 $(".con_top").fadeOut(2000,function(){
		 	$(".con_top").css("background-image",'url(images/banner/'+nn+'.png)');
		 	$(".con_top").fadeIn(1000);});
	    n++;
	},8000);
});