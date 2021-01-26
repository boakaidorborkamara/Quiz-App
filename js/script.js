function beginTeaser(){
    //Targeting HTML Elements
    let subject = document.getElementById('subjectType').value;

    let quantity_of_questions = document.getElementById('amoutOfQuestions').value;

    let url = 'https://kit-questions.glitch.me/question/' + subject + "/" + quantity_of_questions;

    let start_quiz_btn = document.getElementById('startBtn');

    //calling the API
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>console.log(data))
    .catch((error)=>{
        console.log('error');
    });

    console.log(quantity_of_questions);
    console.log(subject);

}

start_quiz_btn.addEventListener("click", beginTeaser());



