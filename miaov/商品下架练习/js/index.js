window.onload=function(){
	var odiv=document.getElementById('top');
	var adiv=odiv.getElementsByTagName('div');
	var inew=[new Date(2016,4,31,21,01,40),
			new Date(2016,4,31,21,01,50),
			new Date(2016,4,31,21,02,05)];
	var otable=document.getElementsByTagName('table')[0];

	
	for(var i=0;i<adiv.length;i++){
		adiv[i].style.left=i*180+'px';
		var num=i+1;
		leave(adiv[i],i,num);
	}

	
    function leave(obj,i,num){
    	clearInterval(obj.timer);
	    obj.timer=setInterval(function(){
		var oh=obj.getElementsByTagName('h4')[0];
		var time=inew[i]-new Date();
		oh.innerHTML=gettime(new Date(),inew[i]);
		if(time<0){
            oh.innerHTML=gettime(new Date(),new Date());
			clearInterval(obj.timer);
			shake(obj,'left',function(){
				 obj.innerHTML='<img style="width:150px;height:270px;" src="img/1.png">';
			});
         var otr=otable.getElementsByTagName('tr')[num];
         var atd=otr.getElementsByTagName('td');
         atd[0].innerHTML=obj.getElementsByTagName('p')[0].innerHTML;
         atd[1].innerHTML=obj.getElementsByTagName('span')[1].innerHTML;
         atd[2].innerHTML='<img src="img/'+num+'.jpg">';

		}
		
	},1000);
	}
}