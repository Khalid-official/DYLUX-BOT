let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

   let chat = global.db.data.chats[m.chat]
   if (!chat.welcome) throw `✳️ To use this command you must enable Welcomes with *${usedPrefix}on* welcome`
   let you = `
   ┌─⊷ *EVENTS*
   ▢ welcome
   ▢ bye
   ▢ promote
   ▢ demote
   └───────────
  
   📌 Example:
  
   *${usedPrefix + command}* welcome @user`

if (!event) return await m.reply(te)

let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`✅ Simulating ${event}...`)
switch (event.toLowerCase()) {
         case 'add':
         case 'welcome':
         case 'invite':
         case 'welcome':
            act = 'add'
          break
         case 'bye':
         case 'farewell':
         case 'leave':
         case 'remove':
          act = 'remove'
         break

         case 'promote':
         case 'promote':
           act = 'promote'
         break

         case 'demote':
         case 'degrade':
          act = 'demote'
         break

default:

throw you
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})
}
handler.help = ['simulate <event> @user']
handler.tags = ['group']
handler.command = ['simulate', 'simulate']
handler.admin = true
handler.group = true

export default handler