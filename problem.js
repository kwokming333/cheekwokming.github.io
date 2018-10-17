
var base = parseInt(prompt('enter your muplitication base'))

var count = 0;

while ( count < 12);
    count += 1; // count = count +1
    var result  = base * count;
    console.log(base + "x" + count + "=" + result);
   //string interpolation
    console.log(`${base} x ${count} = ${result}`)