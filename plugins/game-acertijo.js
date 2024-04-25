import fs from 'fs'
let timeout = 60000
let coin = 500
let handler = async(m, { conn, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, 'There are still unanswered riddles in this chat', conn.tekateki[id][0])
throw false
}
let tekateki = JSON.parse(fs.readFileSync(`./src/game/riddle.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
letcaption = `
ⷮ *${json.question}*
*• Time:* ${(timeout / 1000).toFixed(2)} seconds
*• Bonus:* +${poin} Exp
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json,
poin,
setTimeout(async() => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Time's up!\n*Response:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['riddle']
handler.tags = ['game']
handler.command = /^(riddle|guess|question|guess|tekateki)$/i
export default handler
