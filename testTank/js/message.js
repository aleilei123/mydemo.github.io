// 画右边的各项信息
function drawmsg(){

	var ocanvas2=document.getElementById("canvas2");
	var ctx2=ocanvas2.getContext("2d");
	ctx2.clearRect(0,0,80,416);
	ctx2.fillStyle="#0B7005";
	ctx2.font="15px Courier New";
	ctx2.fillText("剩余坦克:",5,40);
	ctx2.fillText("关卡:",5,250);
	ctx2.fillText("得分:",5,320);
    ctx2.fillStyle="#D95E0A";
	ctx2.font="25px Courier New bold";
	ctx2.fillText(guan[pageth],25,280);
	ctx2.fillText(fillzero(score),2,370);
	
	for(var i=0;i<tanknum.length;i++){
		for(var j=0;j<tanknum[i].length;j++){
			if(tanknum[i][j]==1){
				ctx2.drawImage(oImage,pos.tank.x,
				pos.tank.y,16,16,j*16+25,i*16+50,16,16);
			}
		}
	}
}
function fillzero(score){
	var fillscore=''+score;
	if(fillscore.length>=5){
		return fillscore;
	}else if(fillscore.length>=4){
		return '0'+fillscore;
	}else if(fillscore.length>=3){
		return '00'+fillscore;
	}else if(fillscore.length>=2){
		return '000'+fillscore;
	}else if(fillscore.length>=1){
		return '0000'+fillscore;
	}
}
	

