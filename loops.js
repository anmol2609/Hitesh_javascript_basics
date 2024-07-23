const object = [1,2,3,4]
for (const iterator of object) {
    console.log(iterator)
}
const map = new Map()
map.set('IN','india')
map.set('USA','America')

for (const [key,value] of map) {
    console.log(key," -: ", value)
} // for Of is not working for object itrartion TypeError: b is not iterable
 const myObj = {
    name:'anmol',
    class:'BCA'
 }
 for (const key in myObj) {
    console.log(`${key} -: ${myObj[key]}`  )
 }
 const arrayList = ["a",'b',"c"]
 for (const key in arrayList) {
    console.log(arrayList[key])
 }

 for (const key in map) {
    console.log(key)
 }

 arrayList.forEach((element,index, arr) => {
    console.log(element)
 });
 const items =[
    {
        name:'anmol',
        class:'BCA'
     },
     {
        name:'anmol',
        class:'BCA'
     },
     {
        name:'anmol',
        class:'BCA'
     }
 ] 
 items.forEach((element,index, arr) => {
    console.log(element, arr)
 }); // for Each does not return anything 

 const nums =[1,2,3,4,5,6]
 const newnums = nums.filter((num) => num > 4);
 console.log(newnums)// [ 5, 6 ]
 const newnums1 = nums.filter((num) => {
    return num > 4
 });
 console.log(newnums1)// [ 5, 6 ]

 const newnums3 = nums.map((num) => {
    return num * 4
 });
 console.log(newnums3)// [ 5, 6 ]
 const empltyNums = []
 newnums.forEach((item)=>{
    if(item > 4){
        empltyNums.push(item)
    }
 })
 console.log(empltyNums)// [ 5, 6 ]

 const nums1 =[1,2,3,4,5,6]
 const initialValue = 0 ;

const myTotal = nums1.reduce((acc, currentVAl) => {
    console.log(`accumulator -> ${acc}, current value -> ${currentVAl}`)
    return acc+currentVAl
},0)
console.log(myTotal)// [ 5, 6 ]


