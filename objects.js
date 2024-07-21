//singleton  => when we create object using constructor we can make singleton
const tinderUser = new Object(); //this is singleton object

const mySym = Symbol('key1') //=> use symbol to use it inside object to make key
//object litrals
const JsUser = { 
    name: 'anmol',
    "full name": 'anmol dwivedi',
    [mySym]: 'mySymkey1',
    age: '27',
    location: 'jaipur',
    email: 'anmol@gmail.com',
    inLoggedIn: false,
    lastLoginDays: ['Monday','Tuesday']
} //this is non singleton object
console.log(JsUser[mySym]) // mySymkey1
console.log(JsUser.email) // anmol@gmail.com
console.log(JsUser['email']) // anmol@gmail.com
console.log(JsUser["full name"]) // anmol dwivedi

JsUser.email = "anmol@anmol.com";
//Object.freeze(JsUser) // freeze is use to freeze the object after that we can not update property
JsUser.email = "anmol@micro.com";
console.log(JsUser)
//  {
//     name: 'anmol',
//     'full name': 'anmol dwivedi',
//     age: '27',
//     location: 'jaipur',
//     email: 'anmol@anmol.com',
//     inLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Tuesday' ],
//     [Symbol(key1)]: 'mySymkey1'
//   }

JsUser.greeting = function (){
    console.log('hello Js user')
} 
console.log(JsUser.greeting())

JsUser.greeting2 = function (){
    console.log(`hello ${this.name}`)
} 
console.log(JsUser.greeting2())
const obj1 = {1: 'anmol',2: 'b'}
const obj2 = {3: 'anmol',4: 'b'}
const obj3 = Object.assign(obj1,obj2) 
console.log(obj3) // { '1': 'anmol', '2': 'b', '3': 'anmol', '4': 'b' }
const obj4 = Object.assign({},obj1,obj2) // => {} => indicate to target store inside it after merged
console.log(obj4) // { '1': 'anmol', '2': 'b', '3': 'anmol', '4': 'b' }
const obj5= {...obj1,...obj2}
console.log(obj5) // { '1': 'anmol', '2': 'b', '3': 'anmol', '4': 'b' }

console.log(Object.keys(obj1)) // [ '1', '2', '3', '4' ]
console.log(Object.values(obj1)) // [ 'anmol', 'b', 'anmol', 'b' ]
console.log(Object.entries(obj1)) // [ [ '1', 'anmol' ], [ '2', 'b' ], [ '3', 'anmol' ], [ '4', 'b' ] ]
console.log(JsUser.hasOwnProperty('name')) // true

const course  = {
    courseName: 'Js course',
    price: '1000',
    courseInstructor: 'Anmol'
}
const {courseInstructor} = course
console.log(courseInstructor) // Anmol

const {courseInstructor : instructor} = course // => by using this way we assign new varriable name to object property so instructor is new name of courseInstructor property
console.log(instructor) // Anmol