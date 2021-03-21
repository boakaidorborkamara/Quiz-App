function beginTeaser(){
    //Targeting HTML Elements
    let subject = document.getElementById('subjectType').value;
    let quantity_of_questions = document.getElementById('amoutOfQuestions').value;

    // define the url for fetch
    let url = 'https://kit-questions.glitch.me/question/' + subject + "/" + quantity_of_questions;

    //targeting where to display question
    let question_container = document.getElementById('questions-container');
    let q_and_a = document.createElement('ol');
    console.log(question_container);
    
    //calling the API
    let all_data = {};
    
    
    fetch(url)
        .then(res => res.json())
        .then(data =>{
           
            all_data = data;
            console.log(all_data);
            let user_question = Object.entries(all_data.questions);
            let radio_btn_name = "";
            user_question.forEach(ele => {
                //giving the radio btn a value for the name attribute
                radio_btn_name = ele[0];

                //looping through and accessing individual question
                let myquestions = ele[1].question;

                //adding questions to html page by creating and appending elements
                let individual_question = document.createElement('li');
                let individual_question_text = document.createTextNode(myquestions);
                individual_question.appendChild(individual_question_text);
                q_and_a.appendChild(individual_question);
                question_container.appendChild(q_and_a);

                //targeting and looping through the various options for individual question
                let answers = Object.values(ele[1].options);
                answers.forEach((ele)=>{

                    let data = ele;
                //sending options to the html page by creating necessary elements
                    let answers_container = document.createElement('div');

                    let radio_btn = document.createElement('input');
                    radio_btn.setAttribute("type","radio");
                    radio_btn.setAttribute("name",radio_btn_name );
                    radio_btn.setAttribute("id", data);
                    radio_btn.setAttribute("value", data)
                   
                    let my_answer_options = document.createElement('label');
                    let answers_attribute = ele;
                    
                    let answers_text = document.createTextNode(ele);
                    my_answer_options.setAttribute("for", data);
                    my_answer_options.appendChild(answers_text);
                    answers_container.appendChild(radio_btn);
                    answers_container.appendChild(my_answer_options);
                    q_and_a.appendChild(answers_container);


                })

            });
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
// start_quiz_btn.addEventListener('click', displayQuestions);



