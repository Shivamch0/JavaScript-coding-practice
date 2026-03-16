const numberArray = [3, 7, 2, 9, 5]

let max = numberArray[0]

for(let i = 0; i < numberArray.length; i++){
    let number = numberArray[i]

    if(number > max){
        max = number
    }
}

console.log(max)