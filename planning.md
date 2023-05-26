- GIVEN I am taking a code quiz
- WHEN I click the start button
- THEN a timer starts and I am presented with a question
- WHEN I answer a question
- THEN I am presented with another question
- WHEN I answer a question incorrectly
- THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0
- THEN the game is over
- WHEN the game is over
- THEN I can save my initials and score


## To do;

### Build quiz site
    - start button

### Build a timeinterval/timer
    - question should present when timer reaches 0
    - clock timer to track time to answer

### Validate answer correctness
    - store how many are correct or incorrect
    - incorrect answers must subtract time from the clock
    - time remaining high score?

### When questions or clock == 0
    - game should be over
    - store & track high scores with initials

## Palette

black/brown #321313

orange #F4991A

beige #F2EAD3

off-white #F9F5F0

## Mockup

<img src='assets\mockup.png'>

## Pseudo Code

const questions = 'insert question 1 here', 'insert question 2 here', 'insert question 3 here' 'insert question 4 here'

const answers = 'insert answer 1 here', 'insert answer 2 here', 'insert answer 3 here' 'insert answer 4 here'

var selectedProblem = 
question: questions[x]; 
answer: answers[x];

var correct = question[1]

on event.listener(click.answerButton);
validate();

function validate() {
    if (answerButton.text == correct) 
}


function questionPresent {

    for (let i = 0; i<questionSelect.length+1; i++) {
       create 4 buttons
    };

    var questionSelect [{
        question: "1. blah blah blah"   
        answer1:gsdb,
        answer2:dnfFD,
        answer3:fnDFN,
        answer4:fbShFf
        },
        { 
        question:"2. hguyguyg",
        answer1:gdmzgm,
        answer2:dnzDG,
        answer3:gngdn,
        answer4:gndndfn
        },
        {
        question:"3.iugbiguig",
        answer1:FnDFnf,
        answer2:SFhSFh,
        answer3:dij[hjuohsd],
        answer4g:zgnfnfn
        },
        {
        question:"4. khigigpiyg" ,
        answer1:qjgddd,
        answer2:kldjsjf,
        answer3:afsadhgrsh,
        answer4:dfsdsad,
        }
    ];

    if (i==questionSelect.length+1) {
        gameOver()
    };
}


function gameOver() {
    var score = time * correct * 10
        correct:
        time:
    }
