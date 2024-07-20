let a = "3"
var b = "5"
var c = Number(b)
//+++++++++++++++++++++++++++++++++ Comparision +++++++++++++++++++++++++++++

//null 
console.log(null<=0) // predicitible value sometime  null become NaN and sometime become 0
console.log(null==0) // false
console.log(null>0) // false

//undefined
console.log(undefined<0) // false
console.log(undefined>0) // false
console.log(undefined>=0) // false

// ===
console.log(a === c) // false

//+++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math) // object  [Math] {}
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.2)) // 4
console.log(Math.floor(4.9)) // 5
console.log(Math.min(4,5,6,7)) // 4
console.log(Math.max(4,5,6,7)) // 7
console.log(Math.random()) // random val
let min = 10 ;
let max= 20 ;
console.log( Math.floor(Math.random() * (max - min + 1)) + min )

