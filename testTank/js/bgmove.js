	function bgmovemiddle(){
		$("#bg img").stop().animate({top: 50}, 1000);
	}
	
	function bgmoveup(){
		$("#up").css("opacity",1);
        $("#down").css("opacity",1);
		$("#bg").css("z-index",1);
		$("#up span").css("display","none");
		$("#up").stop().animate({top:0},1000,function(){
			$("#up span").css("display","block");
			$("#up span").html('第'+guan[pageth]+'关');
			setTimeout(function(){
				$("#up").stop().animate({top:-255},1000);
			},500);
			
		});
		$("#down").stop().animate({top:255},1000,function(){
			
			$("#bg").remove();
			setTimeout(function(){
				$("#down").stop().animate({top:500},1000);
			},500);
		});
		
	}
	function initial(){
		herotank.isalive=false;
		enemytanks=[];
		score=0;
		shoottank=0;
		alltank=20;
		for(var i=0;i<tanknum.length;i++){
			for(var j=0;j<tanknum[i].length;j++){
				tanknum[i][j]=1;
			}
		}
		score=0;
		herotank=new herotanks(130,384,0,2,28,state);
		clearInterval(bgtimer);
		bgtimer=window.setInterval("drawbg()",20);
	}
	function gameover(){
		window.setTimeout(function(){
            clearInterval(bgtimer);
        },50);
        $("#up span").css("display","NONE");
        $("#up").css("opacity",0.6);
        $("#down").css("opacity",0.6);
        $("#up").stop().animate({top:0},1000,function(){
			$("#up span").css("display","block");
			$("#up span").html('GAME OVER');
		});
		$("#down").stop().animate({top:255},1000,function(){
		});
	}
	// 赢得比赛
	function win(){
		window.setTimeout(function(){
            clearInterval(bgtimer);
        },50);
        $("#up span").css("display","NONE");
        $("#up").css("opacity",0.6);
        $("#down").css("opacity",0.6);
        $("#up").stop().animate({top:0},1000,function(){
			$("#up span").css("display","block");
			$("#up span").html('恭喜您！<br/>得分：'+score);
		});
		$("#down").stop().animate({top:255},1000,function(){
		});
	}