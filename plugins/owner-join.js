
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ Send the Group link\n\n 📌 Example:\n *${usedPrefix + command}* <linkwa> <days>\n\n_the number is the days that the bot will be in the group_`
  if (!code) throw `✳️ Invalid link` if (!args[1]) throw `📌 Number of days missing\n\n Example:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `✳️ Single number, representing the days the bot will be in the group!`
  let owbot = global.owner[1] 
  m.reply(`😎 Wait 3 seconds, I'll join the group`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ I successfully joined the group \n\n≡ Group info \n\n *Name :* ${await conn.getName(res)}\n\nThe bot will exit automatically after\n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `🏮 Hello shavales

@${owbot} He is my creator if you have any questions I was invited by *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `okay everyone relax 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *GROUP INVITATION*\n\n@${m.sender.split('@')[0]} has invited *${conn.user.name}* To the group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nThe bot will automatically exit after \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *GROUP INVITATION*\n\n@${m.sender.split('@')[0]} has invited *${conn.user.name}* To the group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nThe bot will automatically exit after\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✅ The bot was invited to the group\n\n${await conn.getName(res)}\n\nThe bot will automatically exit after \n${msToDate(global.db.data.chats[res].expired - now)}`).then(async () => {
     let mes = `Hello everyone 👋🏻
     
*${conn.user.name}* is one of the multi-device WhatsApp bots built with Node.js, *${conn.user.name}* Just invited by *${m.name}*

To see the bot's Menu write
*${usedPrefix}help*

@${conn.user.jid.split('@')[0]} will automatically exit after\n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.reply(res, mes, m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ Sorry, the bot can't join groups`
      }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'invite'] 

handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
