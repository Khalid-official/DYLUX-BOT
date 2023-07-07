//import db from '../lib/database.js'
let reg = 40
let handler = async (m, { conn, args, usedPrefix, command }) => {
     let fa = `
How much you want to bet?

📌 Example:
*${usedPrefix + command}* 100`.trim()
     if (!args[0]) throw fa
     if (isNaN(args[0])) throw fa
     let bet = parseInt(args[0])
     let users = global.db.data.users[m.sender]
     let time = users.lastslot + 10000
     if (new Date - users.lastslot < 10000) throw `⏳ Wait for *${msToTime(time - new Date())}* to use again`
     if (bet < 100) throw '✳️ Minimum bet is *100 XP*'
     if (users.exp < bet) {
         throw `✳️ You don't have enough *XP*`
     }

     let emojis = ["🕊️", "🦀", "🦎"];
     let a = Math.floor(Math.random() * emojis.length);
     let b = Math.floor(Math.random() * emojis.length);
     let c = Math.floor(Math.random() * emojis.length);
     let x = [],
         and = [],
         z = [];
     for (let i = 0; i < 3; i++) {
         x[i] = emojis[a];
         a++;
         if (a == emojis.length) a = 0;
     }
     for (let i = 0; i < 3; i++) {
         y[i] = emojis[b];
         b++;
         if (b == emojis.length) b = 0;
     }
     for (let i = 0; i < 3; i++) {
         z[i] = emojis[c];
         c++;
         if (c == emojis.length) c = 0;
     }
     let end;
     if (a == b && b == c) {
         end = `🎁 YOU WON\n *+${bet + bet} XP*`
         users.exp += bet + bet
     } else if (a == b || a == c || b == c) {
         end = `🔮 You almost made it keep trying :) \nHave *+${reg} XP*`
         users.exp += reg
     } else {
         end = `😔 You lost *-${bet} XP*`
         users.exp -= bet
     }
     users.lastslot = new Date * 1
     return await m.reply(
         `
        🎰 ┃ *SLOTS*
      ───────────
        ${x[0]} : ${y[0]} : ${z[0]}
        ${x[1]} : ${y[1]} : ${z[1]}
        ${x[2]} : ${y[2]} : ${z[2]}
      ───────────
         🎰┃🎰┃ 🎰
        
${end}`)
}
handler.help = ['slot <bet>']
handler.tags = ['game']
handler.command = ['slot']

export default handler

function msToTime(duration) {
     var milliseconds = parseInt((duration % 1000) / 100),
         seconds = Math.floor((duration / 1000) % 60),
         minutes = Math.floor((duration / (1000 * 60)) % 60),
         hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

     hours = (hours < 10) ? "0" + hours : hours
     minutes = (minutes < 10) ? "0" + minutes : minutes
     seconds = (seconds < 10) ? "0" + seconds : seconds

     return seconds + " Second(s)"
}