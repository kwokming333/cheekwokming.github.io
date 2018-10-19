
var line1 = function(bottles){
    return(`${beer} bottle of beer on the wall, ${beer} bottle of beer.`)
}

var line2 = function(bottles) {
      return (`take one down and pass it around, ${beer -1} bottles of beer on the wall.`)                
}
var beer = 99;

while (beer >= 1){
         console.log( line1(beer));
         console.log( line2(beer));
         console.log ('\n');
         beer-= 1;

}


