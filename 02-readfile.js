// fs 是 file-system 的簡寫
var fs = require('fs')

fs.readFile('./test.txt',function(err,data){
    if(err){
        console.log('讀取失敗。')
    }else{
        console.log(data.toString())
    }
})