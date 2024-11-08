// console.log("Node");

var a=10;
var b=20;
var c=30;
console.warn(a+b+c);


// if condition 
var b=20;

if (b===20) {
    console.log("True");
    
}

// => Expected output is Ture 

var b='20';

if (b===20) {
    console.log("True");
    
}

// => No given output because the if condition is verify type and value 


// for loop
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }


// array
    const arr = [5,8,6,7,9,1];
    console.log(arr);


// Export and import module 
    const app = require ('./app')

    console.log(app);
    console.log(app.x);
    console.log(app.y);
    console.log(app.z());
    console.log(app.x + app.y + app.z());
    
    
