const util = require("../utils");
const Row = require("./row.js");
module.exports = class interactions{
  constructor(req, resp, client){
    this.req = req;
		this.resp = resp;
    
    this.row = Row;
    this.fromObj(req["body"])
  }

  fromObj(_obj){
    Object.keys(_obj).map(e => {
      this[e] = _obj[e]
    })
    return this
  }

  reply(...args){
    var content = util.formatingContent(...args);
    this.resp.json(content);
  }

  err(_err){
    return this.reply(`err: \`\`\`${_err.message}\`\`\``, null, null, true)
  }
}