const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let botembed = new Discord.RichEmbed()
    .setDescription("Sou um Bot para a Moderação! ")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("MC SKILS", bot.user.username)
    .addField("Criado no Visual Studio Code!", bot.user.createdAt);


    message.channel.send(botembed);

}



module.exports.help = {

  name:"botinfo"

}