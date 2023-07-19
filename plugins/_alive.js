import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `https://telegra.ph/file/7d2018e682bb9c09439c4.jpg
╭───[*DyLux ┃ ᴮᴼᵀ*]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I'm *DyLux  ┃ ᴮᴼᵀ*\n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│ *DyLux  ┃ ᴮᴼᵀ*
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Khalid_niccur
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/254736958034
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .Ai text \n⬡│- Artificial intelligence 
│╰──────────────
╰────────═┅═───────
*Thank you for choosing *DyLux ┃ ᴮᴼᵀ*! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
