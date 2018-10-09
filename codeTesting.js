
								/*Variables*/

					
					
						/*Stat Variables*/
var food = 0;
var water = 0;
var wood = 0;
var stone = 0;
var leather = 0;
var iron = 0;
var gold = 0;
var science = 0;
var population = 0;
						/*Per Second Variables*/
var foodPer = 0;
var waterPer = 0;
var woodPer = 0;
var stonePer = 0;
var leatherPer = 0;
var ironPer = 0;
var goldPer = 0;
var sciencePer = 0; 

						/*Stat Cap Variables*/
var foodCap = 5000;
var waterCap = 5000;
var woodCap = 5000;
var stoneCap = 5000;
var leatherCap = 5000;
var ironCap = 5000;
var goldCap = 5000;
var scienceCap = 5000;
var populationCap = 50;

						/*Building Variables*/
var farms = 0;
var huts = 0;
var libraries = 0;
var townSize = 1;

						/*Factor Variables*/
var clickFactor = 0;
var farmFactor = 0;
var libraryFactor = 0;

						/*Event Check Variables */
var currentEvent = "You find yourself in a lush forest";
var eventFarm5 = false;
var eventHut5 = false;
var eventLibrary5 = false;

							
								/*Functions*/

						/*Tab Display Function PRETTY SURE THIS IS WORKING*/

function openTab(event, tabName) {
    var i, mainTab, navTabLinks;
    mainTab = document.getElementsByClassName("mainTab");
    for (i = 0; i < mainTab.length; i++) {
        mainTab[i].style.display = "none";
    }
    navTabLinks = document.getElementsByClassName("navTabLinks");
    for (i = 0; i < navTabLinks.length; i++) {
        navTabLinks[i].className = navTabLinks[i].className.replace(" active", "");
    }
	if (tabName == 'eventTab') {
		document.getElementById("textDisplay").style.height = "85vh";
	} else {
		document.getElementById("textDisplay").style.height = "25vh";
	}
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
};					

/*
function randomGen() {
	var randomNum1 = (Math.random() * 100);
	if () {
		
	};
};
*/	
				
						/*Main Iterator*/
function searchAreaStart() {
	document.getElementById("searchAreaButton").onclick = function(){
				searchArea();
	};
	document.getElementById("searchFoodButton").style.display = "block";
		/*iterator itself*/
	var basicIncrement = function() {
		eventUpdate(currentEvent);
					/*stat update iteration*/
		if (foodCap > food) {
			food = food + farmFactor;
		};
		if (waterCap > water) {
			water = water;
		};
		if (woodCap > wood) {
			wood = wood;
		};
		if (stoneCap > stone) {
			stone = stone;
		};
		if (leatherCap > leather) {
			leather = leather;
		};
		if (ironCap > iron) {
			iron = iron;
		};
		if (goldCap > gold) {
			gold = gold;
		};
		if (scienceCap > science) {
			science = science + libraryFactor;
		};
					/*stat cap control*/
		if (foodCap < food) {
			food = foodCap;
		};
		if (waterCap < water) {
			water = waterCap;
		};
		if (woodCap < wood) {
			wood = woodCap;
		};
		if (stoneCap < stone) {
			stone = stoneCap;
		};
		if (leatherCap < leather) {
			leather = leatherCap;
		};
		if (ironCap < iron) {
			iron = ironCap;
		};
		if (goldCap < gold) {
			gold = goldCap;
		};
		if (scienceCap < science) {
			science = scienceCap;
		};
					/*per second iteration*/
		document.getElementById("foodPerSecond").innerHTML = "+" + foodPer.toFixed(2) + "/sec";
		document.getElementById("waterPerSecond").innerHTML = "+" + waterPer.toFixed(2) + "/sec";
		document.getElementById("woodPerSecond").innerHTML = "+" + woodPer.toFixed(2) + "/sec";
		document.getElementById("stonePerSecond").innerHTML = "+" + stonePer.toFixed(2) + "/sec";
		document.getElementById("leatherPerSecond").innerHTML = "+" + leatherPer.toFixed(2) + "/sec";
		document.getElementById("ironPerSecond").innerHTML = "+" + ironPer.toFixed(2) + "/sec";
		document.getElementById("goldPerSecond").innerHTML = "+" + goldPer.toFixed(2) + "/sec";
		document.getElementById("sciencePerSecond").innerHTML = "+" + sciencePer.toFixed(2) + "/sec";
					/*current stat iteration*/
		document.getElementById("foodStat").innerHTML = food.toFixed(2) + "/" + foodCap;
		document.getElementById("waterStat").innerHTML = water.toFixed(2) + "/" + waterCap;
		document.getElementById("woodStat").innerHTML = wood.toFixed(2) + "/" + woodCap;
		document.getElementById("stoneStat").innerHTML = stone.toFixed(2) + "/" + stoneCap;
		document.getElementById("leatherStat").innerHTML = leather.toFixed(2) + "/" + leatherCap;
		document.getElementById("ironStat").innerHTML = iron.toFixed(2) + "/" + ironCap;
		document.getElementById("goldStat").innerHTML = gold.toFixed(2) + "/" + goldCap;
		document.getElementById("scienceStat").innerHTML = science.toFixed(2) + "/" + scienceCap;
					/*Display searchWood*/
		if (food >= 10) {
			document.getElementById("searchWoodButton").style.display = "block";
		};
					/*Display searchStone*/
		if (food >= 15) {
			document.getElementById("searchStoneButton").style.display = "block";
		};
					/*Display farm*/
		if (food >= 5) {
			document.getElementById("buildFarmButton").style.display = "block";
		};
					/*Display hut*/
		if (wood >= 10 && food >=10) {
			document.getElementById("buildHutButton").style.display = "block";
		};
					/*Display searchScience*/
		if (wood >= 20) {
			document.getElementById("searchScienceButton").style.display = "block";
		};
					/*Display library*/
		if (science >= 1) {
			document.getElementById("buildLibraryButton").style.display = "block";
		};
					/*Display well*/
		if (stone >= 5) {
			document.getElementById("buildWellButton").style.display = "block";
		};
					/*Display blacksmith*/
		if (stone >= 15 && wood >= 15) {
			document.getElementById("buildBlacksmithButton").style.display = "block";
		};
					/*Display archery*/
		if (wood >= 10 && population >= 5) {
			document.getElementById("buildArcheryButton").style.display = "block";
		};
									/*Display ALL FOR TESTING*/
		document.getElementById("techLiteracyButton").style.display = "block";
		document.getElementById("techThatchButton").style.display = "block";
		document.getElementById("techClayButton").style.display = "block";
		document.getElementById("techStoneWallButton").style.display = "block";
		document.getElementById("techIronFarmButton").style.display = "block";
		document.getElementById("militarySpearmanButton").style.display = "block";
		document.getElementById("militaryHorsemanButton").style.display = "block";
		document.getElementById("militarySwordsmanButton").style.display = "block";
		document.getElementById("militaryBerserkerButton").style.display = "block";
		document.getElementById("militaryArcherButton").style.display = "block";
	};
	setInterval(basicIncrement, 100);
	basicIncrement();
};

						/*Map Update Function*/
function mapUpdate() {
	var townRadius = Math.round(townSize * 100) / 100
	var rightVariable = -(50 / townRadius) + 80;
	var downVariable = -(50 / townRadius) + 80;
	var c = document.getElementById("townSizeCanvas");
	var ctx = c.getContext("2d");
	c.height = 160;
	ctx.beginPath();
	ctx.arc(80, 80, 60, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(80, 80);
	ctx.lineTo(140, 80);
	ctx.stroke();
	ctx.font = 'italic 8pt Calibri';
	ctx.fillText(townRadius + "m", 82, 76);
	var townPlacement = function(moveRight, moveDown) {
		var rightVariable = -(moveRight / townRadius) + 80;
		var downVariable = -(moveDown / townRadius) + 80;
		ctx.fillRect(rightVariable, downVariable, 5, 5);
	};
								/*CANVAS NOT CENTER!?!?!   THESE ARE THE CORNERS*/
	townPlacement(80, 80);
	townPlacement(-75, -75);
	townPlacement(80, -75);
	townPlacement(-75, 80);
	townPlacement(-20, 40);
	townPlacement(70, 50);
};

						/*EventBox Update Function*/
						
function eventUpdate(currentEvent) {
	document.getElementById("textDisplayText").innerHTML = currentEvent;
}

							/*Search Functions*/
					/*Explore surrounding*/
function searchArea() {
	food = food + 500;
	water = water + 500;
	wood = wood + 500;
	stone = stone + 500;
	leather = leather + 500;
	iron = iron + 500;
	gold = gold + 500;
	science = science + 500;
	mapUpdate();
};
					/*Look for food*/
function searchFood() {
	food = food + 1 + clickFactor;
	document.getElementById("foodStat").innerHTML = food.toFixed(2) + "/" + foodCap;
};
					/*Gather wood*/
function searchWood() {
	wood = wood + 1 + clickFactor;
	document.getElementById("woodStat").innerHTML = wood.toFixed(2) + "/" + woodCap;
};
					/*Gather stones*/
function searchStone() {
	stone = stone + 1 + clickFactor;
	document.getElementById("stoneStat").innerHTML = stone.toFixed(2) + "/" + stoneCap;
};	
					/*Gather information*/
							/*NOT IMPLEMENTED*/
function searchInfo() {
	science = science + 1 + clickFactor;
	document.getElementById("scienceStat").innerHTML = science.toFixed(2) + "/" + scienceCap;
};



							/*Build Functions*/
							
					/*Farm*/
function addFarm() {
	if (food >= 5) {
		farms = farms + 1;
		farmFactor = farmFactor + .001;
		food = food - 5;
		foodPer = foodPer + .01;
		townSize = townSize + .005;
		document.getElementById("statFarms").innerHTML = "Farms: " + farms;
		mapUpdate();
	};
	if (farms >= 5 && eventFarm5==false) {
		eventFarm5 = true;
		currentEvent += "</br>You have a row of farms starting up";
	};
};
					/*Hut*/
function addHut() {
	if (wood >= 5 && food >= 5 && populationCap > (huts * 2)) {
		huts = huts + 1;
		population = population + 2;
		wood = wood - 5;
		food = food - 5;
		townSize = townSize + .005;
		document.getElementById("statHuts").innerHTML = "Huts: " + huts;
		document.getElementById("statPopulation").innerHTML = "Population: " + population + "/" + populationCap;
		mapUpdate();
	};
	if (huts >= 2 && eventHut5==false) {
		eventHut5 = true;
		currentEvent += "</br>You've started to find friends in the wilderness";
	};
};
					/*Library*/
function addLibrary() {
	if (wood >=10 && science >=1) {
		wood = wood - 10;
		science = science - 1;
		libraries = libraries + 1;
		libraryFactor = libraryFactor + .1;
		sciencePer = sciencePer + 1;
		townSize = townSize + .005;
		document.getElementById("statLibraries").innerHTML = "Libraries: " + libraries;
		mapUpdate();
	};
	if (libraries >= 2 && eventLibrary5==false) {
		eventLibrary5 = true;
		currentEvent += "</br>You begin to organize your volumes and keep record of your books";
	};
};