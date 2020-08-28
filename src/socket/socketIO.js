import io from 'socket.io-client'
const socket = io('ws://localhost:5000')
socket.emit('sendMsg', {name: 'Moonxy'})
socket.on('cbMsg', (data) => {
    console.log(data)
})