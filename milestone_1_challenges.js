// Challenge 1 on returning the sum of two numbers
function addition(num1, num2) {
    var result = num1 + num2;
    console.log("The sum of ".concat(num1, " and ").concat(num2, " is ").concat(result));
    return result;
}
addition(3, 5);
addition(-6, 9);
// Challenge 2 on convert minutes into seconds
function convert(minutes) {
    var seconds = minutes * 60;
    console.log("".concat(minutes, " minutes equals ").concat(seconds, " seconds"));
    return seconds;
}
convert(5);
convert(2);
// Challenge 3 on calculating the perimeter of a rectangle
function findPerimeter(length, width) {
    var perimeter = 2 * (length + width);
    console.log("The perimeter of a rectangle with length ".concat(length, " and width ").concat(width, " is ").concat(perimeter));
    return perimeter;
}
findPerimeter(6, 7);
findPerimeter(20, 10);
// Challenge 4 on checking if a number is negative and returning boolean
function checkNegative(num) {
    var isNegative = num < 0;
    console.log("Is ".concat(num, " a negative number? ").concat(isNegative));
    return isNegative;
}
checkNegative(-23);
checkNegative(55);
// Challenge 5 for the can I Drive function
function canDrive(name, age) {
    if (age >= 18) {
        return "".concat(name, " is old enough to drive");
    }
    else {
        return "".concat(name, " is not old enough to drive yet");
    }
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));
// Challenge 6 for finding the largest number
function findLargest(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(findLargest(5, 9, 3));
console.log(findLargest(10, 10, 10));
console.log(findLargest(-1, -5, -3));
// Challenge 7 for the BMI Calculator
function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }
    var result = "Your BMI is ".concat(bmi.toFixed(2), " - ").concat(category);
    console.log(result);
    return result;
}
calculateBMI(68, 1.75);
calculateBMI(85, 1.8);
// Challenge 8 for greeting based on time
function greetUser(name, hour) {
    var greeting;
    if (hour >= 5 && hour <= 11) {
        greeting = "Good morning, ".concat(name, "!");
    }
    else if (hour >= 12 && hour <= 17) {
        greeting = "Good afternoon, ".concat(name, "!");
    }
    else if (hour >= 18 && hour <= 21) {
        greeting = "Good evening, ".concat(name, "!");
    }
    else {
        greeting = "Good night, ".concat(name, "!");
    }
    console.log(greeting);
    return greeting;
}
greetUser("Alice", 9);
greetUser("Bob", 14);
greetUser("Charlie", 20);
greetUser("David", 23);
// Challenge 9 for the FizzBuzz checker
function fizzBuzzCheck(number) {
    var result;
    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    }
    else if (number % 3 === 0) {
        result = "Fizz";
    }
    else if (number % 5 === 0) {
        result = "Buzz";
    }
    else {
        result = number.toString();
    }
    console.log("For ".concat(number, ", the result is: ").concat(result));
    return result;
}
fizzBuzzCheck(3);
fizzBuzzCheck(10);
fizzBuzzCheck(15);
fizzBuzzCheck(7);
// Challenge 10 on the perimeter calculator for square and circle
function perimeter(shape, num) {
    var result;
    if (shape === "s") {
        result = 4 * num;
        console.log("Perimeter of a square with side ".concat(num, " is ").concat(result));
    }
    else if (shape === "c") {
        result = 2 * Math.PI * num; // Fixed: using 2πr instead of 6.28
        console.log("Perimeter of a circle with radius ".concat(num, " is ").concat(result.toFixed(2)));
    }
    else {
        result = 0;
    }
    return result;
}
perimeter("s", 7);
perimeter("c", 4);
// Challenge 11 for the sum of even numbers
function sumEvenNumbers(n) {
    var sumEven = 0;
    for (var i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        }
    }
    console.log("Sum of even numbers from 0 to ".concat(n, " is ").concat(sumEven));
    return sumEven;
}
sumEvenNumbers(6);
sumEvenNumbers(10);
sumEvenNumbers(5);
// Challenge 12 in the Power function.. use the logic
function powerUp(num, times) {
    var result = Math.pow(num, times);
    console.log(result);
    return result;
}
powerUp(2, 3);
powerUp(5, 0);
powerUp(3, 4);
// Challenge 13 for creating factorial calculator
function factorial(n) {
    var factorialNumber = 1;
    for (var i = 1; i <= n; i++) {
        factorialNumber *= i;
    }
    console.log(factorialNumber);
    return factorialNumber;
}
factorial(4);
factorial(1);
factorial(6);
// Challenge 14 on the sum of multiples
function sumMultiples(n, divisor) {
    var sumMultiplesNumber = 0;
    for (var i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sumMultiplesNumber += i;
        }
    }
    console.log("Sum of numbers divisible by ".concat(divisor, " from 1 to ").concat(n, " is ").concat(sumMultiplesNumber));
    return sumMultiplesNumber;
}
sumMultiples(10, 2);
