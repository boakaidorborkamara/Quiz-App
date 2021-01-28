function beginTeaser(){
    //Targeting HTML Elements
    let subject = document.getElementById('subjectType').value;

    let quantity_of_questions = document.getElementById('amoutOfQuestions').value;

    let url = 'https://kit-questions.glitch.me/question/' + subject + "/" + quantity_of_questions;

    //calling the API
    let all_data;
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
        return(data);
        console.log(data)
    })
    .catch((error)=>{console.log('error')});

    console.log(all_data)
    all_data=1
    console.log(all_data);
    
    //looping through the json object
    // for(let i=0; i<data.questions; i++){
    //     console.log(data.questions);
    // }

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



