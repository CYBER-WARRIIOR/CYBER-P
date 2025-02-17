import { spawn } from 'child_process'
let handler = async (m, { conn }) => {
    let thumbnail = 'https://www.guruapi.tech/K.jpg'
  let fgg = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `GURU-BOT`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'GURU-BOT'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    if (conn.user.jid == conn.user.jid) {
    await m.reply('_*♻️Restarting Bot...*_\n _*Wait a moment*_')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart'] 

handler.rowner = true

export default handler
