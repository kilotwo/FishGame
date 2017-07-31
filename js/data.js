// JavaScript Document

var dataObj=function()
{
	this.fruitnum=0;
	
	this.score=0;
	this.yellow=0;
	this.blue=3;
	this.over=true;
	this.alpha=0;
	this.start=false;
	this.purple=0;
	this.double=0;
	
}

dataObj.prototype.draw=function()
{
	var w= can1.width;
	var h=can1.height;
	ctx1.save();
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";
	ctx1.fillStyle="white";
	if(this.start==true)
	{
	ctx1.fillText("果实 "+this.fruitnum+" 个",w*0.5,h-50);
	ctx1.fillText("生命 "+this.blue+" 个",w*0.5,h-80);
	ctx1.fillText("得分 "+this.score,w*0.5,h-20);
	}
	if(this.over&& this.start)
	{
		this.alpha+=deltaTime*0.0006;
		if(this.alpha>1)
		{this.alpha=1;
		var btngroup = document.getElementsByClassName('btngroup')[0];
                    btngroup.style.display = 'block';
		}
	ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
	ctx1.fillText("Game  Over",w*0.5,h*0.5-30);
	   
	if(this.score>=2000&&this.score<3000)
		{ctx1.fillText("继续努力哦(ง •_•)ง",w*0.5,h*0.5+30);}
	else if(this.score>=3000&&this.score<4000)
		{ctx1.fillText("哇（。＾▽＾）厉害啦",w*0.5,h*0.5+30);}	
	else if(this.score>=4000&&this.score<6000)
		{ctx1.fillText("大神！你太棒啦 ㄟ(≧◇≦)ㄏ ",w*0.5,h*0.5+30);}
	else if(this.score>=6000)
		{ctx1.fillText("你的操作惊为天人 送你一束花 (^_^)∠※",w*0.5,h*0.5+30);}	
		else {ctx1.fillText("(ˋ＾ˊ) 认真点嘛 ",w*0.5,h*0.5+30);}
		
	ctx1.restore();
}
}
dataObj.prototype.addScore=function(){
	this.score=this.yellow*100+this.purple*200;
	
	
	
	
}
dataObj.prototype.startGame=function()
{
	this.start = true;
    this.over = false;
    this.score = 0;
	this.blue=3;
	this.yellow=0;
    this.fruitnum = 0;
    baby.babyBodyCount = 0;
	
}
