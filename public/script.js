let socket=io()

let btnsend=document.getElementById('btnsend')
let inpmsg=document.getElementById('newmsg')
let ulmsglist=document.getElementById('ulmsglist')

btnsend.onclick=function (){
    socket.emit('msg_send',{
        msg:inpmsg.value
    })
    inpmsg.value=""
}

socket.on('msg_rcvd',(data)=>{
    let linewmsg=document.createElement('li')
    linewmsg.innerText=data.msg
    ulmsglist.appendChild(linewmsg)
})