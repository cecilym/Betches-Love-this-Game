$(document).ready(function () {

	var playerPrototype = {
		name: "",
		nickname: "",
		crazy: 2,
		insensitivity: 5,
		tth: 2, // 126.Try Too Hard
		winning: 0,
		shadiness: 0,
		sophistication: 1,
		betchFactor: 1
		// groupPhotog boolean?
	};
	
	function Person (name) {
		this.name = name;
	};

	Person.prototype = playerPrototype;

	player = new Person();

	// Betches
	crazyFriend = new Person();
	nemesis = new Person();
	betchyMom = new Person();
	frenemy = new Person();
	dud = new Person();
	tgf = new Person();
	ugh = new Person();
	besty1 = new Person();
	sisterbff = new Person();
	freshmanRoomie = new Person();
	wgg = new Person();

	// Bros/Love Interests
	// Eventually want to enable bisexual and homosexual play options
	bro1 = new Person();
	fuckbuddy = new Person();
	uglyHot = new Person();
	niceGuy = new Person();
	guyFriend = new Person();
	dad = new Person();
	gayBFF = new Person();
	pro = new Person();

	// Things you can get
	var powerUpItems = {
	};
	function PowerUp (name) {
		this.name = name;
	};
	PowerUp.prototype = powerUpItems;

	pill = new PowerUp();
	gradGift = new PowerUp();
	wine = new PowerUp();
	twitter = new PowerUp();
	dietCoke = new PowerUp();
	icedCoffee = new PowerUp();
	sunglasses = new PowerUp();
	iPhone = new PowerUp();
	sushi = new PowerUp();
	bottledWater = new PowerUp();
	froyo = new PowerUp();


	// Things you can do
	var generalActions = {
	};
	function GeneralAction (name) {
		this.name = name;
	};
	GeneralAction.prototype = generalActions;

	talkingShit = new GeneralAction();
	studyingAbroad = new GeneralAction();
	diet = new GeneralAction();
	mobileUpload = new GeneralAction();
	tanning = new GeneralAction();
	drunkenBrawl = new GeneralAction();
	maniPedi = new GeneralAction();
	hairDid = new GeneralAction();
	browsDone = new GeneralAction();
	wax = new GeneralAction();
	massage = new GeneralAction();
	facial = new GeneralAction();
	notDoingWork = new GeneralAction();
	fakeSmile = new GeneralAction();
	dessignSlutty = new GeneralAction();
	cuttingLine = new GeneralAction();
	yoga = new GeneralAction();
	watchSexandtheCity = new GeneralAction();
	watchCurbYourEnthusiasm = new GeneralAction();
	watchTrueBlood = new GeneralAction();
	watchGossipGirl = new GeneralAction();
	shopping = new GeneralAction();
	goToMovies = new GeneralAction();
	bitching = new GeneralAction();

	// Romantic interactions
	var romanticActions = {
	};
	function RomanticAction (name) {
		this.name = name;
	};
	RomanticAction.prototype = romanticActions;

	notHavingSexWithBro = new RomanticAction();
	sexting = new RomanticAction();

	// Will happen throughout the game
	var events = {
	};
	function Event (name) {
		this.name = name;
	};
	Event.prototype = events;

	birthday = new Event();
	tailgate = new Event();
	sundayMorning = new Event();
	date = new Event();
	breakup = new Event(); // Need to incorporate 96.Ex-Boyfriend Life Cycle
	clubbing = new Event();
	pregame = new Event();
	springBreak = new Event();
	sorority rush = new Event();
	formal = new Event();
	graduation = new Event();
	vegas = new Event();
	groupDinner = new Event();
	hamptons = new Event();	

	$('#nameButton').on("click", function() {
		var playerName = $('#nameField').val(); 
		player.name = playerName; 
		console.log(player.name);

    $('.active').html("<h2>Hey, " + playerName + ".</h2>" + "<h3>Every Betch has a token crazy friend.<br>Let's make you one.</h3><form><div class='row'><div class='large-6 columns'><div class='row collapse'><div class='small-10 columns'><input type='text' placeholder='Your token crazy friend is named...' id='crazyNameField'></div><div class='small-2 columns'><a href='#' class='button postfix' id='crazyNameSubmit'>Submit</a></div></div></div></div></form>");
  
    $('#crazyNameSubmit').on("click", function() { 

			var crazyName = $('#crazyNameField').val(); 
			crazyFriend.name = crazyName;  
			console.log(crazyFriend.name);

			var $crazyImgPath = '<img src="imgs/crazyFriend.png" alt="Crazy Friend" class="left"/>';
			$('#images').append($crazyImgPath);

			$('.active').html("<h2>What up, " + crazyName + "?</h2><h3>By the way, I want to introduce you to this bro...</h3><form><div class='row'><div class='large-6 columns'><div class='row collapse'><div class='small-10 columns'><input type='text' placeholder='Your token crazy friend is named...' id='broNameField'></div><div class='small-2 columns'><a href='#' class='button postfix' id='broNameSubmit'>Submit</a></div></div></div></div></form>");

			$('#broNameSubmit').on("click", function() {
				var broName1 = $('#broNameField').val(); 
				bro1.name = broName1; 
				console.log(bro1.name);

				var $bro1ImgPath = '<img src="imgs/bro1.png" alt="A Bro" class="left" id="bro1"/>';
				$('#images').append($bro1ImgPath);
				$('.active').html("");

			});

  	});
  });
});