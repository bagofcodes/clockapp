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

function settime(bool){
    const wakeuptime=document.querySelector("#wakeup-time").value;
    const lunchtime=document.querySelector("#lunch-time").value;
    const naptime=document.querySelector("#nap-time").value;

    // Elements to be Updated
    let highlightdiv=document.querySelector("#highlights-div");
    let textcontainer=document.querySelector("#text-container");
    let imgcontainer=document.querySelector("#img-container");

    highlightdiv.style.display="initial";

    let time24=new Date();
    let h=time24.getHours();

    if(h == wakeuptime){
        highlightdiv.textContent = "Good Morning !!";
        textcontainer.textContent = "Wake Up !!";
        imgcontainer.style.backgroundImage="url('./assets/images/wakeup_image.png')";
    }
    else if(h == lunchtime){
        highlightdiv.textContent = "Good Afternoon !!";
        textcontainer.textContent = "Let's Have Some Lunch !!";
        imgcontainer.style.backgroundImage="url(./assets/images/lunch_image.png)";
    }
    else if(h == naptime){
        highlightdiv.textContent = "Good Night !!";
        textcontainer.textContent = "Its Time For Some Sleep !!";
        imgcontainer.style.backgroundImage="url(./assets/images/goodnight_image.png)";
    }
    else{
        highlightdiv.textContent = "What's Up Fella !!";
        textcontainer.textContent = "Hii All !!";
        imgcontainer.style.backgroundImage="url(./assets/images/lunch_image.png)";
    }
    if(bool === true){
        Swal.fire('Submitted Successfully');
    }
    setTimeout(settime,1000,false);
}