Item.prototype.toString = function(){
	return this.description;
}

function Item(name, description){
	this.name = name;
	this.description = description;
}
