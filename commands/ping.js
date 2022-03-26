const { SlashCommandBuilder } = require('@discordjs/builders');
const {commandUssage} = require("../utils");

module.exports = {
	hiden: false,
	owner: false,
	nsfw: false,
	EPHEMERAL: true,
  data : new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get server latency"),
  ussage : function(){ return commandUssage(this)},
	exec,
  componentInteract,
  autoComplete
}

function exec(client, messaging ){
	var ping = new Date().getTime() - new Date(messaging.req.headers["x-signature-timestamp"]*1000); 
	return messaging.reply(`pong! \`${ping}ms\` from Webhook server`,null,null,true);
}

function componentInteract(client, messaging ){
  // do something
}

function autoComplete(client, messaging ){
  // do something
}