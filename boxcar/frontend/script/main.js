window.addEventListener("DOMContentLoaded",()=>{
    const carInfo = [
        {
            id: 0,
            src:"images/in_stock.jpg"
        },
        {
            id: 1,
            src:"images/in_stock.jpg"
        },
        {
            id: 2,
            src:"images/in_stock.jpg"
        },
        {
            id: 3,
            src:"images/in_stock.jpg"
        },
        {
            id: 4,
            src:"images/kia_img.jpg"
        },
        {
            id: 5,
            src:"images/kia_img.jpg"
        },
        {
            id: 6,
            src:"images/kia_img.jpg"
        },
        {
            id: 7,
            src:"images/kia_img.jpg"
        },
        {
            id: 8,
            src:"images/bmw_img.jpg"
        },
        {
            id: 9,
            src:"images/bmw_img.jpg"
        },
        {
            id: 10,
            src:"images/bmw_img.jpg"
        },
        {
            id: 11,
            src:"images/bmw_img.jpg"
        },
        {
            id: 12,
            src:"images/ferrari_img.jpg"
        },
        {
            id: 13,
            src:"images/ferrari_img.jpg"
        },
        {
            id: 14,
            src:"images/ferrari_img.jpg"
        },
        {
            id: 15,
            src:"images/ferrari_img.jpg"
        }
    ]
    const bookmarkLists = []
    const sideBar = document.querySelector("#side_bar")
    const compare = document.querySelector(".compare")
    const nowcountSpan = document.querySelector("#now_count")
    const closeBtn = document.querySelector("#close_btn")
    const sidebarList = document.querySelector(".side_bar_list")
    let side_bar_item = ""
    const bookmark = document.querySelectorAll(".bookmark")
    const prevBtn = document.querySelector("#prev_btn")
    const nextBtn = document.querySelector("#next_btn")
    const countSpan = document.querySelector(".count")
    const popularCarTabsItem = document.querySelectorAll(".popular_car_tabs_item")
    const popularCarList = document.querySelector(".popular_car_list")
    const popularCarItem = document.querySelector(".popular_car_item")
    let nowCount = 0
    let count = 1

    

    compare.addEventListener("click",()=>{
        sideBar.classList.add("visible")
    })
    closeBtn.addEventListener("click",()=>{
        sideBar.classList.remove("visible")
    })

    function tabChange() {
        popularCarTabsItem.forEach((v)=>{
            v.classList.remove("active")
            if(v.dataset.index == count - 1){
                v.classList.add("active")
            }
        })
    }
    function popularCarListChange(num){
        const width =  popularCarItem.offsetWidth
        popularCarList.style.left = `-${(width * 4 + 64) * (num - 1)}px`

    }
    function sidebarListsUpdate(){
        side_bar_item = ""
                    for(let bookmarkList of bookmarkLists){
                        side_bar_item += `
                        <img src="${bookmarkList.src}" style="width: 200px; height: 150px;"></img>
                        `
                    }
                    sidebarList.innerHTML = side_bar_item

    }
    bookmark.forEach((v)=>{
        v.addEventListener("click",()=>{
                let itemId = v.parentNode.parentNode.dataset.id
                let itemSrc = carInfo[itemId].src
                if( v.classList.contains("bookmark_add") != true ){
                    if( nowCount < 5){
                        v.classList.add("bookmark_add")
                        nowCount++
                        nowcountSpan.innerText = nowCount
                        bookmarkLists.push({src: itemSrc})
                        sidebarListsUpdate()
                    } else {
                        alert("더 이상 추가할 수 없습니다")
                    }
                } else{
                    v.classList.remove("bookmark_add")
                    nowCount--
                    nowcountSpan.innerText = nowCount
                    bookmarkLists.splice(bookmarkLists.findIndex((item)=> item.src == itemSrc), 1)
                    sidebarListsUpdate()
                }
        })
    })
    prevBtn.addEventListener("click",()=>{
        if(count == 1){
            count = 4
        } else {
            count--
        }
        countSpan.innerText = count
        tabChange()
        popularCarListChange(count)
    })
    nextBtn.addEventListener("click",()=>{
        if(count == 4){
            count = 1
        } else {
            count++
        }
        countSpan.innerText = count
        tabChange()
        popularCarListChange(count)
    })
})