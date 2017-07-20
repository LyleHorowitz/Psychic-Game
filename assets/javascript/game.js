// scoreboard variables
var letters = ["a", "b", "c", "e", "l", "p", "v", "x"];
var score = 0
var counter = 10
var loss = 0

// Point system variables
var wins = document.getElementById("wins");
var losses = document.getElementById("loss");
var guessesleft = document.getElementById("left");
var sofar = document.getElementById("sofar");

// Pulling from list of chosen letters
function getRandomLetter (){
var letters = ["a", "e", "l", "p", "v", "x"];
return letters [Math.floor (math.random()*letters.length)];
}

document.onkeyup = function(event) {
    var userguess = event.key
        sofar.innerHTML= userguess
        guessesleft.innerHTML = counter
        losses.innerHTML = loss
        wins.innerHTML = wins
        counter = counter-1
        if (counter === -1) {
        loss = loss + 1
        counter = 10
        counter = counter+1
        wins = wins + 1
        counter = 10
        }
        // if i've won (or lost) start the restart function
        function reset(event) {
        var userguess
        var cpuGuess
        var guessleft
        var wins

        var body=document.getElementsByTagName("body")[0]
        console.log(body)
        body.innerHTML = (html)
        }


}
