var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 4,
    mouse: 3,
    pen: 25
}

var penCount = shoppingCart.pen;

var properties = Object.keys(shoppingCart);
var properties1 = Object.values(shoppingCart);

console.log(shoppingCart);
console.log(properties1);
console.log(properties);


var propertyName = 'keyboard';
var propertyValue = shoppingCart [propertyName];

console.log(propertyName, propertyValue);


shoppingCart.mouse = 50;
console.log(shoppingCart);