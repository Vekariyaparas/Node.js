const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", 'a simple test files.')
    
// }

fs.readdir(dirPath, (err, files) => {
    files.forEach(i => {
        console.log(i);
        
    });
    
})



