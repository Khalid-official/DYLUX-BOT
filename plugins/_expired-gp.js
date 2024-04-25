export async function all(m) {
     if (!m.isGroup)
         return
     let chats = global.db.data.chats[m.chat]
     if (!chats.expired)
         return !0
     if (+new Date() > chats.expired) {
         await this.reply(m.chat, `🔴 Goodbye shavales *${this.user.name}* will be leaving the group \n\nyour rental is over`)
         await this.groupLeave(m.chat)
         chats.expired = null
     }
}