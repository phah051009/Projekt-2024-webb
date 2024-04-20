document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});


window.onload = (event) => {
    if (sessionStorage.saveBackgroundColor != "") {
        document.body.classList.toggle(sessionStorage.saveBackgroundColor);
    }
    if (sessionStorage.saveTextColor != "") {
        document.body.classList.toggle(sessionStorage.saveTextColor);
    }
    if (sessionStorage.saveFont != "") {
        document.body.classList.toggle(sessionStorage.saveFont);
    }
    if (sessionStorage.saveDarkmode != "") {
        document.body.classList.toggle(sessionStorage.saveDarkmode);
    }

    console.log(sessionStorage.saveBackgroundColor); // Sparar bakgrundsfärgen
    console.log(sessionStorage.saveTextColor); // Sparar textfärgen
    console.log(sessionStorage.saveFont); // Sparar typsnittet
    console.log(sessionStorage.saveDarkmode); // Sparar Darkmode/Lightmode
}
// Darkmode funktionen som gör att vi ändrar mellan ljust och mörkt läge och att när vi har mörkt läge så står det ljust läge på knappen.
function Toggle() {
    document.body.classList.toggle("darkmode");
    const toggleButton = document.getElementById('darkandlightmodesv');
    tooglesaveddarkmode("darkmode");
    //Här så ändras texten beroende på vilket läge vi har aktiverat.
    if (toggleButton.innerHTML == "Darkmode") {
        toggleButton.innerHTML = "Lightmode";
    }
    else {
        toggleButton.innerHTML = "Darkmode";
    }
}
const body = document.body;

function Getinfobox() {
    const informationdiv = document.getElementsByClassName("information");
    document.querySelector('body').classList.add('popup-visible-philipshue');
    document.getElementById("information").style.display = "block"
}
function closebutton() {
    const closebutton = document.getElementById("information").style.display = "none";
    document.querySelector('body').classList.remove('popup-visible-philipshue');
}
// När användaren klickar på ändra bakgrundsfärg så öpnnas ett popup fönster där användaren kan välja mellan olika färger.
function Getinfoboxbackgroundcolor() {
    const informationdiv = document.getElementsByClassName("informationcolor");
    document.getElementById("informationcolor").style.display = "block"
}
function closebutton1() {
    const closebutton1 = document.getElementById("informationcolor").style.display = "none";
}
//När användaren klickar på ändra textfärg så öppnas ett popup fönster där användaren kan välja mellan olika färger.
function Getinfoboxtextcolor() {
    const informationdiv = document.getElementsByClassName("informationcolortext");
    document.getElementById("informationcolortext").style.display = "block"
}
function closebutton2() {
    const closebutton1 = document.getElementById("informationcolortext").style.display = "none";
}
function Getinfoboxchangetext() {
    const informationdiv = document.getElementsByClassName("informationchangetext");
    document.getElementById("informationchangetext").style.display = "block"
}
function closebutton3() {
    const closebutton1 = document.getElementById("informationchangetext").style.display = "none";
}
function Toggle1() {
    document.body.classList.toggle("darkmode1");
    const toggleButton = document.getElementById('darkandlightmodesv1');
}
//När användaren trycker på den rosa knappen så ändras bakgrunden till rosa.
function buttonpink() {
    document.body.classList.toggle("backgroundpink");
    tooglesavedbackground("backgroundpink");
}
//När användaren trycker på den lila knappen så ändras bakgrunden till lila.
function buttonpurple() {
    document.body.classList.toggle("backgroundpurple");
    tooglesavedbackground("backgroundpurple");
}
//När användaren trycker på den gröna knappen så ändras bakgrunden till grön.
function buttongreen() {
    document.body.classList.toggle("backgroundgreen");
    tooglesavedbackground("backgroundgreen");
}
//När användaren trycker på den gula knappen så ändras bakgrunden till gul.
function buttonyellow() {
    document.body.classList.toggle("backgroundyellow");
    tooglesavedbackground("backgroundyellow");
}
//När användaren trycker på den grå knappen så ändras bakgrunden till grå.
function buttongrey() {
    document.body.classList.toggle("backgroundgrey");
    tooglesavedbackground("backgroundgrey");
}
//När användaren trycker på den orangea knappen så ändras bakgrunden till orange.
function buttonorange() {
    document.body.classList.toggle("backgroundorange");
    tooglesavedbackground("backgroundorange");
}
//När användaren trycker på den röda knappen så ändras bakgrunden till röd. 
function buttonred() {
    document.body.classList.toggle("backgroundred");
    tooglesavedbackground("backgroundred");
}
function buttonwhite() {
    document.body.classList.toggle("backgroundwhite");
    tooglesavedbackground("backgroundwhite");
}
//När användaren trycker på den röda knappen så ändras texten till röd.
function buttonredtext() {
    document.body.classList.toggle("backgroundredtext");
    tooglesavedtext("backgroundredtext");
}
//När användaren trycker på den orangea knappen så ändras texten till orange.
function buttonorangetext() {
    document.body.classList.toggle("backgroundorangetext");
    tooglesavedtext("backgroundorangetext");
}
//När användaren trycker på den grå knappen så ändras texten till grå.
function buttongreytext() {
    document.body.classList.toggle("backgroundgreytext");
    tooglesavedtext("backgroundgreytext");
}
//När användaren trycker på den gula knappen så ändras texten till gul.
function buttonyellowtext() {
    document.body.classList.toggle("backgroundyellowtext");
    tooglesavedtext("backgroundyellowtext");
}
//När användaren trycker på den gröna knappen så ändras texten till grön.
function buttongreentext() {
    document.body.classList.toggle("backgroundgreentext");
    tooglesavedtext("backgroundgreentext");
}
// När användaren trycker på den lila knappen så ändras texten till lila.
function buttonpurpletext() {
    document.body.classList.toggle("backgroundpurpletext");
    tooglesavedtext("backgroundpurpletext");
}
// När användaren trycker på den rosa knappen så ändras texten till Rosa.
function buttonpinktext() {
    document.body.classList.toggle("backgroundpinktext");
    tooglesavedtext("backgroundpinktext");
}
// När användaren trycker logga ut så försvinner symbolen uppe till höger.
function Logout() {
    document.getElementById("symbol").classList.add("hidden");
}
// När användaren trycker logga in så kommer symbolen fram.
function showImage() {
    document.getElementById("symbol").classList.remove("hidden");
}
// När användaren trycker på visa lösenord så hämtar funktionen lösemordet och ger det
// till variabeln x och sedan får vi se variabel x alltså lösenordet.
function showPassword() {
    var x = document.getElementById("myPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function buttonarialtext() {
    document.body.classList.toggle("backgroundarialtext");
    tooglesavedfont("backgroundarialtext");
}
function buttonverdanatext() {
    document.body.classList.toggle("backgroundverdanatext");
    tooglesavedfont("backgroundverdanatext");
}
function buttongeorgiatext() {
    document.body.classList.toggle("backgroundgeorgiatext");
    tooglesavedfont("backgroundgeorgiatext");
}
function tooglesavedbackground(color) {
    tempColor = color
    if (color == sessionStorage.saveBackgroundColor) {
        sessionStorage.saveBackgroundColor = ""
    }
    else {
        sessionStorage.saveBackgroundColor = tempColor;
    }
}
function tooglesavedtext(color) {
    temptextColor = color
    if (color == sessionStorage.saveTextColor) {
        sessionStorage.saveTextColor = ""
    }
    else {
        sessionStorage.saveTextColor = temptextColor;
    }
}
function tooglesaveddarkmode(color) {
    tempdarkmodeColor = color
    if (color == sessionStorage.saveDarkmode) {
        sessionStorage.saveDarkmode = ""
    }
    else {
        sessionStorage.saveDarkmode = tempdarkmodeColor;
    }
}
function tooglesavedfont(font) {
    tempsavedfont = font
    if (font == sessionStorage.saveFont) {
        sessionStorage.saveFont = ""
    }
    else {
        sessionStorage.saveFont = tempsavedfont;
    }
}


   