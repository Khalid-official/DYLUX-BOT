
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 ${mssg.gpNsfw(usedPrefix)}`
   let user = global.db.data.users[m.sender].age
   if (user < 17) throw `❎ ${mssg.nsfwAge}`
   
   m.react(rwait)

let type = (command).toLowerCase()
switch (type) {
	
case 'ass':
case 'culos':
    let as = await conn.getFile(global.API('fgmods', '/api/nsfw/ass', { }, 'apikey'))
    conn.sendFile(m.chat, as.data, 'img.jpg', `✅ ${mssg.random} *${command}*`, m)
    //conn.sendButton(m.chat, `✅ ${mssg.random} *${command}*`, fgyt, as.data, [[`▷▷ ${msg.next()}`, `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'boobs':
case 'boobies':
    let xb = await conn.getFile(global.API('fgmods', '/api/nsfw/boobs', { }, 'apikey'))
    conn.sendFile(m.chat, xb.data, 'img.jpg', `✅ ${mssg.random} *${command}*`, m)
   m.react(xmoji) 
break

case 'pussy':
    let xp = await conn.getFile(global.API('fgmods', '/api/nsfw/pussy', { }, 'apikey'))
    conn.sendFile(m.chat, xp.data, 'img.jpg', `✅ ${mssg.random} *${command}*`, m)
    m.react(xmoji) 
break

case 'lesbians':
case 'lesbian':
    let les = await conn.getFile(global.API('fgmods', '/api/nsfw/lesbian', { }, 'apikey'))
    conn.sendFile(m.chat, les.data, 'img.jpg', `✅ ${mssg.random} *${command}*`, m)
    m.react(xmoji) 
break

case 'pack':
case 'cosplay':
	     let img = await conn.getFile(global.API('fgmods', '/api/nsfw/cosplay', { }, 'apikey'))
        conn.sendFile(m.chat, img.data, 'img.jpg', `✅ ${mssg.result} 🤭`, m)
	     m.react(xmoji) 
	break


default:
 }
}

handler.help = ['ass', 'boobs', 'lesbian', 'pack', 'pussy']
handler.tags = ['nsfw']
handler.command = /^(ass|culos|boobs|boobies|lesbian|lesbians|pussy|cosplay|pack)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler
