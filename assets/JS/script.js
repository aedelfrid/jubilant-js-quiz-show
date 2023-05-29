
var elements= {};
elements.menu = document.querySelector('#menu')
elements.header = document.querySelector('header')
elements.buttons = document.querySelector('#buttons')
elements.mainText = document.querySelector('#main-text')

var correct = ['gsdb' , 'dnzDG', 'dij[hjuohsd]', 'qjgddd']

var correctCount = 0;

var questionCount = 0;

var timeLeft = 30;
start();

function start() {
    if (typeof elements.playAgain !== 'undefined') {
        elements.playAgain.remove()
        elements.playAgain.removeEventListener('click', start)
    }

    if (typeof elements.scoreH1 !== 'undefined') {
        elements.scoreH1.remove()
    }

    elements.startTextH1 = document.createElement('h1')
    elements.mainText.appendChild(elements.startTextH1)
    elements.startTextH1.textContent = 'Welcome to the Jubliant JavaScript Quiz Show!'

    elements.startTextP = document.createElement('p')
    elements.mainText.appendChild(elements.startTextP)
    elements.startTextP.textContent = 'To start, you will have 1 minute to answer all x questions. If you manage to answer all the questions without running out of time, you may put your initials on our leaderboard!'

    elements.beginText = document.createElement('h2')
    elements.menu.appendChild(elements.beginText)
    elements.beginText.textContent = 'Please click the button below to begin'

    elements.beginButton = document.createElement('button');
    elements.beginButton.setAttribute('id', 'begin')
    elements.buttons.appendChild(elements.beginButton)
    elements.beginButton.textContent = 'Begin'

    elements.beginButton.addEventListener('click',begin);
}

var questionSelect = [
    {
        question: '1. blah blah blah',
        answer1: 'gsdb',
        answer2: 'dnfFD',
        answer3: 'fnDFN',
        answer4: 'fbShFf',
    },
    { 
        question:'2. hguyguyg',
        answer1:'gdmzgm',
        answer2:'dnzDG',
        answer3:'gngdn',
        answer4:'gndndfn'
    },
    {
        question:'3.iugbiguig',
        answer1:'FnDFnf',
        answer2:'SFhSFh',
        answer3:'dij[hjuohsd]',
        answer4:'zgnfnfn'
    },
    {
        question:'4. khigigpiyg' ,
        answer1:'qjgddd',
        answer2:'kldjsjf',
        answer3:'afsadhgrsh',
        answer4:'dfsdsad',
    }
]


function begin() {
    var countDownTime = 5
    elements.countDown = document.createElement('h1');
    elements.menu.appendChild(elements.countDown);
    elements.countDown.setAttribute('id', 'countdown')
    elements.countDown.textContent = (countDownTime);

    elements.startTextH1.remove()
    elements.startTextP.remove()
    elements.beginText.remove()
    elements.beginButton.remove()
    elements.beginButton.removeEventListener('click',begin)

    var timeInterval = setInterval(function() {
        countDownTime--;
        elements.countDown.textContent = (countDownTime);
        if (countDownTime == 0) {
            elements.countDown.textContent = 'Start!';
        } else if (countDownTime == -1) {
            clearInterval(timeInterval)
            elements.countDown.remove()
            gameStart()
        }
    }, 1000);
    
}

function gameStart() {
    elements.timer = document.createElement('h2');
    elements.header.appendChild(elements.timer);
    elements.timer.setAttribute('id', 'timer')
    elements.timer.textContent = ('Time Left: ' + timeLeft);

    var timeInterval = setInterval(function() {
        timeLeft--;
        elements.timer.textContent = ('Time Left: ' + timeLeft);

        if (timeLeft == 0 && !questionCount == 3) {
            clearInterval(timeInterval)
            elements.timer.textContent = 'Out of Time!';
        } else if (timeLeft == 0 || questionCount == 3) {
            clearInterval(timeInterval)
            elements.timer.textContent = 'Game over!';
            gameOver()
        }
    }, 1000);
    
    questionPresent();
}

function questionPresent() {

    if (questionCount <= 3 && typeof elements.answer1 == 'undefined') {
        elements.questionText = document.createElement('h1');
        elements.mainText.appendChild(elements.questionText);
        elements.questionText.setAttribute('id', 'questionText');
        elements.questionText.textContent = questionSelect[questionCount].question;

        elements.answer1 = document.createElement('button')
        elements.buttons.appendChild(elements.answer1)
        elements.answer1.setAttribute('id', 'answer1');
        elements.answer1.setAttribute('id', 'buttonsStyle');
        elements.answer1.textContent = questionSelect[questionCount].answer1;
        elements.answer1.addEventListener('click', validate);

        elements.answer2 = document.createElement('button')
        elements.buttons.appendChild(elements.answer2)
        elements.answer2.setAttribute('id', 'answer2');
        elements.answer2.setAttribute('id', 'buttonsStyle');
        elements.answer2.textContent = questionSelect[questionCount].answer2;
        elements.answer2.addEventListener('click', validate);

        elements.answer3 = document.createElement('button')
        elements.buttons.appendChild(elements.answer3)
        elements.answer3.setAttribute('id', 'answer3');
        elements.answer3.setAttribute('id', 'buttonsStyle');
        elements.answer3.textContent = questionSelect[questionCount].answer3;
        elements.answer3.addEventListener('click', validate);

        elements.answer4 = document.createElement('button')
        elements.buttons.appendChild(elements.answer4)
        elements.answer4.setAttribute('id', 'answer4');
        elements.answer4.setAttribute('id', 'buttonsStyle');
        elements.answer4.textContent = questionSelect[questionCount].answer4;
        elements.answer4.addEventListener('click', validate);
    } else if (questionCount <= 3 && typeof elements.answer1 !== 'undefined') {
        elements.questionText.textContent = questionSelect[questionCount].question;
        elements.answer1.textContent = questionSelect[questionCount].answer1;
        elements.answer2.textContent = questionSelect[questionCount].answer2;
        elements.answer3.textContent = questionSelect[questionCount].answer3;
        elements.answer4.textContent = questionSelect[questionCount].answer4;
    }
}


//validate does not validate
function validate() {
    if (Event.textContent == correct[questionCount]) {
        correctCount++
        questionCount++
        questionPresent()
    } else {
        questionCount++
        timeLeft--
        alert('Sorry, that answer was incorrect')
        questionPresent()
    }
};

function gameOver() {
    elements.questionText.remove();
    elements.answer1.remove();
    elements.answer2.remove();
    elements.answer3.remove();
    elements.answer4.remove();
    //var score = timeLeft * correctCount * 10;
    elements.scoreH1 = document.createElement('h1');
    elements.mainText.appendChild(elements.scoreH1);
    elements.scoreH1.textContent = `Time left: ${timeLeft} Correct Answers: ${correctCount}/4`;
    restart();
} 

function restart() {
    elements.playAgain = document.createElement('button');
    elements.buttons.appendChild(elements.playAgain);
    elements.playAgain.setAttribute('id', 'playAgain');
    elements.playAgain.textContent = 'Play again?';
    
    correctCount = 0;

    questionCount = 0;

    timeLeft = 30;
    
    elements.playAgain.addEventListener('click', start);
}