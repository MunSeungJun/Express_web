import express from "express"
const app = express()
const port = 3000

let user = []
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// app.get('/contacts', (req,res)=>{
//     res.status(200).json(user)
// })
app.post('/add', (req, res) => {
    const {input_name, phone, job, memo} = req.body
    user = {
        name: input_name,
        phone: phone,
        job: job,
        memo: memo
    }
    res.send({
        status:200
    })
    console.log(user)
})

app.listen(port, () => {
    console.log(`listen ${port}`)
})