const readline = require("readline")
const questions = require('./questions.json');
const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var score = 0;

const game = async () => {
    score = 0;
    let ans = "";
    console.log("Trivia game!");
    for(let i = 0; i < 5; i++){
        await trivia(i + 1);
    }
    console.log("Your score is: " + score + " out of 5");
    ans = await getInput("Would you like to play again? (y/n)");
    if(ans.toUpperCase() == "Y"){
        game();
    }else{
        console.log("bye!");
    }
}

async function trivia(turn){
    let num = 0;
    let question = questions[num];
    let answer = question.options.indexOf(question.answer) + 1;
    let ans = "";

    console.log("question " + turn + ": ");
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
        // rl.close();
        resolve(ans);
    }))
}

game();