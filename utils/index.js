module.exports = {
  formatingContent(...args){
    switch (typeof(args[0])){
      case "object":        
        var content = "";
        var [embed, component, EPHEMERAL] = args;  
      break;
  
      case "string":
        var [content, embed, component, EPHEMERAL] = args;  
      break;
      
      default:
      throw "cant find the props"
    }
  
    embed = !embed? [] : Array.isArray(embed)? embed : [embed];
    componen = !component? []: Array.isArray(component)? component: [component]; 
    
    return {
      "type": 4,
      "data": {
        "tts": false,
        "content": content,
        "embeds": embed,
        "components": component,
        "allowed_mentions": { "parse": [] },
        "flags": EPHEMERAL? 64 : 0
      }
    }
  },

  commandUssage : function(_obj){
    return _obj.data.options.length? _obj.data.options.map(e => {
      return e.required? `<${e.name}>` : `[${e.name}]`;
    }).join(" ") : null;
  }
}