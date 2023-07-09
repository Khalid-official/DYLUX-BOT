import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗]🎶song name failed so please enter command plus song name/title of a song😜\ n\n*—◉ ✨example:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
const yt_play = await search(args.join(" "))
let additionalText = ''
if (command === 'play') {
additionalText = 'audio 🔊'
} else if (command === 'play2') {
additionalText = 'video 🎥'}
let text1 = `*◉——⌈🔊 YOUTUBE PLAY 🔊⌋——◉*\n
❏ 📌 *Title:* ${yt_play[0].title}
❏ 📆 *Posted:* ${yt_play[0].ago}
❏ ⌚ *Duration:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *Views:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *Author:* ${yt_play[0].author.name}
❏ ⏯️ *Channel:* ${yt_play[0].author.url}
❏ 🆔 *ID:* ${yt_play[0].videoId}
❏ 🪬 *Type:* ${yt_play[0].type}
❏ 🔗 *Link:* ${yt_play[0].url}\n
❏ *_Sending ${additionalText}, please wait．．．_*`.trim()
conn.sendMessage(m.chat, { image: { url: yt_play[0].thumbnail }, caption: text1 }, { quoted: m })
if (command == 'play') {
try {
letq = '128kbps'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)
let lolh = await lolhuman.json()
let n = lolh.result.title || 'mistake'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch {
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let info = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
} catch {
await conn.reply(m.chat, '*[❗] ‼error it was not possible to download the audio🔴', m)}}}
}
if (command == 'play2') {
try {
letqu = '360'
let q = qu + 'p'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${ttl}\n ▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let mediaa = await ytMp4(yt_play[0].url)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, thumbnail: mediaa.thumb, mimetype :'video/mp4' }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)
let lolh = await lolhuman.json()
let n = lolh.result.title || 'mistake'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${n}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, '*[❗] 🔴error it was not possible to download the video 🔴𝙾*', m)}}}
}} catch {
throw "*[❗𝐈𝐍𝐅𝐎❗] 🔴error please try again🔴*"}
}
handler.help = ["play", "play2"].map((v) => v + " <search>")
handler.tags = ["downloader"]
handler.command = /^play2?$/i
export default handler

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "en", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute,
