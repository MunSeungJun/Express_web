const lists = document.querySelector("#lists")
const addBtn = document.querySelector("#add_btn")
const addDiary = document.querySelector("#add_diary")
const addForm = document.querySelector("#add_form")
const menuBtn = document.querySelector("#menu_btn")
const menuList = document.querySelector("#menu_list")
const deletBtn = document.querySelector("#delete_btn")
const url = "http://localhost:3000/posts"
let list = ""

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    logJSONData(url)
})

/* add form 이벤트 */
addBtn.addEventListener("click", () => {
    addDiary.classList.remove("d-none")
})


addForm.addEventListener("reset", () => {
    addDiary.classList.add("d-none")
})
addForm.addEventListener("submit", () => {
    const title = addForm.querySelector("#title").value
    const text = addForm.querySelector("#text").value

    let inputData = {
        title: title,
        text: text
    }

    addJSONDdata(url, inputData)
    location.reload()
})
/* menu 이벤트 */
menuBtn.addEventListener("click", () => {
    menuList.classList.remove("d-none")
})
deletBtn.addEventListener("click", () => {
    

})

/* get 요청 */
async function logJSONData(url) {
    const response = await fetch(url)
    const diarys = await response.json()
    list += `
    <div id="list_container" class="p-3 bg-body-secondary">
        <p> 2025-2 </p>
    `
    for (let diary of diarys) {
        list += `      
            <div class="list_body border d-flex mb-3 bg-white">
                 <input type="checkbox"  id="${diary.id}" name="${diary.id}" value="off">
                <label for="${diary.id}">
                <img src="https://picsum.photos/150/150" alt="" /></label>
                <div class="p-3">
                    <p class="diary_title">${diary.title}</p>
                    <p class="diary_text">${diary.text}</p>
                </div>
            </div>
        `
    }
    list += `</div>`
    lists.innerHTML = list
}
/* post 요청 */
async function addJSONDdata(url = "", data = {}) {

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
/* delete 요청 */
async function deleteJSONdata(url) {
    const res  = await fetch(`${url}/${id}`, {
        method: "DELETE"
    })
}