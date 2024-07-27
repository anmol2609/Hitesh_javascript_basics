function areThereDuplicates(...args) {
    let frequencyCounter1  = {}
  for (const iterator of args) {
      let value = args[iterator]
      if(value in frequencyCounter1){
          return true;
      }
      frequencyCounter1[value] = true;
    }
   
    return false
}

function areThereDuplicates(...args) {
    //     args.sort((a, b) => {
    //     if (a < b) return -1;
    //     if (a > b) return 1;
    //     return 0;
    //   });
    //     console.log(args)
    let first= 0;
    let second = 1;
    while(second < args.length){
        if(args[first] === args[second]){
            return true;
        }
        first++;
        second++;
        
    }
    return false
}
console.log(areThereDuplicates(3,1));

function areThereDuplicates(...args) {
    return new Set(args).size !== args.length;
}

function areThereDuplicates(...args) {
    let collections = {};
    for(let i in args){
       collections[args[i]] = (collections[args[i]] || 0 )+1
    }
    for(let key in collections){
       if(collections[key] > 1) return true
     }
     return false;
    
   }
   console.log(areThereDuplicates(3,1));

   function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

  console.log(areThereDuplicates(3,1));