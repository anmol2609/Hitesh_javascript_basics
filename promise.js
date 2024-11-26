const p1 = new Promise((resolve,reject) =>{
    //resolve("hello")
    reject("hello")
})
const p2 = new Promise((resolve,reject) =>{
    resolve("hello")
    //reject("hello")
})
Promise.all([p1,p2]).
then((res)=>{
    console.log(res,"i am fixed")
})
.catch((err)=>{
    console.log(err,"i am error")
})