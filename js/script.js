function beginTeaser(){
    //Targeting HTML Elements
    let subject = document.getElementById('subjectType').value;
    let quantity_of_questions = document.getElementById('amoutOfQuestions').value;

    // define the url for fetch
    let url = 'https://kit-questions.glitch.me/question/' + subject + "/" + quantity_of_questions;

    //calling the API
    let all_data = '';
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            all_data = data;
            let questions = Object.values(all_data.questions);
            let question_array = []
            questions.forEach(ele => {
                question_array.push(ele.question);
                console.log(ele.question);
            });
            console.log(question_array);
    })
    .catch(err=>{
        if (err) {
            console.log(err);
        }
    })

}



function changeStage(){
    //Hide first container while showing second container
    let firstContainer = document.getElementById('container');
    let secondContainer = document.getElementById("questionairContainer");
    firstContainer.style.display = "none";
    secondContainer.style.display = "flex";
}

//calling function on the start teaser btn
let start_quiz_btn = document.getElementById('startBtn');
start_quiz_btn.addEventListener("click", beginTeaser);
start_quiz_btn.addEventListener("click", changeStage);



