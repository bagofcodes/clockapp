function checkTime(i) {
    if (i<10) {
      i = "0" + i;
    }
    return i;
}


function clock(){
    const time_element = document.querySelectorAll(".digit");
    const hours_element=time_element[0];
    const minutes_element=time_element[1];
    const seconds_element=time_element[2];
    const am_pm_element = document.querySelector("#am-pm-text");


    let time24= new Date();
    let h= time24.getHours();
    let m=time24.getMinutes();
    let s=time24.getSeconds();

    if(h>=12){
        am_pm_element.textContent="PM";
    }
    else{
        am_pm_element.textContent="AM";
    }
    if(h>12){
        h=h-12;
    }
    m=checkTime(m);
    s=checkTime(s);
    hours_element.textContent=h;
    minutes_element.textContent=m;
    seconds_element.textContent=s;


}
setInterval(clock,1000);


function setDivCall(userValue){
    console.log("called");
    let time24=new Date();
    let h=time24.getHours();
    let textcontainer=document.querySelector("#text-container");
    let imgcontainer=document.querySelector("#img-container");

    if(h == userValue.get('naptime')){
        textcontainer.textContent = "Its Time For Some Sleep !!";
        imgcontainer.style.backgroundImage="url(./assets/images/goodnight_image.png)";
    }
    else if(h == userValue.get('lunchtime')){
        textcontainer.textContent = "Let's Have Some Lunch !!";
        imgcontainer.style.backgroundImage="url(./assets/images/lunch_image.png)";
    }
    else if(h == userValue.get('wakeuptime')){
        textcontainer.textContent = "Wake Up !!";
        imgcontainer.style.backgroundImage="url('./assets/images/wakeup_image.png')";
    }
    else{
        textcontainer.textContent = "Hii All !!";
        imgcontainer.style.backgroundImage="url(./assets/images/lunch_image.png)";
    }
}

async function setDiv(userTimer,userValue,bool){
    // Elements to be Updated
    let highlightdiv=document.querySelector("#highlights-div");
    let textcontainer=document.querySelector("#text-container");
    let imgcontainer=document.querySelector("#img-container");

    let hlwt=document.querySelector("#wakeupHL");
    let hllt=document.querySelector("#lunchHL");
    let hlnt=document.querySelector("#napHL");

    if(userTimer.get('wakeuptime') === 'Default'){
        hlwt.style.display = "none";
    }
    else{
        hlwt.style.display = "initial";
        hlwt.textContent = "Wake Up time:- " + userTimer.get('wakeuptime');

    }
    if(userTimer.get('lunchtime') === 'Default'){
        hllt.style.display = "none";
    }
    else{
        hllt.style.display = "initial";
        hllt.textContent = "Lunch time:- " + userTimer.get('lunchtime');

    }
    if(userTimer.get('naptime') === 'Default'){
        hlnt.style.display = "none";
    }
    else{
        hlnt.style.display = "initial";
        hlnt.textContent = "Nap time:- " + userTimer.get('naptime');
    }


    highlightdiv.style.display="flex";


    let time24=new Date();
    let h=time24.getHours();
    if(h == userValue.get('naptime')){
        textcontainer.textContent = "Its Time For Some Sleep !!";
        imgcontainer.style.backgroundImage="url(./assets/images/goodnight_image.png)";
    }
    else if(h == userValue.get('lunchtime')){
        textcontainer.textContent = "Let's Have Some Lunch !!";
        imgcontainer.style.backgroundImage="url(./assets/images/lunch_image.png)";
    }
    else if(h == userValue.get('wakeuptime')){
        textcontainer.textContent = "Wake Up !!";
        imgcontainer.style.backgroundImage="url('./assets/images/wakeup_image.png')";
    }
    else{
        textcontainer.textContent = "Hii All !!";
        imgcontainer.style.backgroundImage="url(./assets/images/lunch_image.png)";
    }

    console.log(userTimer);
    console.log(userValue);

    if(bool === true){
        Swal.fire('Submitted Successfully');
    }

    var now = new Date();
    var delay =  60*60*1000; // 1 hour in msec
    var start = delay - (now.getMinutes() * 60 + now.getSeconds()) * 1000 + now.getMilliseconds();
    console.log(start);
    setTimeout(()=>{
        setDivCall(userValue);
        setInterval(()=>setDivCall(userValue),60*60*1000);
    },start);
}




function settime(){
    let userTimer = new Map();
    let userValue = new Map();

    const naptime=document.querySelector("#nap-time").value;
    const naptimetext = document.querySelector("#nap-time").options;
    Array.from(naptimetext).forEach((item)=>{
        if(item.value === naptime){
            userTimer.set("naptime",item.textContent);
            userValue.set("naptime",item.value);
        }
    });


    const lunchtime=document.querySelector("#lunch-time").value;
    const lunchtimetext = document.querySelector("#lunch-time").options;
    Array.from(lunchtimetext).forEach((item)=>{
        if(item.value === lunchtime){
            userTimer.set("lunchtime",item.textContent);
            userValue.set("lunchtime",item.value);
        }
    });

    const wakeuptime=document.querySelector("#wakeup-time").value;
    const wakeuptimeText=document.querySelector("#wakeup-time").options;
    Array.from(wakeuptimeText).forEach((item)=>{
        if(item.value === wakeuptime){
            userTimer.set("wakeuptime",item.textContent);
            userValue.set("wakeuptime",item.value);
        }
    });
    
    setDiv(userTimer,userValue,true);
    
}



