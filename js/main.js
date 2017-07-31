// JavaScript Document
document.body.onload=game;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;
var lastTime;
var deltaTime;

var bgPic=new Image();


var fruit;
var ane;
var mom;
var my;
var mx;
var baby;
var data;
var wave;
var halo;

var babyTail=[];
var babyEye =[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];
var dust;
var dustPic=[];

<!--document.body.onload=game;  
function game()
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	
	gameloop();
	
	
	
}

function init()
{
	
	can1=document.getElementById("canvas1");
	//canvas1->fishes,dust,UI,circle
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");
	//canvas2->background
	ctx2=can2.getContext('2d');

	bgPic.src="./src/background.jpg";
	
	canWidth=can1.width;
	canHeight=can1.height;
	ane =new aneObj();
	fruit=new fruitObj();
	mom=new momObj;
	baby=new babyObj;
	data=new dataObj;
	wave=new waveObj;
	halo=new haloObj;
	dust=new dustObj;	
	console.log(data.over);
	can1.addEventListener('mousemove',onMouseMove,false);

	ane.init();
	fruit.init();
	mom.init();
	baby.init();
	wave.init();
	halo.init();
	mx=canWidth*0.5;
	my=canHeight*0.5;
	for(var i =0;i<8;i++)
	{
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+i+".png"; 
	}
	
	for (var i=0;i<2;i++)
	{
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+i+".png";
		
	}
	for (var i=0;i<20;i++)
	{
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
		
	}
	
	for (var i=0;i<8;i++)
	{
		momTail[i]=new Image();
		momTail[i].src="./src/bigTail"+i+".png";
		
	}
	for (var i=0;i<2;i++)
	{
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+i+".png";
		
	}
	for (var i=0;i<8;i++)
	{
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="./src/bigSwim"+i+".png";
		momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
		
	}	
	for (var i=0;i<7;i++)
	{
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png";
		
	}
	
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	dust.init();
}
function gameloop()
{
	
	window.requestAnimFrame(gameloop);	
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40)deltaTime=40;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();	
	momFruitColl();
	momBabyColl();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}
	function onMouseMove(e)
{
	if(data.over)
	{
		return;
	}
	
	if(e.offSetX||e.layerX)
	{
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;
		
		
	}	
	
	
	
	
}
dom = {
    startId: 'start',
    introduce: 'introduce',
    init: function() {
		
        var startDom = document.getElementById(this.startId);
        startDom.addEventListener('click',this.start,false);
		
        var introduce = document.getElementById(this.introduce);
        introduce.addEventListener('click',this.gameIntroduce,false);
		
        var close1 = document.getElementsByClassName('close')[0]; 
        close1.addEventListener('click',this.close,false);
    },
    start: function() {
        var btngroup = document.getElementsByClassName('btngroup')[0];
        btngroup.style.display = 'none';
		onMouseMove(this);
        data.startGame();
		console.log(data.over);
		
    },
    gameIntroduce: function() {
        var gameIntroduce = document.getElementsByClassName('gameIntroduce')[0];
        gameIntroduce.style.display = 'block';
    },
    close: function(event) {
        event.target.parentNode.parentNode.style.display = 'none';
    }
}
window.onload = function() {
    dom.init();
    game();
}