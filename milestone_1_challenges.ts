// Challenge 1 on returning the sum of two numbers


function addition(num1: number, num2: number): number {
  const result: number = num1 + num2;
  //console.log(`The sum of ${num1} and ${num2} is ${result}`);
  return result;
}

addition(3, 5);
addition(-6, 9);

// Challenge 2 on convert minutes into seconds


function convert(minutes: number): number {
  const seconds: number = minutes * 60;
  //console.log(`${minutes} minutes equals ${seconds} seconds`);
  return seconds;
}

convert(5);
convert(2);

// Challenge 3 on calculating the perimeter of a rectangle


function findPerimeter(length: number, width: number): number {
  const perimeter: number = 2 * (length + width);
  //console.log(
    `The perimeter of a rectangle with length ${length} and width ${width} is ${perimeter}`
  );
  return perimeter;
}

findPerimeter(6, 7);
findPerimeter(20, 10);

// Challenge 4 on checking if a number is negative and returning boolean


function checkNegative(num: number): boolean {
  const isNegative: boolean = num < 0;
  //console.log(`Is ${num} a negative number? ${isNegative}`);
  return isNegative;
}

checkNegative(-23);
checkNegative(55);


// Challenge 5 for the can I Drive function


function canDrive(name: string, age: number): string {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive yet`;
  }
}

//console.log(canDrive("Jane", 22));
//console.log(canDrive("June", 12));

// Challenge 6 for finding the largest number


function findLargest(num1: number, num2: number, num3: number): number {
  return Math.max(num1, num2, num3);
}

// console.log(findLargest(5, 9, 3));
// console.log(findLargest(10, 10, 10));
// console.log(findLargest(-1, -5, -3));

// Challenge 7 for the BMI Calculator
function calculateBMI(weight: number, height: number): string {
  const bmi: number = weight / (height * height);
  
  let category: string;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  
  const result: string = `Your BMI is ${bmi.toFixed(2)} - ${category}`;
//   console.log(result);
  return result;
}

calculateBMI(68, 1.75);
calculateBMI(85, 1.8);

// Challenge 8 for greeting based on time



function greetUser(name: string, hour: number): string {

  let greeting: string;
  if (hour >= 5 && hour <= 11) {
    greeting = `Good morning, ${name}!`;
  } else if (hour >= 12 && hour <= 17) {
    greeting = `Good afternoon, ${name}!`;
  } else if (hour >= 18 && hour <= 21) {
    greeting = `Good evening, ${name}!`;
  } else {
    greeting = `Good night, ${name}!`;
  }
//   console.log(greeting);
  return greeting;
}

greetUser("Alice", 9);
greetUser("Bob", 14);
greetUser("Charlie", 20);
greetUser("David", 23);

// Challenge 9 for the FizzBuzz checker
function fizzBuzzCheck(number: number): string {
  let result: string;
  
  if (number % 3 === 0 && number % 5 === 0) {
    result = "FizzBuzz";
  } else if (number % 3 === 0) {
    result = "Fizz";
  } else if (number % 5 === 0) {
    result = "Buzz";
  } else {
    result = number.toString();
  }
//   console.log(`For ${number}, the result is: ${result}`);
  return result;
}

fizzBuzzCheck(3);
fizzBuzzCheck(10);
fizzBuzzCheck(15);
fizzBuzzCheck(7);

// Challenge 10 on the perimeter calculator for square and circle
function perimeter(shape: string, num: number): number {
  let result: number;
  if (shape === "s") {
    result = 4 * num;
    // console.log(`Perimeter of a square with side ${num} is ${result}`);
  } else if (shape === "c") {
    result = 2 * Math.PI * num; // Fixed: using 2πr instead of 6.28
    // console.log(`Perimeter of a circle with radius ${num} is ${result.toFixed(2)}`);
  } else {
    result = 0;
  }
  return result;
}

perimeter("s", 7);
perimeter("c", 4);

// Challenge 11 for the sum of even numbers


function sumEvenNumbers(n: number): number {
  let sumEven: number = 0;

  for (let i: number = 2; i <= n; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    }
  }

//   console.log(`Sum of even numbers from 0 to ${n} is ${sumEven}`);
  return sumEven;
}

sumEvenNumbers(6);
sumEvenNumbers(10);
sumEvenNumbers(5);

// Challenge 12 in the Power function.. use the logic



function powerUp(num: number, times: number): number {
  const result: number = Math.pow(num, times);
//   console.log(result);
  return result;
}

powerUp(2, 3);
powerUp(5, 0);
powerUp(3, 4);

// Challenge 13 for creating factorial calculator


function factorial(n: number): number {
  let factorialNumber: number = 1;
  for (let i: number = 1; i <= n; i++) {
    factorialNumber *= i;
  }
//   console.log(factorialNumber);
  return factorialNumber;
}

factorial(4);
factorial(1);
factorial(6);


// Challenge 14 on the sum of multiples


function sumMultiples(n: number, divisor: number): number {
  let sumMultiplesNumber: number = 0;
  for (let i: number = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sumMultiplesNumber += i;
    }
  }
//   console.log(
//     `Sum of numbers divisible by ${divisor} from 1 to ${n} is ${sumMultiplesNumber}`
//   );
  return sumMultiplesNumber;
}

sumMultiples(10, 2);