const createForm = document.querySelector("#create_form")
const server_url = "http://localhost:3000/contacts"

createForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputName = createForm.querySelector("#input_name").value
    const phone = createForm.querySelector("#phone").value
    const job = createForm.querySelector("#job").value
    const memo = createForm.querySelector("#memo").value

    let inputData = {
        name: inputName,
        phone: phone,
        job: job,
        memo: memo
    }
    postData(server_url, inputData).then((data) => {
        console.log(data)
    })
})
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()
}