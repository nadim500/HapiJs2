var Hapi = require('hapi');
var Vision = require('vision');
var Path = require('path');

var server = new Hapi.Server();

server.connection({
    host:'localhost',
    port:Number(process.argv[2]||3000)
});

server.register(Vision,function(){});

server.views({
    engines:{
        html:require('handlebars')
    },
    path:Path.join(__dirname,'templates')
});

server.route({
    method:'GET',
    path:'/',
    handler:{
        view:'index.html'
    }
});

server.start(function(){
    console.log("servidor corriendo en: ",server.info.uri);
});