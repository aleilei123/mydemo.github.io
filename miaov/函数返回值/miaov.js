function getStyle(obj,attr){
				return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
			}
function doMove(obj,attr,dir,target){
				clearInterval(obj.timer);
				dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
	            obj.timer=setInterval(function(){
	            speed=parseInt(getStyle(obj,attr))+dir; 
	            if(speed>=target&&dir>0||speed<=target&&dir<0){
	            	speed=target;
	            	clearInterval(obj.timer);
	            }
	            obj.style[attr]=speed+'px';
	            
	            },100);	
			}
function shake(obj,dir,endFun){

		arr=[];
		for(var i=20;i>0;i-=2){
			arr.push(i,-i);
		}

		arr.push(0);
		shaketimer=null;
		var num=0;
		var pos=parseInt(getStyle(obj,dir));
        
        	clearInterval(shaketimer);
           shaketimer=setInterval(function(){
         	target=pos+arr[num];
         	obj.style[dir]=target+'px';
         	num++;
         	if(num==arr.length){
         		
         		clearInterval(shaketimer);
         		endFun&&endFun();
         	}
         },50);
        }
function changeopacity(obj,dir,target,doFn){
				clearInterval(obj.timer);
				dir=(getStyle(obj,'opacity'))<target? -dir:dir;
	            obj.timer=setInterval(function(){
	            speed=getStyle(obj,'opacity')-dir;
	            if(speed>=target&&dir<0||speed<=target&&dir>0){
	            	speed=target;
	            	clearInterval(obj.timer);	
	            	doFn&&doFn();
	            }
	            obj.style['opacity']=speed;
	            	
	            },30);	
	           
			}
