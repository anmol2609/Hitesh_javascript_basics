//++++++ charecter count using for of loop +++++++
function  charCount(str){
    let result = {}
    for (let char of str) {
        if(/^[a-z]+$/.test(char)){
            result[char] = ++result[char] || 1;
        }    
    }
    return result;
}
console.log(charCount("hello kasie ho")) // { h: 2, e: 2, l: 2, o: 2, k: 1, a: 1, s: 1, i: 1 }

//++++++ charecter count using for loop +++++++
function charCount1(str) {
    let obj = {};
    for (let i= 0; i<str.length; i++) {
        let char = str[i]
        if(/^[a-zA-Z]+$/.test(char) ){
            obj[char] = ++obj[char] || 1
        }        
    }
    return obj;
}
console.log(charCount1("hel lo")) // { h: 1, e: 1, l: 2, o: 1 }