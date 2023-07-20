//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'ABOUT', 'game': 'GAMES', 'con': 'LEVEL and ECONOMY', 'rg': 'REGISTRATION',
  'sticker': 'STICKER',
   'img': 'IMAGE',
   'maker': 'MAKER',
   'prem': 'PREMIUM',
   'group': 'GROUP',
   'nable': 'EN/DISABLE OPTIONS',
   'anime': 'ANIME',
   'rnime': 'ANIME REACTION',
   'dl': 'DOWNLOADS',
   'tools': 'TOOLS',
  'fun': 'FUN',
  'cmd': 'DATABASE',
  'nsfw': 'NSFW +18', 
  'ansfw': 'NSFW ANIME',
  'owner': 'OWNER', 
  'advanced': 'AVANZADO',
}
const defaultMenu = {
  before: `
◈ ━━━━━ *DyLux  ┃ ᴮᴼᵀ* ━━━━━ ◈
 👋🏻 _Hello_ *%name*
🚀 Level : *%level*
👥 Users : %totalreg
⏳ Active time : %muptime
─────────────
꧁🧚‍♀𝗛𝗲𝗹𝗹𝗼 𝗺𝘆 𝗵𝘂𝗺𝗯𝗹𝗲😊 𝘂𝘀𝗲𝗿, 𝗺𝘆 𝗻𝗮𝗺𝗲 𝗶𝘀 𝗗𝘆𝗹𝘂𝘅 𝗯𝗼𝘁 𝘀𝘆𝘀𝘁𝗲𝗺𝘀, 𝗮 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗞𝗛𝗔𝗟𝗜𝗗-𝗧𝗘𝗖𝗛𝗡𝗢𝗟𝗢𝗚𝗜𝗘𝗦🤩 Wa.me/254736958034 𝗸𝗶𝗻𝗱𝗹𝘆 𝗱𝗺 𝗵𝗶𝗺 𝗳𝗼𝗿 𝗮𝗻𝘆 𝗲𝗻𝗾𝘂𝗿𝗶𝗲𝘀 𝗼𝗿 𝗲𝗿𝗿𝗼𝗿𝘀 🧚‍♀꧂
─────────────
%readmore
Ⓟ = Premium
ⓓ = Diamonds
----- ----- ----- ----- -----
   ≡ *MENU LIST*
`.trimStart(),
  header: '┌─⊷ *%category*',
  body: '▢ %cmd %isdiamond %isPremium',
  footer: '└───────────\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _pa
