function fixAge(arr){
    let left = 0;
    let right = arr.length-1
    let newArr =[]
    while(left < right){
        //console.log(arr[left])
        if(arr[left] > 18 && arr[left]<60){
            //console.log(arr[left])
            newArr.push(arr[left])
        }
        else if(arr[right] > 18 && arr[right]<60){
            newArr.push(arr[right])
        }
            left++;
            right--;
    }   
    //console.log(newArr)
    return newArr
}
console.log(fixAge([19,1,2,3,18,20,30,60,61]))
//[ 19, 30, 20 ]

//find greater part in number string with decimal
function greaterPart(str){
    let numArr = str.split(".").map(item =>parseInt(item))
    return Math.max(...numArr)
}
console.log(greaterPart("123.321"))
//321