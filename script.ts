//Task2
export function countingSort(A: number[], k: number): number[] {
    const n: number = A.length;
    const B: number[] = new Array(n); 
    const C: number[] = new Array(k + 1).fill(0); 

    for (let j = 0; j < n; j++) {
        C[A[j]]++;
    }

    for (let i = 1; i <= k; i++) {
        C[i] = C[i] + C[i - 1];
    }

    for (let j = n - 1; j >= 0; j--) {
        B[C[A[j]] - 1] = A[j];
        C[A[j]]--;
    }

    return B;
}

const array: number[] = [4, 1, 3, 4, 3,5];
const maxNumber: number = 5; 

console.log(`CountingSort: ${countingSort(array, maxNumber)}`); 

//Task3

export function radixSortThreeDigits(A: number[]): number[] {
    let result = [...A];
    
    for (let exp = 1; exp <= 100; exp *= 10) {
        const digits = result.map(num => Math.floor(num / exp) % 10);
        
        const n = result.length;
        const B = new Array(n);
        const C = new Array(10).fill(0); 

        for (let j = 0; j < n; j++) C[Math.floor(result[j] / exp) % 10]++;
        for (let i = 1; i < 10; i++) C[i] += C[i - 1];
        for (let j = n - 1; j >= 0; j--) {
            const d = Math.floor(result[j] / exp) % 10;
            B[C[d] - 1] = result[j];
            C[d]--;
        }
        result = B;
    }
    return result;
}


export function sortNSquared(A: number[]): number[] {
    const n = A.length;
    let result = [...A];

    for (let shift = 0; shift < 2; shift++) {
        const exp = Math.pow(n, shift);
        const B = new Array(n);
        const C = new Array(n).fill(0);

        for (let j = 0; j < n; j++) C[Math.floor(result[j] / exp) % n]++;
        for (let i = 1; i < n; i++) C[i] += C[i - 1];
        for (let j = n - 1; j >= 0; j--) {
            const d = Math.floor(result[j] / exp) % n;
            B[C[d] - 1] = result[j];
            C[d]--;
        }
        result = B;
    }
    return result;
}

const threeDigits = [123, 987, 456, 100, 202, 555];
console.log("radixSortThreeDigits:", radixSortThreeDigits(threeDigits));


const nSquaredArray = [24, 1, 15, 10, 5]; 
console.log("Sorting n^2 :", sortNSquared(nSquaredArray));