const prevBtn = document.querySelector("#prev_btn")
const nextBtn = document.querySelector("#next_btn")
const carouselList = document.querySelector(".carousel_list")
let count = 0

nextBtn.addEventListener("click", ()=>{
    if(count == 0) {
        prevBtn.classList.remove("d-none")
        count++
        carouselList.style.left = "-774px"
    } else {
        count++
        carouselList.style.left = "-1395px"
    }
    
})



prevBtn.addEventListener("click",()=>{
    // if( carouselList.style)
    
})