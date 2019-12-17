const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!bUser) return message.channel.send("Não achei o Usuário!");

    let bReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Não posso fazer amigo!");

    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Essa pessoa não pode ser kickada!");



    let banEmbed = new Discord.RichEmbed()

    .setDescription("~Ban~")

    .setColor("#0000FF")

    .addField("Usuário Banido", `${bUser} with ID ${bUser.id}`)

    .addField("Banido por", `<@${message.author.id}> with ID ${message.author.id}`)

    .addField("Banido em", message.channel)

    .addField("Tempo", message.createdAt)

    .addField("Movito", bReason);



    let incidentchannel = message.guild.channels.find(`name`, "incidents");

    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");



    message.guild.member(bUser).ban(bReason);

    incidentchannel.send(banEmbed);

}



module.exports.help = {

  name:"ban"

}