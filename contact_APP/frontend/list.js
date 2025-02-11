
const listForm = document.querySelector("#list_form")
const list = document.querySelector("#list")
const serverUrl = "http://localhost:3000/contacts"
let items = ""
let data = []
const keyword = document.querySelector("#keyword")

function writeList() {
    items += `<div class="border d-flex mb-2 gap-3">
        <div><img src="images/profile.jpg" alt=""></div>
        <ul class="d-flex flex-column justify-content-center">
        <li>이름: ${data.name}</li> 
        <li>전화번호: ${data.phone}</li>
        <li>직업: ${data.job}</li>
        <li>메모: ${data.memo}</li>
        </ul>
        <div class="d-flex justify-content-center align-items-center">
        <div><button type="button" class="mb-2"><span class="material-symbols-outlined">edit</span></button>
        <button type="button" class="mt-2"><span class="material-symbols-outlined">sms</span></button></div>
        <div><button type="button" class="mb-2"><span class="material-symbols-outlined">delete</span></button>
        <button type="button" class="mt-2"><span class="material-symbols-outlined">call</span></button></div></div>
        </div>`
}

listForm.addEventListener("submit", (e) => {
    items = ""
    e.preventDefault()
    if(keyword.value !== ""){
        logJSONData(`${serverUrl}?name=${keyword.value}`)
    } else {
        logJSONData(serverUrl)
    }

})

async function logJSONData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    for (data of jsonData) {
        writeList()
    }
    list.innerHTML = `${items}`
}
