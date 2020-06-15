let socket=io()
 

$('#loginbox').show()
$('#chatbox').hide()

$('#btnstart').click(()=>{
    socket.emit('login',{
        username:$('#inpusername').val(),
        password:$('#inppass').val()
    })
})

socket.on('logged_in',()=>{

    $('#loginbox').hide()
    $('#chatbox').show()
})

socket.on('login_failed',()=>{
    window.alert('Username or Password is wrong')
})

$('#btnsendmsg').click(()=>{
    socket.emit('msg_send',{
        to:$('#inptouser').val(),
        msg:$('#inpnewmsg').val()
    })
})

socket.on('msg_rcvd',(data)=>{
    $('#ulmsgs').append($('<li>').text(data.msg))
})
