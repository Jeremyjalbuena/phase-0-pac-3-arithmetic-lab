1 + 80; //=> 81
function add(a,b) {
 return a + b;
}

60 - 40; //=> 20
function subtract(a,b){
return a - b;
}
2 * 3.4; //=> 6.8
function multiply(a,b){
    return a * b;

}

5.0 / 2.5; //=> 2
function divide(a,b){
    return a / b;

}
let number = 5;

number += 3; //=> 8

number -= 2; //=> 6

number *= 10; //=> 60

number /= 5; //=> 12

//reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5

parseInt("2.2222", 10);
parseInt("nonsense!", 10);
parseFloat("80.123999"); // 80.123999