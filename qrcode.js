const qrcode = require('qrcode')

const generateStream = async (data) => {
  let datauri =  await qrcode.toDataURL(data.replace(':/', '://'));
  let base64 = datauri.split('base64,').pop();
  
  return new Buffer.from(base64, 'base64');
}

exports.index = async (req, res) => {
  if(("query" in req) && ("data" in req.query)) {
    let qr = await generateStream(req.query.data);
    
    res.setHeader('Content-Type', 'image/png')  
    res.end(qr)
  } else {
    res.end("Error, please use the following url schema: /qrcode?data=<content goes here here>")
  }
}