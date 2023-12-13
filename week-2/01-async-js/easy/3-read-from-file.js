let file = require('fs');

file.readFile('a.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data);
})
