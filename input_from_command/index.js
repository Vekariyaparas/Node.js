//Input command
// console.log(process.argv);

const fs =  require('fs');

// Add and Remove the file
const input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
}else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
}else {
    console.log("Invalid input");
    
}

//command add file:- add data.txt "this is color and fruit."
//command remove file:- remove data.txt 
//command remove file:- abdhjdfk data.txt  (ans:- Invalid input) 
