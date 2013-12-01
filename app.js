
/**
 * Module dependencies.
 */

var express = require('express');
var myRoutes = require('./routes/myRoutes');
var http = require('http');
var path = require('path');
var db = require('./models/mongooseModels.js')

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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', myRoutes.index)
app.get('/us', myRoutes.home);
app.get('/us/archives', myRoutes.archives)
app.get('/us/projects', myRoutes.projects)
app.get('/us/about', myRoutes.about)
app.get('/us/archives/:url', myRoutes.archivedPost)

app.post('/submitblog', myRoutes.submitBlog)




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
