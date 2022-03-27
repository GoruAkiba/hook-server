// required
const ee = require('event-emitter');
const cmdManager = require("./CmdManager.js");

module.exports = class client{
  constructor(...args){
    var [token, app_id, app_secret, guildId] = args;
    this.Token = token;
    this.App_Id = app_id;
    this.App_Secret = app_secret;
    this.guildId = guildId || null;

    const { REST } = require('@discordjs/rest');
    const { Routes } = require('discord-api-types/v9');


    this.util = require("../utils");
    this.interactions = require("./interactions.js");
    this.rest = new REST({ version: '9' }).setToken(this.Token);
    this.routes = Routes;
    this.commandManager = new cmdManager(this);
    this.messageEmbed = require("./messageEmbed.js");
    return ee(this);
    // return this
  }
}