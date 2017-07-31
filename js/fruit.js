// JavaScript Document
var fruitObj=function()
{

		this.alive=[];//bool
		this.x=[];
		this.y=[];
		this.l=[];
		this.anyNo=[];
		this.spd=[];
		this.fruitType=[];
		this.orange=new Image();
		this.blue=new Image();
		this.purple=new Image();

}
fruitObj.prototype.num=40;
fruitObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.l[i]=0;
		this.anyNo[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		this.fruitType[i]="";
		
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
	this.purple.src="./src/purple.png"
}
fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{		
			if(this.fruitType[i]=="blue")
			{
				var pic =this.blue;
			}
			else if(this.fruitType[i]=="orange")
			{
				var pic=this.orange;
			}
			else 
			{
				var pic=this.purple;
			}
				
		if(this.l[i]<=16)
		{
			var No=this.anyNo[i];
			this.x[i]=ane.headx[No];
		
			this.y[i]=ane.heady[No];
			this.l[i]+=this.spd[i]*deltaTime;
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			
		}
		else
		{
			this.y[i]-=this.spd[i]*8*deltaTime;
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
		}
		
		if(this.y[i]<10)
	{
		this.alive[i]=false;
	}
		
	}
	}
	
}
fruitObj.prototype.born=function(i)
{
	
	this.anyNo[i]=Math.floor(Math.random()*ane.num);

	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.4)
	{
	this.fruitType[i]="blue";
	if(ran<0.2)this.fruitType[i]="purple";
	
	}else
	{
		this.fruitType[i]="orange";
	}
}

fruitObj.prototype.dead=function(i)
{

  this.alive[i]=false;


}
function fruitMonitor()
{
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i])num++;
	}
	if(num<15)
	{
		sendfruit();
		return
	}
}
function sendfruit(){
	for(var i=0;i<fruit.num;i++)
	{
	 if(!fruit.alive[i])
	{
		fruit.born(i);
		return;
	}
	}
}