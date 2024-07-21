console.log('++++++++++++++ Scope +++++++++++++++++++')
let a = 100
if(true){
    let a = 10;
    const b= 20;
    console.log('INNER LET : ',a) // INNER LET :  10
}
console.log('OUTER LET : ',a) // OUTER LET :  100

console.log('++++++++++++++ Nested Scope +++++++++++++++++++')
function one(){
    const userName = 'anmol';
    function two(){
        const website = 'youtube';
        console.log(userName)
    }
    //console.log(website) // ReferenceError: website is not defined
    two()
}
one() // anmol

if(true){
    const userName ="anmol";
    if(userName === "anmol"){
        const website = "youtube";
        console.log(userName + website) // anmolyoutube
    }
    //console.log(website) //  => ReferenceError: website is not defined
}
// console.log(userName) // => ReferenceError: userName is not defined
console.log('++++++++++++++ Interesting +++++++++++++++++++')

console.log(addOne(5)) //6
function addOne(num){
    return num+1
}

//console.log(addTwo(5)) // => Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num+1
}
console.log(addTwo(5)) //6