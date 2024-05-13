fizzbuzz(100);

function fizzbuzz(int){
    let word = [];
    let bIndex = 0;
    for(let i = 1; i < int; i++){
        bIndex = 0;
        word = [];
        if(i % 11 == 0){
            console.log("Fezz");
            continue;
        }if(i % 3 == 0){
            word.push('Fizz');
        }if(i % 5 == 0){
            word.push('Buzz');
            bIndex++;
        }if(i % 7 == 0){
            word.push('Bang');
            bIndex++;
        }if(i % 13 == 0){
            if(bIndex == 0){
                word.push('Bong')
            }else{
                const newWord = [
                    ...word.slice(0, bIndex - 1),
                    'Bong',
                    ...word.slice(bIndex - 1)
                ];
                word = newWord;
            }
        }if(i % 17 == 0){
            word.reverse();
        }
        if(word.length == 0){
            console.log(i);
            continue;
        }
        console.log(word.toString().replace(',', ''));
    }
}
