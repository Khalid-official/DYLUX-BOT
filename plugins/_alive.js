import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption =  `
╭───[ *DyLux ┃ ᴮᴼᵀ* ]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I\'m *DyLux  ┃ ᴮᴼᵀ*\n⬡│ I\'m up and running! 🚀
│╰────────────────────
┠───[ *BOT INFO* ]────╮
│╭────────────────────
┴│     DyLux┃ᴮᴼᵀ
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Khalid_niccur
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/254736958034
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ *HOW TO USE* ]────⋆
┴│💡 *Some commands you can use:*
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .Ai text \n⬡│- Artificial intelligence 
│╰──────────────
╰────────═┅═───────
*Thank you for choosing *DyLux ┃ ᴮᴼᵀ*! *
`.trim()
conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6487c1192de397d824ad9.jpg' }, caption: caption, footer: `Follow me on instagram:\n\tinstagram.com/itx_ahmad.ali` }, { quoted: m })
  //m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler