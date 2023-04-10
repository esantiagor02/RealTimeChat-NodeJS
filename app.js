const express= require("express")
const app = express()

const http= require("http")
const server=http.createServer(app)

app.get("/", (req, res) => {
   res.sendFile(`${__dirname}/usuario/index.html`)
})
server.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")}
)