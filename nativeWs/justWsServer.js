const http = require('http');
// 3rd party module, ws!
const websocket = require('ws');

const server = http.createServer((req, res)=>{
    res.end("I am connected!")
});

const wss = new websocket.Server({server})
wss.on('headers',(headers,req)=>{
    console.log('header', headers)
});

wss.on('connection', (ws,req)=>{
    //console.log('connection', ws)
    ws.send('Welcome to the websocket server!!')
    ws.on('message',(msg)=>{
        console.log('on message from client:', msg)
    })
})


server.listen(8000);