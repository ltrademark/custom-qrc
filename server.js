//preamble
const express = require("express");
const app = express();
const qr = require('./qrcode')

//allow for static asset serving, like html, css and js files
app.use(express.static("public"));

//HTML routes
app.get("/", (req, res)=> {
  res.sendFile(__dirname + '/views/index.html');
});

//QR Generation
app.get("/qrcode", qr.index);

// listen for requests :)
var listener = app.listen(process.env.PORT, async () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});