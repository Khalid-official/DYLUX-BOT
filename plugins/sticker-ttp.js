import { sticker } from '../lib/sticker.js'
import fg from 'api-dylux'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    
     if (!text) throw `✳💕💫 Send the text\n\n📌Example *${usedPrefix + command}* dylux-fg`
     let color = '2FFF2E' //color
     let res = await fg.ttp(text, color)
     let sticker = await sticker(null, res.result, global.packname, global.author)
     if (stiker) return await conn.sendFile(m.chat, stiker, '', '', m, null, rpl)
     throw sticker.toString()
}
handler.help = ['ttp <text>']
handler.tags = ['sticker']
handler.command = ['ttp']

export default handler