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
var wave=[];
var wavemb=[];
var fruitnum=0;
var orangenum=0;
var score=0;
var gameover=false;
document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	gameloop();
	
}
function init(){
	can1=document.getElementById("canvas1");
	can2=document.getElementById("canvas2");
	ctx1=document.getElementById("canvas1").getContext("2d");
	ctx2=document.getElementById("canvas2").getContext("2d");	
	can1.addEventListener('mousemove',onmousemove,false);
	bgpic.src="src/background.jpg";
	canwidth=can1.width;
	canheight=can1.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();
	baby=new babyObj();
	baby.init();


}
function gameloop(){
	requestAnimFrame(gameloop);
	nowTime=Date.now();
	deltaTime=nowTime-lastTime;
	lastTime=nowTime;
	drawbackground();
	ane.draw();
	fruit.draw();

	ctx1.clearRect(0,0,canwidth,canheight);
	mom.draw();
	baby.draw();
	wavedraw();
	wavembdraw();
	drawtext();
	
	

} 
function drawbackground(){
	ctx2.drawImage(bgpic,0,0,canwidth,canheight);
}
var aneObj=function(){
	this.x=[];
	this.len=[];
};
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=i*16+Math.random()*20;
		this.len[i]=200+Math.random()*50;
	}
};
aneObj.prototype.draw=function(){
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.strokeStyle = '#3b154e';  
    ctx2.lineWidth= 20;
    ctx2.lineCap="round";
	for(var i=0;i<this.num;i++){
		ctx2.beginPath();  
        ctx2.moveTo(this.x[i],canheight);  
        ctx2.lineTo(this.x[i],canheight-this.len[i]); 
        ctx2.stroke();  
	}
	ctx2.restore();
};

var fruitObj=function(){
	this.orange=new Image();
	this.blue=new Image();
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.color=[];
	
};
fruitObj.prototype.num=15;
fruitObj.prototype.init=function(){
	this.orange.src="src/fruit.png";
	this.blue.src="src/blue.png";
	this.born();
};
fruitObj.prototype.draw=function(){

	for(var i=0;i<this.y.length;i++){
		
		if(this.l[i]<15){
			this.l[i]+=0.27;
		}else{
			this.y[i]=this.y[i]-this.spd[i];
		}
		if(this.color[i]=="orange"){
			fimg=this.orange;
		}else{
			fimg=this.blue;
		}
		ctx2.drawImage(fimg,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
		if(this.y[i]<0){
			this.y.splice(i,1);
			this.x.splice(i,1);
			this.l.splice(i,1);
			this.spd.splice(i,1);
			this.color.splice(i,1);
			this.born1();
		}
	}
};
fruitObj.prototype.born=function(){
	for(var i=0;i<this.num;i++){
		var n=Math.floor(Math.random()*aneObj.prototype.num);
		this.x[i]=ane.x[n];
		this.y[i]=canheight-ane.len[n];	
		this.l[i]=0;
		ran=Math.random();
		if(ran<0.7){
			this.color[i]="orange";
		}else{
			this.color[i]="blue";
		}
		
		this.spd[i]=Math.random()*1.9+0.8;
	}
};
fruitObj.prototype.born1=function(){
		var n=Math.floor(Math.random()*aneObj.prototype.num);
		xx=ane.x[n];
		yy=canheight-ane.len[n];	
		ll=0;
		ran=Math.random();
		if(ran<0.8){
			color="orange";
		}else{
			color="blue";
		}
		ss=Math.random()*1.9+0.8;
		this.y.push(yy);
		this.x.push(xx);
		this.l.push(ll);
		this.spd.push(ss);
		this.color.push(color);
}; 


var momObj=function(){
	this.x=canwidth*0.5;
	this.y=canheight*0.5;
	this.eye=new Image();
	this.body=new Image();
	this.tail=new Image();
	this.angle=0;
	momTail=[];
	momEye=[];
	momBody=[];
	this.momEyeInterval=1000;
	this.momTimer=0;
	this.momcount=0;

	this.momBodyInterval=1000;
	this.momBodyTimer=0;
	this.momBodycount=0;
};
momObj.prototype.init=function(){
	this.eye.src="src/bigEye0.png";
	this.body.src="src/bigSwim0.png";
	this.tail.src="src/bigTail0.png";

	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src='src/bigTail'+i+'.png';
	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src='src/bigEye'+i+'.png';
	}
	
};
momObj.prototype.draw=function(){
	count=count+0.5;

	this.momTimer+=deltaTime;
	if(this.momTimer>this.momEyeInterval){
		this.momcount=(this.momcount+1)%2;
		if(this.momcount==0){
			this.eye=momEye[0];
			this.momTimer=0;
			this.momEyeInterval=Math.random()*2500+1000;
		}else{
			this.eye=momEye[1];
			this.momEyeInterval=200;
			this.momTimer=0;
		}
		
	}
	var m;
	m=fruitnum;
	if(fruitnum>7){
		m=7;
	}
	this.body.src="src/bigSwim"+m+".png";
	
	ctx1.save();
	
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.eye,-this.eye.width*0.5,-this.eye.height*0.5);
	ctx1.drawImage(this.body,-this.body.width*0.5,-this.body.height*0.5);
	ctx1.drawImage(momTail[Math.floor(count%8)],-this.tail.width*0.5+30,-this.tail.height*0.5);
	ctx1.restore();

	
};

var babyObj=function(){
	this.x=canwidth*0.5;
	this.y=canheight*0.5;
	this.eye=new Image();
	this.body=new Image();
	this.tail=new Image();
	this.angle=0;
	babyTail=[];
	babyEye=[];
	babyBody=[];
	this.babyEyeInterval=1000;
	this.babyTimer=0;
	this.babycount=0;

	this.babyBodyInterval=1000;
	this.babyBodyTimer=0;
	this.babyBodycount=0;
};
babyObj.prototype.init=function(){
	this.eye.src="src/babyEye0.png";
	this.body.src="src/babyFade0.png";
	this.tail.src="src/babyTail0.png";
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src='src/babyTail'+i+'.png';
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src='src/babyEye'+i+'.png';
	}
	for(var i=0;i<19;i++){
		babyBody[i]=new Image();
		babyBody[i].src='src/babyFade'+i+'.png';
	}
};

babyObj.prototype.draw=function(){
	count=count+0.5;
	this.babyTimer+=deltaTime;
	if(this.babyTimer>this.babyEyeInterval){
		this.babycount=(this.babycount+1)%2;
		if(this.babycount==0){
			this.eye=babyEye[0];
			this.babyTimer=0;
			this.babyEyeInterval=Math.random()*1500+2000;
		}else{
			this.eye=babyEye[1];
			this.babyEyeInterval=200;
			this.babyTimer=0;
		}
		
	}
	if(!gameover){
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>200){
		this.babyBodycount=(this.babyBodycount+1);
		if(this.babyBodycount>18){
			this.babyBodycount=18;
			gameover=true;
			gameover1();
		}
		this.babyBodyTimer=0;	
	}
	}
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	
	ctx1.drawImage(babyBody[this.babyBodycount],-this.body.width*0.5,-this.body.height*0.5);
	ctx1.drawImage(this.eye,-this.eye.width*0.5,-this.eye.height*0.5);
	ctx1.drawImage(babyTail[Math.floor(count%8)],-this.tail.width*0.5+25,-this.tail.height*0.5);
	ctx1.restore();
	mombabycollision();
};
function onmousemove(e){
	mx=e.offsetX;
	my=e.offsetY;
	mom.x=lerpDistance(mx, mom.x, 0.96);
	mom.y=lerpDistance(my, mom.y, 0.96);
	mom.angle=lerpAngle(Math.atan2((my-mom.y),(mx-mom.x))+Math.PI,mom.angle,0.9);
	momfruitcollision();

	baby.x=lerpDistance(mx, baby.x, 0.996);
	baby.y=lerpDistance(my, baby.y, 0.996);
	baby.angle=lerpAngle(Math.atan2((my-baby.y),(mx-baby.x))+Math.PI,baby.angle,0.9);

}
function momfruitcollision(){
	for(var i=0;i<fruit.l.length;i++){
		x=mom.x-fruit.x[i];
		y=mom.y-fruit.y[i];
		dis=Math.sqrt(x*x+y*y);

		if(dis<20){

			wave.push({
				x:fruit.x[i],
				y:fruit.y[i],
				l:0
			});
			// wavedraw();
			if(fruit.color[i]=="orange"){
				document.getElementById('ad1').src="audio/zhidan.mp3";	
				document.getElementById('ad1').play();	
				fruitnum++;
				orangenum++;
				score=score+10;
				

			}else{
				document.getElementById('ad1').src="audio/jinb.mp3";	
				document.getElementById('ad1').play();	
				fruitnum=fruitnum*2;
				score=score+orangenum*20;
			}
			
			fruit.y.splice(i,1);
			fruit.x.splice(i,1);
			fruit.l.splice(i,1);
			fruit.spd.splice(i,1);
			fruit.color.splice(i,1);
			fruit.born1();
		}
	}
	// console.log(fruitnum);
}
function mombabycollision(){
	
		x=mom.x-baby.x;
		y=mom.y-baby.y;
		dis=Math.sqrt(x*x+y*y);
		if(dis<20){
		if(fruitnum>0){
			orangenum=0;
			fruitnum=0;
			document.getElementById('ad2').play();	
			baby.babyBodycount=0;
			wavemb.push({
				x:baby.x,
				y:baby.y,
				l:0
			});
		}
		
	}
}
function wavedraw(){
	for(var i=0;i<wave.length;i++){
		wave[i].l+=deltaTime*0.06;
		r=wave[i].l;
		x=wave[i].x;
		y=wave[i].y;
		if(wave[i].l>50){
			r=50;
			wave.splice(i,1);
		}
		alpha=1-r/50;
			ctx1.beginPath();
			ctx1.lineWidth=3;
			ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
			ctx1.arc(x,y,r,0,Math.PI*2);
			ctx1.closePath();
			ctx1.stroke();
	}
}

function wavembdraw(){
	if(wavemb.length-1>=0){
		wavemb[wavemb.length-1].l+=deltaTime*0.06;
		r=wavemb[wavemb.length-1].l;
		x=wavemb[wavemb.length-1].x;
		y=wavemb[wavemb.length-1].y;
		if(wavemb[wavemb.length-1].l>100){
			r=100;
		}
		alpha=1-r/100;
			ctx1.beginPath();
			ctx1.lineWidth=3;
			ctx1.strokeStyle="rgba(115,105,35,"+alpha+")";
			ctx1.arc(x,y,r,0,Math.PI*2);
			ctx1.closePath();
			ctx1.stroke();
	}
}
function drawtext(){
	ctx1.font = "20pt Calibri";
	ctx1.fillStyle="#fff";
	 ctx1.fillText("score:"+score,canwidth*0.5,30);
}
function gameover1(){
	if(gameover){
		document.getElementById('ad').pause();	
		document.getElementById('ad3').play();	
		$("#shadow").css('display','block');
	}
	
}