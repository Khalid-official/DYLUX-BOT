
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
❤ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM💚`
let img = 'https://telegra.ph/file/6ee6c664d2b4d28a0a0fe.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler