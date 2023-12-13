let file =require('fs');
let textdata;
file.readFile('a.txt','utf-8',(err,data)=>{
    if(err) throw err;
    textdata = data.replace(/\s+/g,' ').trim();
    file.writeFile('a1.txt',textdata,()=> console.log("success"))
})
setTimeout(()=>{
    file.readFile('a1.txt','utf-8',(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
}
,5000)