function Sten() {
    playGame("sten");
}

function Sax() {
    playGame("sax");
}

function Påse() {
    playGame("påse");
}



function playGame(playerChoice) {

   

    const choices = ["sten", "sax", "påse"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    //TESTKÖRNING
    //alert(computerChoice);

   
    const computerChoiceElement = document.getElementById("computerChoice");

    switch(computerChoice) {
        case "sax":
            computerChoiceElement.innerHTML = "<img src='./Bilder/Sax.jpg' alt='Datorns val: Sax'>";
            break;

        case "påse":
            computerChoiceElement.innerHTML = "<img src='./Bilder/Påse.jpg' alt='Datorns val: Påse'>";
            break;

        case "sten":
            computerChoiceElement.innerHTML = "<img src='./Bilder/Sten.jpg' alt='Datorns val: Sten'>";
            break;
    }


    if (playerChoice === computerChoice) {
        result = "Det blev lika!";
    } else if (
        (playerChoice === "sten" && computerChoice === "sax") ||
        (playerChoice === "sax" && computerChoice === "påse") ||
        (playerChoice === "påse" && computerChoice === "sten")
    ) {
        result = "Du vann!";
    } else {
        result = "Datorn vann!";
    }

    document.getElementById("result").innerText = result;
}

