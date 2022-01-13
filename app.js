const cors = require("cors")
const express = require("express")
const app = express()

process.env.PORT = 3000

app.use(cors())
app.get("/", (req , res)=> {
    const encodedAuth = (req.headers.authorization|| '')
    .split(' ')[1] || ''
    
    const [name, password]= Buffer.from(encodedAuth, 'base64')

.toString().split(';')
if(user===credentials.secretUser && password===credentials.secretPassword){
    res.status(200).send({"STATUS":"SUCCESS"})
}else{
res.set('WWW-Authenticate', 'Basic realm="Access to Index"')
res.status(401).send("Unathorised access")
}
})


app.listen(3000,()=>{
console.log(`started listening on port ${process.env.PORT}`)
})