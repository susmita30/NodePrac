var a = {b:1}
var o = {};
o.o = o;
o.one = a;
o.two = a;




const util = require('util');

console.log(util.inspect(o, { showHidden: true, depth: null }));


/*

// Demo: Circular reference

var a = {b:1}
var o = {};
o.o = o;
o.one = a;
o.two = a;



var cache = [];
JSON.stringify(o, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key

            console.log("Circular reference found, discard key");
            return;
        }
        // Store value in our collection
        cache.push(value);
        console.log("Value stored, value is " + value);
    }
    return value;
});

console.log("o.one and o.two  = " + o.one, o.two);
cache = null; // Enable garbage collection
*/