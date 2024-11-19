const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// MAke a file 
// fs.writeFileSync(filePath, 'This is a simple file.');

// fs.readFile(filePath,'utf8', (err, i) => {
//     console.log(i);

// })

// Add the contain in file 
// fs.appendFile(filePath, "and file name is apple.txt", (err) => {
//     if (!err) {
//         console.log('file is updated.');

//     }
// });


// Rename the file name 
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log('file name is updated.');

//     }
// })


// Delete the file 
// fs.unlinkSync(`${dirPath}/fruit.txt`);