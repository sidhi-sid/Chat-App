let socket=io()

let btnsend=document.getElementById('btnsend')
let inpmsg=document.getElementById('inpmsg')
let ulmsglist=document.getElementById('ulmsglist')

btnsend.onclick=function (){
    socket.emit('msg_send',{
        msg:inpmsg.value
    })
    inpmsg.value
}