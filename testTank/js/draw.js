 // 画自己坦克
 function drawtank(tank,posx,posy){
      if(tank.blood>0&&parseInt(tank.blood)%2==0){
          ctx.drawImage(oImage,pos.shadow1.x,pos.shadow1.y,32,32,tank.x,tank.y,32,32);
      }
      if(tank.blood>0&&parseInt(tank.blood)%2==1){
          ctx.drawImage(oImage,pos.shadow2.x,pos.shadow2.y,32,32,tank.x,tank.y,32,32);
      }
      tank.blood=tank.blood-0.2;
      ctx.drawImage(oImage,posx+tank.dir*32+2,posy,tank.size,tank.size,tank.x,tank.y,tank.size,tank.size);
        // ctx.fillStyle="red";
        // ctx.fillRect(tank.x,tank.y,tank.size,tank.size);
        }
 // 画敌人的坦克
  function drawenemytank(enemytank){
  		switch(enemytank.type){
  			case 0:
  			ctx.drawImage(oImage,pos.enemy0.x+enemytank.dir*32,pos.enemy0.y,enemytank.size,enemytank.size,enemytank.x,enemytank.y,enemytank.size,enemytank.size);
  			break;
  			case 1:
  			ctx.drawImage(oImage,pos.enemy1.x+enemytank.dir*32,pos.enemy1.y,enemytank.size,enemytank.size,enemytank.x,enemytank.y,enemytank.size,enemytank.size);
  			break;
  			case 2:
  			ctx.drawImage(oImage,pos.enemy2.x+enemytank.dir*32,pos.enemy2.y,enemytank.size,enemytank.size,enemytank.x,enemytank.y,enemytank.size,enemytank.size);
  			break;
  		}
  }
 // 画背景
 function draw(map){
 	for(var i=0;i<map.length;i++) {
 		for(var j=0;j<map[i].length;j++){
 			if(map[j][i]==1){
 				ctx.drawImage(oImage,pos.brike.x,pos.brike.y,16,16,i*16,j*16,16,16);
 			}
 			if(map[j][i]==2){
 				ctx.drawImage(oImage,pos.brike.x+16,pos.brike.y,16,16,i*16,j*16,16,16);
 			}
 			if(map[j][i]==4){
 				ctx.drawImage(oImage,pos.brike.x+48,pos.brike.y,16,16,i*16,j*16,16,16);
 			}
 			if(map[j][i]==5){
 				ctx.drawImage(oImage,pos.brike.x+64,pos.brike.y,16,16,i*16,j*16,16,16);
 			}
 			if(map[j][i]==9){
 				ctx.drawImage(oImage,pos.home.x,pos.home.y,32,32,i*16,j*16,32,32);
 			}
      if(map[j][i]==10){
        ctx.drawImage(oImage,pos.homedie.x,pos.homedie.y,32,32,i*16,j*16,32,32);
      }
 			
 		}
 	}
 }

 function drawgrass(map){
  for(var i=0;i<map.length;i++) {
    for(var j=0;j<map[i].length;j++){
      if(map[j][i]==3){
        ctx.drawImage(oImage,pos.brike.x+32,pos.brike.y,16,16,i*16,j*16,16,16);
      }
      
    }
  }
 }
 // 画玩家子弹
 function drawherobullet(){
 	if(herobullet!=null&&herobullet.isalive==true){
 		ctx.fillStyle="#CF5909";
 	    ctx.fillRect(herobullet.x,herobullet.y,4,4);
 	}
 	
 }
 // 画敌人子弹
 function drawenemybullet(enemybullet){
 	if(enemybullet!=null&&enemybullet.isalive==true){
 		ctx.fillStyle="#626365";
 	  ctx.fillRect(enemybullet.x,enemybullet.y,4,4);
 	}
 }
 // 画坦炸弹
 function drawboom(){
 	for(var i=0;i<booms.length;i++){
 		if(booms[i].alive){
 			if(booms[i].blood>4){
 		  	ctx.drawImage(oImage,pos.tankboom.x,pos.tankboom.y,64,64,booms[i].x,booms[i].y,64,64);
	 		}else if(booms[i].blood>2){
	 			ctx.drawImage(oImage,pos.tankboom.x+64,pos.tankboom.y,64,64,booms[i].x,booms[i].y,64,64);
	 		}
	 		else if(booms[i].blood>0){
	 			ctx.drawImage(oImage,pos.tankboom.x+96,pos.tankboom.y,64,64,booms[i].x,booms[i].y,64,64);
	 		}
	 		booms[i].reduceblood();
	 	}
 	}
 		
 }

  function drawsmallboom(){
 	for(var i=0;i<smallbooms.length;i++){
 		if(smallbooms[i].alive){
 			if(smallbooms[i].blood>4){
 			    ctx.drawImage(oImage,pos.brikeboom.x,pos.brikeboom.y,32,32,smallbooms[i].x,smallbooms[i].y,32,32);
	 		}else if(smallbooms[i].blood>2){
	 			ctx.drawImage(oImage,pos.brikeboom.x+32,pos.brikeboom.y,32,32,smallbooms[i].x,smallbooms[i].y,32,32);
	 		}
	 		else if(smallbooms[i].blood>0){
	 			ctx.drawImage(oImage,pos.brikeboom.x+64,pos.brikeboom.y,32,32,smallbooms[i].x,smallbooms[i].y,32,32);
	 		}
	 		smallbooms[i].reduceblood();
	 	}
 	}
}
function drawfood(){
  for(var i=0;i<foods.length;i++){
    if(foods[i].alive){
      ctx.drawImage(oImage,pos.food.x+32*foods[i].type,pos.food.y,32,32,foods[i].x,foods[i].y,32,32);
    }
  }
 } 
