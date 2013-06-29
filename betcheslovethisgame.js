var score = 0; // Turn into attribute of playerName

var friendNameBank = ["Tiffany", "Sarah", "Kate", "Heather", "Jessica", "Audrey"];
var friendsBankLength = friendNameBank.length;

var archNemesis, frenemy, dud; // Set to one friend name each
var tokenCrazyFriend = friendNameBank[Math.floor(Math.random() * friendsBankLength)];
// Fluctuating variables for friend player & names, 
// Turn into attributes
var sociopathic, thin, sexMarketDemand, insensivity, outerBeauty, 
		intelligence, fitness, redeeming, tenacity, money, funny, annoying, 
		stoner, shadiness;
var betchyMom = 1; // Set as attribute with different value for each player, max 6  
var betchyMomInfluence = function(playerName.betchyMom) {
	var momFactor = playerName.betchyMom - 2;
	var geneticDeck = [playerName.sociopathic, playerName.thin, playerName.money, playerName.funny, 
										playerName.intelligence, playerName.outerBeauty];
	var geneticFactors = geneticDeck.length;
	for(var i = 0; i < geneticFactors; i++) {
		geneticDeck[i] += momFactor;
	}
	return geneticDeck;
}

var heterosexual = false, bisexual = false, homosexual = false; // Turn into attributes
var bornThatWay = function(name) {
	var heteroChance = Math.floor(Math.random() * 10);
	if(heteroChance > 3) {
		name.heterosexual = true;
	} else if (heteroChance > 1) {
		name.bisexual = true; // Adjust hookup scenarios to go either way
	} else {
		name.homosexual = true; // Adjust hookup scenarios to same sex, eligible for gayBFF
	}
}
// Make this function work
var hasGayBFF = function(playerName, friends) {
 // if any of friends are homosexual and not archNemesis or frenemy
 playerName.score += 4;
 playerName.tenacity += 1;
}

var broNameBank = ["Jake", "Dillon", "Kyle", "Trevor", "Will", "Mike", "Chris"];
var broBankLength = friendNameBank.length;
var uglyHot, fuckBuddy, niceGuy, guyFriend, gayBFF; 

var askHasGirlfriendShady = function(playerName, broName) {
	if(response == "Kinda") {
		return true;
	}
}

var asksToShady = function(playerName, broName, request) {
	var shadyRequest = (request == "go for a drive") || 
										 (request == "video chat after midnight") ||
										 (request == "keep this our fun little secret");
	return shadyRequest;
}

var responseShady = function(playerName, broName, response) {
	var shadyResponse = (response == "if you say so") || 
										 (response == "it is what it is");
	return shadyResponse;
}

var shadyFactors = [{
	textYouWhileSameRoom : false;, 
	textMore1GirlSameRoom : false;,
	askHasGirlfriendShady();,
	asksToShady();,
	callsEveryoneBaby: false;,
	hidesFbookPics: false;,
	hidesFbookWall: false;
	responseShady();
	friendsHate: false;
}]; 

var calculateShadiness = function(name) {
	var shadinessAdded;
	var shadyDeckLength = shadyFactors.length;
	for (var j = 0; j < shadyDeckLength; j++) {
		if(shadyFactors[i] == true) {
			shadinessAdded +=1;
		}
	}
	return name.shadiness
}

var candyStash = 0; // Rx pills, turn into attribute of playerName
var liquorCabinet = 1; // Turn into attribute of playerName
var dietCokes = 1; // Power up

var icedCoffee = function(playerName) {
	playername.thin += 1;
}

var tweet = function(playerName) {
	var retweetable = ((playerName.intelligence + playerName.redeeming + playerName.funny)/3) - (playerName.annoying + playerName.sociopathic);
	score += retweetable;
}

var groupDinner = function() {}

var clubbing = function() {

	var sluttyFashionGame(playerName, friend, friend, friend) { // List friends going out together
		var pullsItOff = playerName.outerBeauty * ((playerName.thin + playerName.fitness + playerName.tenacity 
										+ playerName.intelligence + playerName.money)/5);
		if(friend = tokenCrazyFriend) { // If token crazy friend is there that night
			pullsItOff += 3; // For some reason
		}
		playerName.score += pullsItOff;
	} 

	var pregame = function() {};
	
	var flirtWithOtherWhileHesLooking() {
		if(tooObvious) {
			score -= 1;
		} esle {
			score += 1;
		}
	}

	var drunkenBrawl = function(playerName, playerDrinks, herName, herDrinks) {
		// Refactor into function
		var playerLuck = Math.floor(Math.random() * (playerName.tenacity * playerName.sociopathic * playerDrinks)) + (fitness - (playerName.thin / 2)););
		var herLuck = Math.floor(Math.random() * (herName.tenacity * herName.sociopathic * herDrinks)) + (fitness - (herName.thin / 2));
		if(playerLuck > herLuck) {
			playerName.outerBeauty -= 1;
			herName.outerBeauty -= 5;
			playerName.tenacity += 3;
			playerName.score += 2;
		} else {
			herName.outerBeauty -= 1;
			playerName.outerBeauty -= 5;
			herName.tenacity += 3;
			herName.score += 2;
		}
	};

} // Clubbing

var tanning = function(playerName) {
	outerBeauty += 1;
	}

var springBreak = function(playerName) {
	clubbing(); 
	tanning();
	playerName.money -= 5;
}

var formal = function(playerName, broName) {
	clubbing(); 
	tanning();
	playerName.money -= 2
	// Insert some sort of sex related function
}

var vegas = function(playerName, broName) {
	clubbing(); 
	tanning();
	playerName.money -= Math.floor((Math.random() * 4) - 2)
	// Insert some sort of sex related function
}

var salonDay = function(playerName) {
	playerName.outerBeauty += 5;
}

// Modify this into a prototype
var winning = function(playerName) { // Create this variable
	playerName.score = -1;
	
	var dontFuckHim = function() {
		if (tookHisDrugs) { // Create this variable
			score += 5;
		} else {
		score += 2;
		}
		sexMarketDemand += 1;
	}
	
	var drinkBought = function() {
		if(dontReturnFromBathroom) {
			score += 2;
		} else {
			score += 1;
		}
	}
	
	var hookUp = function() {
		if(heGoesDownOnYou) {
			if(thenYouPassOut) { // Create this variable
				score += 3;
				sexMarketDemand += 1;
			} else {
				score += 1;
				sexMarketDemand -= 1;
			}
		}
	}
	
	var pussyWhip = function(scenario) {
		score += 6;
	}
	
	var inviteHimOver = function(bro) {
		if(elsewhere) {
			score += 1;
		} else {
			if(askWhyStillHere) { // Create this variable
				score += 3;
			}
			sexMarketDemand -= 1;
		}
	}
	
	var brosNextMove = function(herName, playerName) {
		if(herName.outerBeauty < playerName.outerBeauty) {
			if(herName.thin < playerName.thin) {
				score += 5;
			} else {
				score += 2;
			}
		}
		if(heLeavesVoicemail) {
				score += 10;
				alert("Game over. :) ");
			}
		if(heCallsYouOut) { 
			if(youLaugh) { // Create this variable
				if(public) { // Create this variable
					score += 5;
				} else {
					score += 2;
				}
			} else {
				score += 1;
			}
		}
		
		var drunkSexting = function(initiater) {
			if(initiator = playerName) {
				score -= 2;
				sexMarketDemand -= 2;
			} else {
				score += 1;
			}
		}
		
		var showEmotion = function(scenario) {
			score -= 2;
			redeeming += 1;
		}
		
		var stalking = function(broName) {
			score -= 4;
			sexMarketDemand -= 2;
		}
		
		var callingBro(broName) {
			score -=3;
			alert("He's just not that into you.");
		}
		
		var friendingOnFbook(broName) {
			score -=1;
			sexMarketDemand -= 1;
		}
		
		var usingWordBoyfriend() {
			if(timesHookedUp <= 5) {
				score -= 10;
				alert("You're done.");
				sexMarketDemand -= 7;
			} 
		}
		
		var deletingFromBBM(broName) {
			score -= 5;
			alert("You care, you lose");
			sexMarketDemand -= 1;
		}
		
		var crying(playerName) {
			score -= 10;
			alert("Betches don't cry... they get even.");
		}
		
	} // Winning function close bracket
	
};