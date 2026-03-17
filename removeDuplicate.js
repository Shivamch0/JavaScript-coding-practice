const originalArray = [1,2,2,3,4,4,5];

const arr = originalArray.filter((num , index) => {
    return originalArray.indexOf(num) === index;
})

console.log(arr)