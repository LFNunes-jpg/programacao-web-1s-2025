function transporMatriz(A) {
    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));
    return transposta;
}

// Exemplo de matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log("Matriz Original:");
console.table(matriz);

console.log("Matriz Transposta:");
console.table(transporMatriz(matriz));
