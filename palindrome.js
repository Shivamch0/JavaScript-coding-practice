const palindrome = (string) => {
    const lower = string.toLowerCase()
    const res = lower.split('').reverse().join('');

    if(lower === res){
        return `${string} is palindrome`
    }else{
        return `${string} is not palindrome`
    }
}

console.log(palindrome("Madam"))
console.log(palindrome("Hello"))