let handler = async (m, { conn, participants, usedPrefix, command }) => {




let khalid = participants.filter(v => !v.admin && v.id != conn.decodeJid(conn.user.id)).map(v => v.id);
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [khalid], 'remove')
m.reply(`Done, Command Executed!`)

}


handler.tags = ['group']
handler.command = ['kickall', 'kill']
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler