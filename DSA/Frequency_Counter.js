// write a function to called same which accepts two arrays.
// Every value in the array has its corrosponding value square in the second array

//[1,2,3] [4,9,1] output => true
//[1,2] [1,4,9] output => false
//[1] [1] output => true

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        // here we are checking length of arrays are same or not
        return false;
    }
    for( let i = 0 ; i < arr1.length ; i++ ){

        correctIndex = arr2.indexOf(arr1[i] ** 2);
        // here finding out square of arr1 element is present in arr2 or not
        if(correctIndex === -1){
            return false
        }
        // if we get any number splice that index from arr2
        arr2.splice(correctIndex,1);
    }
    return true;
}
console.log(same([1,2,3],[9,1,4])) // true
console.log(same([1,3],[9,1,4])) // false
console.log(same([1,3,5],[9,1,4])) // false


function same1(arr1,arr2){
    if(arr1.length !== arr2.length){
        // here we are checking length of arrays are same or not
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (const iterator of arr1) {
        frequencyCounter1[iterator] = ++frequencyCounter1[iterator] || 1
    }
    for (const iterator of arr2) {
        frequencyCounter2[iterator] = ++frequencyCounter2[iterator] || 1
    }
    for (const key in frequencyCounter1) {
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
   return true;
}
console.log(same1([1,2,3],[9,1,4])) // true
console.log(same1([1,3],[9,1,4])) // false
console.log(same1([1,3,5,2],[9,1,4,25])) // true