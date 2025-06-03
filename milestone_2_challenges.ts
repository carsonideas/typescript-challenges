// Challenge 1 on sum of positives
function sumOfPositives(numbers: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  //console.log(`The sum of positive numbers in [${numbers}] is ${sum}`);
  return sum;
}

sumOfPositives([1, -3, 5, -2, 9, -8]);

// Challenge 2 on finding the maximum value


function findMax(numbers: number[]): number {
  let maximum: number = numbers[0];
  for (let i: number = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  //console.log(`The maximum value in [${numbers}] is ${maximum}`);
  return maximum;
}

findMax([3, 7, 2, 9, 5]);

// Challenge 3 on finding the election winner


interface Candidate {
  name: string;
  votes: number;
}

function findWinner(candidates: Candidate[]): Candidate {
  let winner: Candidate = candidates[0];
  for (let i: number = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  //console.log(`The winner is ${winner.name} with ${winner.votes} votes`);
  return winner;
}

const candidates: Candidate[] = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];
findWinner(candidates);

// Challenge 4 on finding the longest word



function findLongestWord(words: string[]): string {
  let longestWord: string = words[0];
  for (let i: number = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  //console.log(`The longest word in [${words}] is "${longestWord}"`);
  return longestWord;
}

findLongestWord(["apple", "banana", "pear", "grapefruit"]);

// Challenge 5 on dealing with the count properties

function countProperties(key: string): number {
  let count: number = 0;
  for (let key in obj) {
    count++;
  }
  //console.log(`The object has ${count} properties`);
  return count;
}

countProperties({ name: "Alice", age: 25, city: "Paris" });

// Challenge 6 for filtering by length

function filterByLength(strings: string[], minLength: number): string[] {
  let filteredArray: string[] = [];
  for (let i: number = 0; i < strings.length; i++) {
    if (strings[i].length >= minLength) {
      filteredArray.push(strings[i]);
    }
  }
  //console.log(`Words with length >= ${minLength} from [${strings}] are: [${filteredArray}]`);
  return filteredArray;
}

filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);


// Challenge 7 on finding the sum of even numbers
function sumEvenNumbers(numbers: number[]): number {
  let sum: number = 0;
  let evenNumbers: number[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
      evenNumbers.push(numbers[i]);
    }
  }
  //console.log(`The sum of even numbers [${evenNumbers}] from [${numbers}] is ${sum}`);
  return sum;
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]);




// Challenge 8 on finding the difference between sum of even and odd numbers

function differenceEvenOdd(numbers: number[]): number {
  let evenSum: number = 0;
  let oddSum: number = 0;
  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];
  
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenSum += numbers[i];
      evenNumbers.push(numbers[i]);
    } else {
      oddSum += numbers[i];
      oddNumbers.push(numbers[i]);
    }
  }
  
  const difference: number = evenSum - oddSum;
  //console.log(`Even numbers [${evenNumbers}] sum: ${evenSum}, Odd numbers [${oddNumbers}] sum: ${oddSum}, Difference: ${difference}`);
  return difference;
}

differenceEvenOdd([1, 2, 3, 4, 5, 6]);



// Challenge 9 on counting truth values
function countTruthy(obj: Key): number {
  let count: number = 0;
  let truthyValues: string[] = [];
  
  for (let key in obj) {
    if (obj[key]) {
      count++;
      truthyValues.push(`${key}: ${obj[key]}`);
    }
  }
  
  //console.log(`The object has ${count} truthy values: [${truthyValues}]`);
  return count;
}

countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null });


// Challenge 10 on finding the average of numbers

function average(numbers: number[]): number {
  if (numbers.length === 0) {
    console.log(`The average of an empty array is 0`);
    return 0;
  } else {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    const avg: number = sum / numbers.length;
    //console.log(`The average of [${numbers}] is ${avg}`);
    return avg;
  }
}

average([2, 4, 6, 8]);
average([]);



// Challenge 11 in linear searching

function linearSearch(array: number[], value: number): number {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log(`Value ${value} found at index ${i} in [${array}]`);
      return i;
    }
  }
  //console.log(`Value ${value} not found in [${array}], returning -1`);
  return -1;
}

linearSearch([5, 3, 7, 1, 4], 7);
linearSearch([5, 3, 7, 1, 4], 10);


// Challenge 12 on finding reverse linear search

function reverseLinearSearch(array: number[], value: number): number {
  let lastIndex: number = -1;
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === value) {
      lastIndex = i;
    }
  }
  
  if (lastIndex !== -1) {
    //console.log(`Last occurrence of ${value} in [${array}] is at index ${lastIndex}`);
  } else {
    //console.log(`Value ${value} not found in [${array}], returning -1`);
  }
  return lastIndex;
}

reverseLinearSearch([5, 3, 7, 1, 4, 7], 7);
reverseLinearSearch([5, 3, 7, 1, 4], 10);



// Challenge 13 on linear search of all indices

function linearSearchAll(array: number[], value: number): number[] {
  let indices: number[] = [];
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === value) {
      indices.push(i);
    }
  }
  //console.log(`All indices of ${value} in [${array}] are: [${indices}]`);
  return indices;
}

linearSearchAll([5, 3, 7, 1, 4, 7], 7);
linearSearchAll([5, 3, 7, 1, 4], 10);



// Challenge 14 on counting occurrences

function countOccurrences(strings: string[]) {
  let counts: string = {};
  
  for (let i: number = 0; i < strings.length; i++) {
    const word: string = strings[i];
    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  
  //console.log(`Occurrences in [${strings}]:`, counts);

  return counts;
}

countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);

// Challenge 15 on remove duplicates

function removeDuplicates<T>(array: T[]): T[] {
  let uniqueArray: T[] = [];
  
  for (let i: number = 0; i < array.length; i++) {
    let isDuplicate: boolean = false;
    for (let j: number = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray.push(array[i]);
    }
  }
  
  //console.log(`Original array: [${array}], After removing duplicates: [${uniqueArray}]`);
  return uniqueArray;
}

removeDuplicates([1, 2, 3, 2, 4, 1, 5]);

// Challenge 16 on finding the most frequent value

function mostFrequent<T>(array: T[]): T {
  let counts: key = {};
  let maxCount: number = 0;
  let mostFrequentValue: T = array[0];
  
  for (let i: number = 0; i < array.length; i++) {
    const item: T = array[i];
    const itemKey: string = String(item);
    
    if (counts[itemKey]) {
      counts[itemKey]++;
    } else {
      counts[itemKey] = 1;
    }
    
    if (counts[itemKey] > maxCount) {
      maxCount = counts[itemKey];
      mostFrequentValue = item;
    }
  }
  
  console.log(`Most frequent value in [${array}] is "${mostFrequentValue}" appearing ${maxCount} times`);
  return mostFrequentValue;
}

mostFrequent([1, 2, 2, 3, 3, 3, 4]);
mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]);