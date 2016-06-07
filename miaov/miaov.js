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
         		num=0;
         		clearInterval(shaketimer);
         		endFun&&endFun();
         	}
         },50);
        }
// 绝对定位函数
    function getPos(obj){
    pos={left:0,top:0};
    while(obj){
        pos.left+=obj.offsetLeft;
        pos.top+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return pos;
}
// 选择className
// var ali=getElementsByClassName(oul1,'li','box');
function getElementsByClassName(parent,tagname,className){
                arr=[];
               var aEls=parent.getElementsByTagName(tagname);
               for(var i=0;i<aEls.length;i++){
                /*if(aEls[i].classe=="box"){
                 arr.push(aEls[i]);
                }*/
                var aClassName=aEls[i].className.split(' ');
                for(var j=0;j<aClassName.length;j++){
                   if(aClassName[j]==className){
                    arr.push(aEls[i]);
                    break;
                   }
                }
                
               }
               return arr;
            }