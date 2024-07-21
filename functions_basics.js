console.log("++++++++++++++++++++ function defination ++++++++++++++++++++++")
function sayMyName(){
    console.log('anmol')
}
console.log("++++++++++++++++++++ function calling or declration ++++++++++++++++++++++")
sayMyName() // anmol => sayMyName is called reference and () is use with reference to execute function

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
} // inside () num1 and num2 called parameters in funtion defination
addTwoNumbers(3,'4') // 34 => inside () 3 and 4 called arguments in funtion calling or declation

addTwoNumbers(3,4); // 7

const result1 = addTwoNumbers(3,4); // 7 => when we store a function in to variable we must have to return from function otherwise we will get undefined
console.log(result1) // undefined

function addTwoNumbersWithReturn(num1,num2){
    let result = num1+num2 ;
    return result
} // inside () num1 and num2 called parameters in funtion defination
const result2 = addTwoNumbersWithReturn(3,4); // when we store a function in to variable we must have to return from function otherwise we will get undefined
console.log(result2) // 7

function loginUserMessage(userName){
    return `${userName} just logged In`;
}
console.log(loginUserMessage('anmol')); // anmol just logged In
console.log(loginUserMessage()); // undefined just logged In => if we passed empty in place of argument we will get undefined as parameter for the function

function printloginUserName(userName = "akash"){
    if(!userName){
        console.log('no name');
        return
    }
    return `${userName} just logged In`;
}
console.log(printloginUserName('anmol')) // anmol just logged In

function printloginUserName(userName){
    if(!userName){
        console.log('no name');
        return
    }
    return `${userName} just logged In`;
}
console.log(printloginUserName()) // no name with undefined

function calculatePrice(num1,num2, ...val1){
    return val1
}
console.log(calculatePrice(100,200,300,400)) // [ 300, 400 ] parameter val1 take the rest value from argumemts

const user={
    name:'anmol',
    price:'200'
}
function handleObject(anuObject){
    console.log(`name ${anuObject.name} price ${anuObject.price}`)
}
handleObject(user) // name anmol price 200
handleObject({name:'anmol',price:'200'}) // name anmol price 200
