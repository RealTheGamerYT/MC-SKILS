const Discord = require ('discord.js'); 

exports.run = async (bot, message, args) => { 

  exports.run = async (client, message) => {

    const ms = await message.channel.send("Ping?");

	const clientms = ms.createdTimestamp - message.createdTimestamp;

	ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.round(client.ping) + 'ms');

}

  module.exports.help = {

    name:"ping"

  }}