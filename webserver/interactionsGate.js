const nacl = require('tweetnacl');
const PUBLIC_KEY = process.env.PUBLIC_KEY || null;
module.exports = function(req, resp, next){
	try{
    const signature = req.get('X-Signature-Ed25519');
  	const timestamp = req.get('X-Signature-Timestamp');
  	const body = JSON.stringify(req.body); 

    if(!signature || !timestamp ) throw "cant find signature"
  	const isVerified = nacl.sign.detached.verify(
  		Buffer.from(timestamp + body),
  		Buffer.from(signature, 'hex'),
  		Buffer.from(PUBLIC_KEY, 'hex')
  	);
    
    if (!isVerified) throw "unverified";
    
    next();
    
  }catch(err){
    console.log(err);
    return resp.status(401).end('invalid request signature');
  }
}