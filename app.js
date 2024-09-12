const saveButton = document.querySelector('.btn.btn-save');
const flashCardQuestion = document.querySelector('.flashcard-question');
const flashCardAnswer = document.querySelector('.flashcard-answer');
const deleteButton = document.querySelector('.btn.btn-delete');


let flashcards = [];

let library = [];

saveCard = (question,answer) => {
    flashcards.push({question:question,answer:answer})
    localStorage.setItem('flashcards',JSON.stringify(flashcards));
}



saveButton.addEventListener('click',e => {
    e.preventDefault();
    saveCard(flashCardQuestion.value,flashCardAnswer.value);

    flashCardQuestion.value = '';
    flashCardAnswer.value = '';
})




deleteButton.addEventListener('click',e =>{
    localStorage.clear();
})

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


