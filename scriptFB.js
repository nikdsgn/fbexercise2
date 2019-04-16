var database = [
{
	username: "nik",
	password: "supersecret"
},
{
	username: "sallly",
	password: "123"
},
{
	username: "bob",
	password: "321"
}
];

var newsFeed = [
{
	username: "bob",
	timeline: "timeline message"
},
{
	username: "sally",
	timeline: "timeline message2"
},
{
	username: "mitch",
	timeline: "timeline message3"
}
];




function isUserValid(username, password) {
	// function signIn(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	} 
	return false;
}

function signIn(username, password) {
		if(isUserValid(username, password)) {
			console.log(newsFeed); 
		} else {
			alert("Wrong u pass.");
		}
}



var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt); 

