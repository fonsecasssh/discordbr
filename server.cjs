const express = require('express');
const http = require('http');
const path = require('path');
const crypto = require('crypto');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: process.env.CLIENT_ORIGIN || true } });
const messages = { geral: [{id:'welcome',author:'Sistema',text:'Bem-vindo ao Nexus Gamer! 🎮',time:'Agora'}],clips:[],valorant:[],cs2:[] };
app.get('/health', (_req,res)=>res.json({ok:true}));
app.get('/api/channels', (_req,res)=>res.json(Object.keys(messages)));
io.on('connection', socket => {
  socket.on('join-channel', channel => {
    if (!Object.hasOwn(messages,channel)) return;
    for (const room of socket.rooms) if(room!==socket.id) socket.leave(room);
    socket.join(channel);
    socket.emit('history', {channel,items:messages[channel]});
  });
  socket.on('send-message', payload => {
    if (!payload || typeof payload !== 'object') return;
    const {channel,author,text}=payload;
    if(!Object.hasOwn(messages,channel) || typeof text!=='string' || !text.trim() || text.length>2000) return;
    const msg={id:crypto.randomUUID(),author:String(author||'Jogador').slice(0,40),text:text.trim(),time:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})};
    messages[channel].push(msg);
    messages[channel]=messages[channel].slice(-200);
    io.to(channel).emit('new-message',{channel,message:msg});
  });
});
const dist = path.join(__dirname,'dist');
app.use(express.static(dist));
app.get('*', (_req,res)=>res.sendFile(path.join(dist,'index.html')));
const port = Number(process.env.PORT)||3001;
server.listen(port,'0.0.0.0',()=>console.log('Nexus Gamer Web running on '+port));
