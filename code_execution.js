function  one() {
    console.log('one')
    two()
}
function  two() {
    console.log('two')
    three()
}
function  three() {
    console.log('three')
}
one(); // first this funtion move to call stack then find the two() exection now also add this funciton then move to three funtion add to call stack now in the call stack has all the funtion and they will reomve in LIFO order like frist remove three() then two() then one()
two(); // after that call stack have first funtion two() then add three()
three(); // move this funtion to call stack after execution remove from call stack

