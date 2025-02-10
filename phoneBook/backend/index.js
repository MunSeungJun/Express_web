import express from 'express'


const app = express()
const port = 3000
let phoneData = []

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("수신성공")
})

app.post('/add', (req, res) => {
    console.log(req.body)
    let {input_name, input_number, input_email, relation} = req.body
    phoneData = {
        name: input_name,
        number: input_number,
        email: input_email,
        relation: relation
    }
    console.log(phoneData)
    res.send({
        status: 200,
        message: "등록완료"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})