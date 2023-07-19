import { tmpdir } from 'os' 
 import path, { join } from 'path' 
 import { 
   readdirSync, 
   statSync, 
   unlinkSync, 
   existsSync, 
   readFileSync, 
   writeFileSync,
   watch 
 } from 'fs' 
 let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => { 
  
 let ar = Object.keys(plugins) 
     let ar1 = ar.map(v => v.replace('.js', '')) 
     if (!text) throw uhm.. where the text?\n\nexample:\n${usedPrefix + command} info 
 const path = join(__dirname, '../plugins/' + args[0] + '.js') 
     await writeFileSync(path, m.quoted.text)
 conn.reply(m.chat, Succes adding "plugins/${args[0]}.js", m) 
  
 } 
 handler.help = ['sf'] 
 handler.tags = ['owner'] 
 handler.command = /^(sf)$/i 
  
 handler.mods = true 
  
 export default handler
