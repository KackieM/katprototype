console.log('Death Becomes Her');


	function Phone(type, brand) {
	this.type = type;
	this.brand = brand;

};



Phone.prototype.dropPhone = function(){
	this.broken = true;

};

var katPhone = new Phone("smart", "Apple");
var markPhone = new Phone("smart", "iPhone5s");
var summerPhone = new Phone("old school", "landline");



function Tree (name) {
   this.name = name;
}

var theTree = new Tree( "Redwood" );
console.log( "theTree.constructor is " + theTree.constructor );
// This example displays the following output:

theTree.constructor = function Tree (name) {
    this.name = name;
}