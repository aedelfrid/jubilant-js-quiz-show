var beginButton = document.querySelector('#begin');
var menu = document.querySelector('#menu')
var header = document.querySelector('header')
var buttons = document.querySelector('#buttons')


var timeLeft = 30;

beginButton.addEventListener('click',begin);


function begin() {
    var timer = document.createElement('h2');
    header.appendChild(timer);
    timer.setAttribute('id', 'timer')
    timer.textContent = ('Time Left: ' + timeLeft);

    beginButton.setAttribute('style','visibility:hidden')

    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = ('Time Left: ' + timeLeft);

        if (timeLeft == 0) {
            clearInterval(timeInterval)
            timer.textContent = 'Out of Time!';
            gameOver()
        }
    }, 1000);
}

function gameOver() {
    timeLeft = 30;
    beginButton.setAttribute('style','visibility:visible')

}