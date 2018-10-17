//get inputs
var cart = [];
var item = "";
while (item != "done") {
    item = prompt('add an item')
    if ((item != null) && (item != "")) {
        cart.push(item);

    }
}

cart.pop();
console.log('the content of your cart are: ', cart);
