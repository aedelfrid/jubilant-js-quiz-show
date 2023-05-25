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


