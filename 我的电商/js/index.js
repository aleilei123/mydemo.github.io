$(function(){
	// 搜索切换
	(function(){
		var aLi=$("#menu li");
		var arrText=[
		'例如：荷塘鱼坊烧鱼',
		'例如：昌平大道609号',
		'例如：万达影院双人情侣券',
		'例如：你想想不到的美食全部聚集在这里',
		'例如：武汉气温下降，天气变幻莫测'
		];
		var inow=0;
		var oText=($("#search .text"));

		oText.val(arrText[inow]);
		oText.focus(function(){
			if($(this).val()==arrText[inow]){
				$(this).val('');
			}
		})
		oText.blur(function(){
			if($(this).val()==''){
				$(this).val(arrText[inow]);
			}
		})
		aLi.each(function(index){
			$(this).click(function(){
				aLi.attr('class','gradient');
				$(this).attr('class','active');
				inow=index;
				oText.val(arrText[inow]);
			})
		})
	})();
	
	// 自动播放
	(function(){
		var arrText=[
			{'url':'www.baidu.com','name':'萱萱','time':'4','content':'美丽瞬间'},
			{'url':'www.baidu.com','name':'畅畅','time':'5','content':'美丽瞬间美丽瞬间'},
			{'url':'www.baidu.com','name':'萱萱','time':'6','content':'美丽瞬间'},
			{'url':'www.baidu.com','name':'畅畅','time':'7','content':'美丽瞬间'},
			{'url':'www.baidu.com','name':'萱萱','time':'8','content':'美丽瞬间美丽瞬间'},
			{'url':'www.baidu.com','name':'畅畅','time':'9','content':'美丽瞬间美丽瞬间'},
		];	
		var oupdate=$('#update');
		var oul=oupdate.find('ul');
		var oupbtn=$('#update_up');
		var odownbtn=$("#update_down");
		var str="";
		var inow=0;
		var timer=null;
		for(var i=0;i<arrText.length;i++){
			str+='<li><a href="'+arrText[i].url+'"><strong>'+arrText[i].name+'</strong> <span>'+arrText[i].time+'分钟前</span> 写了一篇新文章，'+arrText[i].content+'</a></li>';
		}
		oul.html(str);
		var iH=oul.find('li').height();
		oupbtn.click(function(){
			inow++;
			if(inow>arrText.length-1){
				inow=0;
			}
			move(inow);
		})
		odownbtn.click(function(){
			inow--;
			if(inow<0){
				inow=arrText.length-1;
			}
			move(inow);
		})
		autoplay();
		oupdate.hover(function(){
			clearInterval(timer);
		},autoplay)
		function move(num){
			oul.animate({'top':-(num*iH)},1000);
		}
		function autoplay(){
			timer=setInterval(function(){
				inow++;
				if(inow<0){
				inow=arrText.length-1;
				}
				if(inow>arrText.length-1){
				inow=0;
				}
				move(inow);
			},2000);
		}
	})();

	// 选项卡切换
	(function(){
		fnTab($('.tabNav1'),$('.tabCon1'),'click');
		fnTab($('.tabNav2'),$('.tabCon2'),'click');
		fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
		fnTab($('.tabNav4'),$('.tabCon4'),'mouseover');
	
		function fnTab(tabNav,tabCon,aEvent){
			var aElem=tabNav.children();
			tabCon.hide();
			tabCon.eq(0).show();
			aElem.each(function(index){
				$(this).on(aEvent,function(){
					tabCon.hide().eq(index).show();
					aElem.removeClass('active').addClass('gradient');
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down_red');
					$(this).removeClass('gradient').addClass('active');				
				})	
			})
		}
	})();
	//BBS论坛
	(function(){
		var aLi=$('#bbs_list').find('li');
		aLi.each(function(){
			aLi.mouseover(function(index){
				aLi.attr('class','');
				$(this).attr('class','active');
			})
		})		
	})();
	// 精彩推荐
	(function(){
		var oDiv=$("#recommend");
		var aBigLi=oDiv.find('ul li');
		var aSmallLi=oDiv.find('ol li');
		var op=oDiv.find('p');
		var timer=null;
		var inow=0;
		arrText=['爸爸去哪儿啦~~~','美丽瞬间，精彩人生','温柔妩媚，美丽大方的女孩'];
		fade(0);
		aSmallLi.click(function(){
			inow=$(this).index();
			fade(inow);
			})	
		function fade(num){
			aBigLi.fadeOut();
			aBigLi.eq(num).fadeIn();
			aSmallLi.removeClass('active');
			aSmallLi.eq(num).addClass('active');
			op.html(arrText[num]);
		}
		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
				inow++;
				inow%=arrText.length;
				fade(inow);
			},2000);
		};
		oDiv.hover(function(){
			clearInterval(timer);
		},autoPlay);
	})();

	// HOT红人烧客
	(function(){
		var arrText = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		var oDiv=$('.hot_area');
		var aLi=oDiv.find('li');

		aLi.mouseover(function(){
			if($(this).index()==0){
				return;
			}
		aLi.find('div').remove();
		$(this).append('<div class="info"><p style="width:'+($(this).width()-20)+'px;height:'+($(this).height()-20)+'px">'+arrText[$(this).index()]+'</p></div>');
		})
	})();

})