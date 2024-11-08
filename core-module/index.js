// Non-Global module 
const fs = require('fs');

fs.writeFileSync('hello.txt', 'create a file');

// Global module 
console.log('core module');

