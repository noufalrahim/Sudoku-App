export const fetchSudoku = async () => {
    try {
        const response = await fetch('https://sudoku-api.vercel.app/api/dosuku');
        const data = await response.json();
        console.log("data", data);
        return data.newboard.grids;
    } catch (error) {
        console.error('Error:', error);
    }
}