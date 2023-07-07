let handler = async (m, { conn, text, args, usedPrefix, command }) => {

if (!args[0]) throw `✳️ Missing text for poll \n\n📌 Example : \n*${usedPrefix + command}* Message |as|xd`
if (!text.includes('|')) throw `✳️ Separate polls with *|* \n\n📌 Example : \n*${usedPrefix + command}* my poll|n |how|xd|ok`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
}
return conn.sendPoll(m.chat, `📊 *Poll requested by:* ${name}\n\n*Message:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <hello|how|xd>']
handler.tags = ['group']
handler.command = ['poll', 'poll', 'polling']
handler.group = true

export default handler