// date: 31/7/2024 and 1/8/2024
// for loop

for(let i = 0; i <= 10; i++){
    console.log(i);
}

// while loop
let i=0;
while(i<=10){
    console.log(i);
    i++;
}

// do while loop
let j=0;
do{
    console.log(j);
    j++;
}while(j<=10);
//**************ARRAY SPECIFIC LOOPS *************/
/***************FOR OF LOOP*****************************************************************************************/
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}
//for of can be used to iterate through an string also
const Name= "Vaibhav"


for(const i of Name)
    {
        console.log(`each char is ${i}`);
    }


// maps
const map =new Map()
map.set('IN',"INDIA")
map.set('US',"USA")
map.set('key',"value")
   //printing the map
   //[key,value] destructures the array and assigns the values to the variables
for(const [key,value] of map){
    console.log(`${key} : ${value}`);
}

//for of loop on objects doesnt work for iterating through object 
//we can use for in loop to iterate through objects
const myObject={
    js:'javascript',
    cpp:"c++",
    rb:'Ruby,',
    swift:'swift'
}
/*+********FOR IN LOOP*************************/
for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`);
}
/*we can use for in loop for iterating in array but it gives us the index not values in array*/

/*+********FOR EACH Function on array*************************/
const coding=["js","cpp","rb","swift"]
//the functiojn used in the for each is called callback function
coding.forEach(function(item){
    console.log(item);
})

//for each function with arrow function as caalback function in it
coding.forEach((item)=>{
    console.log(item);
})
//the callback function in for each loop is has three parameters
//1.item
//2.index
//3.array
coding.forEach(function(item,index,array){
    console.log(item,index,array);
})

const Example=[
    {
        id:1,
        name:"Vaibhav"
    },
    {
        id:2,
        name:"Kedar"
    },
    {
        id:3,
        name:"Rajat"
    }
]
//for each function for iterating through array of objects by taking Example array
Example.forEach((item)=>{
    console.log(item.id,item.name);
})

//for each function cant be used to return value


//filter method in javascript
//filter also has callback function inside it
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>{
    return num>5;
})
console.log(newNums);

//nesting of methods
const nums =myNums.map((num)=>num*10)
            .filter((num)=>num%2===0)
            .forEach((num)=>console.log(num));


// reduce function in javascript
const cart =[1,2,3]
const orderTotal=cart.reduce((acc,curr)=>{
    return acc+curr;
},0)  // here 0 is the initial value of acc

console.log(orderTotal);
//reduce function add the all the elements of the array and returns the sum

const shoppingCart=[
    {
        item:'Bag',
        price:299
    },
    {
        item:'shoes',
        price:399
    },
    {
        item:'watch',
        price:499
    }
]

const total=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);