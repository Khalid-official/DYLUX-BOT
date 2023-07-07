//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
     let coin = 300
     let reseqv = `✳️ Select rock/paper/scissors\n\nExample : *${usedPrefix + command}* paper\n`
     if (!text) throw reseqv
     var astro = Math.random()

     if (astro < 0.34) {
         star = 'stone'
     } else if (astro > 0.34 && astro < 0.67) {
         astro = 'scissors'
     } else {
         star = 'paper'
     }


     if (text == star) {
       global.db.data.users[m.sender].exp += 100
         m.reply(`▢ *Tie*\n\n‣ You : ${text}\n‣ DyLux : ${astro}\n\n🎁 Points (±)100 XP`)
     } else if (text == 'stone') {
         if (astro == 'scissors') {
             global.db.data.users[m.sender].exp += 300
             m.reply(`▢ *You won* 🎊\n\n‣ You : ${text}\n‣ DyLux : ${astro}\n\n🎁 Points *+${poin} XP*`)
         } else {
           global.db.data.users[m.sender].exp -= 300
             m.reply(`▢ *You lost*\n\n‣ You : ${text}\n‣ DyLux : ${astro}\n\n Points *-${poin} XP*`)
         }
     } else if (text == 'scissors') {
         if (astro == 'paper') {
             global.db.data.users[m.sender].exp += 300
             m.reply(`▢ *You won* 🎊\n\n‣ You : ${text}\n‣ DyLux : ${astro}\n\n🎁 Points *+${poin} XP*`)
         } else {
           global.db.data.users[m.sender].exp -= 300
             m.reply(`▢ *You lost*\n\n‣ You : ${text}\n‣ DyLux : ${astro}\n\nPoints *-${poin} XP*`)
         }
     } else if (text == 'paper') {
         if (star == 'stone') {
             global.db.data.users[m.sender].exp += 300
             m.reply(`▢ *You won* 🎊\n\n‣ You : ${text}\n‣ DyLux : ${astro}\n\n🎁 Points *+${poin} XP*`)
         } else {
           global.db.data.users[m.sender].exp -= 300
             m.reply(`▢ *You lost*\n\n‣ You : ${text}\n‣ DyLux : ${astro}\n\nPoints *-${poin} XP*`)
         }
     } else {
         throw reseqv
     }
}
handler.help = ['ppt <rock/paper/scissors>']
handler.tags = ['game']
handler.command = ['ppt']
handler.register = false

export default handler