import fetch from 'node-fetch'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] enter a request a command to use the CHATGPT function*\n\n*—◉ Examples of command requests*\n*◉ ${usedPrefix + command} Reflection on the Merlina series 2022 from netflix*\n*◉ ${usedPrefix + command} JS code for a card game*`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let syms = `You will act as a WhatsApp Bot which was created by BrunoSobrino, you will be The Mystic - Bot.`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())
} catch {
try {
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())
} catch {
try {
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoNephew&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())
} catch {
throw `*[❗] error , try again*`
}}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
