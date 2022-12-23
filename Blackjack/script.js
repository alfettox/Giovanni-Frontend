window.onload = checkAge();
function checkAge() {

    alert("Welcome to the blackJack Game!");


    InputEvent = prompt("Please enter your age");
    let age = Number.parseInt(InputEvent);

    if (age < 18) {
        // console.log("You are not allowed to play");
        document.getElementById("title").innerHTML = "You are not allowed to play";
    }
}



let firstCard = 1;
let secondCard = 11;

let sum = firstCard + secondCard;
console.log(sum);

if (sum < 21) {
    console.log("Do you want a new card? :|")
} else if (sum === 21) {
    console.log("You got Blackjack! you win :')")
} else {
    console.log("You have more than '21 points', you are out! :(")
}