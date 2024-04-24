
let handler = async (m, { conn, usedPrefix, command, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = global.db.data.users[who]
    if (!who) return m.reply(`✳️ ${mssg.noMention}\n\n📌 *${mssg.example}* :\n${usedPrefix + command} @${m.sender.split`@`[0]}`, null, { mentions: [m.sender] })
    if (!(who in global.db.data.users)) throw `✳️ ${mssg.userDb}`
    if (user.prem === false) throw `✳️ The User is not Premium`
    user.prem = false
    user.premiumTime = 0
    m.reply(`✅ Premium removed \n\n@${who.split('@')[0]} you are no longer premium`, null, { mentions: [who] })
}
handler.help = ['delprem @user']
handler.tags = ['owner']
handler.command = ['delprem', 'delpremium'] 
handler.group = true
handler.rowner = true

export default handler
