export function MatrixChecker(matrix1: any, matrix2: any) {
    if (matrix1.length !== matrix2.length) {
        return false;
    }
    for (let i = 0; i < matrix1.length; i++) {
        if (matrix1[i].length !== matrix2[i].length) {
            return false;
        }
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

