
let handler = async(m, { conn, usedPrefix, command }) => {
	m.react(rwait)
	
	let res = await conn.getFile(global.API('fgmods', '/api/img/ai-face', { }, 'apikey'))
	let img = res.data
        await conn.sendFile(m.chat, img, 'img.jpg', `✅ This person does not exist, it was generated with AI`, m)
	m.react(done) 
}
handler.help = ['person']
handler.tags = ['img']
handler.command = ['persona', 'person']

export default handler
