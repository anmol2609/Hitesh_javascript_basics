console.log('++++++++++ Immediately Invoke function expression ++++++++++')

function normalFun(){
    console.log('normal function')
}
normalFun() ;// normal function

(function iife(){
    console.log('iife function => we use this function to remove the global scope valriable delartion which creates polution')
})(); // => first () is for function expression and second () is for function declartion

( iife = ()=> {
    console.log('iife function => we use this function to remove the global scope valriable delartion which creates polution')
})();

( iifeWithArgumented = (name)=> {
    console.log(`my name is ${name}`)
})('anmol'); // my name is anmol => we hust have to end the funtion execution with ; otherwise it will throw an error