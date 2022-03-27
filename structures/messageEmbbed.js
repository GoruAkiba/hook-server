const { MessageEmbed } = require("discord.js");

module.exports = class embed extends MessageEmbed {
  constructor(...args){
    super(...args);
  }

  fromObj(_obj){
    Object.keys(_obj).map(e => {
      this[e] = _obj[e]
    })
    return this
  }
}