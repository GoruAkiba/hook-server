const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const emitter = require("../handler/emitter.js");
// server config
const _PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// verif hook midleware
const interactionsGateMidleware = require("./interactionsGate.js");

module.exports = function(client){
  app.post("/interactions", interactionsGateMidleware, (req, resp, next) => {
    return emitter(req, resp, client);
  });
  
  app.get("/", (req, resp) => {
  	resp.json({
  		status: "success"
  	})
  });
  
  
  app.listen(_PORT, ()=>{
  	console.log("app listen to Port: "+_PORT);
  })
}