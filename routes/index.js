var express = require('express');
var router = express.Router();

//Twilio import
var twilio = require('twilio');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC8ac4f51bc90ea83551e3486d7215ac32';
const authToken = '5918754442da8d92575d5f641064ec5b';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is twilio sms account and am testing and see',
     from: '+17329630828',
     to: '+254716209233'
   })
  .then(message => console.log(message.sid));

  
  res.status(200).json({
    result: "Sent succesfully",
    data: client.messages
  });
});

module.exports = router;
