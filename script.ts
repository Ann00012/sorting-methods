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

