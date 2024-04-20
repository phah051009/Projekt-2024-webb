// Funktion för att skapa ett tärningskast med värden mellan 1 och 9
function slåTärning() {
    return Math.floor(Math.random() * 9) + 1;
}

// Funktion för att jämföra användarens gissning med det slumpmässiga talet.
function makeGuess(guess) {
    let numberDisplay = document.getElementById('number');
    let resultDisplay = document.getElementById('result');

    // Hämta det aktuella talet från hemsidan.
    let currentNumber = parseInt(numberDisplay.textContent);
    let nextNumber = slåTärning();


    // Jämför användarens gissning med det kommande talet.
    if ((guess === 'higher' && nextNumber > currentNumber) || (guess === 'lower' && nextNumber < currentNumber)) {
        resultDisplay.textContent = "Grattis! Du gissade rätt!";
    } else {
        resultDisplay.textContent = "Tyvärr, du gissade fel. Försök igen!";
    }

    // Uppdaterar talet på hemsidan.
    numberDisplay.textContent = nextNumber;
}


//Använder window.onload så att detta körs varje gång hemsidan laddas. 
window.onload = function() {
    let numberDisplay = document.getElementById('number');
    let initialMessage = document.getElementById('initial-message');

    // Skapar ett slumpmässigt nummer och visar det på hemsidan.
    let initialNumber = slåTärning();
    numberDisplay.textContent = initialNumber;

    // Skriver ut på hemsidan det slumpmässiga numret och låter användaren välja om det är större eller lägre.
    numberDisplay.textContent = "Tror du att nästa tal blir högre än " + initialNumber + " eller lägre?";
}
