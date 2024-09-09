const saveButton = document.querySelector('.btn.btn-save');
const flashCardQuestion = document.querySelector('.flashcard-question');
const flashCardAnswer = document.querySelector('.flashcard-answer');
const deleteButton = document.querySelector('.btn.btn-delete');

let questions = [];
let answers = [];


saveCard = (question,answer) => {
    questions.push({ data: question });
    localStorage.setItem(`questions`, JSON.stringify(questions));

    answers.push({data: answer});
    localStorage.setItem('answers',JSON.stringify(answers));
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

