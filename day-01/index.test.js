const {
  reverseSentence,
  titleCase,
  oddishOrEvenish,
  at,
  anagrams,
  fizzBuzz,
} = require('./index');

describe('primitive code challenges', () => {
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
});
