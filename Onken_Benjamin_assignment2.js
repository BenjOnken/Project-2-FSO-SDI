/*


*/

var greeting = "Good morning! Time to head out fishing!",
	fishCaught = 12,
	array = [1,2,3,4],
	sackLunch = false,
	militaryTime = 22;
var output = function(out)
{
	console.log(out);
};
var findANewSpot = function(newSpot)
{
	if(newSpot == true)
	{
		console.log("We decided that we would find a new fishing spot! So after driving for a bit we arrived at our new spot.");
	}
	else
	{
		console.log("We will continue to fish here at our current spot!");
	};
};

var fishCaughtHere = function(fishCaught)
{
	if(fishCaught < 5)
	{
		var changeSpot = true;
		findANewSpot(changeSpot);
	}
	else
	{
		var changeSpot = false;
		findANewSpot(changeSpot);
	};
};

var lunch = function(timeByHour,broughtFood)
{
	if(timeByHour < 13 && timeByHour > 11 && broughtFood == true)
	{
		var lunchTime = true;
	}
	else
	{
		var lunchTime = false;
	};
	return(lunchTime);
};


output(greeting);
output("So far we have caught " + fishCaught + " fish.")
fishCaughtHere(fishCaught);
lunch(militaryTime,sackLunch);

var lunchTime = false;

if(lunchTime == true)
{
	output("Since its late enough, we decided to take a break and have some lunch!");
}
else
{
	output("I just checked and we don't need to stop for lunch yet!");
};

