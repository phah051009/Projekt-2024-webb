// Array med sökvägar till bilder som används i spelet
const bildKällor = ["./Bilder/Anna.jpg", "./Bilder/Olof.jpg", "./Bilder/Elsa.jpg", "./Bilder/Rapunzel.jpg", "./Bilder/PrinsHans.jpg", "./Bilder/Häst.jpg", "./Bilder/Monster.jpg", "./Bilder/Kristoffer.jpg"];

// Standardbild som visas när korten inte är uppvända
const standardBild = "./Bilder/Baksida.jpg";

const kolumner = 4, rader = 4;
const antalKort = kolumner * rader;
const spelBehållare = document.querySelector("#memory-game");

const musikIkon = document.getElementById("music-icon");
const frostMusik = new Audio();

let aktuelltLåtIndex = 0;
let förstaBildIndex = null;
let andraBildIndex = null;
let matchadePar = 0;

let blandadeBilder = [];

// Funktion för att fylla spelplanen med kort
const fyllSpelbrädet = () => {
    // Blanda bilderna
    blandaBilder();
    // Lägg till varje bild på spelplanen
    for (let i = 0; i < antalKort; i++) {
        läggTillBildPåSpelbrädet(i, blandadeBilder[i]);
    }
};

// Funktion för att lägga till ett kort på planen
const läggTillBildPåSpelbrädet = (index, bildSrc) => { 
    const bildDiv = document.createElement("div"); //Skapar en div för själva kortet.
    const bild = document.createElement("img"); //Skapar ett element för bilden.
    bild.dataset.idx = index; //Sparar de index som bilden har 

    bild.src = standardBild;
    bild.classList.add("bild-kort");
    bild.addEventListener("click", hanteraBildKlick);
    bildDiv.appendChild(bild);
    spelBehållare.appendChild(bildDiv);
};

// Funktion för att återställa spelet
const återställSpel = () => {
    location.reload(); // Ladda om sidan för att återställa spelet
};

// Funktion som hanterar klick på kort
const hanteraBildKlick = (event) => {
    const klickadBild = event.target;
    const index = parseInt(klickadBild.dataset.idx);

    // Kontrollera om klicket ska räknas.
    if (index !== förstaBildIndex && index !== andraBildIndex) {
        // Visa bilden på kortet
        klickadBild.src = blandadeBilder[index];
        // Hantera logik för matchning av kortpar
        if (förstaBildIndex === null) {
            // Spara index för det första klickade kortet
            förstaBildIndex = index;
        } else if (andraBildIndex === null) {
            // Spara index för det andra klickade kortet
            andraBildIndex = index;
            // Kontrollera om kortparen matchar
            if (blandadeBilder[förstaBildIndex] === blandadeBilder[andraBildIndex]) {
                förstaBildIndex = null;
                andraBildIndex = null;
                matchadePar++;
                // Visa vinst-popup om alla kortpar matchas
                if (matchadePar === antalKort / 2) {
                    visaVinstPopup();
                }
            } else {
                // Dölj korten om de inte matchar efter en kort fördröjning
                setTimeout(() => {
                    document.querySelectorAll(`[data-idx='${förstaBildIndex}'], [data-idx='${andraBildIndex}']`).forEach(bild => bild.src = standardBild);
                    förstaBildIndex = null;
                    andraBildIndex = null;
                }, 500);
            }
        }
    }
};

// Funktion för att visa vinst-popup
const visaVinstPopup = () => {
    // HTML-innehåll för vinst-popupen
    const vinstPopupInnehåll = `<h2>Grattis, du vann!</h2><button id="spela-igen-knapp">Spela igen</button><button id="stäng-knapp">Stäng</button>`;
    const vinstPopup = document.createElement("div");
    vinstPopup.classList.add("popup");

    // Lägg till HTML-innehållet i popupen
    vinstPopup.innerHTML = vinstPopupInnehåll;
    vinstPopup.querySelector("#spela-igen-knapp").addEventListener("click", återställSpel);
    vinstPopup.querySelector("#stäng-knapp").addEventListener("click", () => vinstPopup.remove());
    document.body.appendChild(vinstPopup);
};

// Funktion för att växla musikuppspelning
const växlaMusik = () => {
    // Kontrollera om musiken är pausad
    if (frostMusik.paused) { 
        spelaLåt(aktuelltLåtIndex); 
        musikIkon.innerHTML = `<img src="../../Meny/Högtalare.png" alt="Musikikon">`; 
    } else { 
        frostMusik.pause(); 
        musikIkon.innerHTML = `<img src="../../Meny/Play.png" alt="Musikikon">`; 
    }
};

// Lägg till klickhändelse för att växla musikuppspelning
musikIkon.addEventListener("click", växlaMusik);

// Array med sökvägar till musikfiler
const låtar = ["./Musik/Forthefirsttime.mp3", "./Musik/Letitgo.mp3", "./Musik/Loveisanopendoor.mp3"];

// Funktion för att spela upp musik
const spelaLåt = (index) => {
    // Kontrollera om indexet är inom det tillåtna intervallet
    if (index >= 0 && index < låtar.length) {
        // Ange källan för ljudobjektet
        frostMusik.src = låtar[index];
        // Spela upp musiken
        frostMusik.play();
        // Uppdatera indexet för den aktuella låten
        aktuelltLåtIndex = index;
    }
};

// Funktion för att blanda bilderna för att skapa kortpar
const blandaBilder = () => {
    const tempArray = [...bildKällor, ...bildKällor];
    blandadeBilder = [];
    // Blanda bilderna slumpmässigt
    while (tempArray.length > 0) {
        // Generera ett slumpmässigt index
        const slumpmässigtIndex = Math.floor(Math.random() * tempArray.length);
        // Lägg till bilden på det slumpmässiga indexet i den blandade arrayen
        blandadeBilder.push(tempArray[slumpmässigtIndex]);
        // Ta bort den använda bilden från temporär array
        tempArray.splice(slumpmässigtIndex, 1);
    }
};


fyllSpelbrädet();
