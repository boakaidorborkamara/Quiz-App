function beginTeaser(){
    //Targeting HTML Elements
    let subject = document.getElementById('subjectType').value;

    let quantity_of_questions = document.getElementById('amoutOfQuestions').value;

    let url = 'https://kit-questions.glitch.me/question/' + subject + "/" + quantity_of_questions;

    //calling the API
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error)=>{
        console.log('error');
    });
}

function changeStage(){
    //Hide first container
    let firstContainer = document.getElementById('container');
    let secondContainer = document.getElementById("questionairContainer");
    firstContainer.style.display = "none";
    secondContainer.style.display = "flex";
}

//calling function on the start teaser btn
let start_quiz_btn = document.getElementById('startBtn');
start_quiz_btn.addEventListener("click", beginTeaser);
start_quiz_btn.addEventListener("click", changeStage);



