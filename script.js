const selectMenu = document.querySelectorAll("select");
const clockTime = document.querySelector("h1");
const alarmBtn = document.querySelector("button");
const content = document.querySelector(".content")
const ringtoon = new Audio("sound/alarm_clock.mp3")
let alarmTime , checkState = "noset";
for (let i = 23; i >= 0; i--) {
    i = i< 10 ? "0" + i : i ;
    let option = `<option value=${i}>${i}</option>`;
    selectMenu[0].insertAdjacentHTML("afterbegin", option);
}
for (let i = 59; i >= 0; i--) {
    i = i< 10 ? "0" + i : i ;
    let option = `<option value=${i}>${i}</option>`;
    selectMenu[1].insertAdjacentHTML("afterbegin", option);
}
setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    s = s<10 ? "0" + s : s;
    m = m<10 ? "0" + m : m;
    h = h<10 ? "0" + h : h;
    clockTime.innerHTML = `${h}:${m}:${s}`;
    if(alarmTime ==`${h}:${m}`){
        ringtoon.play();
        ringtoon.loop = true;
    }
},1000)
alarmBtn.addEventListener("click" , () =>{
    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
    if(alarmTime.includes("Hour")|| alarmTime.includes("Minute")){
        return alert("لطا یک زمان هشدار را انتخاب کنید ")
    }
    myState(checkState);
})
function myState(state){
    if(state == "noset"){
        content.classList.add("disable");
        alarmBtn.innerText = "clear alarm";
        checkState = "set"
    }
    else{
        content.classList.remove("disable");
        alarmBtn.innerText = "alarm time";
        ringtoon.pause();
        alarmTime = ""
        checkState = "noset"
    }
}
