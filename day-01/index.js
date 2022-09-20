function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

// Primitives

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.toLowerCase())
    .join(' ')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function oddishOrEvenish(number) {
  let num = 0;
  String(number)
    .split('')
    .map((number) => (num += Number(number)));
  return num % 2 === 0 ? 'Evenish' : 'Oddish';
}

function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}

function anagrams(wordOne, wordTwo) {
  const splitOne = wordOne.split('').sort().join('');
  const splitTwo = wordTwo.split('').sort().join('');
  if (splitOne === splitTwo) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function multiplesOfN(n) {
  const arr = [];
  for (let i = 1; n <= 50; i++) {
    const multiples = i * n;
    if (i * n > 50) {
      break;
    }
    arr.push(multiples);
  }
  return arr;
}

function convert(roman) {
  const romanInts = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const array = roman.split('');
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const currentValue = romanInts[current];
    const next = array[i + 1];
    const nextValue = romanInts[next];

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
}

// Higher Order

function addPunctuation(punctuation) {
  return function addEmotion(string) {
    return string + punctuation;
  };
}

function addFirst(element) {
  const newArray = [];
  return function originalArr(arr) {
    newArray.push(element, ...arr);
    return newArray;
  };
}

// Recursive

function rootDigit(n) {
  const digits = n.toString().split('');
  const numbers = digits.map((d) => +d);
  const sum = numbers.reduce((a, b) => a + b);
  if (sum > 9) {
    return rootDigit(sum);
  }
  return sum;
}

function repeat(txt, n) {}

module.exports = {
  reverseSentence,
  titleCase,
  oddishOrEvenish,
  at,
  anagrams,
  fizzBuzz,
  multiplesOfN,
  addPunctuation,
  rootDigit,
  convert,
  addFirst,
  repeat,
};
