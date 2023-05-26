var menu = document.querySelector('#menu')
var header = document.querySelector('header')
var buttons = document.querySelector('#buttons')
var mainText = document.querySelector('#main-text')


var startTextH1 = document.createElement('h1')
mainText.appendChild(startTextH1)
startTextH1.textContent = 'Welcome to the Jubliant JavaScript Quiz Show!'

var startTextP = document.createElement('p')
mainText.appendChild(startTextP)
startTextP.textContent = 'To start, you will have 1 minute to answer all x questions. If you manage to answer all the questions without running out of time, you may put your initials on our leaderboard!'

var beginText = document.createElement('h2')
menu.appendChild(beginText)
beginText.textContent = 'Please click the button below to begin'

var beginButton = document.createElement('button');
beginButton.setAttribute('id', 'begin')
buttons.appendChild(beginButton)
beginButton.textContent = 'Begin'

const questions = {
    
}

var timeLeft = 30;

beginButton.addEventListener('click',begin);


function begin() {
    var countDownTime = 5
    var countDown = document.createElement('h1');
    menu.appendChild(countDown);
    countDown.setAttribute('id', 'countdown')
    countDown.textContent = (countDownTime);

    startTextH1.remove()
    startTextP.remove()
    beginText.remove()
    beginButton.remove()

    var timeInterval = setInterval(function() {
        countDownTime--;
        countDown.textContent = (countDownTime);
        if (countDownTime == 0) {
            countDown.textContent = 'Start!';
        } else if (countDownTime == -1) {
            clearInterval(timeInterval)
            countDown.remove()
            gameStart()
        }
    }, 1000);
    
}

function gameStart() {
    var timer = document.createElement('h2');
    header.appendChild(timer);
    timer.setAttribute('id', 'timer')
    timer.textContent = ('Time Left: ' + timeLeft);

    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = ('Time Left: ' + timeLeft);

        if (timeLeft == 0) {
            clearInterval(timeInterval)
            timer.textContent = 'Out of Time!';
            gameOver()
        }
    }, 1000);
    
    var questionText = document.createElement('h1')
    mainText.appendChild(questionText)
    questionText.textContent = 'Welcome to the Jubliant JavaScript Quiz Show!'
}

function gameOver() {
    timeLeft = 30;

    var startTextH1 = document.createElement('h1')
    mainText.appendChild(startTextH1)
    startTextH1.textContent = 'Welcome to the Jubliant JavaScript Quiz Show!'

    var startTextP = document.createElement('p')
    mainText.appendChild(startTextP)
    startTextP.textContent = 'To start, you will have 1 minute to answer all x questions. If you manage to answer all the questions without running out of time, you may put your initials on our leaderboard!'

    var beginText = document.createElement('h2')
    menu.appendChild(beginText)
    beginText.textContent = 'Please click the button below to begin'

    var beginButton = document.createElement('button');
    beginButton.setAttribute('id', 'begin')
    buttons.appendChild(beginButton)
    beginButton.textContent = 'Begin'
}