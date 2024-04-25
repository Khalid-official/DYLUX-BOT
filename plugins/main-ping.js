import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async(m, { conn }) => {
          let timestamp = speed();
          let latensi = speed() - timestamp;
          exec(`neofetch --stdout`, (error, stdout, stderr) => {
           let child = stdout.toString("utf-8");
           let ssd = child.replace(/Memory:/, "Ram:");
           m.reply(`${ssd}┏🚀 _𝘽𝙊𝙏 𝙎𝙋𝙀𝙀𝘿 𝙄𝙉 𝙢/𝙨_🚀┓
 : ${latensi.toFixed(4)} _ms_`);
             });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler