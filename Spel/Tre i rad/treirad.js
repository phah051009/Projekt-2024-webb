const board = document.getElementById('game-board');
const cells = [];
let currentPlayer = 'X'; // Spelare börjar alltid med X

//Skapa spelbrädet
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        // Skapar en ny div-element för varje cell i spelbrädet
        const cell = document.createElement('div');
        // Lägger till CSS-klassen "cell" till varje cell
        cell.classList.add('cell');
        // Lägger till anpassade dataset för att hålla reda på cellens rad och kolumn
        cell.dataset.row = i;
        cell.dataset.col = j;
        // Lägger till en klickhändelse till varje cell som kommer att anropas när en cell klickas på
        cell.addEventListener('click', cellClicked);
        // Lägger till cellen till spelbrädet (den överordnade div-taggen med id "game-board")
        board.appendChild(cell);
        // Lägger till cellen till arrayen av celler för att kunna referera till dem senare
        cells.push(cell);
    }
}






// Funktion för att kontrollera om det finns en vinnare
function checkWinner() {
    // Vinnande kombinationer för rader, kolumner och diagonaler
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rader
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Kolumner
        [0, 4, 8], [2, 4, 6] // Diagonaler
    ];
    
    // Loopa genom alla vinnande kombinationer
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        // Kontrollera om cellerna i kombinationen är samma och inte tomma
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true; // Returnera true om det finns en vinnande kombination
        }
    }
    return false; // Returnera false om ingen vinnare har hittats
}


// Funktion för att kontrollera om det är oavgjort
function checkDraw() {
    // Returnera true om varje cell har ett innehåll, vilket indikerar att det är oavgjort
    return cells.every(cell => cell.textContent !== '');
}

// Återställ spelbrädet till startläge för en ny omgång
function resetBoard() {
    // Töm innehållet i varje cell
    cells.forEach(cell => {
        cell.textContent = '';
    });
    // Återställ spelare till X för att låta användaren börja igen
    currentPlayer = 'X';
}




// Funktion för att hantera användarens drag
function userMove(cell) {
    // Kontrollera om cellen redan är upptagen av en spelare
    if (!cell.textContent) {
        // Placera användarens drag i den valda tomma cellen
        cell.textContent = currentPlayer;

        // Kontrollera om användaren har vunnit efter draget
        if (checkWinner()) {
            // Om användaren är X och har vunnit
            if (currentPlayer === 'X') {
                setTimeout(() => {
                    alert('Du vann över datorn!'); // Meddela användaren att de vann
                    resetBoard(); // Återställ spelbrädet för en ny omgång
                }, 1000); // Visa blinkande bakgrund i 1 sekund
            } else { // Om användaren är O och har vunnit
                setTimeout(() => {
                    alert('Du förlorade mot datorn!'); // Meddela användaren att de förlorade
                    resetBoard(); // Återställ spelbrädet för en ny omgång
                }, 1000); // Visa blinkande bakgrund i 1 sekund
            }
        } else if (checkDraw()) { // Om det blir oavgjort
            alert('Oavgjort!'); // Meddela att det blev oavgjort
            resetBoard(); // Återställ spelbrädet för en ny omgång
        } else {
            currentPlayer = 'O'; // Byt spelare till datorn efter användarens drag
            computerMove(); // Låt datorn göra sitt drag
        }
    }
}





// Funktion för att hantera datorns drag
function computerMove() {
    // Filtrera och hämta tomma celler där datorn kan placera sitt drag
    const emptyCells = cells.filter(cell => !cell.textContent);

    // Välj en slumpmässig tom cell för datorns drag
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomIndex];

    // Fördröj datorns drag för att simulera mänskligt beteende
    setTimeout(() => {
        // Placera datorns drag i den valda tomma cellen
        randomCell.textContent = currentPlayer;

        // Kontrollera om datorn har vunnit efter draget
        if (checkWinner()) {
            setTimeout(() => {
                alert('Datorn vann!'); // Meddela att datorn vann
                resetBoard(); // Återställ spelbrädet för en ny omgång
            }, 1000); // Visa blinkande bakgrund i 1 sekund
        } else if (checkDraw()) { // Om det blir oavgjort
            alert('Oavgjort!'); // Meddela att det blev oavgjort
            resetBoard(); // Återställ spelbrädet för en ny omgång
        } else {
            currentPlayer = 'X'; // Byt tillbaka till användarens tur efter datorns drag
        }
    }, 500); // Fördröj datorns drag för att simulera mänskligt beteende
}






// Klickhändelselyssnare för varje cell i spelbrädet, reagerar när en cell klickas
function cellClicked(event) {
    const cell = event.target; // Hämta den cell som klickades på
    userMove(cell); // Anropa funktionen userMove för att hantera användarens drag med den klickade cellen som argument
}
