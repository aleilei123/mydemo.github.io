var can1;
var can2;
var ctx1;
var ctx2;
var lastTime;
var nowTime;
var deltaTime;
var bgpic=new Image();
var canwidth;
var canheight;
var count=0;
can1=document.getElementById("canvas1");
	can2=document.getElementById("canvas2");
	ctx1=document.getElementById("canvas1").getContext("2d");
	ctx2=document.getElementById("canvas2").getContext("2d");
document.body.onload=game;
function game(){
	gameloop();
	
}

function gameloop(){
	requestAnimFrame(gameloop);
	wavedraw();
	
	

} 

function wavedraw(){

	
			
			// ctx1.save();
			ctx1.beginPath();
			ctx1.lineWidth=2;
			ctx1.strokeStyle="red";
			// ctx1.circle(fruit.x[i],fruit.y[i],50,'rgba(255,0,0,0.5)');
			ctx1.arc(100,100,50,0,Math.PI*2);
			console.log(222);
			ctx1.closePath();
			ctx1.stroke();
			// ctx1.restore();
		
	
}