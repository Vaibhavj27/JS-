// generate random color

const randomColor= function () {
    const hex='0123456789ABCDE';
    let color='#';

    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    };
   return color;
}
let intervalId;
const startChanging= function(){
     intervalId= setInterval(() => {
          document.body.style.backgroundColor=randomColor();
        }, 1000);
  }

  const stopChanging= function(){
    console.log(intervalId)
    clearInterval(intervalId); 
}

document.querySelector('#Start').addEventListener('click',startChanging)
document.querySelector('#Stop').addEventListener('click',stopChanging)




