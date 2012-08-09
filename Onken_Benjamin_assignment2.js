/*
Benjamin Onken
8/9/2012
Project 2
Let's fish the whole day!
*/

var greeting = "Good morning! Time to head out fishing!",
	fishCaught = 12,
	lunchTime = true,
	sackLunch = false,
	militaryTime = 22,
	myName = "Ben",
	friendName = "Nick",
	peopleSummary;
	caughtSoFar = 0;
	typeOfFish = ["Walleye", "Pike", "Smallmouth Bass", "Muskie"];

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
		lunchTime = true;
	}
	else
	{
		lunchTime = false;
	};
	return(lunchTime);
};

var keepFish = function(fishToKeep)
{
	output("Since we have 3 people in the boat, the maximum amount of fish we can keep for dinner is 9.")
	var fishReleased = 0;
	while(fishToKeep > 9)
	{
		fishToKeep--;
		fishReleased++;

		output("We have released " + fishReleased + " fish and still have " + fishToKeep + " fish left.")



	}
	fishCaught = fishToKeep;
	return(fishCaught);
};

var whoInBoat = function(me,friend)
{
	var noShow = "Ryan";
	peopleSummary = me + ", " + friend + ", and the driver were the fishermen in the boat today! " + noShow + " didn't show up unfortunately!";
	
	return(peopleSummary);
};

var whatTypeOfFish = function(numberOfSpecies,typesOfFish)
{
	for (var difTypesFish = numberOfSpecies; difTypesFish >= 0 && difTypesFish <= 5; difTypesFish--) 
	{
		caughtSoFar++;
		output("So far we have caught " + caughtSoFar + " types of fish! The most recent was a " + typesOfFish[difTypesFish])
	};
	return(caughtSoFar);
}

output(greeting);
if(myName || friendName == "Ben")
{
	output("You're being guided by Ben!")
}
output("So far we have caught " + fishCaught + " fish.")
fishCaughtHere(fishCaught);
lunch(militaryTime,sackLunch);

if(fishCaught > 0)
{
	keepFish(fishCaught);
}
else
{
	output("I guess we won't be eating any fish tonight.")
};

whoInBoat(myName,friendName);
whatTypeOfFish(3,typeOfFish);
output(peopleSummary + "He missed catching " + caughtSoFar + " species of fish!");


if(lunchTime == true)
{
	output("Well I hope you saved room for dinner after that huge lunch you had today!");
}
else
{
	output("I bet you guys are starving since you didn't have lunch today!");
};
output("We have a grand total of " + fishCaught + " fish to cook for dinner tonight.");
