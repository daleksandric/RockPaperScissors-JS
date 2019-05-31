var pPlayer = document.getElementById("player-result");
var pComputer = document.getElementById("computer-result");
var pWinner = document.getElementById("winner-result");

const GESTURE1 = 0;
const GESTURE2 = 1;
const GESTURE3 = 2;

var gestures = ["rock", "paper", "scissors"];
var winningConditions = [ 
	{hand1 : gestures[GESTURE2], hand2: gestures[GESTURE1], winner: "User"},
	{hand1 : gestures[GESTURE2], hand2: gestures[GESTURE3], winner: "Computer"},
	{hand1 : gestures[GESTURE2], hand2: gestures[GESTURE2], winner: "It's a tie!"},
	{hand1 : gestures[GESTURE1], hand2: gestures[GESTURE3], winner: "User"},
	{hand1 : gestures[GESTURE1], hand2: gestures[GESTURE2], winner: "Computer"},
	{hand1 : gestures[GESTURE1], hand2: gestures[GESTURE1], winner: "It's a tie!"},
	{hand1 : gestures[GESTURE3], hand2: gestures[GESTURE2], winner: "User"},
	{hand1 : gestures[GESTURE3], hand2: gestures[GESTURE1], winner: "Computer"},
	{hand1 : gestures[GESTURE3], hand2: gestures[GESTURE3], winner: "It's a tie!"}
]

function showUserResult(selection) {
	pPlayer.innerText = "User clicked on " + selection;
}

function showComputerResult(selection) {
	pComputer.innerText = "Computer generated " + selection;
}

function showWinner(winner) {
	pWinner.innerText = "...and the winner is ... " + winner;
}

function processClick(userSelection) {
	let compSelection = compChoice(); 
	let winner = getWinner2(userSelection, compSelection)
	return {
		userSelection: userSelection, 
		compSelection: compSelection, 
		winner: winner
	};
}

function updateScreen(gameResult) {
	showUserResult(gameResult.userSelection);
	showComputerResult(gameResult.compSelection);
	showWinner(gameResult.winner);
}

function getWinner2(userSelection, compSelection) {
	let result = "Something went wrong! Please contact technical support.";
	for (let i = 0; i < winningConditions.length; i++) {
		let item = winningConditions[i];
		if(item.hand1 === userSelection && item.hand2 === compSelection) {
			result = item.winner;
			break;
		}
	}
	return result;
}

function compChoice() {
	let compResult = gestures[Math.floor(gestures.length * Math.random())];
	return compResult;
}

document.getElementById("rock-button").addEventListener("click", function() {
	updateScreen(
		processClick(gestures[GESTURE1])
	);
});
document.getElementById("paper-button").addEventListener("click", function() {
	updateScreen(
		processClick(gestures[GESTURE2])
	);
});
document.getElementById("scissors-button").addEventListener("click", function() {
		updateScreen(
			processClick(gestures[GESTURE3])
		);
});


function getWinner(userSelection, compSelection) {
	if (userSelection === compSelection) {
		result = "It's a tie!";
	} else if ( userSelection === "paper" && compSelection === "rock" ) {
		result = "the User!";
	} else if ( userSelection === "paper" && compSelection === "scissors") {
		result = "the Computer!";
	} else if ( userSelection === "rock" && compSelection === "scissors") {
		result = "the User!";
	} else if ( userSelection === "rock" && compSelection === "paper"){
		result = "the Computer!";
	} else if ( userSelection === "scissors" && compSelection === "paper"){
		result = "the User!";
	} else if ( userSelection === "scissors" && compSelection === "rock"){
		result = "the Computer!";
	} else {
		result = "Something went wrong! Please contact technical support.";
	}
	return result;
}

/**
let funcName = function() {
	doSomething();
}
let funcName2 = function(someParam) {
	doSomethingElse(someParam);
}
let funcName3 = function(someParam) {
	return function() {
		doSomethingElse(someParam)
	}
}


document.getElementById("scissors-button").addEventListener("click", funcName);
document.getElementById("scissors-button").addEventListener("click", function() {
	funcName2("blahBlah");
});
document.getElementById("scissors-button").addEventListener("click", funcName3("blahBlah"));
*/