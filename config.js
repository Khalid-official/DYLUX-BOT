import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.nomorbot = '254736958034' //Nomor Bot
global.owner = [
  ['254736958034', '🐝KHALID-TECH🐝', true],
  ['923470027813'], '🌿xIRATOS CONTRIBUTORx🌿'
] //Numeros

global.mods = ['254736958034'] 
global.prems = ['254736958034', '254716216161', '923470027813']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'DyLux┃ᴮᴼᵀ' 
global.author = 'KHALID-tech' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff\n' 
global.dygp = 'https://github.com/Khalid-niccur/'
global.fgsc = 'https://github.com/Khalid-niccur/DYLUX-BOT' 
global.fgyt = 'https://t.co/3frSXMbUH2'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '💓𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗢𝗨𝗧𝗣𝗨𝗧 𝗖𝗢𝗠𝗥𝗔𝗗𝗘⌛ \n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
