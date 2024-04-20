document.addEventListener("DOMContentLoaded", function() {
    var animalImage = document.querySelector('.horse-image');
    var animalType = "Häst";

    var animals = [
        { name: "Hund", image: './Bilder/djur/Hund.gif', foodImage: './Bilder/Mat/Hundben.png', sound: './Musik/RättMatHäst.mp3' },
        { name: "Häst", image: './Bilder/djur/Häst.gif', foodImage: './Bilder/Mat/Äpple.jpg', sound: './Musik/RättMatHäst.mp3' },
        { name: "Enhörning", image: './Bilder/djur/Enhörning.gif', foodImage: './Bilder/Mat/Morot.jpg', sound: './Musik/RättMatHäst.mp3' }
    ];

    var currentIndex = 1;

    var prevButton = document.getElementById('prev-button');
    var nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + animals.length) % animals.length;
        updateAnimal();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % animals.length;
        updateAnimal();
    });

    function updateAnimal() {
        animalImage.src = animals[currentIndex].image;
        animalType = animals[currentIndex].name;
        resetPopup();
    }

    var popup = document.getElementById('popup');
    var timerDisplay = document.getElementById('timer-display');

    var timer = 30; // Time in seconds
    var timerInterval;

    function startTimer() {
        timerInterval = setInterval(function() {
            timer--;
            timerDisplay.textContent = timer;
            if (timer <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "Time's up!";
                popup.textContent = "Time's up! You caught " + caughtCarrots + " carrots!";
            }
        }, 1000);
    }

    function resetPopup() {
        popup.style.display = "block";
        popup.textContent = "Start";
        timer = 30;
        timerDisplay.textContent = timer;
        clearInterval(timerInterval);
    }

    var caughtCarrots = 0;

    popup.addEventListener('click', function() {
        startTimer();
        resetPopup();
    });

    var foodImages = document.querySelectorAll('.food-image');

    function toggleFoodImages() {
        foodImages.forEach(function(image) {
            setTimeout(function() {
                var newX = Math.random() * (window.innerWidth - image.width);
                var newY = Math.random() * (window.innerHeight - image.height);
                image.style.left = newX + 'px';
                image.style.top = newY + 'px';
                image.style.display = 'block';
            }, Math.random() * 3000);
        });
    }

    toggleFoodImages();

    foodImages.forEach(function(image) { 
        image.addEventListener('click', function() {
            var isCorrect = this.dataset.correct === 'true';
            if (isCorrect) {
                caughtCarrots++;
                playSound(animals[currentIndex].sound);
                // Byt position på äpplet när det klickas
                var newX = Math.random() * (window.innerWidth - this.width);
                var newY = Math.random() * (window.innerHeight - this.height);
                this.style.left = newX + 'px';
                this.style.top = newY + 'px';
            } else {
                playSound('./Musik/FelMatHäst.mp3');
            }
        });
    });

    function playSound(soundPath) {
        var audio = new Audio(soundPath);
        audio.play();
    }
});


var foodImages = document.querySelectorAll('.food-image');

function toggleFoodImages() {
    foodImages.forEach(function(image) {
        setInterval(function() { /* Använd setInterval istället för setTimeout för att ändra positionen kontinuerligt */
            var newX = Math.random() * (window.innerWidth - image.width);
            var newY = Math.random() * (window.innerHeight - image.height);
            image.style.left = newX + 'px';
            image.style.top = newY + 'px';
        }, 1000); // Ändra till 1000 millisekunder för att matcha animationshastigheten
    });
}

toggleFoodImages();
