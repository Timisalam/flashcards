const flashCardContent = document.querySelector('.flashcard-input');
const flashCardContainer = document.querySelector('.myFlashcard-container');
const libraryContainer = document.querySelector('.library');

let flashcards = [];
let wrongAnswers = [];
let library = [];
let collection = {
        title: 'Test',
        cards: flashcards
    };
let count = 0;
let count2 = 0;
library.push(collection)
loadLibrary = () => {
    let i = 0;
    while (i < library.length) {
        libraryContainer.innerHTML += `
        <div class="flashcard" ">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${library[i].data.title}</p>
                </div>
            </div>
        </div>
        `
        console.log(library.length)
        console.log(library[i])
        i++;
    }
}

loadNextCard = () => {
    flashCardContainer.innerHTML = `
        <div class="flashcard" onclick="this.classList.toggle('flip')">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${flashcards[count].question}</p>
                </div>
                <div class="flashcard-back">
                    <p>${flashcards[count].answer}</p>
                    <div class="flashcard-buttons">
                        <button class="flashcard-btn flashcard-btn-x">X</button>
                        <button class="flashcard-btn flashcard-btn-tick">✔</button>
                    </div>
                </div>
            </div>
        `
    if(count == flashcards.length){
        flashCardContainer.innerHTML = `
        <div class="flashcard" onclick="this.classList.toggle('flip')">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${wrongAnswers[count2].question}</p>
                </div>
                <div class="flashcard-back">
                    <p>${wrongAnswers[count2].answer}</p>
                    <div class="flashcard-buttons">
                        <button class="flashcard-btn flashcard-btn-x">X</button>
                        <button class="flashcard-btn flashcard-btn-tick">✔</button>
                    </div>
                </div>
            </div>
        `
        count2++;
    }
    count++;
}

moveCardToBack = () =>{
    wrongAnswer = flashcards[count-1];
    wrongAnswers.push(wrongAnswer); 

}

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href === "file:///Users/Timis/Documents/WEB%20DESIGN%20PROJECTS/flashcards/flashcards/library.html") {
        loadLibrary();
        console.log("called")
    }
    if (window.location.href === "file:///Users/Timis/Documents/WEB%20DESIGN%20PROJECTS/flashcards/flashcards/flashcards.html") {
        loadNextCard();
    }
    
})

document.addEventListener('click', function(event) {
    if (event.target.matches('.flashcard-btn-tick')) {
            loadNextCard();

    }
    if (event.target.matches('.flashcard-btn-x')) {
        moveCardToBack();
        loadNextCard();
}
});



if (localStorage.getItem("flashcards")) {
    let stored = localStorage.getItem("flashcards");
    stored = JSON.parse(stored);

    if (Array.isArray(stored)) {
        stored.forEach(flashcard => {
            console.log(flashcard.question + " " + flashcard.answer);
        });

        flashcards = stored
    }
}
if (localStorage.getItem("library")) {
    let stored = localStorage.getItem("library");
    stored = JSON.parse(stored);

    if (Array.isArray(stored)) {
        stored.forEach(collection => {
            console.log(collection.title + " " + collection.cards);
        });

        library = stored
    }
}

