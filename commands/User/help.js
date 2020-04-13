const Command = require('../../structures/Command');
const hastebin = require('hastebin-gen');
const Discord = require('discord.js');

class Help extends Command {
    constructor(client) {
        super({
            name: 'help'
        });
        
        this.client = client;
    }
    
    async exec(message, args) {
      let embed = new Discord.MessageEmbed()
      .setAuthor("Isx | Help")
      .setDescription("Isx is an mutlifunctionality based Discord Bot made in JavaScript")
      .setColor("#00008b")
      .setThumbnail(this.client.user.avatarURL())
      .addField("**Server Management [1]**", "")
      message.channel.send(embed)
    }
    
}

module.exports = Help;
