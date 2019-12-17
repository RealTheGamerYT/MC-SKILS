
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
  
        return message.reply("⚠️ Comando apenas para admins!");
  
    
  
      let totalDelMsg = parseInt(args[0]) + 1;
  
      let apagadas = totalDelMsg - 1;
  
    
  
      async function clear() {
  
          try {
  
          message.delete();
  
          const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
  
          message.channel.bulkDelete(fetched);
  
          message.reply(`✔️ ${apagadas} Mensagens apagadas.`);
  
          } catch(e) {
  
              return message.reply("🤔 Algo de errado não está certo!");
  
          }
  
      }
  
      clear();
  
  }

module.exports.help = {

  name: "clear"

}}