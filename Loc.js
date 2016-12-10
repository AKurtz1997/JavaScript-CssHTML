Loc.prototype.toString = function(){
	return this.description;
}

function Loc(name, description, items){
	this.name = name;
	this.description = description;
	this.items = items;
}