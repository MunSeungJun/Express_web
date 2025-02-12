
const listForm = document.querySelector("#list_form")
const list = document.querySelector("#list")
const serverUrl = "http://localhost:3000/contacts"
let items = ""
const keyword = document.querySelector("#keyword")



/* get */
async function logJSONData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    for (let data of jsonData) {
        items += `<div class="border d-flex mb-2 gap-5">
        <div><img src="images/profile.jpg" alt=""></div>
        <ul class="d-flex flex-column justify-content-center">
        <li>${data.name}</li> 
        <li>${data.phone}</li>
        <li>${data.job}</li>
        <li>${data.memo}</li>
        </ul>
        <div class="d-flex justify-content-center align-items-center"><div id="btn_list">
        <button type="button" class="d-flex justify-content-center align-items-center action_btn" onclick="edit_contact('${data.id}')"><span class="material-symbols-outlined">edit</span></button>
        <button type="button" class="d-flex justify-content-center align-items-center action_btn" ><span class="material-symbols-outlined">sms</span></button>
        <button type="button" class="d-flex justify-content-center align-items-center action_btn" onclick="remove_contact('${data.id}')"><span class="material-symbols-outlined">delete</span></button>
        <button type="button" class="d-flex justify-content-center align-items-center action_btn" ><span class="material-symbols-outlined">call</span></button></div>
        </div></div>`
    }
    list.innerHTML = `${items}`
}
listForm.addEventListener("submit", (e) => {
    items = ""
    e.preventDefault()
    if (keyword.value !== "") {
        logJSONData(`${serverUrl}?name=${keyword.value}`)
    } else {
        logJSONData(serverUrl)
    }

})

/* delete  */
async function remove_contact(id) {
    const select = confirm("정말로 삭제하시겠습니까?")
    if (select) {
        const response = await fetch(`${serverUrl}/${id}`, {
            method: "DELETE"
        });
        console.log(response)
    }
    location.reload()
}

/*  put  */
async function edit_contact(id) {
    // const editForm = document.querySelector("#edit_form")
    const response = await fetch(`${serverUrl}?id=${id}`);
    const jsonData = await response.json();
    let data = jsonData[0]
    const modal = `
    <div id="edit_modal" class="modal_container">
      <div class="body">
      <h2 class="text-center mt-3 mb-3">연락처 수정</h2>
        <form id="edit_form" data-id="${data.id}">
            <fieldset>
                <legend>등록폼입니다</legend>
                <div class="d-flex mb-3 align-items-center">
                    <label for="input_name" class="text-center">이름</label>
                    <input type="text" id="input_name" name="input_name" value=${data.name}>
                </div>
                <div class="d-flex mb-3 align-items-center">
                    <label for="phone" class="text-center">연락처</label>
                    <input type="text" id="phone" name="phone" value=${data.phone}>
                </div>
                <div class="d-flex mb-3 align-items-center">
                    <label for="job" class="text-center">직업</label>
                    <input type="text" id="job" name="job" value=${data.job}>
                </div>
                <div class="d-flex mb-3 align-items-center">
                    <label for="memo" class="text-center">메모</label>
                    <input type="text" id="memo" name="memo" value=${data.memo}>
                </div>
                <div class="d-flex justify-content-center">
                    <input type="submit" value="수정">
                    <input type="button" value="취소">
                </div>
            </fieldset>
        </form>
      </div>
    </div>`
    document.body.insertAdjacentHTML("beforeend", modal)
    document.querySelector("#edit_form").addEventListener("submit", update_concact)
}
async function update_concact(e) {
    e.preventDefault()
    const editForm = e.target
    const id = editForm.dataset.id
    console.log(e.target)

    const updateData = {
        name: editForm.querySelector("#input_name").value,
        phone: editForm.querySelector("#phone").value,
        job: editForm.querySelector("#job").value,
        memo: editForm.querySelector("#memo").value
    }
    const response = await fetch(`${serverUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateData)
    })
    alert("수정되었습니다.")
    
}

