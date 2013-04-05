
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

app.get('/maps', function(req, res){
  Server = mongo.Server;
  Db = mongo.Db;
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('celladb', server);
  db.open(function(err, db) {
    if(!err) {         
      db.collection('maps', function(err, collectionref) {            
        var cursor = collectionref.find({}, {cells:false});
        cursor.toArray(function(err, docs) {
          var mapOptions = '';
          for (var i = 0; i < docs.length; i++)
          {
            mapOptions = mapOptions + '<option value="';
            mapOptions = mapOptions + docs[i]._id + '">';
            mapOptions = mapOptions + docs[i].name;
            mapOptions = mapOptions + '</option>';
          }
          res.send(mapOptions);
        });
      });
    }
  });
});

app.get('/rules', function(req, res){
  Server = mongo.Server;
  Db = mongo.Db;
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('celladb', server);
  db.open(function(err, db) {
    if(!err) {         
      db.collection('rules', function(err, collectionref) {            
        var cursor = collectionref.find({}, {rules:false});
        cursor.toArray(function(err, docs) {
          var rules = '';
          for (var i = 0; i < docs.length; i++)
          {
            rules = rules + '<option value="';
            rules = rules + docs[i]._id + '">';
            rules = rules + docs[i].name;
            rules = rules + '</option>';
          }
          res.send(rules);
        });
      });
    }
  });
});

app.get('/mapCells', function(req, res){
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  Server = mongo.Server;
  Db = mongo.Db;
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('celladb', server);
  db.open(function(err, db) {
    if(!err) {         
      db.collection('maps', function(err, collectionref) {
        var BSON = mongo.BSONPure;
		if (query['id'].length > 0)
		{
			var o_id = new BSON.ObjectID(query['id']);
			var cursor = collectionref.find({_id: o_id});
			cursor.toArray(function(err, docs) {
			  if (docs[0] != null && docs[0] != undefined)
			  {
				console.log(docs[0].cells);
				res.send(docs[0].cells);
			  }
			});
		}
      });
    }
  });
});

app.get('/mapRules', function(req, res){
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  Server = mongo.Server;
  Db = mongo.Db;
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('celladb', server);
  db.open(function(err, db) {
    if(!err) {         
      db.collection('rules', function(err, collectionref) {
        var BSON = mongo.BSONPure;
		if (query['id'].length > 0)
		{
			var o_id = new BSON.ObjectID(query['id']);
			var cursor = collectionref.find({_id: o_id});
			cursor.toArray(function(err, docs) {
			  if (docs[0] != null && docs[0] != undefined)
			  {
				console.log(docs[0].ruleset);
				res.send(docs[0].ruleset);
			  }
			});
		}
      });
    }
  });
});

app.post('/mapCells', function(req, res){
  console.log(req.body);
  Server = mongo.Server;
  Db = mongo.Db;
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('celladb', server);
  db.open(function(err, db) {
    if(!err) {         
      db.collection('maps', function(err, collectionref) {
		collectionref.insert(req.body);
      });
    }
  });
});

app.post('/mapRules', function(req, res){
  console.log(req.body);
  Server = mongo.Server;
  Db = mongo.Db;
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('celladb', server);
  db.open(function(err, db) {
    if(!err) {         
      db.collection('rules', function(err, collectionref) {
		collectionref.insert(req.body);
      });
    }
  });
});