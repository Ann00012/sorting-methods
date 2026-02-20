import { countingSort } from './script';

describe('countingSort', () => {
  
  test('should correctly sort a standard array with duplicates', () => {
    const input: number[] = [4, 1, 3, 4, 3, 5];
    const k: number = 5;
    const expected: number[] = [1, 3, 3, 4, 4, 5];
    expect(countingSort(input, k)).toEqual(expected);
  });

  test('should handle an already sorted array', () => {
    const input: number[] = [1, 2, 3, 4, 5];
    const k: number = 5;
    const expected: number[] = [1, 2, 3, 4, 5];
    expect(countingSort(input, k)).toEqual(expected);
  });

  test('should handle a reverse-sorted array', () => {
    const input: number[] = [5, 4, 3, 2, 1];
    const k: number = 5;
    const expected: number[] = [1, 2, 3, 4, 5];
    expect(countingSort(input, k)).toEqual(expected);
  });

  test('should return an empty array when input is empty', () => {
    const input: number[] = [];
    const k: number = 10;
    const expected: number[] = [];
    expect(countingSort(input, k)).toEqual(expected);
  });

  test('should work correctly with a single element array', () => {
    const input: number[] = [7];
    const k: number = 7;
    const expected: number[] = [7];
    expect(countingSort(input, k)).toEqual(expected);
  });

  test('should handle an array where all elements are the same', () => {
    const input: number[] = [2, 2, 2, 2];
    const k: number = 2;
    const expected: number[] = [2, 2, 2, 2];
    expect(countingSort(input, k)).toEqual(expected);
  });

  test('should work correctly when the minimum value is 0', () => {
    const input: number[] = [0, 5, 0, 2, 1];
    const k: number = 5;
    const expected: number[] = [0, 0, 1, 2, 5];
    expect(countingSort(input, k)).toEqual(expected);
  });

  test('should not mutate the original input array (immutability check)', () => {
    const input: number[] = [3, 1, 2];
    const inputCopy: number[] = [...input];
    const k: number = 3;
    countingSort(input, k);
    expect(input).toEqual(inputCopy);
  });

  test('should handle k being larger than the actual max value in the array', () => {
    const input: number[] = [1, 2, 1];
    const k: number = 10; 
    const expected: number[] = [1, 1, 2];
    expect(countingSort(input, k)).toEqual(expected);
  });
});