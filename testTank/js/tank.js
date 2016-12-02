var booms=new Array();
var smallbooms=new Array();
var herobullet=null;

// 打彩色坦克出现食物
function food(x,y,type){
    this.x=x;
    this.y=y;
    this.alive=true;
    this.type=type;
    this.clear=function(){
        var _this=this;
        setTimeout(function(){
            _this.alive=false;
        },15000);
    };
    this.power=function(){
        if(this.alive){
            switch(this.type){
                case 0:
                    herotank.lifevalue++;
                    break;
                case 1:
                    for(var i=0;i<enemytanks.length;i++){
                        document.getElementById('tankcrack').play();
                        var boob=new boom(enemytanks[i].x,enemytanks[i].y);
                        booms.push(boob);
                        shoottank++;
                        if(shoottank>19){
                            window.setTimeout(function(){
                                win();
                            },200);
                        }
                    }
                    enemytanks=[];
                break;
                case 2:
                    map[23][11]=2;map[23][12]=2;map[23][13]=2;map[23][14]=2;
                    map[24][11]=2;map[24][14]=2;
                    map[25][11]=2;map[25][14]=2;

                    setTimeout(function(){
                        map[23][11]=1;map[23][12]=1;map[23][13]=1;map[23][14]=1;
                        map[24][11]=1;map[24][14]=1;
                        map[25][11]=1;map[25][14]=1;

                    },30000);

            }
        }
    };
}

// var timer=null;
function boom(x,y){
    this.x=x;
    this.y=y;
    this.alive=true;
    this.blood=6;

    this.reduceblood=function(){
        if(this.blood>0){
            this.blood--;
        }else{
            this.alive=false;
        }
    };
}

function smallboom(x,y){
    this.boom=boom;
    this.boom(x,y);
}

function tank(x,y,dir,speed,size){
	this.x=x;
	this.y=y;
	this.speed=speed;
	this.dir=dir;
	this.size=size;
    this.blood=50;

	this.moveup=function(){
        this.y-=this.speed;
    	this.dir=0;
    };
    this.moveright=function(){
    	this.x+=this.speed;
    	this.dir=3;
    };
    this.movedown=function(){
    	this.y+=this.speed;
    	this.dir=1;
    };
    this.moveleft=function(){
    	this.x-=this.speed;
    	this.dir=2;
    };
}
// 自己的坦克
function herotanks(x,y,dir,speed,size,state){
	//下面两句话的作用是通过对象冒充，达到继承的效果
	this.tank=tank;
	this.tank(x,y,dir,speed,size);  
    this.lifevalue=3;
    this.blood=50;

    this.moveup=function(){
        if(herobrike(this)&&this.y>0){
            document.getElementById('move').play();
            this.y-=this.speed;
        }
        
        this.dir=0;
    };
    this.moveright=function(){
        if(herobrike(this)&&this.x<400-16){
            document.getElementById('move').play();
            this.x+=this.speed;
        }
        this.dir=3;
    };
    this.movedown=function(){
        if(herobrike(this)&&this.y<400-16){
            document.getElementById('move').play();
            this.y+=this.speed;
        }
        this.dir=1;
    };
    this.moveleft=function(){
        if(herobrike(this)&&this.x>0){
            document.getElementById('move').play();
            this.x-=this.speed;
        }
        this.dir=2;
    };

    this.run=function(){
        if(state.up){
            this.moveup();
        }
        if(state.down){
            this.movedown();
        }
        if(state.right){
            this.moveright();
        }
        if(state.left){
            this.moveleft();
        }
    };

    this.shoot=function(){
        if(herobullet==null||herobullet.isalive==false){
            switch(this.dir){
            case 0:
            herobullet=new bullet(this.x+14,this.y,this.dir,3,true,"hero",this);
            break;
            case 1:
            herobullet=new bullet(this.x+14,this.y+30,this.dir,3,true,"hero",this);
            break;
            case 2:
            herobullet=new bullet(this.x,this.y+14,this.dir,3,true,"hero",this);
            break;
            case 3:
            herobullet=new bullet(this.x+30,this.y+14,this.dir,3,true,"hero",this);
            break;
           }   
           herobullet.timer=window.setInterval("herobullet.run()",15);
        }    
   };
}
// 敌人的坦克
function enemytank(x,y,dir,speed,size,type){
	//下面两句话的作用是通过对象冒充，达到继承的效果
	this.tank=tank;
	this.tank(x,y,dir,speed,size); 

    this.type=type; 
    this.count=0;
    this.bulletisalive=true;

    this.run=function(){
        switch(this.dir){
            case 0:
                if(this.y>0&&herobrike(this)){
                    this.y-=this.speed;
                }
                break;
            case 1:
                if(this.y<416-this.size&&herobrike(this)){
                    this.y+=this.speed;
                }
                break;
            case 2:
                if(this.x>0&&herobrike(this)){
                    this.x-=this.speed;
                }
                break;
            case 3:
                if(this.x<416-this.size&&herobrike(this)){
                    this.x+=this.speed;
                }
                break;
        }
        if(herobrike(this)==false){
             this.dir=parseInt(Math.random()*4);
        }
        if(this.count>=60){
            this.dir=parseInt(Math.random()*4);
            this.count=0;

            if(this.bulletisalive==false){
                if(Math.random()>0.6){
                switch(this.dir){
                    case 0:
                    enemybullets.push(new bullet(this.x+14,this.y,this.dir,3,true,"enemy",this));
                    break;
                    case 1:
                    enemybullets.push(new bullet(this.x+14,this.y+30,this.dir,3,true,"enemy",this));
                    break;
                    case 2:
                    enemybullets.push(new bullet(this.x,this.y+14,this.dir,3,true,"enemy",this));
                    break;
                    case 3:
                    enemybullets.push(new bullet(this.x+30,this.y+14,this.dir,3,true,"enemy",this));
                    break;
                }
                   enemybullets[enemybullets.length-1].timer=window.setInterval("enemybullets["+(enemybullets.length-1)+"].run()",20);
                   this.bulletisalive=true;
                } 
            }
        }
        this.count++;
    };


    
}
// 子弹
function bullet(x,y,dir,speed,isalive,type,tank){
    this.x=x;
    this.y=y;
    this.dir=dir;
    this.speed=speed;
    this.isalive=isalive;
    this.type=type;
    this.tank=tank;

    this.run=function(){
    // console.log(this.x);
        if(this.x<=0||this.x>=416||this.y<=0||this.y>=416||this.isalive==false){
            this.isalive=false;
            clearInterval(this.timer);

            if(this.type=="enemy"){
                this.tank.bulletisalive=false;
            }
            }else{
                switch(this.dir){
                case 0:
                    this.y-=this.speed;
                    break;
                case 1:
                    this.y+=this.speed;  
                    break;
                case 2:
                    this.x-=this.speed;
                    break;
                case 3:
                    this.x+=this.speed;
                    break;
            }
        }
        
    };
}
