//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
   if (text) {
     global.db.data.chats[m.chat].sWelcome = text
     m.reply('✅ Welcome message configured')
   } else throw `✳️ Enter Welcome message\n\n@user (mention)\n@group (Group name)\n@desc (group description)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome']
handler.admin = true
handler.owner = false

export default handler