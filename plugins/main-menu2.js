import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use these commands without the prefix_

▢ If you have more audios
send me by t.me/fgsupp_bot the *audio + command* with which it will respond

┌─⊷ *AUDIOS*
▢ Bot
▢ Good morning
▢ Good afternoon
▢ Good night
▢ Fine gentlemen
▢ sad
└──────────────
`

     let pp = './src/fg_logo.jpg'
     conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios']

export default handler