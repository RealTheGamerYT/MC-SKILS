const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  
if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send({ embed: { description: `<:ateção:580507968525828116> **|** ${message.author} Você não tem permissão para executar esse comando.`, color: 0x00F40101 } });

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let reason = args.slice(1).join(' ');

  if (!member) return message.channel.send({ embed: { description: `<:anger:580507968525828116>**|** ${message.author} Por Favor, mencione o usuário.`, color: 0x00F40101 } });
  if (!member.kickable) return message.channel.send({ embed: { description: `<:anger:580507968525828116> **|** ${message.author} Você não pode kickar esse usuário por ele ser de um cargo maior ou igual ao seu!`, color: 0x00F40101 } });
  
await member.kick(reason).catch(error => message.channel.send(`<a:staff:580507976654127129> Desculpe, ocorreu algum erro. Error: ${error}`));

  let kickEmbed = new Discord.RichEmbed()
  
    .setTitle('Kick')
    .setDescription(`${member.user.tag} foi kickado pelo motivo ${reason}`)
    message.channel.send(kickEmbed);
};

exports.help = {
    name: "kick"
}