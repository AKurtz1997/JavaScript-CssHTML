/*Alex Kurtz
11/9/15
Project 4
CMPT120L-122 */

//Variables to display when item is found and will display this messege

var goldFound = 'You have found Gold.';

var ironFound = 'You have found Iron.';

var swordFound = 'You have found a Sword.';

var fishFound = 'You have found a Fish.';

// Location Specific Functions to get called in the go Functions and disables buttons based of specific locations

function River(){
	var message = 'You are now at the River.'
	displayLocation(message);
	document.getElementById('northBtn').disabled = false;
	document.getElementById('southBtn').disabled = true;
	document.getElementById('westBtn').disabled = true;
	document.getElementById('eastBtn').disabled = true;

	//if check to decide if messege should be displayed

	if (Fish === 0 || Fish === 1){
		itemAlert(fishFound);
	}
}

function diningHall(){
	var message = 'You are in the Dining Hall.';
	displayLocation(message);
	document.getElementById('northBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('southBtn').disabled = false;
}

 	
function Forge(){
	var message = 'You are now in the Forge Room.'
	displayLocation(message);
	document.getElementById('northBtn').disabled = false;
	document.getElementById('southBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
	document.getElementById('eastBtn').disabled = true;
//if check to decide if messege should be displayed
	if (Iron === 0 || Iron === 1){
		itemAlert(ironFound);
	}
}

function Bathroom(){
	var message = 'You are in the Bathroom.';
	displayLocation(message);
	document.getElementById('northBtn').disabled = false;
	document.getElementById('westBtn').disabled = true;
	document.getElementById('southBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
}


function Armory(){
	var message = 'You are in the Armory.'
	displayLocation(message);
	document.getElementById('northBtn').disabled = false;
	document.getElementById('westBtn').disabled = true;
	document.getElementById('southBtn').disabled = true;
	document.getElementById('eastBtn').disabled = false;
//if check to decide if messege should be displayed
	if (Sword === 0 || Sword === 1){
		itemAlert(swordFound);
	}
}

function wineCellar(){
	var message = 'You are in the Wine Cellar.';
	displayLocation(message);
	document.getElementById('southBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('northBtn').disabled = false;
	document.getElementById('westBtn').disabled = false;
}

function tourtureRoom(){
	var message = 'You are in the Tourture Room.';
	displayLocation(message);
	document.getElementById('southBtn').disabled = false;
	document.getElementById('northBtn').disabled = true;
	document.getElementById('eastBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
}

function Bedroom(){
	var message = 'You are in the Bedroom.';
	displayLocation(message);
	document.getElementById('southBtn').disabled = false;
	document.getElementById('northBtn').disabled = false;
	document.getElementById('eastBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
}

function mainHall(){
	var message = 'You are in the Main Hall.'
	displayLocation(message);
	document.getElementById('southBtn').disabled = false;
	document.getElementById('northBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('westBtn').disabled = false;
}

function treasureRoom(){
	var message = 'You are in the Treasure Room.'
	displayLocation(message);
	document.getElementById('northBtn').disabled = true;
	document.getElementById('southBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('westBtn').disabled = true;
//if check to decide if messege should be displayed
	if (Gold === 0 || Gold === 1){
		itemAlert(goldFound);
	}
}

