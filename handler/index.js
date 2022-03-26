module.exports = function (client) {
  const commandCollections = client.commandManager.collections;
  
  // APPLICATION_COMMAND_AUTOCOMPLETE
  client.on("AUTOCOMPLETE", (interactions, data) => {
    // do something
    try{
      var {name} = data;
      var comid = client.commandManager.get(name);
      if(comid) comid.autoComplete(client, interactions);

    }catch(_err){
      interactions.err(_err);
    }
  })

  // MESSAGE_COMPONENT
  client.on("MESSAGE_COMPONENT", (interactions, data) => {
    // do something
    try{
      var {name} = data;
      var comid = client.commandManager.get(name);
      if(comid) comid.componentInteract(client, interactions);

    }catch(_err){
      interactions.err(_err);
    }
  })

  // APPLICATION_COMMAND
  client.on("APPLICATION_COMMAND", (interactions, data) => {
    // do something
    try{
      var {name} = data;
      var comid = client.commandManager.get(name);
      if(comid) comid.exec(client, interactions);

    }catch(_err){
      interactions.err(_err);
    }
  })

}