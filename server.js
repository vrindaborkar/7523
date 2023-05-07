const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
var bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload')


const https = require('https');
const fs = require('fs');




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('client/build'))
app.use(fileUpload({
  useTempFiles:true
}))

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/payment.routes")(app);
require("./routes/stalls.routes")(app);
require("./routes/twilio.routes")(app);

mongoose.connect(process.env.DB_CONNECTION, 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false} , 
    console.log("connected to db"));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// certificates
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/wingrowmarket.com/privkey.pem','utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/wingrowmarket.com/cert.pem','utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/wingrowmarket.com/chain.pem','utf8');

// const credentials = {
//   key: privateKey,
//   cert: certificate,
//   ca: ca

// };

// const https_server = https.createServer(credentials,app)


// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
app.timeout = 120000;
// https_server.listen('8443',() => {
//   console.log("https server running at 8443");
// })
