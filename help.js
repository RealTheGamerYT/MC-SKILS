const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  message.channel.sendMessage({
    embed: {
      color: 363933,
    description: "📪" + message.author + " Os comandos foi enviado no seu privado"
    }
  })

  let msg1 = new Discord.RichEmbed()
  .setColor('#36393e')
  .setTitle('📋**Help**📋')
  .setThumbnail(bicon)
  .setDescription("<a:100:500147138425257984>Veja todos os meus comandos... E Aprendaa me usar !<a:ok_hand:500147138425257984>")
  .addField('Administrativo' + ' - Clique 👮', "``.!ban | .!unban | .!kick``" , true)
  .addField('Voltar', 'Clique 🔙', true)
  .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
  
  let msg2 = new Discord.RichEmbed()
  .setTitle('👮**Administrador**👮')
  .setColor('#36393e')
  .setThumbnail(bicon)
  .addField('.!ban | .!kick | .!say \n .!ping | .!clear | !botinfo | !severinfo')
  .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
  message.author.send(msg1).then(msg=>{
  msg.react('🔙').then(r=>{
  msg.react('👮')
  })
  
  const help = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;  //colocar emoji diferente troca name por id
  const help2 = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id; //colocar emoji diferente troca name por id
  

  const helpp = msg.createReactionCollector(help, { time: 60000 });
  const helpp2 = msg.createReactionCollector(help2, { time: 60000 });

  helpp.on('collect', r => { 
      msg.edit(msg1);
      r.remove(message.author.id)
    })
  helpp2.on('collect', r2 => { 
      msg.edit(msg2);
      r2.remove(message.author.id)
    })
  })
}