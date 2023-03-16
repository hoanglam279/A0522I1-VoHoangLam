function fibonacci(number) {
    if (number == 2 || number == 1)
        return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var number = 20;
var sumOfFibonacci = 0;
for (var i = 1; i <= number; i++) {
    var temp = fibonacci(i);
    console.log(temp + ",");
    sumOfFibonacci += fibonacci(temp);
}
console.log("tong :" + sumOfFibonacci);
