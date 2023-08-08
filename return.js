function add(number1, number2){
    console.log(number1, number2);
    var sum = number1+number2;
    // console.log(sum);
    return sum;
}

// add(20, 15);

var total = add(20, 80);
// console.log('total' , total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice ;
    return quantity;
}
var myTaka = 100;
var singaras = bringSingara (myTaka);
console.log('Eating', singaras , 'singaras');