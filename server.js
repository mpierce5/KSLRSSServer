'use strict';
var Feed = require('rss-to-json');

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
GLOBAL.KSLCategory = '';

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});
  });

  socket.on('change-category', (category) => {
    if(category == -1){
      GLOBAL.KSLCategory = '';
    }
    else{
      GLOBAL.KSLCategory = '&category=' + category;
    }
    console.log('category changed to ' + GLOBAL.KSLCategory);
  });
});

var lastPostedDate = 0;
setInterval(function(){
  Feed.load('http://www.ksl.com/resources/classifieds/rss_.xml?nid=231&sid=0&viewNumResults=3' + GLOBAL.KSLCategory, function(err, rss){
    for(var i = rss.items.length-1; i >= 0; i--){
      if(rss.items[i].created > lastPostedDate){
        lastPostedDate = rss.items[i].created;
        var d = new Date(rss.items[i].created);
        io.emit('ksl-feed-item', {type:'ksl-feed-item', text: JSON.stringify(rss.items[i])});
      }
    }
  });
  }, 3000
);


app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(5000, () => {
  console.log('started on port 5000');
});
