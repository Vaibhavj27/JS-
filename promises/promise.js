const promiseOne= new Promise(function(resolve,reject){
   // do an async task
   // DB calls, cryptography,network
   setTimeout(() => {
    console.log('Async task is completed ')
    resolve()
   }, 1000); 
})
promiseOne.then(function () {
    console.log("Promise is consumed")
    
})

new Promise(function(resolve,reject){
     setTimeout(() => {
        console.log("Async task 2")
        resolve()
     }, 1000);
}).then(function () {
 
    console.log("Async 2 resolve")
})

const promise3= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name:"Vaibhav",email:"vaibhav@gmail.com"})
    }, 1000);
})

promise3.then(function(){
         console.log(user);
})


const promise4= new Promise(function(resolve, reject)  {

    setTimeout(() => {
        let error=true;
        if (!error) {
            resolve({name:"vaibhav",rollno:54})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promise4.then((user)=>{
    console.log(user);
    return user.name;
}).then((name)=>
{
    console.log(name);
}).catch(function(error)
{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promise5= new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if (!error) {
            resolve({name:"jagtap",rollno:54})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000);
})

async function consumePromise5() {
   try{
    const response= await promise5
    console.log(response);
   } catch(error)
   {
    console.log(error);
   }
}
consumePromise5()
async function getAllusers(){
try{
    
        const response = await fetch('https:jsonlaceholder.typicode.com/users')
        const data =await response.json()
        console.log(data);
}catch(error){
    console.log("E:",error)
}
}
getAllusers()

fetch('https:jsonlaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})