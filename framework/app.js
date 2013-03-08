
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongo = require('mongodb');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.get('/selectCA', function(req, res){
  //var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('celladb', server);
  db.open(function(err, db) {
    if(!err) {         
      db.collection('maps', function(err, collectionref) {            
        var cursor = collectionref.find();
        cursor.toArray(function(err, docs) {
          console.log(docs);
          res.sendfile("public/html/selectCA.html");
        });
      });
    }
  });
});