comsole.log('function');

var pi = 3.4;

var greetings = function(name = 'anon'){
    console.log('hello', name)

};

greetings('fred');

var sum = function (a,b){
   var total = a + b;
   return(total);

}

var div = function(a,b) {
    return (a/b);
}


var result = sum(3,4);
var moreresult = div(sum(3,4),sum(6,7));

console.log('3+4= ', result);
console.log('(3+4)/(6+7) = ', moreresult);