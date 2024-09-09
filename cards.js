const flashCardContent = document.querySelector('.flashcard-input');
const flashCardContainer = document.querySelector('.myFlashcard-container');

let questions = [];
let answers = [];
let count = 0;

loadCards = () => {
    let i = 0;
    while (i < questions.length) {
        flashCardContainer.innerHTML += `
        <div class="flashcard" onclick="this.classList.toggle('flip')">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${questions[i].data}</p>
                </div>
                <div class="flashcard-back">
                    <p>${answers[i].data}</p>
                    <div class="flashcard-buttons">
                        <button class="flashcard-btn flashcard-btn-x">X</button>
                        <button class="flashcard-btn flashcard-btn-tick">✔</button>
                    </div>
                </div>
        </div>
        `
        i++;
    }
}

loadNextCard = () => {
    flashCardContainer.innerHTML = `
        <div class="flashcard" onclick="this.classList.toggle('flip')">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${questions[count].data}</p>
                </div>
                <div class="flashcard-back">
                    <p>${answers[count].data}</p>
                    <div class="flashcard-buttons">
                        <button class="flashcard-btn flashcard-btn-x">X</button>
                        <button class="flashcard-btn flashcard-btn-tick">✔</button>
                    </div>
                </div>
            </div>
        `
    count++;
}

document.addEventListener('DOMContentLoaded', function () {
    loadNextCard();
})

document.addEventListener('click', function(event) {
    if (event.target.matches('.flashcard-btn-x')) {
            
    }

    if (event.target.matches('.flashcard-btn-tick')) {
            loadNextCard();
            event.stopPropagation();

    }
});



if (localStorage.getItem("questions")) {
    let stored = localStorage.getItem("questions");
    stored = JSON.parse(stored);

    if (Array.isArray(stored)) {
        stored.forEach(task => {
            console.log(task.data);
        });

        questions = stored
    }
}

if (localStorage.getItem("answers")) {
    let stored = localStorage.getItem("answers");
    stored = JSON.parse(stored);

    if (Array.isArray(stored)) {
        stored.forEach(task => {
            console.log(task.data);
        });

        answers = stored
    }
}

