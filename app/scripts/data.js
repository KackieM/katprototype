
var patients = ["Summer Mattison","Mark Mattison","Sharron Osborne"];
var diseases = ["Walking Corpse Syndrome","Vampire Diease", "Alice in Wonderland Syndrome"];
var doctors = ["Dr Brown","Dr Smith", "Dr Jones"];


var summer = new Patient("Summer", "100", "");
alert(summer.name); //displays "Summer"
alert(summer.disease); //displays "Acid Trip"
alert(summer.toString); //displays "My name is Summer and I feel like I am "on an Acid Trip".

	

var summerPatient = new Patient("summer belk", "charleston", "acid trip");
var markPatient = new Patient("mark mattison", "mtpleasant", "walking dead");
var sharronPatient = new Patient("sharron osborne", "columbia", "blood thirsty");


var brownDoctor = new Doctor("Dr Brown", "columbia", "detox");
var smithDoctor = new Doctor("Dr Smith", "charleston", "");
var jonesDoctor = new Doctor("Dr Jones", "mtpleasant", "victum supplier");


var corpseDisease = new Diease("Walking Corpse Syndrome", 20);
var porphysiaDisease = new Diease("Vampire Disease", 40);
var aliceDisease = new Diease("Alice in Wonderland Syndrome", 60);