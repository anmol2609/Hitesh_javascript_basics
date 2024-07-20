// arrays 
const myArray = [0,1,2,3,4,5];
const myArray1 = ['anmol','priyanka'];
const myArray2 = new Array(0,1,2,3,4,5)

//array methods

console.log('++++++++++++++++++++ Array basic methods ++++++++++++++++++++++++++')
myArray.push(6); 
console.log(myArray) // [0, 1, 2, 3,4, 5, 6] => add value from end side

myArray.pop();
console.log(myArray) // [ 0, 1, 2, 3, 4, 5 ] => remove value from end side

myArray.unshift(9)
console.log(myArray) // [9, 0, 1, 2, 3, 4, 5] => add value from front side

myArray.shift()
console.log(myArray) // [ 0, 1, 2, 3, 4, 5 ] => remove value from front side

console.log(myArray.includes(9)) // false => return true or false
console.log(myArray.indexOf(1)) // 1 => return index of particular

console.log('++++++++++++++++++++ Join Operation ++++++++++++++++++++++++++')
const newArray = myArray.join()
console.log(newArray) // '0,1,2,3,4,5'
console.log(typeof newArray) // string

//slice

console.log('++++++++++++++++++++ Slice ++++++++++++++++++++++++++')
console.log("A ", myArray); // A  [ 0, 1, 2, 3, 4, 5 ]
const myN1 = myArray.slice(1, 3) 
console.log(myN1) // [ 1, 2 ]


console.log('++++++++++++++++++++ Splice ++++++++++++++++++++++++++')
console.log("B ", myArray); // B  [ 0, 1, 2, 3, 4, 5 ]
const myN2 = myArray.splice(1, 3) 
console.log(myN2) // [ 1, 2, 3 ]
console.log("C ", myArray); // C  [ 0, 4, 5 ] => splice manipulate original array but slice can't

console.log('++++++++++++++++++++ Merge or concat arrays ++++++++++++++++++++++++++')
const numlist1 =[1,2,3,4]
const numlist2 =[5,6,7,8]
numlist1.push(numlist2) // manipulate exixting array
console.log(numlist1) // [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]

numlist1.pop() 
console.log(numlist1) // [1,2,3,4]

const concatedNumList12 = numlist1.concat(numlist2) // return new array but only concat one array
console.log(concatedNumList12) // [ 1, 2, 3, 4, 5, 6, 7, 8 ] 

const mergedUsingSpreadList = [...numlist1, ...numlist2] // we can add multiple array
console.log(concatedNumList12) // [ 1, 2, 3, 4, 5, 6, 7, 8 ] 

const indepthArrayList = [1,[2,[3,4,[5,6,7,[8,9]]]]];
const convertedInSingleLineArray = indepthArrayList.flat(Infinity);
console.log(convertedInSingleLineArray) // [ 1, 2, 3, 4, 5, 6, 7, 8 , 9] => flat function use to convert multi level array to single line array

console.log(Array.isArray('anmol')) // false
console.log(Array.from('anmol')) // [ 'a', 'n', 'm', 'o', 'l' ]
console.log(Array.from({name:'anmol'})) // [] return empty array because it can not understand to use key or value of an object So it returns empty array
console.log(Array.of(200,300,400)) // [ 200, 300, 400 ]