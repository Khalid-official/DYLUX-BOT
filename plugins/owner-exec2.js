import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(_exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
   if (conn.user.jid != conn.user.jid) return
   m.reply('✅ Running...')
   let o
   try {
     o = await exec(command.trimStart() + ' ' + text.trimEnd())
   } catch(e) {
     or = e
   } finally {
     let { stdout, stderr } = or
     if (stdout.trim()) m.reply(stdout)
     if (stderr.trim()) m.reply(stderr)
   }
}
handler.help = ['$']
handler.tags = ['advanced']
handler.customPrefix = /^[$] /
handler.command = new RegExp
handler.owner = true
export default handler