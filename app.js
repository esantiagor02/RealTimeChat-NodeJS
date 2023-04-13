const express= require("express")
const app = express()

const http= require("http")
const server=http.createServer(app)

const {Server}= require ("socket.io");
const io= new Server(server)

io.on("connection", (socket)=>{
    console.log("Usuario conectado");
})

app.get("/", (req, res) => {
   res.sendFile(`${__dirname}/usuario/index.html`)
})
server.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")}
)