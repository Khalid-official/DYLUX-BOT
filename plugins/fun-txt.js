let handler = async (m, { conn, text, usedPrefix, command }) => {

     let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
      if (!teks) throw `📝 What do I write? Example : *${usedPrefix + command}* Hello pigs`
       m.react(rwait)
       let img = global.API('fgmods', '/api/maker/txt', { text: teks }, 'apikey')
       conn.sendFile(m.chat, img, 'img.png', `✅ It's better than what you write ✍🏻`, m)
       m.react(done)

   }
   handler.help = ['txt']
   handler.tags = ['fun']
   handler.command = ['txt']
  
   export default handler
