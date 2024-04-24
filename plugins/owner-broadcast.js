
import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `✅ ${mssg.txdone} *${mssg.total}:* ${chats.length} chats`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast|tx/i.test(teks) ? teks : `*${mssg.tx.toUpperCase()} ┃ BROADCAST 🔊*\n_____________________\n\n${teks}`), true).catch(_ => _)
  //m.reply('✅ Se transmitió a todos los chats :)')
}
handler.help = ['tx']
handler.tags = ['owner']
handler.command = /^(broadcast|bc|tx)$/i
handler.owner = true

export default handler
