const coinlists = document.querySelector("#coinlists")
const reroadBtn = document.querySelector("#reroadBtn")
let coinData = ""


window.addEventListener("DOMContentLoaded", () => {
    getData()
})
reroadBtn.addEventListener("click", () => {
    location.reload()
})


async function getData() {
    const repsonse = await fetch("http://localhost:3000/coin")
    const coinDatas = await repsonse.json()
    const filterd = coinDatas.filter((v) => (v.rank > 0) && (v.rank <= 20))
    await renderUi(filterd)
}

async function renderUi(data) {
    let lists = ""
    lists += `
    <tr class="border">
        <th>순위</th>
        <th>종목</th>
        <th>기호</th>
        <th>가격</th>
        <th>총 시가</th>
        <th>거래량</th>
        <th>변동</th>
    </tr>`
    for (coinData of data) {
        let result = await addData(coinData.rank)
        lists += `
        <tr>
            <td class="text-end">${coinData.rank}</td>
            <td>${coinData.name}</td>
            <td>${coinData.symbol}</td>
            <td>몰?루</td>
            <td>${result}</td>
        </tr>
        `
    }
    coinlists.innerHTML = lists
}

async function addData(data){
        let repsonse = await fetch(`http://localhost:3000/${data}`)
        let coinDatas = await repsonse.json()
        return coinDatas[0].market_cap
    
}