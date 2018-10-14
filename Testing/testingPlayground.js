var townSize = 50;

var otherTownNum = ((Math.random() * 15) + 5);
var rightRandom = Math.round(Math.random() * 100) + 50;
var downRandom = Math.round(Math.random() * 100) + 50;






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
	document.getElementById("testP1").innerHTML = rightPlacement;
		document.getElementById("testP2").innerHTML = downPlacement;
		document.getElementById("testP3").innerHTML = rightRandom;
		document.getElementById("testP4").innerHTML = downRandom;
	var townPlacement = function(townRight, townDown) {
		var rightVariable = -(townRight / townRadius) + 80;
		var downVariable = -(townDown / townRadius) + 80;
		ctx.fillRect(rightVariable, downVariable, 5, 5);
	};
	for (i = 0; i <= otherTownNum; i++) {
		var rightPlacement = rightRandom * i;
		var downPlacement = downRandom * i;
		townPlacement(rightPlacement, downPlacement);
		document.getElementById("testP1").innerHTML = rightPlacement;
		document.getElementById("testP2").innerHTML = downPlacement;
		document.getElementById("testP3").innerHTML = rightRandom;
		document.getElementById("testP4").innerHTML = downRandom;
		
	};
	
	
	/*var townPlacement = function(moveRight, moveDown) {
		var rightVariable = -(moveRight / townRadius) + 80;
		var downVariable = -(moveDown / townRadius) + 80;
		ctx.fillRect(rightVariable, downVariable, 5, 5);
	};
								CANVAS NOT CENTER!?!?!   THESE ARE THE CORNERS
	townPlacement(80, 80);
	townPlacement(-75, -75);
	townPlacement(80, -75);
	townPlacement(-75, 80);
	townPlacement(-20, 40);
	townPlacement(70, 50);*/
};


function increaseTownsize() {
	townSize += 1;
	mapUpdate();
};