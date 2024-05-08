fizzbuzz();

function fizzbuzz(){
    let word = "";

    for(let i = 1; i < 100; i++){
        word = "";
        if(i % 11 == 0){
            console.log("Fezz");
            continue;
        }if(i % 3 == 0){
            word = "Fizz";
        }if(i % 5 == 0){
            word = word + "Buzz";
        }if(i % 7 == 0){
            word = word + "Bang";
        }if(i % 13 == 0){
            if(!word.includes("B")){
                word = word + "Bong"
            }else{
                let pos = word.indexOf("B");
                word = word.slice(0, pos) + "Bong" + word.slice(pos);
            }
        }if(word.length < 1){
            console.log(i);
            continue;
        }

        console.log(word);
    }
}