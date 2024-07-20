let myDate = new Date();
let inputDate = new Date('01-14-2023');
console.log(myDate.toString()); // Sat Jul 20 2024 17:35:15 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Jul 20 2024
console.log(myDate.toLocaleString()); // 7/20/2024, 5:35:15 PM
console.log(myDate.toISOString()); // 2024-07-20T12:05:15.506Z
console.log(typeof myDate); // object

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1721477382308
console.log(inputDate.getTime()); // 1673634600000
myDate.toLocaleString('default',{
    weekday: 'long'
})


