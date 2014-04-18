console.log('Death Becomes Her');

	function Patient(name,health, disease) {
	this.name = name;
	this.health = 100;  
	this.disease = disease; 
	this.changeHealth = function(newHealth){
		this.health = newHealth;
	}};
	

	// $(this.disease = ".disease").click(function(e) {
	// 	e.preventDefault();
	// 	summer.disease(patient);
	// 	alert(this.name +"died.SixFeetUnder");
	// 	});

	Disease.prototype.hasdisease = function(){
		this.dead = true;

    };

var Patient = function(name, condition) {
}


function Doctor(name, specialty) {
	this.name = name;
	this.specialty = specialty;
	this.health = + 50;
}


function Disease(name, damage) {
	this.name = name;
	this.damage = damage;
	// this.symptom = symptom;
	this.kill = function()  {

		if(this.name == "") {
		patient.dead();
		}
	}
}

Disease.prototype.Fever = function(){
	if (this.life <= 0) {
			this.ability = "none";
		alert(this.name +"died.Game over")
	}

}


Patient.prototype.add = function(){
	this.patientdies = true;
}








// });

// Phone.prototype.dropPhone = function(){
// 	this.broken = true;

// };

// var katPhone = new Phone("smart", "Apple");
// var markPhone = new Phone("smart", "iPhone5s");
// var summerPhone = new Phone("old school", "landline");

