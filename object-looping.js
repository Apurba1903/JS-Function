var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 4,
    mouse: 3,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for (var i=0 ; i < keys.length ; i++){
     var propertyName = keys[i];
     var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}


// For in loop
for (var propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}