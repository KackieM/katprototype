console.log('');


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
