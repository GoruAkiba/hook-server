module.exports = function (req, resp, client) {
  // initial interactions
  const _interactions = new client.interactions(req, resp, client);
  const _data = req.body.data;
  
  switch(req.body["type"]){
    case 4:
			// APPLICATION_COMMAND_AUTOCOMPLETE
			client.emit("AUTOCOMPLETE", _interactions, _data)
		break;
      
    case 3:
			// MESSAGE_COMPONENT
			client.emit("MESSAGE_COMPONENT", _interactions, _data)
		break;
      
    case 2:
			// APPLICATION_COMMAND
			client.emit("APPLICATION_COMMAND", _interactions, _data)
		break;
      
		case 1:
		default:
			// ping handler
			return resp.json({
				"type": 1
			})
		break;
	}
}