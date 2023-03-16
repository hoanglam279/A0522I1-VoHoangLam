function fibonacci(number: number): number {
    if (number == 2 || number == 1)
        return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let number: number = 20;
let sumOfFibonacci: number = 0;
for (let i = 1; i <= number; i++) {
    let temp = fibonacci(i);
    console.log(temp + ",");
    sumOfFibonacci += fibonacci(temp);
}
console.log("tong :" + sumOfFibonacci);
