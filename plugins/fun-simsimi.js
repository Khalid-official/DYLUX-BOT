import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {

  let name = conn.getName(m.sender)
   if (!text) throw `Hello *${name}* Want to chat for a while? \nReply with *${usedPrefix + command}* (your message) \n\n📌 Example : *${usedPrefix + command}* Hello bot`
   m.react('🗣️')
   //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "es" }, '') )
   let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
   let json = await res.json()
   if (json.success) m.reply(json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux'))
   else throw json
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi']

export default handler