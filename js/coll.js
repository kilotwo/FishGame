// JavaScript Document
function momFruitColl()
{
	
for(var i=0;i<fruit.num;i++)
{
	
	if(data.over){
		return;
		}
	if(fruit.alive[i])
	{
		var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
		if(l<900)
		{
			fruit.dead(i);
			
			mom.momBodyCount++;
			if(mom.momBodyCount>7)
			mom.momBodyCount=7;
			if(fruit.fruitType[i]=="blue")
			{
			  data.double=2;
			  data.blue-=1;
			}else if(fruit.fruitType[i]=="orange")
			{
				data.double=1;
				data.fruitnum++;
				data.yellow++;
			}
			else 
			{
				data.double=1;
				data.purple++;
				data.fruitnum++;
			}
			wave.born(fruit.x[i],fruit.y[i]);
		}	
	
	}
}	
}

function momBabyColl()
{
	if(data.over){
		return;
		}
	if(data.fruitnum>0){
	var l =  calLength2(mom.x,mom.y,baby.x,baby.y);
	if(l<900)
	{
		baby.babyBodyCount=0;
	
		mom.momBodyCount=0;
		data.addScore();
		halo.born(baby.x,baby.y);
	}
	}
}