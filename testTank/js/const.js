//引入图片
var oImage=new Image();
oImage.src="images/tankAll.gif";

// 确定各个图片的位置
var pos={
	"player":{x:0,y:0},
	"enemy0":{x:0,y:32},
	"enemy1":{x:128,y:32},
	"enemy2":{x:0,y:64},
	"brike":{x:0,y:96},
    "home":{x:256,y:0},
    "homedie":{x:288,y:0},
    "tankboom":{x:0,y:160},
    "brikeboom":{x:320,y:0},
    "tank":{x:92,y:108},
    "shadow1":{x:160,y:96},
    "shadow2":{x:160,y:130},
    "food":{x:255,y:108},
};
var state={
	"up":false,
	"down":false,
	"right":false,
	"left":false,
};
var guan=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16",'17',"18","19","20","21"];
