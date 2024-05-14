// ### Exercise 2.1 

let checkNumber1 = function(number) {
    if (number % 2 === 0) {
        return "Number is even";
    } else {
        return "Number is odd";
    }
}
console.log(checkNumber1(7));


// ### Exercise 2.2 
let checkNumber2 = number => {
    if (number % 2 === 0) {
        return "Number is even";
    } else {
        return "Number is odd";
    }
}

console.log(checkNumber2(2));

