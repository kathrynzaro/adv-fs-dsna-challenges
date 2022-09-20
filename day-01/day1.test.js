const {
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
} = require('./index');

describe('day 01 code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('titleCase', () => {
    it('should title case a sentence', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });

  describe('oddishOrEvenish', () => {
    it('should determine whether a number is oddish or evenish', () => {
      expect(oddishOrEvenish(121)).toBe('Evenish');
      expect(oddishOrEvenish(41)).toBe('Oddish');
    });
  });

  describe('at', () => {
    it('should take an array and an index and return the item at corresponding index', () => {
      const array1 = at(['a', 'b', 'c', 'd', 'e'], 1);
      const array2 = at(['a', 'b', 'c', 'd', 'e'], -2);

      expect(array1).toBe('b');
      expect(array2).toBe('d');
    });
  });

  describe('anagrams', () => {
    it('should take two words as arguments and return true if they are anagrams', () => {
      expect(anagrams('superintended', 'unpredestined')).toBe(true);
      expect(anagrams('pictorialness', 'documentarily')).toBe(false);
    });
  });

  describe('fizzBuzz', () => {
    it('should return Fizz for multiples of three, Buzz for multiples of five, and FizzBuzz for multiples of both', () => {
      expect(fizzBuzz(16)).toEqual([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
      ]);
    });
  });

  describe('multiplesOfN', () => {
    it('should take a positive integer and return array of multiples up to 50', () => {
      expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiplesOfN(25)).toEqual([25, 50]);
      expect(multiplesOfN(75)).toEqual([]);
    });
  });

  describe('addPunctuation', () => {
    it('should take a string of punctuation and return a function that also takes strings but returns string plus punctuation', () => {
      const addExcitement = addPunctuation('!!!');
      const addUnsure = addPunctuation('?!?');

      expect(addExcitement('Hello World')).toBe('Hello World!!!');
      expect(addExcitement('Pokemon, catch em all')).toBe(
        'Pokemon, catch em all!!!'
      );

      expect(addUnsure('Hello World')).toBe('Hello World?!?');
      expect(addUnsure('Pokemon, catch em all')).toBe(
        'Pokemon, catch em all?!?'
      );
    });
  });

  describe('rootDigit', () => {
    it('takes a number and returns one digit that is the sum of the input digits', () => {});
    expect(rootDigit(123)).toBe(6);
    expect(rootDigit(4322)).toBe(2);
    expect(rootDigit(999888777)).toBe(9);
  });

  describe('convert', () => {
    it('should take roman numeral and return integer of equivalent decimal value', () => {});
    expect(convert('III')).toBe(3);
    expect(convert('XIX')).toBe(19);
    expect(convert('XCII')).toBe(92);
    expect(convert('MCXIV')).toBe(1114);
  });
});
