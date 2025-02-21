const emailInput = document.querySelector("#email_input")

emailInput.addEventListener("focus", ()=>{
    const emailLabel = document.querySelector("#email_label")
    emailLabel.classList.remove("email_label_blur")
    emailLabel.classList.add("email_label_focus")
})
emailInput.addEventListener("blur", ()=>{
    const emailLabel = document.querySelector("#email_label")
    emailLabel.classList.remove("email_label_focus")
    emailLabel.classList.add("email_label_blur")
})