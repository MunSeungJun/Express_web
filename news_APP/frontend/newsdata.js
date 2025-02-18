const newsdata_api = "pub_7003575f4e6d07e8068f6002d1976b40d6cf3"
const request_url = "http://localhost:3000/results"
const resultDiv = document.querySelector("#result")
const newsForm = document.querySelector("#news_form")
const keyword = document.querySelector("#keyword")
let jsonData = []
let result = ""

async function getData() {
    const response =  await fetch(request_url)
    jsonData = await response.json()
    renderUi(jsonData)
}
async function searchData(key) {
    const filtered = jsonData.filter((v) => v.title.toLowerCase().includes(key.toLowerCase()))
    console.log(filtered)
    renderUi(filtered)
    // for(let data of jsonData){
    //     let titleIndex =  data.title.toLowerCase().indexOf(`${keyword.toLowerCase()}`)
    //     if (titleIndex != -1 ){
    //         result += `
    //         <div class="col d-flex justify-content-center">
    //         <div class="card " style="width: 18rem;">
    //             <img src=${data.image_url} class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title">${data.title}</h5>
    //                 <p class="card-text">${data.description}</p>
    //                 <a href=${data.link} class="btn btn-primary">기사보기</a>
    //             </div>
    //         </div>
    //         </div>
    //         `
    //     }
    // }
    // resultDiv.innerHTML = result
}
function renderUi(news){
    for (let data of news) {
        result += `
        <div class="col d-flex justify-content-center">
        <div class="card " style="width: 18rem;">
            <img src=${data.image_url} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description}</p>
                <a href=${data.link} class="btn btn-primary">기사보기</a>
            </div>
        </div>
        </div>
        `
    }
    resultDiv.innerHTML = result
}


window.addEventListener("DOMContentLoaded",()=>{
    getData()
})
newsForm.addEventListener("submit", (e) => {
    e.preventDefault()
    result = ""
    searchData(keyword.value)
})



