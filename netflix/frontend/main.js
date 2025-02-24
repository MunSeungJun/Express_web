const prevBtn = document.querySelector("#prev_btn")
const nextBtn = document.querySelector("#next_btn")
const carouselList = document.querySelector(".carousel_list")

nextBtn.addEventListener("click", ()=>{
        prevBtn.classList.remove("d-none")
        nextBtn.classList.add("d-none")
        carouselList.style.left = "-1290px"
    
})



prevBtn.addEventListener("click",()=>{
    prevBtn.classList.add("d-none")
    nextBtn.classList.remove("d-none")
    carouselList.style.left = "0px"
    
})