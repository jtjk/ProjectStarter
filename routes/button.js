var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ response: 'Ok' });
    sendNotification();
});

function sendNotification() {
    var azure = require('azure');
    var connectionString = "Endpoint=sb://dublinhub2.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=YwgDDVJ9U7lFznfQaoXpAW/Zcct3D/wnRKATrqSGlcg=";
    var notificationHubService = azure.createNotificationHubService('dublinhub2', connectionString);
    console.log("sendNotification()");
    var payload = { data: { title: 'title', text: 'Hello!' } };
    notificationHubService.gcm.send(null, payload, function(error){
       if(!error) console.log("sent");
       else console.log(error);
    });
}

module.exports = router;
