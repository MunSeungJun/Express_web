const prevBtn = document.querySelector("#prev_btn")
const nextBtn = document.querySelector("#next_btn")
const timer = document.querySelector("#timer")
const month = document.querySelector("#month")
const dates = document.querySelector("#dates")
let now = new Date()
let yearInfo = now.getFullYear()
let monthInfo = now.getMonth() + 1
let dateInfo = now.getDate()

function timerInfo(){
    now = new Date()
    timer.innerHTML = `<div>현재시간 ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}</div>`
}

function allDate(){
    let i = 0
    let j = 0
    if( monthInfo == 3 || monthInfo == 5 || monthInfo == 7 || monthInfo == 8 || monthInfo == 10 || monthInfo == 12 || monthInfo == 1 ){
        for(i = 1; i <= 31; i++ ){
            dates.innerHTML += `<div">${i}</div>`
        }
    } else if (monthInfo == 2) {
        for(i = 1; i <= 28; i++){
            dates.innerHTML += `<div">${i}</div>`
        }
    } else {
        for(i = 1; i <= 30; i++){
            dates.innerHTML += `<div">${i}</div>`
        }
    }
    if ( i <= 43) {
        for(j = 1; j <= (43 - i); j++){
            dates.innerHTML += `<div class="font2">${j}</div>`
        }
    }
    month.innerHTML = `${yearInfo}-${monthInfo} `
}


prevBtn.addEventListener("click", ()=>{
    dates.innerHTML = ""
    if (monthInfo == 1){
        monthInfo = 12
    } else {
        monthInfo--
    }
    if (monthInfo == 12) {
        yearInfo--
    }
    allDate()
})
nextBtn.addEventListener("click", ()=>{
    dates.innerHTML = ""
    if (monthInfo == 12){
        monthInfo = 1
    } else {
        monthInfo++
    }
    if (monthInfo == 1) {
        yearInfo++
    }
    allDate()
    
})

window.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault()
    allDate();
})
setInterval(timerInfo, 1000)