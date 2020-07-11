var form, login;
var user;
var peopleCount = 0; 
var database;

function setup() {
    canvas = createCanvas(1500, 900);
    database = firebase.database();
    background("pink");
    form = new Signup();
    form.display();
}