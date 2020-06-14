let socket=io()
 

$('#loginbox').show()
$('#chatbox').hide()

$('#btnstart').click(()=>{
    socket.emit('login',{
        username:$('#inpusername').val()
    })
})

socket.on('logged_in',()=>{

    $('#loginbox').hide()
    $('#chatbox').show()
})

$('#btnsendmsg').click(()=>{
    socket.emit('msg_send',{
        to:$('#inptouser').val(),
        msg:$('#inpnewmsg').val()
    })
})