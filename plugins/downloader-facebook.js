import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
    if (!args[0]) throw `Masukan URL ${command}..`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `š *Url:* ${url}`, m)
    } catch {
if (!text) throw `Masukan URL ${command}..`
let res = await axios('https://violetics.pw/api/downloader/facebook?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š Quality: ' + v.subname,
		description: '\nā ID: ' + json.result.id + '\nā²ļø Title: ' + json.result.meta.title + '\nš URL: ' + v.url + '\nš Source: ' + json.result.meta.source + '\nšļø Views: ' + json.result.meta.duration + '\nš SD: ' + json.result.sd.url + '\n\nš HD: ' + json.result.hd.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
    }
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f(acebook(d(own(load(er)?)?|l))?|b(d(own(load(er)?)?|l))?)$/i

export default handler
