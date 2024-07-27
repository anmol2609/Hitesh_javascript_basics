function sameFrequency(num1,num2){
    let frequecyCounter1 = {};
    let frequecyCounter2 = {};
    if(num1.toString().length !== num1.toString().length){
        // here we are checking length of arrays are same or not
        return false;
    }
    for(const key of num1.toString()){
        frequecyCounter1[key] = ++frequecyCounter1[key] || 1
    }
    for(const key of num2.toString()){
        frequecyCounter2[key] = ++frequecyCounter2[key] || 1
    }
    console.log(frequecyCounter2,frequecyCounter1)
    for (let key in frequecyCounter1) {
        if(frequecyCounter1[key] !== frequecyCounter2[key]){
            return false
        }
    }
    return true;
  
}
console.log(sameFrequency(3589578, 5879385));