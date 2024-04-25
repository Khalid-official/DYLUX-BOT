//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
     const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
     const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
     const groupAdmins = participants.filter(p => p.admin)
     const listAdmin = groupAdmins.map((v, i) => `${i + 1}.@${v.id.split('@')[0]}`).join('\n')
     const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
     let text = `
┌──「 *GROUP INFO* 」
▢ *♻️ID:*
    • ${groupMetadata.id}
▢ *🔖Name* :
• ${groupMetadata.subject}
▢ *👥Members* :
• ${participants.length}
▢ *🤿Group Owner:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️Admins:*
  ${listAdmin}
▢ *🪢 Group Settings:*
• ${isBanned ? '✅' : '❎'} Banned
• ${welcome ? '✅' : '❎'} Welcome
• ${detect ? '✅' : '❎'} Detector
• ${del ? '❎' : '✅'} Anti Delete
• ${antiLink ? '✅' : '❎'} Anti Link WhatsApp

*▢ 📬 Message settings:*
• Welcome: ${sWelcome}
• Goodbye: ${sBye}
• Promoted: ${sPromote}
• Gradients: ${sDemote}

▢ *📌Description* :
    • ${groupMetadata.desc?.toString() || 'a stranger'}
`.trim()
     conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['groupinfo', 'groupinfo', 'gpinfo']
handler.group = true

export default handler