
const fs = require('fs');


const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const newData = data + 'Hello World\n';
    writeToFile('a.txt', newData);
});
fs.readFile('a.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
}
);
fs.stat('a.txt', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
}
);