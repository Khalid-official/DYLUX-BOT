
let handler = async (m, { conn, text }) => {
    function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

    text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

    if(!text && !m.quoted) return m.reply(`*❏ RESET USER*\n\nTag the user, write the number or reply to the message of the user you want to RESET`) if(isNaN(number)) return m.reply(`❏ The number you entered is not valid`)

      try { 
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    	let number = user.split('@')[0]
        delete global.global.db.data.users[user]
        conn.reply(m.chat, `*❏ USER REBOOT*\n\n✅ Rebooted to @${number} of the *DATABASE*`, null, { mentions: [user] })
    }
    
}
handler.help = ['reset-user']
handler.tags = ['owner']
handler.command = ['reset-user', 'resetuser'] 
handler.rowner = true

export default handler
