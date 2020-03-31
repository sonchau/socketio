const express = require('express');
const app = express();
const socketio = require('socket.io')


app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);

const io = socketio(expressServer);
io.on('connection',(socket)=>{
    socket.emit('messageFromServer',{data:"Welcome to the socketio server"});
    
    socket.on('dataToServer',(dataFromClient)=>{
        console.log('dataFromClient', dataFromClient)

    })

    socket.on('messageToServer',(dataFromClient)=>{
        console.log('dataFromClient', dataFromClient)

    })

    socket.on('newMessageToServer',(msg)=>{
         console.log('newMessageToServer', msg)
        io.emit('messageToClients',{text:msg.text})
    })
})

