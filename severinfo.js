const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.iconURL;

    let serverembed = new Discord.RichEmbed()

    .setDescription("Servidor Info")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("MC' SKILS", message.guild.name)
    .addField("Data 15/02/2019", message.guild.createdAt)
    .addField("Você entrou!", message.member.joinedAt)
    .addField("Total de Membros", message.guild.memberCount);

    message.channel.send(serverembed);

}


module.exports.help = {

  name:"serverinfo"

}