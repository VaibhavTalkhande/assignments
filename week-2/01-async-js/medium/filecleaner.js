let file =require('fs');
let textdata;
file.readFileSync('a.txt','utf-8',(err,data)=>{
    if(err) throw err;
    textdata = data.replace(/\s+/g,' ').trim();
    file.writeFileSync('a1.txt',textdata,()=> console.log("success"))
})

file.readFileSync('a1.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

