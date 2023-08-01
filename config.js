import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['254736958034', '☘𝖐𝖍𝖆𝖑𝖎𝖉-𝖙𝖊𝖈𝖍-𝖍𝖆𝖈𝖐☘', true],
  ['923470027813', '🌿x𝖎𝖗𝖆𝖙𝖔𝖘x🌿', true], 
  [''] 
] //Numeros de owner 

global.mods = ['254736958034'] 
global.prems = ['254736958034', '254793618247', '923470027813']
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
  'https://api-fgmods.ddns.net': 'TU-APIKEY' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'DyLux┃ᴮᴼᵀ' 
global.author = 'KHALID-tech' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff\n' 
global.dygp = 'https://github.com/Khalid-niccur'
global.fgsc = 'https://github.com/Khalid-niccur' 
global.fgyt = 'https://github.com/Khalid-niccur'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '💓𝕡𝕝𝕖𝕒𝕤𝕖 𝕒𝕨𝕒𝕚𝕥 𝕔𝕠𝕞𝕣𝕒𝕕𝕖⌛ \n*▰▰▰▱▱▱▱▱*'
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
