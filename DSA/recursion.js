function countDown(num){
    if(num <= 0) {
        console.log("All out")
        return
    }
    console.log(num);
    num--;
    countDown(num); // this is recursion
}
console.log(countDown(4))
//rangeSum
function rangeSum(num){
    if(num == 1) return 1
    return num+rangeSum(num-1)
}
console.log(rangeSum(4))

// factorial 
function factorial(num){
    if(num == 1) return 1
    return num*factorial(num-1)
}
console.log(factorial(4))

//collecting odds
function collectingOdds(arr){
    let oddsArray = []
    function helper(helperInput){
        if(helperInput.length == 0) return
        if(helperInput[0] % 2 !== 0 ){
            oddsArray.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr);
    return oddsArray;
}
 console.log(collectingOdds([1,23,3,45,2]))
 // power program
 function power(num,pow){
    if(pow == 0) return 1
    let result =num*power(num,pow-1)
    return result
   
}
//console.log(power(2,4))
//16
function factorial(num){
    if(num === 0 )return 1
    let result = num *factorial(num-1)
    return result
   
}
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
function productOfArray(arr){
    if(arr.length === 0 )return 1
  let result = arr[0] * productOfArray(arr.slice(1))
  return result
   
}
console.log(productOfArray([1,2,3,10,100]))
//6000
function recursiveRange(num){
    if(num === 0) return 0
    let result = num+ recursiveRange(num-1)
    return result
 }
 console.log(recursiveRange(6))
 //21

 function reverse(str){
	if(str.length <= 1) return str;
	//console.log(str[0],str.slice(1))
	return reverse(str.slice(1)) + str[0];
}
console.log(reverse("anmol"))

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}


//capitalizeWords Solution

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
//nestedEvenSum Solution

function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
//capitalizeFirst Solution

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
//stringifyNumbers Solution

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
//collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}
//collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}