const user = {
    name:'anmol',
    welcomeMsg: function(){
        console.log(`${this.name} welcome to website`) // this refers to current context
        console.log(this); // { name: 'anmol', welcomeMsg: [Function: welcomeMsg] }
    }
}
user.welcomeMsg() // anmol welcome to website
user.name = "anuj"
user.welcomeMsg() // anuj welcome to website
console.log(this) // {} in node js envirnoment this in global space refers to empty object but in browser this returns window object 

function chai(){
    console.log(this) // => this returns multiple value inside object in normal function
}
chai();

const chaiWithArrowFun = () => {
    console.log(this) // {} => this return emplty object inside arrow function
}
chaiWithArrowFun()

const addThree = (num1, num2) =>{
    return num1+num2
}  // this way is call explicit return
const addFour = (num1, num2) =>  (num1+num2) // this way is call implicit return
addFour(3,4)