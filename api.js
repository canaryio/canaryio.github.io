var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    exec = require('child_process').exec,
    fs = require('fs'),
    url = require('url'),
    user,
    email;

app.use(express.static(__dirname));

server.listen(process.env.PORT || 8124);

app.all('/*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/pass', function(req, res){
    console.log('user: ' + req.query.user);
    console.log('email: ' + req.query.email);
    user = req.query.user;
    email = req.query.email;
        fs.appendFile("users.log", "Name: " + user + "  Email: " + email + "\r\n", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File Saved.");
        }
    });
    res.send("thanks");
});