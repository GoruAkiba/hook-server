module.exports = class CmdManager{
  constructor(client){
    this.collections = new Map();
    this.cached = [];
    this.rest = client.rest;
    this.routes = client.routes;
    this.clientId = client.App_Id;
    this.guildId = client.guildId;
    
  }

  addCommand(key, cmd){
    return this.collections.set(key, cmd);
  }

  get(key){
    return this.collections.get(key)
  }

  keys(){
    var keys = [];
    this.collections.forEach((e,i) => keys.push(i));
    return keys;
  }

  submit(filter){
    var commands_name = typeof filter == "function"
      ? this.keys()
        .filter(e => filter(e))
      : this.keys();
    var commands = commands_name.map(e => this.get(e).data.toJSON());

    var _url = this.guildId
      ? this.routes
        .applicationGuildCommands(this.clientId, this.guildId)
      : this.routes
        .applicationCommands(this.clientId);
        
    return this.rest.put(_url, {body:commands});
  }

  async getCached(){
    var _url = this.guildId
      ? this.routes
        .applicationGuildCommands(this.clientId, this.guildId)
      : this.routes
        .applicationCommands(this.clientId);
    
    var res = await this.rest.get(_url);
    this.cached = res;
    return res;
  }

  async deleteCommand(_ids){
    
    if (typeof _ids !== "object") {
      var _url = this.guildId
      ? this.routes
        .applicationGuildCommand(this.clientId, this.guildId, _ids)
      : this.routes
        .applicationCommand(this.clientId, _ids)
      
      return this.rest.delete(_url);
    }

    _ids.map(_id => {
      var _url = this.guildId
      ? this.routes
        .applicationGuildCommand(this.clientId, this.guildId, _id)
      : this.routes
        .applicationCommand(this.clientId, _id)
        
      this.rest.delete(_url)
    })
  }
  
}