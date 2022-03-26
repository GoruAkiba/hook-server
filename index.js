// requirement
const fs = require('fs');
const structure = require("./structures/client.js");
const {Token, App_Id, App_Secret} = process.env; // make sure fulfill .env file
const guildId = "322044049991401474"; // let it blank, deploy command as global command

// client registration
const client = new structure(Token, App_Id, App_Secret, guildId); 

// load command assets
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

commandFiles.map(e => {
  const command = require(`./commands/${e}`);
  const command_name = command.data.name;
  
  client.commandManager.addCommand(command_name, command);
  console.log(`registering ${e} as ${command_name}`);
});

// register command
client.commandManager.submit();



(async ()=>{
  // do trial thing
})()


// Handler registration
require("./handler")(client);


// start webserver
require("./webserver")(client);