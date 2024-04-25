
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   m.reply(`┏━━🤖 _𝗥𝗨𝗡𝗧𝗜𝗠𝗘 𝗕𝗢𝗧:_🤖━━┓
┃ 🤡  *Bot Name:* ᴛʜᴇ ᴅʏʟᴜx ʙᴏᴛ 
┃ 💻  *Platform:* ʀᴇᴘʟɪᴛ
┃ 📣  *Prefix:* . 
┃☘️𝗤𝘂𝗼𝘁𝗲==𝗢𝗙==𝗧𝗵𝗲==𝗗𝗮𝘆🌿==
┃🚀🚀𝗡𝗢𝗧𝗛𝗜𝗡𝗚 𝗜𝗦 𝗜𝗠𝗠𝗣𝗢𝗦𝗜𝗕𝗟𝗘, 𝗘𝗩𝗘𝗡 𝗧𝗛𝗘 𝗪𝗢𝗥𝗗 𝗜𝗧𝗦 𝗦𝗘𝗟𝗙 𝗜𝗦 "𝗜 𝗠 𝗣𝗢𝗦𝗦𝗜𝗕𝗟𝗘" 🚀🚀
┃ *ʙᴏᴛ ʜᴀꜱ ʙᴇᴇɴ ᴀᴄᴛɪᴠᴇ ꜰᴏʀ...*
┗━━━━━━━━━━━━━━━━━━━┛ \n\n${muptime}`) 
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
  }