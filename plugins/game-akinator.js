import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (m.isGroup) return
let aki = global.db.data.users[m.sender].akinator
if (text == 'end') {
if (!aki.sesi) return m.reply('*[❗] You are currently not in an akinator session (game)*')
aki.sesi = false
aki.soal = null
m.reply('*[❗] successfully deleted akinator's session (game)*')
} else {
if (aki.sesi) return conn.reply(m.chat, '*[❗] you're still in an akinator session*', aki.soal)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`)
let anu = await res.json()
if (anu.status !== 200) throw '*[❗] error, try again later*'
let { server, frontaddr, session, signature, question, progression, step } = anu.result
aki.sesi = true
aki.server = server
aki.frontaddr = frontaddr
aki.session = session
aki.signature = signature
aki.question = question
aki.progression = progression
aki.step = step
let results2 = await translate(question, { to: 'is', autoCorrect: false })
let txt = `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*player: @${m.sender.split('@')[0]}*\n*question: ${resultes2.text}*\n\n `
txt += '*0 - Yes*\n'
txt += '*1 - No*\n'
txt += '*2 - I don't know*\n'
txt += '*3 - Probably yes*\n'
txt += '*4 - Probably not*\n\n'
txt += `*use the command ${usedPrefix + command} end to exit akinator session*`
let soal = await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
} catch {
m.reply('*[❗] Error, try again later*')
}}}
handler.menu = ['akinator']
handler.tags = ['game']
handler.command = /^(akinator)$/i
export default handler
