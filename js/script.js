let subject = document.getElementById('subjectType');
let quantity_of_questions = document.getElementById('amoutOfQuestions');
let url = 'https://kit-questions.glitch.me/question/' + subject.value + "/" + quantity_of_questions.value
console.log(url);
let start_quiz_btn = document.getElementById('startBtn');

function beginTeaser(){
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>console.log(data))
    .catch((error)=>{
        console.log('error');
    })
}



