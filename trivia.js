const readline = require("readline")
const questions = require('./questions.json');

const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// for loop to run it 5 time times
console.log("Trivia game!");
let score = 0;
trivia();

// Todo: only make this appear when the game is over
console.log("Your score is: " + score);

async function trivia(){
    let num = 0;
    let question = questions[num];
    let answer = question.options.indexOf(question.answer) + 1;
    let ans = "";

    console.log(question.question);

    for(let i = 0; i < question.options.length; i++){
        console.log(i+1 + ") " + question.options[i]);
    }

    ans = await getInput("Your answer: ");

    if(ans == answer){
        console.log("Correct!");
        score ++;
    }else{
        console.log("Incorrect, the answer is " + answer + ") " + question.answer);
    }
}

function getInput(question){
    return new Promise(resolve => rl.question(question, ans => {
        rl.close();
        resolve(ans);
    }))
}