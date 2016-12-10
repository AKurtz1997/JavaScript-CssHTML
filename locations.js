/*Alex Kurtz
11/20/15
Project 5
CMPT120L-122 */

// Location Specific Functions to get called in the go Functions and disables buttons based of specific locations

function River(){
	document.getElementById('northBtn').disabled = false;
	document.getElementById('southBtn').disabled = true;
	document.getElementById('westBtn').disabled = true;
	document.getElementById('eastBtn').disabled = true;
}

function diningHall(){
	document.getElementById('northBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('southBtn').disabled = false;
}

 	
function Forge(){
	document.getElementById('northBtn').disabled = false;
	document.getElementById('southBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
	document.getElementById('eastBtn').disabled = true;
}

function Bathroom(){
	document.getElementById('northBtn').disabled = false;
	document.getElementById('westBtn').disabled = true;
	document.getElementById('southBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
}


function Armory(){
	document.getElementById('northBtn').disabled = false;
	document.getElementById('westBtn').disabled = true;
	document.getElementById('southBtn').disabled = true;
	document.getElementById('eastBtn').disabled = false;
}

function wineCellar(){
	document.getElementById('southBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('northBtn').disabled = false;
	document.getElementById('westBtn').disabled = false;
}

function tourtureRoom(){
	document.getElementById('southBtn').disabled = false;
	document.getElementById('northBtn').disabled = true;
	document.getElementById('eastBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
}

function Bedroom(){
	document.getElementById('southBtn').disabled = false;
	document.getElementById('northBtn').disabled = false;
	document.getElementById('eastBtn').disabled = true;
	document.getElementById('westBtn').disabled = false;
}

function mainHall(){
	document.getElementById('southBtn').disabled = false;
	document.getElementById('northBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('westBtn').disabled = false;
}

function treasureRoom(){
	document.getElementById('northBtn').disabled = true;
	document.getElementById('southBtn').disabled = false;
	document.getElementById('eastBtn').disabled = false;
	document.getElementById('westBtn').disabled = true;
}

