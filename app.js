const app = require('express')()
const server = app.listen(3000)
const io = require('socket.io').listen(server)
app.get('/',(req,res)=>{
    res.send('hey')
})
io.on('connection',(socket)=>{
    io.emit('customEmit', { message: 'Heyyy'})
})

