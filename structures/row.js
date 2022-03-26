const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = class Row extends MessageActionRow {
  constructor(){
    super()
  }

  addButton(...args){
    var [label, custom_id, style] = args;
    var bt = new MessageButton()
      .setLabel(label)
      .setCustomId(custom_id)
      .setStyle(style);

    this.addComponents(bt);

    return this
  }
}