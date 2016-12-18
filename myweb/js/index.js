$(function(){
	// 头部下拉菜单
	(function(){
		var arr=[];
		var adrop_down=$(".head_left .drop_down");
		adrop_down.each(function(index){
			arr[index]=$(this).find("ul").height();
			$(this).attr("onoff",true);

		});
		adrop_down.click(function(index){
		if($(this).attr("onoff")=="true"){
				var h=arr[$(this).index()];
				$(this).find("ul").css("display","block");
				$(this).find("ul").css("height",0);
				adrop_down.find("ul").stop().animate({height: 0},1000,function(){
					adrop_down.find("ul").css("display","none");
				});
				$(this).find("ul").stop().animate({height: h},1000,function(){
					$(this).css("display","block");
				});
				adrop_down.attr("onoff",true);
				$(this).attr("onoff",false);
			}
			else{
				$(this).find("ul").stop().animate({height: 0},1000,function(){
					$(this).css("display","none");
				});
				$(this).attr("onoff",true);
			}
		});
	})();
	// 头部搜索
	(function(){
		var oinput=$(".logo_search .s_content");
		oinput.focus(function(event) {
			oinput.val("");
		});
		oinput.blur(function(event) {
			if(oinput.val()==""){
				oinput.val("女装");
			}
			
		});
	})();
// 头部标签切换
	(function(){
		var atab=$(".logo_classify li");
		atab.mouseover(function(index) {
			if($(this).index()!=0){
				atab.removeClass('active');
			}else{
				atab.eq(0).addClass('active');
			}
		});
		atab.mouseout(function(event) {
			atab.eq(0).addClass('active');
		});
	})();
// 广告滑动
	$(function() {
		$('#dg-container').gallery({
			autoplay	:	true
		});
	});
// slide区域
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
//倒计时
(function(){
	var aspan=$(".time span");
	var time=new Date();
	var time1=new Date(2016,10,6);
	var delta=time1-time;
		delta=time1-time;
		delta=parseInt(delta/1000);
		var hour=parseInt(delta/(60*60));
		var min=parseInt((delta)/60)-hour*60;
		var sec=delta%60;
		aspan.eq(0).html(addzero(hour,1));
		aspan.eq(2).html(addzero(min,0));
		aspan.eq(4).html(addzero(sec,0));
	var timer=setInterval(function(){
		time=new Date();
		delta=time1-time;
		delta=parseInt(delta/1000);
		var hour=parseInt(delta/(60*60));
		var min=parseInt((delta)/60)-hour*60;
		var sec=delta%60;
		aspan.eq(0).html(addzero(hour,1));
		aspan.eq(2).html(addzero(min,0));
		aspan.eq(4).html(addzero(sec,0));

	},1000);
	function addzero(time,flag){
		if(flag==1){
			if(time<10){
				return '00'+time;
			}else if(time<100){
				return '0'+time;
			}else{
				return time;
			}
		}
		if(flag==0){
			if(time<10){
				return '0'+time;
			}else{
				return time;
			}
		}
	}
})();
// 选项卡切换
	(function(){
		fnTab($('.tabnav'),$('.tabcon'),'click');
		fnTab($('.tabnav2'),$('.tabcon2'),'click');
		function fnTab(tabnav,tabcon,aEvent){

			var aElem=tabnav.children();
			tabcon.hide();
			tabcon.eq(0).show();
			aElem.each(function(index){
				$(this).on(aEvent,function(){
					tabcon.hide().eq(index).show();
					aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');				
				})	
			})
		}
	})();
// 验证注册信息
(function(){
	// 验证邮箱
	var oemail=$(".register .re_form .email");
	var amsg=$(".register .re_form .msg");
	var emailreg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	oemail.blur(function(){
		if(oemail.val()==""){
			amsg.eq(0).find("em").html("* 邮箱不能为空");
		}else if(!(emailreg.test(oemail.val()))){
			amsg.eq(0).find("em").html("* 邮箱格式不正确");
		}else{
			amsg.eq(0).find("em").html("邮箱验证成功");
			amsg.eq(0).css("display","none");
		}
	});
	// 验证用户名
	var oname=$(".register .re_form .name");
	var namereg=/^\w{3,6}$/; 
	oname.focus(function() {
		amsg.eq(1).css("display","block");
		amsg.eq(1).find("em").html("* 请填写用户名");
	});
	oname.blur(function(){
		if(oname.val()==""){
			amsg.eq(1).find("em").html("* 用户名不能为空");
		}else if(!(namereg.test(oname.val()))){
			amsg.eq(1).find("em").html("* 用户名为3-6位，只能包含字母数字下划线");
		}else{
			amsg.eq(1).find("em").html("用户名验证成功");
			amsg.eq(1).css("display","none");
		}
	});
	// 验证密码
	var opsd=$(".register .re_form .psd");
	var psdreg=/^\w{6,16}$/; 
	opsd.focus(function() {
		amsg.eq(2).css("display","block");
		amsg.eq(2).find("em").html("* 请填写密码,密码为6-16位");
	});
	opsd.blur(function(){
		if(opsd.val()==""){
			amsg.eq(2).find("em").html("* 密码不能为空");
		}else if(!(psdreg.test(opsd.val()))){
			amsg.eq(2).find("em").html("* 密码为6-16位，只能包含字母数字下划线");
		}else{
			amsg.eq(2).find("em").html("密码输入正确");
			amsg.eq(2).css("display","none");
		}
	});
	// 验证确认密码
	var orepsd=$(".register .re_form .repsd");
	orepsd.focus(function() {
		if(amsg.eq(2).find("em").html()!="密码输入正确"){
			amsg.eq(3).find("em").html("请先输入密码");
			amsg.eq(3).css("display","block");
			opsd.focus();
			return false;
		}else{
			amsg.eq(3).find("em").html("* 请确认密码");
		}
		orepsd.blur(function(){
		if(orepsd.val()==opsd.val()){
			amsg.eq(3).find("em").html("密码验证成功");
		}else {
			amsg.eq(3).find("em").html("两次密码输入不一致");
		}
	});
	});
	
	//重置按钮
	var oreplay=$(".register .re_form .replay");
	oreplay.click(function(){
		if(confirm("确定要重置吗")){
           amsg.css("display","none");
           amsg.eq(0).css("display","block");
           amsg.eq(0).find("em").html("* 请填写邮箱");
	     }
	});
	// 提交按钮
	/*var osubmit=$(".re_form .submit");
	osubmit.click(function(){
       if(amsg.eq(0).find("em").html()=="邮箱验证成功"&&amsg.eq(1).find("em").html()=="用户名验证成功"&&amsg.eq(3).find("em").html()=="密码验证成功"){
       		// AJAX？
       }else{

       }
	});*/
})();

// 验证登录信息
(function(){
	// 验证用户名
	var amsg=$(".login .re_form .msg");
	var oname=$(".login .re_form .name");
	var namereg=/^\w{3,6}$/; 
	oname.focus(function() {
		amsg.eq(0).css("display","block");
		amsg.eq(0).find("em").html("* 请填写用户名");
	});
	oname.blur(function(){
		if(oname.val()==""){
			amsg.eq(0).find("em").html("* 用户名不能为空");
		}else if(!(namereg.test(oname.val()))){
			amsg.eq(0).find("em").html("* 用户名为3-6位，只能包含字母数字下划线");
		}else{
			amsg.eq(0).find("em").html("用户名验证成功");
			amsg.eq(0).css("display","none");
		}
	});
	// 验证密码
	var opsd=$(".login .re_form .psd");
	var psdreg=/^\w{6,16}$/; 
	opsd.focus(function() {
		amsg.eq(1).css("display","block");
		amsg.eq(1).find("em").html("* 请填写密码,密码为6-16位");
	});
	opsd.blur(function(){
		if(opsd.val()==""){
			amsg.eq(1).find("em").html("* 密码不能为空");
		}else if(!(psdreg.test(opsd.val()))){
			amsg.eq(1).find("em").html("* 密码为6-16位，只能包含字母数字下划线");
		}else{
			amsg.eq(1).find("em").html("密码输入正确");
			amsg.eq(1).css("display","none");
		}
	});
	
	// 提交按钮
	/*var osubmit=$(".re_form .submit");
	osubmit.click(function(){
       if(amsg.eq(0).find("em").html()=="邮箱验证成功"&&amsg.eq(1).find("em").html()=="用户名验证成功"&&amsg.eq(3).find("em").html()=="密码验证成功"){
       		// AJAX？
       }else{

       }
	});*/
})();
});