var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
    if (req.url == '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                console.log('讀取失敗。')
            } else {
                res.setHeader('Content-Type','text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if (req.url == '/txt') {
        fs.readFile('./Readme.txt', function (err, data) {
            if (err) {
                console.log('讀取失敗。')
            } else {
                res.setHeader('Content-Type','text/plain; charset=utf-8')
                res.end(data)
            }
        })
    } else {
        res.end('<h1>404 not found</h1>')
    }
})

server.listen(2222, function () {
    console.log('服務器啟動中...')
})