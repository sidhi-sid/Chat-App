const http=require('http') // as socket.io requires http server
const express=require('express')
const app=express()
const socketio=require('socket.io')

const server=http.createServer(app) //creating server
const io=socketio(server)
io.on('connection',(socket)=>{
    console.log("Connected with socket id =",socket.id)
    socket.on('msg_send',(data)=>{
        io.emit('msg_rcvd',data) //sends it to every socket simultaneously
        //socket.broadcast.emit('msg_rcvd',data) it sends the data to every socket excluding the one who sends it
        //socket.emit only sends it to the current socket
    })
   
})
app.use('/',express.static(__dirname+'/public'))

server.listen(3244,()=>{
    console.log("Server Started")
})

//to check whether sockets are working or not
// use localhost:3344/socket.io/socket.io.js in browser and it must return a complex js file