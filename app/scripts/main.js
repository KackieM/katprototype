console.log('\'Allo \'Allo!');

function Patient(name, location, age, condition) {
	this.name = name;
	this.location = location;
	this.age = age;
	this.condition = condition;
	this.appointment = appointment;

	if (this.appointment = "cancelled") {
			this.condition = "dead";
		alert(this.name +"died.Game over")

	}

}

// var Patient = function(name, location, age, condition)

function Doctor(name, location, specialty) {
	this.name = name;
	this.location = location;
	this.specialty = specialty;



}

function Insurance(name, specialty) {
	this.name = name;
	this.location = location;
	this.specialty = specialty;
	this.addAppointment = function(patient)

	// if (this.life <= 0) {
	// 		this.ability = "none";
	// 	alert(this.name +"died.Game over")
	// }



Patient.prototype.cancelDoctor = function(){
	this.patientdies = true;
}
	

var summerPatient = new Patient("summer belk", "charleston", 34, "heart condition");
var markPatient = new Patient("mark mattison", "mtpleasant", 37, "allergies");
var sharronPatient = new Patient("sharron osborne", "columbia", 50, "ibs");


var brownDoctor = new Doctor("Dr Brown", "columbia", "gastrointerology");
var smithDoctor = new Doctor("Dr Smith", "charleston", "cardiac surgeon");
var jonesDoctor = new Doctor("Dr Jones", "mtpleasant", " allergist");


var corpseDisease = new Diease("Walking Corpse Syndrome", "body parts missing","I'm Dead!");
var porphysiaDisease = new Diease("Vampire Disease", "Fangs", "Give Me Blood!");
var aliceDisease = new Diease("Alice in Wonderland Syndrome", "ladybug as big as a house", "Dog as small as a mouse");

}
};

// Phone.prototype.dropPhone = function(){
// 	this.broken = true;

// };

// var katPhone = new Phone("smart", "Apple");
// var markPhone = new Phone("smart", "iPhone5s");
// var summerPhone = new Phone("old school", "landline");

