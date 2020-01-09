var fs = require('fs')

fs.writeFile('./test2.txt','testtttt',function(err){
    if (err) {
        console.log('寫入失敗。')
    } else {
        console.log('Done')
    }
})