// // // // // // // // // // // // // // console.log("Arrays")

// // // // // // // // // // // // // // var arr = [1,2,3,4,5,6]

// // // // // // // // // // // // // // for(let i=0;i<arr.length;i++){
// // // // // // // // // // // // // //     // console.log(arr[i])    // for loop
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // for(let value of arr){
// // // // // // // // // // // // // //     console.log(value)  // for of loop
// // // // // // // // // // // // // //                         // return something
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // // arr.forEach((val,index)=>{
// // // // // // // // // // // // // //     console.log("forEach", val ,index)   // forEach loop
// // // // // // // // // // // // // //                                         // returns undefined

// // // // // // // // // // // // // // })

// // // // // // // // // // // // // // const result = arr.map(function(value,index,array){
// // // // // // // // // // // // // //     console.log(value,index,array,"llll")
// // // // // // // // // // // // // //     return value*1000
// // // // // // // // // // // // // // })

// // // // // // // // // // // // // // console.log(result)

// // // // // // // // // // // // // const nums = [1,2,3,4,5,6]

// // // // // // // // // // // // // const result = nums.filter(function(val,index,array){
// // // // // // // // // // // // //     return true
// // // // // // // // // // // // // })
// // // // // // // // // // // // // console.log(result)


// // // // // // // // // // // // const nums = [1,2,3,4,5]

// // // // // // // // // // // // const result=nums.reduce(function(acc,curr,array){
// // // // // // // // // // // //     console.log(acc,curr)
// // // // // // // // // // // //     return acc.concat(curr)
// // // // // // // // // // // // },[])
// // // // // // // // // // // // console.log(result,"rr")


// // // // // // // // // // // //Objects


// // // // // // // // // // // var obj ={

// // // // // // // // // // //     // key and values

// // // // // // // // // // //     name : "donald",
// // // // // // // // // // //     city:"chandigarh",
// // // // // // // // // // //     age:10,
// // // // // // // // // // //     bool:true,
// // // // // // // // // // //     arr:[1,2,3],
// // // // // // // // // // //     home_address: "home",
// // // // // // // // // // //     age:20,
// // // // // // // // // // // }
// // // // // // // // // // // //   console.log(obj.name)

// // // // // // // // // // // //   var key = "bool"
// // // // // // // // // // // //   function newKey(){
// // // // // // // // // // // //     return "age"
// // // // // // // // // // // //   }

// // // // // // // // // // // //   console.log(obj[key])

// // // // // // // // // // // //   console.log(obj[newKey()])

// // // // // // // // // // // //   //loops in objects

// // // // // // // // // // // // //for in loop

// // // // // // // // // // // // for(let key in obj){
// // // // // // // // // // // //     console.log(key,obj[key],"KEYSSS")
// // // // // // // // // // // // }

// // // // // // // // // // // // obj.newkeyy="newKeyyy"
// // // // // // // // // // // // console.log(obj)

// // // // // // // // // // // console.log(Object.keys(obj))
// // // // // // // // // // // for(let allKeys of Object.keys(obj)){
// // // // // // // // // // //     console.log(allKeys)
// // // // // // // // // // // }
// // // // // // // // // // // console.log(Object.values(obj))

// // // // // // // // // // // console.log("name" in obj)



// // // // // // // // // // //Functions


// // // // // // // // // // function add(a,b){
// // // // // // // // // //     return a+b    // function declaration
// // // // // // // // // // }

// // // // // // // // // // // console.log(add(4,10))


// // // // // // // // // // const subtract = function(a,b){
// // // // // // // // // //     return a-b;  // function expression
// // // // // // // // // // }
// // // // // // // // // // // console.log(subtract(5,2))

// // // // // // // // // // const multiply = (a,b)=> a*b 

// // // // // // // // // // // Arrow Function
// // // // // // // // // // console.log(multiply(4,5))

// // // // // // // // // // console.log(typeof add)


// // // // // // // // // // //Execution Context
// // // // // // // // // // debugger
// // // // // // // // // // console.log(b)
// // // // // // // // // var b=200;
// // // // // // // // // const a ="abc"
// // // // // // // // // fun()
// // // // // // // // // var fun = ()=>{
// // // // // // // // //     var a =100;
// // // // // // // // //     let c=1000;
// // // // // // // // //     console.log("fun called")
// // // // // // // // // }


// // // // // // // // //Higher Order Functions


// // // // // // // // function callback (){
// // // // // // // // console.log("I am Callback")
// // // // // // // // }

// // // // // // // //  function higherOrder(cb=callback()){
// // // // // // // //   return cb
// // // // // // // // }

// // // // // // // // const result = higherOrder()

// // // // // // // // result();

// // // // // // // // // console.log(result)


// // // // // // // //Closures
// // // // // // // debugger
// // // // // // // let c =2000;

// // // // // // // function higher(){
// // // // // // //   let b =1000;
// // // // // // // return function(){
// // // // // // //     let a =3000;
// // // // // // //     console.log(a+b+c)
// // // // // // // }
// // // // // // // }

// // // // // // // const result = higher()
// // // // // // // result();

// // // // // // //Asynchronous JS


// // // // // // console.log("start")
// // // // // // let count =0;
// // // // // // let id = setInterval(()=>{
// // // // // //     console.log("delay");
// // // // // //     if(count===5) clearInterval(id);
// // // // // //     count++;
// // // // // // },1000)

// // // // // // console.log("end")

// // // // // //Promises

// // // // // // Pending fulfilled rejected

// // // // // //Promise Contructor

// // // // // const promise = new Promise((resolve,reject)=>{
// // // // //     setTimeout(()=>{
// // // // //         resolve("I am Resolved")
// // // // //     })
// // // // // })

// // // // // // console.log(promise)

// // // // // setTimeout(()=>{
// // // // //     console.log("time out")
// // // // // },0)

// // // // // promise.then((value)=>{
// // // // //     console.log(value)
// // // // // }).catch(err=>{
// // // // //     console.log(err);
// // // // // })


// // // // // Fetching an api

// // // // fetch("https://dummyjson.com/q")
// // // // .then(res=>{
// // // //     return res.json()
// // // // }).then(res=>{
// // // //     console.log(res)
// // // // })

// // // //Asynchronous functions
// // //  async function asyncFunction(){
// // //      const data = await fetch("https://dummyjson.com/quotes")
// // //      const result = await data.json()
// // //      console.log(result)
// // //  }

// // //  asyncFunction()

// // //  == vs ===

// // console.log("abc" == 1)

// //   Destructing
// const [a,...res]=[1,2,3,4,5,6]
// // Spread operator
// const arr = [10,20,30,40]
// const newArr = [...arr,100,200]

// console.log(newArr)


const person={
    name:"jack",
    age:20
}
const newPerson = {...person,age:30}
// console.log(newPerson)

const {name:a,age:b,city="delhi"}= newPerson
console.log(a,b,city)















