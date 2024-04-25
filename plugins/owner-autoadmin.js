/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[❗]  Hello created, as you are already admin of this group*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗]*Error was not possible to admin *')}}
handler.command = /^autoadmin$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler