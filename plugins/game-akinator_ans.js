import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
const teks = '*0 - Yes*\n*1 - No*\n*2 - Don't know*\n*3 - Probably yes*\n*4 - Probably no*\n*5 - Return to previous question *'
export async function before(m) {
if (global.db.data.users[m.sender].banned) return
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
let aki = global.db.data.users[m.sender].akinator
if (!aki.sesi || m.quoted.id != aki.soal.key.id) return
if (!somematch(['0','1','2','3','4','5'], m.text)) return this.sendMessage(m.chat, { text: `* [❗] Answer with the numbers 𝟷, 𝟸, 𝟹, 𝟺 𝚘 𝟻*\n\n${teks}` }, { quoted: aki.soal })
let { server, frontaddr, session, signature, question, progression, step } = aki
if (step == '0' && m.text == '5') return m.reply('*[❗] there are no more questions before this, this is the first question*')
let res, anu, soal
try {
if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkeysapi}&server=${server}&session=${session }&signature=${signature}&step=${step}`)
else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkeysapi}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=$ {signature}&step=${step}&answer=${m.text}`)
anu = await res.json()
if (anu.status != '200') {
aki.sesi = false
aki.soal = null
return m.reply('*[❗] akinator session expired, game over*')}
anu = anu.result
if (anu.name) {
await this.sendMessage(m.chat, { image: { url: anu.image }, caption: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*Akinator thinks your character is ${anu.name}*\n_${ anu.description}_`, mentions: [m.sender] }, { quoted: m })
aki.sesi = false
aki.soal = null
} else {
let results = await translate(`${anu.question}`, { to: 'es', autoCorrect: true })
soal = await this.sendMessage(m.chat, { text: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n*progress: ${anu.step} (${anu.progression.toFixed(2)} %)*\n\n *player: @${m.sender.split('@')[0]}*\n*question: ${resultes.text}*\n\n${teks}`, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
aki.step = anu.step
aki.progression = anu.progression
}} catch(e) {
aki.sesi = false
aki.soal = null
m.reply('*[❗] Error, try again later*')}
return !0 }
function somematch( data, id ){
let res = data.find(the => the === id )
return res ? true: false; }
