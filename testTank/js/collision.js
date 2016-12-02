// 各种碰撞检测
// 判断坦克是否吃到食物
function eatfood(){
    for(var i=0;i<foods.length;i++){
        if(foods[i].alive){
            if(overlap(herotank.x,416-(herotank.y+28),herotank.x+28,416-(herotank.y),
                     foods[i].x,416-(foods[i].y+32),foods[i].x+32,416-(foods[i].y))){
            document.getElementById('prop').play();
            foods[i].power();
            foods[i].alive=false;
            }
        }
    }
}
// 玩家被打中
function shootplayer(){
    for(var i=0;i<enemybullets.length;i++){
        if(enemybullets[i].isalive){
            if(overlap(herotank.x,416-(herotank.y+28),herotank.x+28,416-(herotank.y),
                enemybullets[i].x,416-(enemybullets[i].y+4),enemybullets[i].x+4,416-(enemybullets[i].y))){
                herotank.lifevalue--;
            if(herotank.lifevalue<1){
                gameover();
            }
            enemybullets[i].isalive=false;
            enemybullets[i].tank.bulletisalive=false;
            clearInterval(enemybullets[i].timer);
            document.getElementById('tankcrack').play();
            var boob=new boom(herotank.x,herotank.y);
            booms.push(boob);
            setTimeout(function(){
                herotank.x=130;
                herotank.y=384;
                herotank.blood=50;
            },500);
            
            }
        }
        
    }
}
// 判断子弹是否打中坦克
function ishittank(){
    if(herobullet&&herobullet.isalive){
        for(var i=0;i<enemytanks.length;i++){
            if(overlap(herobullet.x,416-(herobullet.y+4),herobullet.x+4,416-(herobullet.y),
                     enemytanks[i].x,416-(enemytanks[i].y+28),enemytanks[i].x+28,416-(enemytanks[i].y))){
                if(enemytanks[i].type!=2){
                    document.getElementById('tankcrack').play();
                    var boob=new boom(enemytanks[i].x,enemytanks[i].y);
                    booms.push(boob);
                    herobullet.isalive=false;
                    enemytanks.splice(i,1);
                    score=score+500;
                    shoottank++;
                    if(shoottank>19){
                    // 赢得比赛
                        window.setTimeout(function(){
                            win();
                        },200);
                    }
                }else{
                    document.getElementById('crack').play();
                    foods.push(new food(parseInt(Math.random()*384),parseInt(Math.random()*384),parseInt(Math.random()*3)));
                    foods[foods.length-1].clear();
                    enemytanks[i].type=1;
                    herobullet.isalive=false;

                }
            }
        }
    }   
}
// 判断子弹是否击中砖块
function ishitbrick(map){
    if(herobullet&&herobullet.isalive){
       for(var i=0;i<map.length;i++) {
            for(var j=0;j<map[i].length;j++){
                
                if(map[i][j]==1&&overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),herobullet.x,416-(herobullet.y+4),herobullet.x+4,416-(herobullet.y))){
                    document.getElementById('crack').play();
                    var boob=new smallboom(j*16,i*16);
                    smallbooms.push(boob);
                    score=score+50;
                    if(herobullet.dir==0||herobullet.dir==1){
                        if(map[i][parseInt(herobullet.x/32)*2]==1){
                            map[i][parseInt(herobullet.x/32)*2]=0;
                        }
                        if(map[i][parseInt(herobullet.x/32)*2+1]==1){
                            map[i][parseInt(herobullet.x/32)*2+1]=0;
                        }
                       
                     }
                     if(herobullet.dir==2||herobullet.dir==3){
                        if(map[parseInt(herobullet.y/32)*2][j]==1){
                            map[parseInt(herobullet.y/32)*2][j]=0;
                        }
                       if( map[parseInt(herobullet.y/32)*2+1][j]){
                            map[parseInt(herobullet.y/32)*2+1][j]=0;
                        }
                       
                     }
                    herobullet.isalive=false;
                    clearInterval(herobullet.timer);
                    break;
                }
                if(map[i][j]==2&&overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),herobullet.x,416-(herobullet.y+4),herobullet.x+4,416-(herobullet.y))){
                    document.getElementById('crack').play();
                    herobullet.isalive=false;
                    break;
                }

                if(map[i][j]==9&&overlap(j*16,416-(i*16+32),j*16+32,416-(i*16),herobullet.x,416-(herobullet.y+4),herobullet.x+4,416-(herobullet.y))){
                    document.getElementById('playercrack').play();
                    map[i][j]=10;
                    herobullet.isalive=false;
                    gameover();
                    break;
                }
            }    
        }
    }   
}
// 判断子弹是否击中砖块
function ishitbricks(){
    for(var k=0;k<enemybullets.length;k++){
        if(enemybullets[k]&&enemybullets[k].isalive){
            for(var i=0;i<map.length;i++) {
                for(var j=0;j<map[i].length;j++){
                    if(map[i][j]==1&&overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),enemybullets[k].x,416-(enemybullets[k].y+4),enemybullets[k].x+4,416-(enemybullets[k].y))){
                    var boob=new smallboom(j*16,i*16);
                    smallbooms.push(boob);
                    if(enemybullets[k].dir==0||enemybullets[k].dir==1){
                        if(map[i][parseInt(enemybullets[k].x/32)*2]==1)
                        {
                            map[i][parseInt(enemybullets[k].x/32)*2]=0;
                        }
                       
                        if(map[i][parseInt(enemybullets[k].x/32)*2+1]==1)
                        {
                            map[i][parseInt(enemybullets[k].x/32)*2+1]=0;
                        }
                        
                     }
                     if(enemybullets[k].dir==2||enemybullets[k].dir==3)
                     {
                        if(map[parseInt(enemybullets[k].y/32)*2][j]==1)
                        {
                            map[parseInt(enemybullets[k].y/32)*2][j]=0;
                        }
                        if(map[parseInt(enemybullets[k].y/32)*2+1][j]==1)
                        {
                            map[parseInt(enemybullets[k].y/32)*2+1][j]=0;
                        }
                       
                     }
                    enemybullets[k].isalive=false;
                    enemybullets[k].tank.bulletisalive=false;
                    clearInterval(enemybullets[k].timer);
                    break;
                    }
                    if(map[i][j]==2&&overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),enemybullets[k].x,416-(enemybullets[k].y+4),enemybullets[k].x+4,416-(enemybullets[k].y))){
                        enemybullets[k].isalive=false;
                        enemybullets[k].tank.bulletisalive=false;
                        break;
                    }

                    if(map[i][j]==9&&overlap(j*16,416-(i*16+32),j*16+32,416-(i*16),enemybullets[k].x,416-(enemybullets[k].y+4),enemybullets[k].x+4,416-(enemybullets[k].y))){
                        document.getElementById('playercrack').play();
                        map[i][j]=10;
                        enemybullets[k].isalive=false;
                        enemybullets[k].tank.bulletisalive=false;
                        window.setTimeout(function(){
                            clearInterval(bgtimer);
                        },50);
                        gameover();
                        break;
                    }
                }    
            }
        }   
    }
    
}
// 英雄坦克和砖块的碰撞检测
function herobrike(tank){
   for(var i=0;i<map.length;i++) {
        for(var j=0;j<map[i].length;j++){
            if(map[i][j]==1||map[i][j]==2||map[i][j]==4||map[i][j]==8||map[i][j]==9){
                switch(tank.dir){
                    case 0:{
                       if(overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),tank.x,416-(tank.y+tank.size),tank.x+tank.size,416-(tank.y-tank.speed))){
                            tank.y=tank.y+tank.speed;
                            return false;
                        }
                        break;
                    }
                    case 1:{
                       if(overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),tank.x,416-(tank.y+tank.size+tank.speed),tank.x+tank.size,416-(tank.y))){
                            tank.y=tank.y-tank.speed;
                            return false;
                        }
                        break;
                    }
                    case 2:{
                       if(overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),tank.x-tank.speed,416-(tank.y+tank.size),tank.x+tank.size,416-(tank.y))){
                            tank.x=tank.x+tank.speed;
                            return false;
                        }
                        break;
                    }
                    case 3:{
                       if(overlap(j*16,416-(i*16+16),j*16+16,416-(i*16),tank.x,416-(tank.y+tank.size),tank.x+tank.size+tank.speed,416-(tank.y))){
                            tank.x=tank.x-tank.speed;
                            return false;
                        }
                        break;
                    }
                }
                
            }
            
        }    
    } 
    return true;
}
// 坦克之间的碰撞检测



function overlap( A,  B,  C,  D,  E,  F,  G,  H) {
    var res = (D - B) * (C - A) + (H - F) * (G - E);
    var A1 = Math.max(A, E);
    var B1 = Math.max(B, F);
    var C1 = Math.min(C, G);
    var D1 = Math.min(D, H);
    if (D1 <B1 || C1 <A1) {
        return false;
    }else{
        return (D1 - B1) * (C1 - A1);
    }
}