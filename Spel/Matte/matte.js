var questionCounter = document.getElementById('question-counter');
var questionElement = document.getElementById('fråga');
var frostMusic = document.getElementById('frostMusiK');
var musicIcon = document.getElementById('musik-icon');
var questionImage = document.getElementById('frågeBild');

var fråga = 0; // Börja med första frågan
var rättSvar = 0; // Håller reda på antal rätt

// Funktion för att generera ett slumpmässigt tal
function skapaNummer(min, max) {
    // Genererar ett slumpmässigt heltal mellan min och max, inklusive båda gränserna.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 

// Funktion för att generera en ny fråga
function SkapaTal() {
    var num1 = skapaNummer(0, 20); // Skapar ett slumpmässigt tal mellan 0 och 20.
    var num2 = skapaNummer(0, 20); // Skapar ett slumpmässigt tal mellan 0 och 20.

    // Returnera ett objekt som innehåller frågan och det korrekta svaret
    return { question: num1 + ' + ' + num2, result: num1 + num2 };
}



// Funktion för att uppdatera frågan och svarsalternativen
function UpdateraFråga() {
    // Öka räknaren för frågor med 1
    fråga++;
    // Uppdatera textinnehållet för frågeräknaren med den aktuella frågan och totala antalet frågor
    questionCounter.textContent = 'Fråga ' + fråga + ' av 100'; // Uppdatera till 100 frågor
    // Skapa nya frågeuppgifter genom att anropa funktionen SkapaTal()
    var questionData = SkapaTal();
    // Uppdatera textinnehållet för frågan med den nya frågan som genererats
    questionElement.textContent = questionData.question;
    // Generera ett slumpmässigt index för det korrekta svaret
    var correctIndex = skapaNummer(0, 3);
    // Hämta alla svarsalternativ och konvertera dem till en array
    var options = Array.from(document.querySelectorAll('.option'));
    // Skapa en tom array för att lagra felaktiga svar
    var incorrectAnswers = []; // Håll reda på de felaktiga svaren
    // Loopa igenom varje svarsalternativ och uppdatera dem
    options.forEach(function(option, index) {
        var value;
        // Om det aktuella indexet matchar det korrekta indexet
        if (index === correctIndex) {
            // Tilldela det korrekta svaret från frågeuppgifterna
            value = questionData.result;
        } else { // Om det inte är det korrekta indexet
            // Slumpa ett felaktigt svar och se till att det inte blir en dublett eller samma som det korrekta svaret
            do {
                value = skapaNummer(0, 40); // Slumpa ett felaktigt svar
            } while (incorrectAnswers.includes(value) || value === questionData.result); // Kontrollera att det inte blir dublett
            // Lägg till det felaktiga svaret i listan för felaktiga svar
            incorrectAnswers.push(value);
        }
        // Uppdatera textinnehållet för det aktuella svarsalternativet med det genererade svaret
        option.textContent = value;
        // Ange om det aktuella svarsalternativet är det korrekta svaret eller inte genom att ändra en dataset-egenskap
        option.dataset.correct = (index === correctIndex);
        // Återställ bakgrundsfärgen för det aktuella svarsalternativet
        option.style.backgroundColor = '#FFB6C1';
        // Lägg till en klickhändelse för att hantera svaret
        option.onclick = rättaSvar;
    });

    // Uppdatera frågebilden genom att slumpa en ny bild
    var imagePath = skapaNummer(1, 26);
    // Uppdatera HTML-innehållet för frågebilden med den nya bilden
    questionImage.innerHTML = '<img src="../../Spel/Matte/bilder/bild' + imagePath + '.jpg" alt="Frågebild" class="question-image">';
}


// Funktion för att hantera klick på svarsalternativ
 
// Funktion för att hantera klick på svarsalternativ
var frostMusic = document.getElementById('frostMusik');

// Funktion för att hantera klick på svarsalternativ
function rättaSvar() {
    var isCorrect = this.dataset.correct === 'true';
    this.style.backgroundColor = isCorrect ? '#66BB6A' : '#f00';
    if (isCorrect) {
        rättSvar++;
        //frostMusic.src = './Musik/rätt.mp3'; // Spela rätt-ljud
        setTimeout(function() {
            if (fråga < 100) { // Kontrollera om det finns fler frågor kvar
                UpdateraFråga(); // Uppdatera frågan
            } else {
                alert('Grattis! Du har svarat på alla 100 frågor.'); // Meddela användaren att alla frågor är besvarade
            }
        }, 1000);
    } else {
        //frostMusic.src = './Musik/fel.mp3'; // Spela fel-ljud
        setTimeout(function() {
            this.style.backgroundColor = '#FFB6C1'; // Återställ färgen
        }.bind(this), 500); // Återställ färgen efter 0,5 sekund
    }
}







// Uppdatera första frågan när sidan laddas
UpdateraFråga();

// Lyssnare för klick på musikikonen
// Hämta elementet för musikspelaren med id 'frostMusik' och tilldela det till variabeln frostMusic
var frostMusic = document.getElementById('frostMusik');

// Hämta elementet för musikikonen med id 'musik-icon' och tilldela det till variabeln musicIcon
var musicIcon = document.getElementById('musik-icon');





// Lägg till en lyssnare för klickhändelsen på musikikonen
musicIcon.addEventListener("click", function() {
    // Om musiken är pausad
    if (frostMusic.paused) { 
        // Byt källan till musikfilen 'kids.mp3' 
        frostMusic.src = './Musik/kids.mp3';
        // Spela musiken
        frostMusic.play();
        // Uppdatera ikonen till en högtalarikon för att visa att musiken spelas
        musicIcon.innerHTML = '<img src="../../Meny/Högtalare.png">';
    } else { // Om musiken spelas
        // Pausa musiken
        frostMusic.pause();
        // Uppdatera ikonen till en play-ikon för att visa att musiken är pausad
        musicIcon.innerHTML = '<img src="../../Meny/Play.png">';
    }
});


