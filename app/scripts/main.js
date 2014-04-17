console.log('\'Allo \'Allo!');

function Patient(name, location, age, symptom) {
	this.name = name;
	this.location = location;
	this.age = age;
	this.symptom = symptom;

	if (this.symptom = "") {
			this.condition = "dead";
		alert(this.name +"died.SixFeetUnder")

	}

}

// var Patient = function(name, location, age, condition)

function Doctor(name, location, specialty) {
	this.name = name;
	this.location = location;
	this.specialty = specialty;



}

function Disease(name, symptomone, symptomtwo) {
	this.name = name;
	this.symptomone = symptomone;
	this.symptomtwo = symptomtwo;
	this.addsymptom = function(symptom)
	{


	}

	// if (this.life <= 0) {
	// 		this.ability = "none";
	// 	alert(this.name +"died.Game over")
	// }



Patient.prototype.addSymptom = function(){
	this.patientdies = true;
}
	

var summerPatient = new Patient("summer belk", "charleston", 34, "acid trip");
var markPatient = new Patient("mark mattison", "mtpleasant", 37, "walking dead");
var sharronPatient = new Patient("sharron osborne", "columbia", 50, "blood thirsty");


var brownDoctor = new Doctor("Dr Brown", "columbia", "detox");
var smithDoctor = new Doctor("Dr Smith", "charleston", "");
var jonesDoctor = new Doctor("Dr Jones", "mtpleasant", "victum supplier");


var corpseDisease = new Diease("Walking Corpse Syndrome", "body parts missing","I'm Dead!");
var porphysiaDisease = new Diease("Vampire Disease", "Fangs", "Give Me Blood!");
var aliceDisease = new Diease("Alice in Wonderland Syndrome", "ladybug as big as a house", "Dog as small as a mouse");


};

// Phone.prototype.dropPhone = function(){
// 	this.broken = true;

// };

// var katPhone = new Phone("smart", "Apple");
// var markPhone = new Phone("smart", "iPhone5s");
// var summerPhone = new Phone("old school", "landline");

