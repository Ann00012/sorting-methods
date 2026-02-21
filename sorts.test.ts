import { countingSort, radixSortThreeDigits, sortNSquared } from './script';

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

describe('Radix Sort Algorithms', () => {
  
  describe('radixSortThreeDigits', () => {
    test('should correctly sort an array of three-digit numbers', () => {
      const input = [170, 45, 75, 90, 802, 24, 2, 66];
      const expected = [2, 24, 45, 66, 75, 90, 170, 802];
      expect(radixSortThreeDigits(input)).toEqual(expected);
    });

    test('should handle an already sorted array', () => {
      const input = [100, 200, 300, 400];
      expect(radixSortThreeDigits(input)).toEqual([100, 200, 300, 400]);
    });

    test('should handle an empty array', () => {
      expect(radixSortThreeDigits([])).toEqual([]);
    });

    test('should maintain stability (relative order of equal values)', () => {
      const input = [155, 255, 155];
      const result = radixSortThreeDigits(input);
      expect(result).toEqual([155, 155, 255]);
    });
  });

  describe('sortNSquared', () => {
    test('should sort n elements where values are within range [0, n^2 - 1]', () => {
      const n = 5;
      const input = [24, 1, 15, 10, 5];
      const expected = [1, 5, 10, 15, 24];
      expect(sortNSquared(input)).toEqual(expected);
    });

    test('should work correctly with a larger n', () => {
      const input = [99, 0, 55, 23, 11, 88, 5, 42, 33, 7];
      const expected = [...input].sort((a, b) => a - b);
      expect(sortNSquared(input)).toEqual(expected);
    });

    test('should handle arrays with a single element', () => {
      expect(sortNSquared([42])).toEqual([42]);
    });

    test('should handle an empty array', () => {
      expect(sortNSquared([])).toEqual([]);
    });
  });
});