
/**
 * Module dependencies.
 */

var express = require('express');
var cors = require('cors')
var myRoutes = require('./routes/myRoutes');
var http = require('http');
var path = require('path');
var db = require('./models/mongooseModels.js')
var path = require('path')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowedDomains);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.get('/', myRoutes.index)
app.get('/us', myRoutes.home);
app.get('/us/archives', myRoutes.archives)
app.get('/us/projects', myRoutes.projects)
app.get('/us/about', myRoutes.about)
app.get('/us/archives/:url', myRoutes.archivedPost)
app.get('/us/audiotest', myRoutes.audioTest)
app.get('/us/sendaudio/:file', myRoutes.sendAudio)

app.post('/submitblog', myRoutes.submitBlog)




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
