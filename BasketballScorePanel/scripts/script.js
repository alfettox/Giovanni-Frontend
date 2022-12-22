
function addTo1(num) {
    let newNumber = Number.parseInt(document.getElementById("team1score").innerHTML);
    verify(newNumber, "team1");
    if (newNumber < 10) {
        newNumber += num;
        document.getElementById("team1score").innerHTML = newNumber;
    }
}


function addTo2(num) {
    let newNumber = Number.parseInt(document.getElementById("team2score").innerHTML);
    verify(newNumber, "team2");
    if (newNumber < 10) {
        newNumber += num;
        newNumber += num;
        document.getElementById("team2score").innerHTML = newNumber;
    }
}

function reset() {
    document.getElementById("team1score").innerHTML = 0;
    document.getElementById("team2score").innerHTML = 0;
    document.getElementById("winner").innerHTML = "";
    disableButtons();
}

function verify(num, team) {
    if (num >= 10 && team == "team1") {
        document.getElementById("winner").innerHTML = "Team1 Wins!";
        disableButtons();
    } else if (num >= 10 && team == "team2") {
        document.getElementById("winner").innerHTML = "Team2 Wins!";
    }

}

function disableButtons() {
    if (document.getElementById("team1button1").disabled == true ||
        document.getElementById("team2button1").disabled == true ||
        document.getElementById("team1button2").disabled == true ||
        document.getElementById("team2button2").disabled == true ||
        document.getElementById("team1button3").disabled == true ||
        document.getElementById("team2button3").disabled == true ||
        document.getElementById("team1button1").disabled == true ||
        document.getElementById("team2button1").disabled == true) {

        document.getElementById("team1button1").disabled = false;
        document.getElementById("team2button1").disabled = false;

        document.getElementById("team1button2").disabled = false;
        document.getElementById("team2button2").disabled = false;

        document.getElementById("team1button3").disabled = false;
        document.getElementById("team2button3").disabled = false;
    } else {
        document.getElementById("team1button1").disabled = false;
        document.getElementById("team2button1").disabled = false;

        document.getElementById("team1button2").disabled = false;
        document.getElementById("team2button2").disabled = false;

        document.getElementById("team1button3").disabled = false;
        document.getElementById("team2button3").disabled = false;
    }

}
