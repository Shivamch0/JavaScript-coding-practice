const vowels = ['a' , 'e' , 'i' , 'o' , 'u'];


const checkVowels = (string) => {

    let lower =  string.toLowerCase();
    let counter = 0

    for(let i = 0; i < string.length; i++){
    if(vowels.includes(lower[i])){
        counter++
    }
}
    return counter;

}

console.log(checkVowels("aeiou Shivam"))