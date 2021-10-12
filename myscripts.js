console.log("my first js from an external file");
var x=5;
var y=9;
console.log(x*y);
function sum(a,b) {
    return a+b;
}
console.log(sum(x,y));

var mysum =sum;
console.log(mysum);