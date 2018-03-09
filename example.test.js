const deduper = require('./deduper.js');
const intersection = require('./intersection.js');
const maxAndCount = require('./max-and-count.js');
const stringReducer = require('./string-reducer.js');
const caesarCipher = require('./caesar-cipher.js');
const sos = require('./sos.js');
const hackerrank = require('./hacker-rank.js');
const isPangram = require('./pangram.js');
const arrayIntersection = require('./array-intersection.js');
const alternating = require('./alternating.js');
const loveLetter = require('./love-letter.js');
const palindrome = require('./palindrome.js');
const anagram = require('./anagram.js');
const anagramPalindrome = require('./anagram-palindrome.js');
const leftRotation = require('./left-rotation.js');
const queryCount = require('./query-count.js');
const slidingWindow = require('./sliding-window.js');
const divisiblePairs = require('./divisible-pairs.js');
const flattenArray = require('./flatten-array.js');
const sortHashByValue = require('./sort-hash-by-value.js');
const propertyChecker = require('./property-checker.js');
const buyLowSellHigh = require('./buy-low-sell-high.js');
const productsOfArray = require('./products-of-array.js');
const highestProductOf3 = require('./highest-product-of-3.js');
const mergeMeetings = require('./merge-meetings.js');
const pileOfCubes = require('./pile-of-cubes.js');

it('deduper', () => {
  const arr = [1, 2, 2, 2, 3, 3];
  expect(deduper(arr)).toEqual([1, 2, 3])
});

it('intersection', () => {
  const arrA = [1, 2, 3, 4, 5, 5];
  const arrB = [2, 4, 6, 7, 8];

  expect(intersection(arrA, arrB)).toEqual([2, 4]);
});

it('max and count', () => {
  const arr = [1, 3, 4, 4, 3, 3, 1];

  expect(maxAndCount(arr)).toEqual(2);
});

it('string reducer', () => {
  const str = "aaabbcdddee";

  expect(stringReducer(str)).toEqual('acd');
});

it('caesar cipher', () => {
  const str = "good-luck";

  expect(caesarCipher(str, 1)).toEqual('hppe-mvdl');
});

it('sos', () => {
  const str = "SOSOSSSRSTSSSOS"

  expect(sos(str)).toEqual(5);
});

it('hackerrank in string', () => {
  const str = "hhhackkkerrjkljabzzznkkz";

  expect(hackerrank(str, 'hackerrank')).toEqual(true);
});

it('pangram', () => {
  const str1 = "We promptly judged antique ivory buckles for the next prize";
  const str2 = "We promptly judged antique ivory buckles for the prize";

  expect(isPangram(str1)).toEqual(true);
  expect(isPangram(str2)).toEqual(false);
});

it('arrayIntersection', () => {
  const array = ['aabbcde', 'bde', 'abcde'];

  // Return the number of letters that appear in all strings
  // b, d, and e appear in all strings
  expect(arrayIntersection(array)).toEqual(3);
});

it('alternating', () => {
  const str = "aaabbabaabbb";

  // Return the number of deletions need to make this string
  // alternate characters
  expect(alternating(str)).toEqual(6);
});

it('love letter', () => {
  const str = "abcdd";

  // Count the number of operations until the str is a palindrome.
  // Each incrementation of the letter is one operation.
  expect(loveLetter(str)).toEqual(5);
});

it('palindrome', () => {
  const strA = 'racecar';
  const strB = 'speedster';

  expect(palindrome(strA)).toEqual(true);
  expect(palindrome(strB)).toEqual(false);
});

it('anagram', () => {
  const strA = "abcd";
  const strB = "bcde";
  const strC = "aaa";
  const strD = "aaa";

  // Count the number of operations needed to make the strings anagrams.
  expect(anagram(strA, strB)).toEqual(2);
  expect(anagram(strC, strD)).toEqual(0);
});

it('anagramPalindrome', () => {
  const strA = "aaabbb";
  const strB = "abadbad";

  // Is the string an anagram for a palindrome?
  expect(anagramPalindrome(strA)).toEqual('NO');
  expect(anagramPalindrome(strB)).toEqual('YES');
});

it('left rotation', () => {
  const arr = [1, 2, 3, 4, 5];
  const rotation = 4;

  expect(leftRotation(arr, rotation)).toEqual([5, 1, 2, 3, 4]);
});

it('query count', () => {
  const arr = ['rad', 'bad', 'mad', 'rad', 'mad', 'rad'];
  const queries = ['rad', 'mad'];

  expect(queryCount(arr, queries)).toEqual({'rad': 3, 'mad': 2});
});

it('sliding window', () => {
  const arr = [1, 3, 2, 1, 1, 4, 2, 3, 1, 1];
  const value = 6;
  const seriesLength = 3;

  expect(slidingWindow(arr, value, seriesLength)).toEqual(4);
});

it('divisible pairs', () => {
  const arr = [2, 1, 3, 1, 5, 7];
  const value = 3;

  expect(divisiblePairs(arr, value)).toEqual(7);
});

it('flatten array', () => {
  const arr = [['a', 'b', 'c'], [3, 6, 9], ['x', 'y', [666, 'pizza'], 'z']];

  expect(flattenArray(arr)).toEqual(['a', 'b', 'c', 3, 6, 9, 'x', 'y', 666, 'pizza', 'z']);
});

it('sort hash by value', () => {
  const sample = {
    "rick": 35,
    "chris": 33,
    "jon": 30,
    "rolly": 63
  };

  expect(Object.keys(sortHashByValue(sample))[0]).toEqual('jon');
  expect(Object.keys(sortHashByValue(sample))[3]).toEqual('rolly');
});

it('property checker', () => {
  const objWithoutAddress = { name: "Rick" };
  const objWithAddress = { name: "Rick", address: { zip: 94705 } };

  expect(propertyChecker(objWithoutAddress, 'address', 'zip')).toEqual(undefined);
  expect(propertyChecker(objWithAddress, 'address', 'zip')).toEqual(94705);
});

it('buy low sell high', () => {
  const prices = [10, 7, 20, 30, 28, 10, 9];
  const decreasingPrices = [10, 9, 8, 7, 6];
  
  expect(buyLowSellHigh(prices)).toEqual(23);
  expect(buyLowSellHigh(decreasingPrices)).toEqual(-1);
});

it('products of array', () => {
  const arr1 = [1, 7, 3, 4];

  expect(productsOfArray(arr1)).toEqual([84, 12, 28, 21]);

  const arr2 = [0, 12, 40, 50]

  expect(productsOfArray(arr2)).toEqual([24000, 0, 0, 0]);
});

it('highest product of 3', () => {
  const arr = [-10, -10, 1, 3, 2];

  expect(highestProductOf3(arr)).toEqual(300);
});

it('merge meetings', () => {
  const meetings = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

  expect(mergeMeetings(meetings)).toEqual([[0, 1], [3, 8], [9, 12]]);
});

it('pile of cubes', () => {
  expect(pileOfCubes(4183059834009)).toEqual(2022);
  expect(pileOfCubes(24723578342962)).toEqual(-1);
  expect(pileOfCubes(135440716410000)).toEqual(4824);
  expect(pileOfCubes(40539911473216)).toEqual(3568);
});
