var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    if(req.url=='/'){
        res.end('<h1>HOME</h1>')
    } else if (req.url == '/login') {
        res.end('<h1>Login Page</h1>')
    } else if (req.url == '/blog') {
        res.end('<h1>Blog Page</h1>')
    } else if (req.url == '/utf8') {
        res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end('<h1>中文 Page</h1>')
    }else{
        res.end('<h1>404 not found</h1>')
    }
})

server.listen(2222,function(){
    console.log('服務器啟動中...')
})