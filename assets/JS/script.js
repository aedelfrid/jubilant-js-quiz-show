var beginButton = document.querySelector("#begin");
var menu = document.querySelector("#menu")
var header = document.querySelector("header")


var timeLeft = 60;

beginButton.addEventListener("click",begin);


function begin() {
    var timer = document.createElement("h2");
    header.appendChild(timer);
    timer.setAttribute
    timer.textContent = ("Time Left: " + timeLeft);

    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = ("Time Left: " + timeLeft);

        if (timeLeft == 0) {
            clearInterval(timeInterval)
            timer.textContent = "";
            gameOver()
        }
    }, 1000);
}

function gameOver() {
    timeLeft = 60;
}