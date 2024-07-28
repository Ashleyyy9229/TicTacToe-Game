const gameBoard = document.getElementById('gameBoard');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let boardState = Array(9).fill(null);

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (boardState[index] || checkWinner()) return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
        setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    } else if (boardState.every(cell => cell)) {
        setTimeout(() => alert('Draw!'), 100);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    return winPatterns.some(pattern => {
        return pattern.every(index => boardState[index] === currentPlayer);
    });
}

function resetGame() {
    boardState = Array(9).fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
