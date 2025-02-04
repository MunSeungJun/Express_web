import express from 'express'



const app = express()
const port = 3000


app.use(express.static('public'))

const users = [
    {
        user_id: "admin",
        user_pw: "admin1234"
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!')
})
app.get('/checklogin', (req, res) => {
    if(req.query.user_id ==="admin" && req.query.user_pw ==="admin1234") {
        console.log("로그인에 성공했습니다")
        res.send({
            message: "login",
            status:200
        })

    }else {
        console.log("로그인을 실패했습니다")
        res.send({
            message: "login fail",
            status:403
        })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})