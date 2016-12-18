$(function(){
	
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
	
	(function(){
		var price = [[2,4,5,3,9,8,2,6,5,8,17,9,6,5,2,13,2,11,4,5,6,9,8,7,5,2,3,6]];
		var data_max1 = 30; //Y轴最大刻度
		var line_title1 = ["销售额"]; //曲线名称
		var y_label1 = "销售额/万元"; //Y轴标题
		var x_label1 = "日期"; //X轴标题
		var x1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; //定义X轴刻度值
		var title1 = ""; //统计图标标题
		j.jqplot.diagram.base("chart1", price, line_title1, "", x1, x_label1, y_label1, data_max1, 1);

		var amount = [[2,4,5,3,9,8,2,6,5,8,7,19,6,5,2,3,2,1,4,5,16,9,8,7,5,12,3,6]];
		var data_max2 = 30; //Y轴最大刻度
		var line_title2 = ["销售量"]; //曲线名称
		var y_label2 = "销售量/件"; //Y轴标题
		var x_label2 = "日期"; //X轴标题
		var x2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; //定义X轴刻度值
		var title2 = ""; //统计图标标题
		j.jqplot.diagram.base("chart2", amount, line_title2, "", x2, x_label2, y_label2, data_max2, 2);
	})();  
})();