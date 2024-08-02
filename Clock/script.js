const clock= document.getElementById('clock');
const start=document.getElementById('start');
const stop=document.getElementById('stop');

    let intervalId= setInterval(()=>{
            let date=new Date();
            clock.innerHTML=date.toLocaleTimeString();
        },1000);




let flagtwo=0;

let flag=true;
stop.addEventListener('click',()=>{
    clearInterval(intervalId);
     flag=false;
    if(flag==false){
        console.log(flag);
        stop.innerHTML=`<p>Start Timer</p>`
    
     }else{
         Timer(0,0,0);
         flag=true;
         stop.innerHTML=`<p>Stop</p>`;
         console.log(flag)
     }
})


async function Timer(hour,min,sec) {
    clearInterval(intervalId);
    flagtwo=1;
        while(flag){
            
            sec++;
            if(sec==60){
                min++;
                sec=0;
            }
            if(min==60){
                hour++;
                min=0;
            }
            clock.innerHTML=`${hour}:${min}:${sec}`;
            await new Promise(resolve=>setTimeout(resolve,1000));
        }
}
start.addEventListener('click', ()=>{

    if(flagtwo==1){
        Timer(this.hour,this.min,this.sec);
        }
    else{
        Timer(0,0,0);
    }
    
});



