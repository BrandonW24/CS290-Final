 var http = require('http');
 var fs	= require('fs');
var path = require('path');
var express = require('express');
var app = express();
var expHanBars = require('express-handlebars');

//app.engine('handlebars', expHanBars({defaultLayout : 'main' }) );
//app.set('view engine', 'handlebars');

app.use(express.static('public'));


function requestHandler(req, res) {
  console.log("== Request was received");
  console.log("  - method:", req.method);
  console.log("  - url:", req.url);
  console.log("  - headers:", req.headers);


//display content when / is entered
	if(req.method == "GET" && req.url == '/' ){
		filePath = 'public/index.html'
		fs.readFile('public/index.html', 'utf8', function(err,data){
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		});
		
//display content when / is entered
	if(req.method == "GET" && req.url == '/hotPocketPosts.html' ){
		filePath = 'public/hotPocketPosts.html'
		fs.readFile('public/hotPocketPosts.html', 'utf8', function(err,data){
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		});		

	
//display 404 page when 404.html is requested			
	}else if(req.method == "GET" && req.url == '/404.html'){
		filePath = 'public/404.html'
			fs.readFile('public/404.html', 'utf8', function(err,data){
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
		});

//display 404 page when any other variation of the url is entered			
	}else{
		filePath = 'public/404.html'
			fs.readFile('public/404.html', 'utf8', function(err,data){
				res.writeHead(200, {'Content-Type' : 'text/html'});
				console.log(data);
				res.end(data);
			});	
	}
	}
}

var server = http.createServer(requestHandler);
// specify ports to listen on
var	port = process.env.PORT || 1945 || 3000		//added port 1945 because 3000 normally doesn't work 
server.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server is listening on port: ", port);
});

// var port = process.env.PORT || 1945 || 3000;

// app.listen(port, function(){

// 	console.log("Server has ears on port : ", port);

// });