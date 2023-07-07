import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'
let handler = async(m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Enter a Tiktok link\n\n 📌 Example : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
if (!args[0].match(/tiktok/gi)) throw `❎ check that the link is from tiktok`
m.react(rwait)

try {
     let p = await fg.tiktok(args[0])
     let you = `
┌─⊷ TIKTOK
▢ *Name:* ${p.nickname}
▢ *Username:* ${p.unique_id}
▢ *Duration:* ${p.duration}
▢ *Description:* ${p.description}
└───────────`
     conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
     m.react(done)
     } catch {
     try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
     const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
     if (!url) throw '❎ Failed to download video'
     conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ *TIKTOK DL-2*
▢ *Nickname:* ${nickname} ${description ? `\n▢ *Description:* ${description}` : ''}
└───────────`, m)
m.react(done)
} catch {
     m.reply(`❎ Failed to download video`)
}
}
    
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler