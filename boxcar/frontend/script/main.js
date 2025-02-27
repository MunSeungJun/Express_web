const sideBar = document.querySelector("#side_bar")
const compare = document.querySelector(".compare")
const nowcountSpan = document.querySelector("#now_count")
const closeBtn = document.querySelector("#close_btn")
const sidebarList = document.querySelector(".side_bar_list")
const bookmarkLists = []
let side_bar_item = ""
const popularCarTabsItem = document.querySelectorAll(".popular_car_tabs_item")
const popularCarList = document.querySelector(".popular_car_list")
const prevBtn = document.querySelector("#prev_btn")
const nextBtn = document.querySelector("#next_btn")
const countSpan = document.querySelector(".count")
let nowCount = 0
let carList = ""
let count = 1
const carTabList = ["in-stock", "sedan", "suv", "convertible"]

window.addEventListener("DOMContentLoaded", () => {
    getData(carTabList)
    visible()
    bookmarkAdd()
    carouselPrev()
    carouselNext()
    
})

async function getData(tabs) {
    for (let tab of tabs) {
        const response = await fetch(`http://localhost:3000/${tab}`)
        const jsonData = await response.json()
        renderData(jsonData)
    }
}
function renderData(datas) {
    for (let carItem of datas) {
        carList += `
        <li class="popular_car_item border rounded-4 overflow-hidden" data-id="${carItem.id}">
            <div class="car_img_wrap position-relative">
                <p class="tag position-absolute bg-success text-white rounded-3 py-1 px-3">great price</p>
                <button class="bookmark d-flex p-2 rounded-circle border-0  position-absolute "><span class="material-symbols-outlined">
                                    bookmark
                                    </span></button>
                <img src="${carItem.src}" alt="" class="img-fluid" data-src="${carItem.src}" >
            </div>
            <div class="car_spec p-3">
                <h3 class="fs-2 m-0">toyota</h3>
                <p class="fs-3">3.5 q6 </p>
                <ul class="d-flex gap-5 justify-content-center my-2">
                    <li><span class="material-symbols-outlined">swap_driving_apps_wheel</span></li>
                    <li><span class="material-symbols-outlined">local_gas_station</span></li>
                    <li><span class="material-symbols-outlined">auto_transmission</span></li>
                </ul>
                <div class="d-flex justify-content-around align-items-center fs-4">
                    <p>$40,000</p>
                    <a href="">view detail &gt;</a>
                </div>
            </div>
        </li>
        `
    }
    popularCarList.innerHTML = carList
}

function visible(){
    compare.addEventListener("click", () => {
        sideBar.classList.add("visible")
    })
    closeBtn.addEventListener("click", () => {
        sideBar.classList.remove("visible")
    })
}
function sidebarListsUpdate() {
    side_bar_item = ""
    for (let bookmarkList of bookmarkLists) {
        side_bar_item += `
                    <img src="${bookmarkList.src}" style="width: 200px; height: 150px;"></img>
                    `
    }
    sidebarList.innerHTML = side_bar_item
}

function bookmarkAdd(){
   popularCarList.addEventListener("click",(e)=>{
    console.log(e.target)
    if (e.target.classList.contains("bookmark_add") != true) {
        if (nowCount < 5) {
            e.target.classList.add("bookmark_add")
            nowCount++
            nowcountSpan.innerText = nowCount
            // bookmarkLists.push({ src: itemSrc })
            // sidebarListsUpdate()
        } else {
            alert("더 이상 추가할 수 없습니다")
        }
    } else {
        e.target.classList.remove("bookmark_add")
        nowCount--
        nowcountSpan.innerText = nowCount
        // bookmarkLists.splice(bookmarkLists.findIndex((item) => item.src == itemSrc), 1)
        // sidebarListsUpdate()
    }

   })
            // let itemId = v.parentNode.parentNode.dataset.id
            // let itemSrc = carInfo[itemId].src
            
    
}

function carouselPrev(){
    prevBtn.addEventListener("click", () => {
        if (count == 1) {
            count = 4
        } else {
            count--
        }
        countSpan.innerText = count
        tabChange()
        popularCarListChange(count)
    })
}
function carouselNext(){
    nextBtn.addEventListener("click", () => {
        if (count == 4) {
            count = 1
        } else {
            count++
        }
        countSpan.innerText = count
        tabChange()
        popularCarListChange(count)
    })
}
function tabChange() {
    popularCarTabsItem.forEach((v) => {
        v.classList.remove("active")
        if (v.dataset.index == count - 1) {
            v.classList.add("active")
        }
    })
}
function popularCarListChange(num) {
    const width = document.querySelector(".popular_car_item").offsetWidth
    popularCarList.style.left = `-${(width * 4 + 64) * (num - 1)}px`
}