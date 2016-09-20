$(window).on("load",function(){
	// My Account下拉列表
	(function(){
		var onoff=true;
		$(".header .list_down").click(function(){
			if(onoff){
				$(".header .list_down ul").css("display","block");
				onoff=false;
			}else{
				$(".header .list_down ul").css("display","none");
				onoff=true;
			}
			
		});
	})();
	// side_bar下拉菜单
	(function(){
		var ali=$('.side_bar .list_down');
		ali.each(function(){
			$(this).attr("onoff","true");
		});
		ali.click(function(){
			ali.find("ul").animate({
				height: 0,
			},1000);
			var aulli=$(this).find("ul li");
			var h=aulli.eq(0).outerHeight();
			if($(this).attr("onoff")=="true"){
				ali.children('a').removeClass('light');
				ali.children('a').addClass('blur');
				$(this).children('a').removeClass('blur');
				$(this).children('a').addClass('light');
				$(this).find('ul').stop().animate({
				height: h*(aulli.length)
				},1000);
				ali.children('a').mouseover(function(index) {
					$(this).removeClass('blur');
					$(this).addClass('light');
				});
			ali.attr("onoff",true);
			$(this).attr("onoff","false");			
			}else{
				$(this).children('a').removeClass('light');
				$(this).children('a').addClass('blur');
				$(this).attr("onoff","true");
			}
		});
	})();
	// 头部下拉
	(function(){
		var obtn=$(".content_top .drop_down_icon");
		var onoff=true;
		obtn.click(function(){
			if(onoff){
				$(".content_top").animate({height:400},1000);
				$(this).find("div").removeClass("down");
				$(this).find("div").addClass('up');
				onoff=false;
			}else{
				$(".content_top").animate({height:16},1000);
				$(this).find("div").removeClass("up");
				$(this).find("div").addClass('down');
				onoff=true;
			}
		});
	})();
	// 右侧左拉
	(function(){
		var obtn=$(".nav_right .right_bar");
		var onoff=true;
		obtn.click(function(){
			if(onoff){
				$(".nav_right").animate({right:0},1000);
				$(this).find("div").removeClass("list_right");
				$(this).find("div").addClass('list_left');
				onoff=false;
			}else{
				$(".nav_right").animate({right:-250},1000);
				$(this).find("div").removeClass("list_left");
				$(this).find("div").addClass('list_right');
				onoff=true;
			}
		});
	})();
	// 首页大图切换
	(function(){
		var arr=[
			{"url":"image/photos/1.jpg","tittle":"Cool Features","detail":"Ut commodo ullamcer risus nec mattis. Fusce imperdiet ornare dignissim. Donec aliquet convallis tortor, et placerat."},
			{"url":"image/photos/2.jpg","tittle":"Lots of Pages","detail":"Ut commodo ullamcer risus nec mattis. Fusce imperdiet ornare dignissim. Donec aliquet convallis tortor, et placerat."},
			{"url":"image/photos/3.jpg","tittle":"Amazing Design","detail":"Ut commodo ullamcer risus nec mattis. Fusce imperdiet ornare dignissim. Donec aliquet convallis tortor, et placerat."},
		];
		var num=0;
		var aimg=$(".ad .img_list img");
		var oh=$(".ad h2");
		var op=$(".ad p");
		$(".ad .prev").click(function(){
			aimg.eq(0).animate({"opacity":0.1},500);
			oh.animate({"opacity":0},500);
			op.animate({"opacity":0},500);
			setTimeout(function(){
				num--;
				if(num<0){
					num=arr.length-1;
				}
				aimg.eq(0).attr("src",arr[num].url);
				aimg.eq(0).css("opacity",0.1);
				oh.html(arr[num].tittle);
				op.html(arr[num].detail);
				oh.css("opacity",0);
				op.css("opacity",0);
				aimg.eq(0).animate({"opacity":1},1000);
				oh.animate({"opacity":1},1000);
				op.animate({"opacity":1},1000);
			},500);
			
		});

		$(".ad .next").click(function(){
			aimg.eq(0).animate({"opacity":0.1},500);
			oh.animate({"opacity":0},500);
			op.animate({"opacity":0},500);
			setTimeout(function(){
				num++;
				if(num>arr.length-1){
					num=0;
				}
				aimg.eq(0).attr("src",arr[num].url);
				aimg.eq(0).css("opacity",0.1);
				oh.html(arr[num].tittle);
				op.html(arr[num].detail);
				oh.css("opacity",0);
				op.css("opacity",0);
				aimg.eq(0).animate({"opacity":1},1000);
				oh.animate({"opacity":1},1000);
				op.animate({"opacity":1},1000);
			},500);
			
		});
		var timer=null;
		play();
		function play(){
			timer=setInterval(function(){
				num++;
				if(num>arr.length-1){
						num=0;
				}
				autoplay(num);
			},4000);
		}
		$(".ad").hover(function(){clearInterval(timer)},play);
			function autoplay(num){
				aimg.eq(0).animate({"opacity":0.1},500);
				oh.animate({"opacity":0},500);
				op.animate({"opacity":0},500);
				setTimeout(function(){
					num++;
					if(num>arr.length-1){
						num=0;
					}
					aimg.eq(0).attr("src",arr[num].url);
					aimg.eq(0).css("opacity",0.1);
					oh.html(arr[num].tittle);
					op.html(arr[num].detail);
					oh.css("opacity",0);
					op.css("opacity",0);
					aimg.eq(0).animate({"opacity":1},1000);
					oh.animate({"opacity":1},1000);
					op.animate({"opacity":1},1000);
				},500);
			}
		})();

	// 首页大图切换
/*	(function(){
		var arr=[
			{"url":"image/photos/1.jpg","tittle":"Cool Features","detail":"Ut commodo ullamcer risus nec mattis. Fusce imperdiet ornare dignissim. Donec aliquet convallis tortor, et placerat."},
			{"url":"image/photos/2.jpg","tittle":"Lots of Pages","detail":"Ut commodo ullamcer risus nec mattis. Fusce imperdiet ornare dignissim. Donec aliquet convallis tortor, et placerat."},
			{"url":"image/photos/3.jpg","tittle":"Amazing Design","detail":"Ut commodo ullamcer risus nec mattis. Fusce imperdiet ornare dignissim. Donec aliquet convallis tortor, et placerat."},
		];
		var aimg=$(".ad .img_list img");
		var ali=$(".ad .img_list li");
		var h=ali.eq(0).height();
		console.log(h)
		$(".ad").css("height",h);
		$(".ad img_list").css("height",h);
		$(".ad .img_list li").css("height",h);
	
		var num=2;
			
			$(".btn").click(function(){
				
				
				var aimg=$("li img");
				aimg.eq(num).stop().animate({
					opacity:0,
				},1000,function(){
					aimg.parent("li").css("z-index",200);
					aimg.eq(num).parent("li").css("z-index",100);
					aimg.css("opacity",1);
					if(num<0){
						num=2;
					}
					num--;
					aimg.eq(num).parent("li").css("z-index",300);
				
				});
			
			});

	})();*/
	// shdow区域
	(function(){
		var flag=1;
		$(".shadow li").hover(function(){ 
			if(flag){
				$(this).find(".cap").css("display","block");
				$(this).find(".cap").stop().animate({//先停止动画
					opacity: 0.8,
					
				},1000);
			}},
			function(){
				$(this).find(".cap").stop().animate({
					opacity: 0,
				},1000);
			});	
	})();
	// 首页slide区域
	(function(){
		var abtn=$(".slide .tab");
		var ali=$(".slide .img_show li");
		var oparent=$(".slide .img_show");
		var oprev=abtn.eq(0);
		var onext=abtn.eq(1);
		oprev.click(function(){
			moveleft();	
		});

		onext.click(function(){
			moveright();
		});
		function moveleft(){
			var w=ali.eq(0).outerWidth();
			$('.slide ul').stop().animate({marginLeft:-w},1000,function(){
				$('.slide ul').css('margin-left',0);
				$('.slide ul li:first').appendTo($('.slide ul'));
			});
		}
		function moveright(){
			var w=ali.eq(0).outerWidth();
			$('.slide ul li:last').prependTo($('.slide ul'));
			$('.slide ul').css('margin-left',-w);
			$('.slide ul').stop().animate({marginLeft:0},1000,function(){	
			});
		}
		// var timer=null;//timer要写在autoplay前面，否则timer会重新赋值成null
		autoplay();
		function autoplay(){
			timer=setInterval(function(){
				moveleft();
			},3000);
		}
		$(".slide").hover(function(){
			clearInterval(timer);
		},autoplay);//这里的autoplay加括号函数会
	})();
	// 首页form表单
	(function(){
		var text=$(".fill_out .name").val();
		$(".fill_out .name").focus(function(){
			if($(this).val()==text){
			$(this).val("");
			}
		});
		$(".fill_out .name").blur(function(){
			if($(this).val()==""){
				$(this).val(text);
			}
		});

		var text1=$(".fill_out .email").val();
		$(".fill_out .email").focus(function(){
			if($(this).val()==text1){
			$(this).val("");
			}
		});
		$(".fill_out .email").blur(function(){
			if($(this).val()==""){
				$(this).val(text1);
			}
		});
	})();
	// login
	(function(){

		var oName=$(".login .email");
		oPsd=$(".login .psd");
		var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
		oName.blur(function(){
			if(oName.val()==""){
				$('.login span').eq(0).html("邮箱不能为空");
			}else if(!(reg.test(oName.val()))){
				$('.login span').eq(0).html("邮箱格式不正确");
			}else{
				$('.login span').eq(0).html("验证成功");
			}
		});
		oPsd.focus(function(){
			if(oName.val()==""){
				$('.login span').eq(0).html("邮箱不能为空");
			}
		});
		oPsd.blur(function(){
			if(oPsd.val().length<6||oPsd.val().length>16){
				$('.login span').eq(1).html("密码必须为6-16位");
			}else{
				$('.login span').eq(1).html("验证成功");
			}
		});
		$(".login .btn1").click(function(){

			if($('.login span').eq(0).html()=="验证成功"&&$('.login span').eq(1).html()=="验证成功"){
				alert("恭喜，登陆成功！");
				location.href="index.html";
			}else{
				alert("用户名或密码错误");
			}
			
		});
		$(".login .btn2").click(function(){
			oName.val("");
			oPsd.val("");
			$('.login span').eq(0).html("Please enter youe email");
			$('.login span').eq(1).html("Please enter youe password");
		});
	})();
	// register
	(function(){

		var oName=$(".register .username");
		var Email=$(".register .email");
		var Psd=$(".register .psd");
		var Repsd=$(".register .repsd");
		var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
		oName.blur(function(){
			if(oName.val().length<2||Psd.val().length>4){
				$('.register span').eq(0).html("密码必须为2-4位");
			}else{
				$('.register span').eq(0).html("验证成功");
			}
		});
		Email.blur(function(){
			if(Email.val()==""){
				$('.register span').eq(1).html("邮箱不能为空");
			}else if(!(reg.test(Email.val()))){
				$('.register span').eq(1).html("邮箱格式不正确");
			}else{
				$('.register span').eq(1).html("验证成功");
			}
		});
		Psd.blur(function(){
			if(Psd.val().length<6||Psd.val().length>16){
				$('.register span').eq(2).html("密码必须为6-16位");
			}else{
				$('.register span').eq(2).html("验证成功");
			}
		});
		Repsd.blur(function(){
			if($('.register span').eq(2).html()=="验证成功"){
				if(Psd.val()!=Repsd.val()){
					$('.register span').eq(3).html("两次密码输入不一致");
				}else{
					$('.register span').eq(3).html("验证成功");
				}
			}else{
				$('.register span').eq(3).html("密码输入错误");
			}
		});
		var str=[];

		$(".register .btn1").click(function(){

			if($('.register span').eq(0).html()=="验证成功"&&$('.register span').eq(1).html()=="验证成功"&&$('.register span').eq(2).html()=="验证成功"&&$('.register span').eq(3).html()=="验证成功"){
				alert("恭喜，注册成功！");
				location.href="index.html";
			}else{
				$('.register span').each(function(index){
					if($(this).html()!="验证成功"){
						str[index]=$(this).html();
					}else{
						str[index]="";
					}
					
				});
				alert("出现错误"+str);
			}
			
		});
		$(".register .btn2").click(function(){
			oName.val("");
			Email.val("");
			Psd.val("");
			Repsd.val("");
			$('.register span').eq(0).html("请输入用户名");
			$('.register span').eq(1).html("请输入邮箱");
			$('.register span').eq(2).html("请输入密码");
			$('.register span').eq(3).html("请再次输入密码");
		});
	})();
	// service下拉菜单
	(function(){
		var ali=$(".service li");
		var ap=$(".service li p");
		var arr=[];
		ali.each(function(index){
			arr[index]=$(this).find("p").height();
			$(this).attr("onoff",true);
			if(index==0){
				$(this).attr("onoff",false);
			}
		});
		
		ali.click(function(index){
			console.log($(this).attr("onoff"));
			if($(this).attr("onoff")=="true"){
				var h=arr[$(this).index()];
				$(this).find("p").css("display","block");
				$(this).find("p").css("height",0);
			
				ali.find("p").animate({height: 0},1000,function(){
					ali.find("p").css("display","none");
				});
			
				$(this).find("p").stop().animate({height: h},1000,function(){
					$(this).css("display","block");
				});
			$(this).attr("onoff",false);
			}
			else{
				$(this).find("p").stop().animate({height: 0},1000,function(){
					$(this).css("display","none");
				});
				$(this).attr("onoff",true);
			}

		});
	})();
// 产品展示
	(function(){

		/*	$(".bigimg").css("display","block");
			$(".tobig").css("display","block");
			$(".bigimg").css({top:$(".blog2 .img img").position().top-100,left:$(".blog2 .img img").position().left-100});
			$(".tobig").css({top:$(".blog2 .img img").position().top-100+100,left:$(".blog2 .img img").position().left-100+202});*/
		$(".blog2 img").mouseenter(function(e){
				disx=e.pageX;
				disy=e.pageY;

				$(".bigimg").css("display","block");
				$(".tobig").css("display","block");
				$(".bigimg").css({top:e.pageY-100,left:e.pageX-100});
			$(document).mousemove(function(e) {
				w=$(".blog2 .img img").width();
				h=$(".blog2 .img img").height();
				w1=$(".blog2 .bigimg img").width();
				h1=$(".blog2 .bigimg img").height();
				

			
				if(e.pageY<$(".blog2 .img img").position().top){
					e.pageY=$(".blog2 .img img").position().top;
				}
				if(e.pageX<$(".blog2 .img img").position().left){
					e.pageX=$(".blog2 .img img").position().left;
				}
				if(e.pageX>$(".blog2 .img img").position().left+w){
					e.pageX=$(".blog2 .img img").position().left+w;
				}
				if(e.pageY>$(".blog2 .img img").position().top+h){
					e.pageY=$(".blog2 .img img").position().top+h;
				}
				x=(e.pageX-($(".blog2 .img img").position().left))/w*(w1-200);
				y=(e.pageY-($(".blog2 .img img").position().top))/h*(h1-200);
				

				$(".bigimg").css({top:e.pageY-100,left:e.pageX-100});
				$(".tobig").css({top:e.pageY-100+100,left:e.pageX-100+202});
				$(".bigimg").find("img").css({top:-y,left:-x});
			});
		});
		
	})();


	// 地图
	(function(){
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(114.271598, 30.446192);
		//map.enableScrollWheelZoom(true);
		map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
		map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
		map.centerAndZoom(point, 15);
		map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		//创建信息窗口
		var sContent ="<div class='myclass'>学校：武汉科技大学 <br>地址：黄家湖西路2号<br>电话：0771-000000<br><img src='image/map.jpg'></div>";
		var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
		map.centerAndZoom(point, 15);
		map.addOverlay(marker);
		marker.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow);
		   //图片加载完毕重绘infowindow
		   document.getElementById('imgDemo').onload = function (){
		       infoWindow.redraw();
		   };
		});
	})();
	
});