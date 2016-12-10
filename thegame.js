/*Alex Kurtz
11/20/15
Project 5
CMPT120L-122 */

// Location Prototype to handle the Loc Constructor that creates each location.

var mainHall = new Loc('Main Hall', 'You are in the Main Hall, connecting all the locations into one room, it is filled with doorways, paintings, and untold locations', []);

var treasureRoom = new Loc('Treasure Room', 'You have entered into the Treasure Room, filled with riches and other mysteries', [new Item ('Gold', 'a Huge Gold Nugget, it looks like a giant potato but gold!')]);

var Armory = new Loc('Armory', 'You have entered into the Armory, a giant room filled with swords and other weapons', [new Item('Sword', 'a mighty sword, it is said that the sword was carved by Bjarne Stroustrup himself.')]);

var River = new Loc('River', 'You have found the mighty River, it is so clear that you can see all the fish in the stream', [new Item('Fish', 'a big salmon from the river.')]);

var Forge = new Loc('Forge', 'You have found the mighty Forge room, where all of the materials like Iron are smelted into swords, it is a huge room with great walls and furnaces.', [new Item('Iron', 'a chunck of Iron laying in the room.')]);

var tourtureRoom = new Loc('Tourture Room', 'You have found the darkly Tourture Room, it is filled with skeletons, tourture devices, and it is very dark.', []);

var wineCellar = new Loc('Wine Cellar', 'You are in the great Wine Cellar, it is filled with magnificant bottles of aged wine, and smells like old aged wood, and grapes', []);

var Bathroom = new Loc('Bathroom', 'You are in the Bathroom that has a gold toilet that is fit for a king', []);

var Bedroom = new Loc('Bedroom', 'You are in the Master bedroom, with a king sized bed, with silk sheets and a mattress made from the finest of materials', []);

var diningHall = new Loc('Dinning Hall', 'You are in the great Dinning Hall, it is filled with magnificant pieces of art, and a huge wooden table made from great feasts and celebrations', []);

// location arrary

locations = [mainHall, treasureRoom, Armory, River, Forge, tourtureRoom, wineCellar, Bathroom, diningHall, Bedroom
];

breadCrumbTrail = [];

var visitedNorthArea = 0;
var visitedEastArea = 0;
var visitedWestArea = 0;
var visitedSouthArea = 0;
var visitedSouthWestArea = 0;
var visitedNorthEastArea = 0;
var visitedSouthEastArea = 0;
var visitedNorthWestArea = 0;
var visitedSouthofSouthArea = 0;

// player object

var player = new Player(mainHall);

function displayLocation(descrip){
	document.getElementById('location').innerHTML = descrip;
}

//Function to Display the player's Score
function displayScore(points){
	document.getElementById('score').innerHTML = points;
}

//Function to display error messege
function errorMessege(error){
	document.getElementById('errorDisplay').innerHTML = error;
}

function submitButton(){
	document.getElementById('userInput').innerHTML;
	var input = userInput.value.toLowerCase();
	var Action = input.substring(0,1);

	if (Action === 'N' || Action === 'n'){
		goNorth();
	}
	else if (Action === 'S' || Action === 's'){
		goSouth();
	}
	else if (Action === 'E' || Action === 'e'){
		goEast();
	}
	else if (Action === 'W' || Action === 'w'){
		goWest();
	}
	else if (Action === 'T' || Action === 't'){
		takeItem();
	}
	else if (Action === 'H' || Action === 'h'){
		help();
	}
	else if (Action === 'I' || Action === 'i'){
		Inventory();
	}
	else if (Action === 'P' || Action === 'p'){
		previousLocations();
	} 
	else if (Action === 'L' || Action ==='l'){
		look();
	}

	else {
		help();
	}
}

function previousLocations(){
	breadCrumbTrail.reverse(); // shows pervious moves first
	errorMessege('The Players previous moves have been ' + breadCrumbTrail + '.');
}

// Function to take item

function takeItem(){
		
	if (player.location.items.length === 0){ // loop to check if there is a item in the room if the item.length is greater then 0
			errorMessege('That Item is not in the room.');
		} else { //check to see if there is a item in the room what they would take. 
			var itemString = 'You taken ';
			for(var i = 0; i < player.location.items.length; i++){
				var item = player.location.items.pop();
				player.inventory.push(item);
				itemString+= item.toString() + '.';
			}
		errorMessege(itemString);
	}
}


// function to clear error messege

function clearErrorMessege(){
	errorMessege('');
}

//function to display and keep track of player's inventory
function Inventory(){

 var inventoryString = 'The playeres current inventory is ';
// loop to display the players inventory and update the players inventory
 for (var i = 0; i < player.inventory.length; i++){
 	inventoryString += player.inventory[i].name + ', ';
 }

if (player.inventory.length === 0){
	inventoryString = "The Players inventory is currently empty"
}

inventoryString += '.';

errorMessege(inventoryString);

}

function help(){
	errorMessege('Valid Commands are T,t I,i P,p H,h N,n S,s E,e W,w, L,l.');
}

// look function to check if there is a item in a room

function look(){
	var location = player.location;
	if (location.items.length <= 0){ // loop to check if there is a item in the room if items.length is greater then 0
		errorMessege('No items are in this room.');
	} else {
		var itemDisplay = 'In this room there is '; //string to hold the name of the item
		for(var i = 0; i < location.items.length; i++){ //for loop to display the item if the item was found
			itemDisplay += location.items[i].name;
		}
		itemDisplay +='.';
		errorMessege(itemDisplay);
	}
}	

function goNorth(northBtn){
//decide where the user would go if they go north

clearErrorMessege();

switch(player.location){

	case mainHall:
		player.location = diningHall; // shifts player location 
		displayLocation(diningHall.toString()); // to string function call
		diningHall.visited = true; //set visted to true once player visits the location
		breadCrumbTrail.push(' Dinning Hall'); //Pushes Current Location to the breadcrumb trail
		document.getElementById('northBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('southBtn').disabled = false;
	break;

	case wineCellar:
		 player.location = mainHall;
		 displayLocation(mainHall.toString());
		 wineCellar.visited = true;
		 breadCrumbTrail.push(' Main Hall'); //Pushes Current Location to the breadcrumb trail
		 document.getElementById('southBtn').disabled = false;
		 document.getElementById('northBtn').disabled = false;
		 document.getElementById('eastBtn').disabled = false;
		 document.getElementById('westBtn').disabled = false;
	break;

	case River:
		 player.location = wineCellar;
		 displayLocation(wineCellar.toString());
		 breadCrumbTrail.push(' Wine Cellar'); //Pushes Current Location to the breadcrumb trail
		 River.visited = true;
		 document.getElementById('southBtn').disabled = false;
		 document.getElementById('eastBtn').disabled = false;
		 document.getElementById('northBtn').disabled = false;
		 document.getElementById('westBtn').disabled = false;
	break;

	case Armory:
		 player.location = Bathroom;
		 displayLocation(Bathroom.toString());
		 breadCrumbTrail.push(' Bathroom'); //Pushes Current Location to the breadcrumb trail
		 Armory.visited = true;
		 document.getElementById('northBtn').disabled = false;
		 document.getElementById('westBtn').disabled = true;
		 document.getElementById('southBtn').disabled = true;
		 document.getElementById('eastBtn').disabled = false;
	break;

	case Bathroom:
		 player.location = treasureRoom;
		 displayLocation(treasureRoom.toString());
		 breadCrumbTrail.push(' Treasure Room'); //Pushes Current Location to the breadcrumb trail
		 Bathroom.visited = true;
		 document.getElementById('northBtn').disabled = true;
		 document.getElementById('southBtn').disabled = false;
	 	 document.getElementById('eastBtn').disabled = false;
		 document.getElementById('westBtn').disabled = true;
	break;

	case Forge:
		 player.location = Bedroom;
		 displayLocation(Bedroom.toString());
		 breadCrumbTrail.push(' Bedroom');
		 Forge.visited = true;
		 document.getElementById('northBtn').disabled = false;
		 document.getElementById('southBtn').disabled = true;
		 document.getElementById('westBtn').disabled = false;
		 document.getElementById('eastBtn').disabled = true;
	break;

	case Bedroom:
		 player.location = tourtureRoom;
		 displayLocation(tourtureRoom.toString());
		 breadCrumbTrail.push(' Tourture Room');
		 Bedroom.visited = true;
		 document.getElementById('southBtn').disabled = false;
		 document.getElementById('northBtn').disabled = true;
		 document.getElementById('eastBtn').disabled = true;
		 document.getElementById('westBtn').disabled = false;
	break;

	default:
		diningHall(); // if user is already at location function will keep displaying
	break;
}

// if statement to check if the User has been to that Specfic Location; Score if statement

if (player.location === diningHall && visitedNorthArea === 0){
	player.points = player.points + 5;
	visitedNorthArea = visitedNorthArea + 1; 
}

if (player.location === treasureRoom && visitedNorthWestArea === 0){
	player.points = player.points + 5;
	visitedNorthWestArea = visitedNorthWestArea + 5;
}

if (player.location === tourtureRoom && visitedNorthEastArea === 0){
	player.points = player.points + 5;
	visitedNorthEastArea = visitedNorthEastArea + 1;
}


if (player.location === Bathroom && visitedWestArea === 0){
	player.points = player.points + 5;
	visitedWestArea = visitedWestArea + 1; 
}

// Function Call to display score

displayScore(player.points);

} 


function goSouth(southBtn){
// decide when the user would go if the go south 

clearErrorMessege();

switch(player.location){

	case mainHall: 
		player.location = wineCellar; 
		displayLocation(wineCellar.toString());
		breadCrumbTrail.push(' Wine Cellar');
		mainHall.visited = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('westBtn').disabled = false;
	break;

	case tourtureRoom:
		player.location = Bedroom;
		displayLocation(Bedroom.toString())
		breadCrumbTrail.push(' Bedroom');
		tourture.visited = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('eastBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
	break; 

	case Bedroom:
		player.location = Forge;
		displayLocation(Forge.toString());
		breadCrumbTrail.push(' Forge');
		Bedroom.visited = true;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('southBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('eastBtn').disabled = true;
	break; 

	case Bathroom:
		player.location = Armory; 
		displayLocation(Armory.toString());
		breadCrumbTrail.push(' Armory');
		Bathroom.visited = true;
		document.getElementById('southBtn').disabled = true;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('westBtn').disabled = true;
	break; 

	case wineCellar:
		player.location = River;
		displayLocation(River.toString());
		breadCrumbTrail.push(' River');
		wineCellar.visited = true;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('southBtn').disabled = true;
		document.getElementById('westBtn').disabled = true;
		document.getElementById('eastBtn').disabled = true;
	break; 

	case treasureRoom:
		player.location = Bathroom;
		displayLocation(Bathroom.toString()); 
		breadCrumbTrail.push(' Bathroom');
		treasureRoom.visited = true;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('westBtn').disabled = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
	break; 

	case diningHall:
		player.location = mainHall; 
		displayLocation(mainHall.toString());
		breadCrumbTrail.push(' Main Hall');
		diningHall.visited = true;
		document.getElementById('northBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('southBtn').disabled = false;
	break; 
  
  	default: 
  		wineCellar(); // if user is already at location function will keep displaying
}	

// if statement to check if the User has been to that Location; Score if statement

if (player.location === wineCellar && visitedSouthArea === 0){
	player.points = player.points + 5;
	visitedSouthArea = visitedSouthArea + 1; 
}

if (player.location === Armory && visitedSouthWestArea ===0){
	player.points = player.points + 5;
	visitedSouthWestArea = visitedSouthWestArea + 1;
}

if (player.location === Bedroom && visitedEastArea === 0){
	player.points = player.points + 5;
	visitedEastArea = visitedEastArea + 1; 
}

if (player.location === Forge && visitedSouthEastArea === 0){
	player.points = player.points + 5;
	visitedSouthEastArea = visitedSouthEastArea + 1;
}

if (player.location === River && visitedSouthofSouthArea === 0){
	player.points = player.points + 5;
	visitedSouthofSouthArea = visitedSouthofSouthArea + 1;
}

if (player.location === Bathroom && visitedWestArea === 0){
	player.points = player.points + 5;
	visitedWestArea = visitedWestArea + 1; 
}


// Function Call

displayScore(player.points);

} 

function goWest(westBtn){
// go west Function 

clearErrorMessege();

switch(player.location){

	case mainHall:
		player.location = Bathroom;
		displayLocation(Bathroom.toString());
		breadCrumbTrail.push(' Bathroom');
		mainHall.visited = true;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('westBtn').disabled = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
	break;

	case Bedroom:
		player.location = mainHall;
		displayLocation(mainHall.toString());
		breadCrumbTrail.push(' Main Hall');
		Bedroom.visited = true;
		document.getElementById('northBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('southBtn').disabled = false;
	break;

	case diningHall:
		player.location = treasureRoom;
		displayLocation(treasureRoom.toString());
		breadCrumbTrail.push(' Treasure Room');
		diningHall.visited = true;
		document.getElementById('northBtn').disabled = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('westBtn').disabled = true;
	break;

	case wineCellar:
		player.location = Armory;
		displayLocation(Armory.toString());
		breadCrumbTrail.push(' Armory');
		wineCellar.visited = true;
		document.getElementById('southBtn').disabled = true;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('westBtn').disabled = true;
	break;

	case Forge:
		player.location = wineCellar;
		displayLocation(wineCellar.toString()); 
		breadCrumbTrail.push(' Wine Cellar');
		Forge.visited = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('westBtn').disabled = false;
	break;

	case tourtureRoom:
		player.location = diningHall;
		displayLocation(diningHall.toString());
		breadCrumbTrail.push(' Dinning Hall');
		tourtureRoom.visited = true;
		document.getElementById('northBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('southBtn').disabled = false;
	break;

	default: 
		Bathroom(); // if user is already at location function will keep displaying
	break;
}

// if statement to check if the User has been to that Location; Score if statement

if (player.location === Bathroom && visitedWestArea === 0){
	player.points = player.points + 5;
	visitedWestArea = visitedWestArea + 1; 
}

if (player.location === diningHall && visitedNorthArea === 0){
	player.points = player.points + 5;
	visitedNorthArea = visitedNorthArea + 1; 
}

if (player.location === Armory && visitedSouthWestArea ===0){
	player.points = player.points + 5;
	visitedSouthWestArea = visitedSouthWestArea + 1;
}

if (player.location === treasureRoom	 && visitedNorthWestArea === 0){
	player.points = player.points + 5;
	visitedNorthWestArea = visitedNorthWestArea + 5;
}

// function call

displayScore(player.points);

}

function goEast(eastBtn){

clearErrorMessege();

switch (player.location){

	case mainHall:
		player.location = Bedroom;
		displayLocation(Bedroom.toString());
		breadCrumbTrail.push(' Bedroom');
		mainHall.visited = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('eastBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;

	break;

	case Bathroom:
		player.location = mainHall;
		displayLocation(mainHall.toString());
		breadCrumbTrail.push(' Main Hall');
		Bathroom.visited = true;
		document.getElementById('northBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('southBtn').disabled = false;
	break;

	case diningHall:
		player.location = tourtureRoom;
		displayLocation(tourtureRoom.toString());
		breadCrumbTrail.push(' Tourture Room');
		diningHall.visited = true;
		document.getElementById('northBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = true;
	break;

	case Armory:
		player.location = wineCellar;
		displayLocation(wineCellar.toString());
		breadCrumbTrail.push(' Wine Cellar');
		Armory.visited = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('westBtn').disabled = false;
	break;

	case wineCellar:
		player.location = Forge;
		displayLocation(Forge.toString());
		breadCrumbTrail.push(' Forge');
		wineCellar.visited = true;
		document.getElementById('northBtn').disabled = false;
		document.getElementById('southBtn').disabled = true;
		document.getElementById('westBtn').disabled = false;
		document.getElementById('eastBtn').disabled = true;
	break;

	case treasureRoom:
		player.location = 'diningHall';
		displayLocation(diningHall.toString());
		breadCrumbTrail.push(' diningHall');
		treasureRoom.visited = true;
		document.getElementById('northBtn').disabled = true;
		document.getElementById('southBtn').disabled = false;
		document.getElementById('eastBtn').disabled = false;
		document.getElementById('westBtn').disabled = true;
	break;

	default:
		Bedroom(); //Keeps user at specific location if they have already at that location 
}

if (player.location === Bedroom && visitedEastArea === 0){
	player.points = player.points + 5;
	visitedEastArea = visitedEastArea + 1; 
}

if (player.location === tourtureRoom && visitedNorthEastArea === 0){
	player.points = player.points + 5;
	visitedNorthEastArea = visitedNorthEastArea + 1;
}

if (player.location === wineCellar && visitedSouthArea === 0){
	player.points = player.points + 5;
	visitedSouthArea = visitedSouthArea + 1; 
}

if (player.location === Forge && visitedSouthEastArea === 0){
	player.points = player.points  + 5;
	visitedSouthEastArea = visitedSouthEastArea + 1;
}

if (player.location === diningHall && visitedNorthArea === 0){
	player.points = player.points + 5;
	visitedNorthArea = visitedNorthArea + 1;
}


displayScore(player.points);
	
}