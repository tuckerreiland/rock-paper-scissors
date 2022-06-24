
var RPS = ["R", "P", "S"]
var randNum = (Math.floor(math.random()*names.length))
var compChoice = RPS [randNum]

var humanChoice;

var tieCount = 0
var winCount = 0
var lossCount = 0

function startgame(){
    if (confirm ("Would you like to play a game?"))
    var humanChoice = prompt("R, P, or S?")
    humanChoice = humanChoice.toUpperCase()
    winorlose()
    scoreboard()
    startgame()
}


function winorlose() {
if  (humanChoice===compChoice) {
    alert("tie")
    tieCount = tieCount + 1
} else if (humanChoice == "R") {
    if (compChoice == "S") {
        alert("VICTORY")
        winCount = winCount + 1
    } else {
        alert ("DEFEAT")
        lossCount = lossCount + 1
    }
} else if (humanChoice == "P") {
    if (compChoice == "R") {
        alert("VICTORY")
        winCount = winCount + 1
    } else {
        alert ("DEFEAT")
        lossCount = lossCount + 1
    }
} else if (humanChoice == "S") {
    if (compChoice == "R") {
        alert("VICTORY")
        winCount = winCount + 1
    } else {
        alert ("DEFEAT")
        lossCount = lossCount + 1
    }
}
else {
    alert ("DEFEAT")
    lossCount = lossCount + 1
}
}

function scoreboard(){
alert(
    `
    Score:
    Wins: ${winCount}
    Loss: ${lossCount}
    Tie: ${tieCount}
    `
)
}