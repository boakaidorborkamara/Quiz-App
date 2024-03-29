//App CLASS
class App{
    constructor(){
        this.questionsBank = {
            htmlQuestionsBank : [
                {
                  question: "Which attribute is used to specify the location of an external CSS file?",
                  options: ["href", "src", "class", "style"],
                  correctAnswer: "href"
                },
              
                {
                  question: "Which tag is used to define an HTML link?",
                  options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
                  correctAnswer: "&lt;a&gt;"
                },
              
                {
                  question: "What does HTML stand for?",
                  options: ["Hyper Text Markup Language", "High Technical Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
                  correctAnswer: "Hyper Text Markup Language"
                },
              
                {
                  question: "What is the correct HTML tag for the largest heading?",
                  options: ["&lt;heading&gt", "&lt;h6&gt", "&lt;h1&gt", "&lt;header&gt"],
                  correctAnswer: "&lt;h1&gt;"
                },
              
                {
                  question: "Which tag is used to create an unordered list in HTML?",
                  options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
                  correctAnswer: "&lt;ul&gt;"
                },
              
                {
                  question: "Which tag is used to insert an image in HTML?",
                  options: ["&lt;image&gt;", "&lt;img&gt;", "&lt;picture&gt;", "&lt;src&gt;"],
                  correctAnswer: "&lt;img&gt;"
                },
              
                {
                  question: "What does the \"alt\" attribute in the <img> tag specify?",
                  options: ["The alignment of the image", "The alternative text for the image", "The size of the image", "The source URL of the image"],
                  correctAnswer: "The alternative text for the image"
                },
              
                {
                  question: "Which tag is used to define a table in HTML?",
                  options: ["&lt;table&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;"],
                  correctAnswer: "&lt;table&gt;"
                },
              
                {
                  question: "Which attribute is used to make a text input field read-only in HTML?",
                  options: ["readonly", "disabled", "inputonly", "locked"],
                  correctAnswer: "readonly"
                },
              
                {
                  question: "What is the correct HTML tag for inserting a line break?",
                  options: ["&lt;break&gt;", "&lt;lb&gt;", "&lt;newline&gt;", "&lt;br&gt;"],
                  correctAnswer: "&lt;br&gt;"
                }
            ],
              
            // CSS Questions Bank
            cssQuestionsBank : [
                {
                  question: "Which property is used to change the background color of an element?",
                  options: ["color", "background-color", "background", "bg-color"],
                  correctAnswer: "background-color"
                },
              
                {
                  question: "Which CSS property is used to specify the font style of an element?",
                  options: ["font-family", "font-style", "font-weight", "font-size"],
                  correctAnswer: "font-style"
                },
              
                {
                  question: "How can you select an element with the id \"myElement\" in CSS?",
                  options: [".myElement", "#myElement", "element.myElement", "element#myElement"],
                  correctAnswer: "#myElement"
                },
              
                {
                  question: "Which CSS property is used to control the spacing between lines of text?",
                  options: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
                  correctAnswer: "line-height"
                },
              
                {
                  question: "Which CSS property is used to specify the space outside the borders of an element?",
                  options: ["margin", "padding", "border", "outline"],
                  correctAnswer: "margin"
                },
              
                {
                  question: "Which CSS property is used to align text vertically within its containing element?",
                  options: ["text-align", "text-justify", "vertical-align", "line-height"],
                  correctAnswer: "vertical-align"
                },
              
                {
                  question: "Which CSS property is used to control the size of an element relative to its parent container?",
                  options: ["width", "height", "max-width", "max-height"],
                  correctAnswer: "width"
                },
              
                {
                  question: "Which CSS property is used to add shadows to elements?",
                  options: ["shadow-color", "shadow-opacity", "box-shadow", "text-shadow"],
                  correctAnswer: "box-shadow"
                },
              
                {
                  question: "Which CSS property is used to make text appear in bold?",
                  options: ["font-style", "font-variant", "font-weight", "font-decoration"],
                  correctAnswer: "font-weight"
                },
              
                {
                  question: "Which CSS property is used to control the order of elements in a flexible box layout?",
                  options: ["order", "flex-order", "flex-direction", "flex-wrap"],
                  correctAnswer: "order"
                }
            ],  
              
            // JS Questions Bank
            javascriptQuestionsBank : [
                {
                  question: "What is the correct way to declare a variable in JavaScript?",
                  options: ["variable x;", "let x;", "vx;", "int x;"],
                  correctAnswer: "let x;"
                },
              
                {
                  question: "Which method is used to add a new element to the end of an array in JavaScript?",
                  options: ["push();", "pop();", "shift();", "unshift();"],
                  correctAnswer: "push();"
                },
              
                {
                  question: "What is the result of the following expression in JavaScript? \"10 + 5\"",
                  options: ["105", "15", "1050", "\"105\""],
                  correctAnswer: "\"105\""
                },
              
                {
                  question: "Which statement is used to exit a loop in JavaScript?",
                  options: ["end", "break", "exit", "stop"],
                  correctAnswer: "break"
                },
              
                {
                  question: "What is the purpose of the \"typeof\" operator in JavaScript?",
                  options: ["It checks if a variable is defined or not.", "It returns the type of a variable.", "It converts a string to a number.", "It compares two values for equality."],
                  correctAnswer: "It returns the type of a variable."
                },
              
                {
                  question: "What does the \"NaN\" stand for in JavaScript?",
                  options: ["Not a Number", "No available Number", "Negative and Null", "Not a Null"],
                  correctAnswer: "Not a Number"
                },
              
                {
                  question: "Which method is used to remove the last element from an array in JavaScript?",
                  options: ["push();", "pop();", "shift();", "unshift();"],
                  correctAnswer: "pop();"
                },
              
                {
                  question: "What is the correct way to write a comment in JavaScript?",
                  options: ["&lt;-- This is a comment --&gt;", "// This is a comment", "/* This is a comment */", "** This is a comment **"],
                  correctAnswer: "// This is a comment"
                },
              
                {
                  question: "What is the output of the following code snippet? console.log(2 + \"2\" - 1)",
                  options: ["21", "22", "23", " NaN"],
                  correctAnswer: "22"
                },
              
                {
                  question: "Which function is used to convert a string to an integer in JavaScript?",
                  options: ["parseInt();", "parseFloat();", "toInteger();", "convertToInt();"],
                  correctAnswer: "parseInt();"
                }
            ],
        
            // Git Questions Bank
            gitQuestionsBank : [
                {
                question: "What is Git?",
                options: ["A programming language", "A version control system", "An operating system", "An integrated development environment"],
                correctAnswer: "A version control system"
                },
            
                {
                question: "Which command is used to initialize a new Git repository?",
                options: ["git init", "git clone", "git commit", "git add"],
                correctAnswer: "git init"
                },
            
                {
                question: "What is the purpose of the \"git clone\" command?",
                options: ["To create a new branch", "To commit changes to a repository", "To create a copy of a remote repository", "To merge branches in a repository"],
                correctAnswer: "To create a copy of a remote repository"
                },
            
                {
                question: "Which command is used to stage changes in Git?",
                options: ["git add", "git commit", "git push", "git pull"],
                correctAnswer: "git add"
                },
            
                {
                question: "What does the command \"git commit\" do?",
                options: ["Pushes changes to a remote repository", "Adds files to the staging area", "Discards changes in the working directory", "Records changes to the repository"],
                correctAnswer: "Records changes to the repository"
                },
            
                {
                question: "How can you view the commit history in Git?",
                options: ["git status", "git log", "git diff", "git branch"],
                correctAnswer: "git log"
                },
            
                {
                question: "What is the purpose of the \"git push\" command?",
                options: ["To merge branches", "To fetch changes from a remote repository", "To publish local commits to a remote repository", "To undo the last commit"],
                correctAnswer: "To publish local commits to a remote repository"
                },
            
                {
                question: "How can you create a new branch in Git?",
                options: ["git branch", "git checkout", "git merge", "git clone"],
                correctAnswer: "git branch"
                },
            
                {
                question: "What is the command to discard local changes and revert to the last commit?",
                options: ["git revert", "git reset", "git checkout", "git stash"],
                correctAnswer: "git reset"
                },
            
                {
                question: "What is a \"merge conflict\" in Git?",
                options: ["A situation where two branches have unrelated commits", "A failure to push changes to a remote repository", "An error that occurs during cloning a repository", "A conflict that arises when Git can't automatically merge changes"],
                correctAnswer: "A conflict that arises when Git can't automatically merge changes"
                }
            ],
        
            // Python Questions Bank
            pythonQuestionsBank : [
                {
                question: "What is Python?",
                options: ["A high-level programming language", "A database management system", "An operating system", "A version control system"],
                correctAnswer: "A high-level programming language"
                },
            
                {
                question: "Which of the following is NOT a Python data type?",
                options: ["Integer", "String", "Float", "Boolean", "Array"],
                correctAnswer: "Array"
                },
            
                {
                question: "What is the correct way to declare a variable in Python?",
                options: ["variable x", "x = variable", "x := variable", "x = value"],
                correctAnswer: "x = value"
                },
            
                {
                question: "Which statement is used to exit a loop in Python?",
                options: ["stop", "exit", "break", "terminate"],
                correctAnswer: "break"
                },
            
                {
                question: "Which keyword is used to define a function in Python?",
                options: ["def", "function", "define", "func"],
                correctAnswer: "def"
                },
            
                {
                question: "What is the result of the following expression in Python? \"Hello\" + \"World\"",
                options: ["HelloWorld", "null", "Hello World", "error"],
                correctAnswer: "HelloWorld"
                },
            
                {
                question: "Which of the following is a valid way to comment a single line in Python?",
                options: ["&lt;!-- This is a comment --&gt;", "// This is a comment", "/* This is a comment */", "# This is a comment"],
                correctAnswer: "# This is a comment"
                },
            
                {
                question: "How do you check the length of a list in Python?",
                options: ["list.length()", "list.len()", "len(list)", "length(list)"],
                correctAnswer: "len(list)"
                },
            
                {
                question: "Which function is used to print output in Python?",
                options: ["print()", "display()", "echo()", "write()"],
                correctAnswer: "print()"
                },
            
                {
                question: "What is the output of the following code snippet? x = 5, y = x + 2, print(y)",
                options: ["7", "5", "x + 2", "Error"],
                correctAnswer: "7"
                }
            ],
        
            // NodeJS Questions Bank
            nodejsQuestionsBank : [
                {
                question: "What is Node JS?",
                options: ["A front-end JavaScript framework", "A database management system", "A back-end JavaScript runtime environment", "A version control system"],
                correctAnswer: "A back-end JavaScript runtime environment"
                },
            
                {
                question: "Which programming language is used by Node JS?",
                options: ["JavaScript", "Java", "Python", "C++"],
                correctAnswer: "JavaScript"
                },
            
                {
                question: "How do you include external modules in a Node JS application?",
                options: ["import module from 'module-name'", "include 'module-name'", "require('module-name')", "import 'module-name'"],
                correctAnswer: "require('module-name')"
                },
            
                {
                question: "Which of the following is NOT a core module in Node JS?",
                options: ["fs", "http", "path", "module"],
                correctAnswer: "module"
                },
            
                {
                question: "How can you create a web server in Node JS?",
                options: ["Using the http module", "Using the fs module", "Using the path module", "Using the express module"],
                correctAnswer: "Using the http module"
                },
            
                {
                question: "What is npm?",
                options: ["Node Package Manager", "Node Programming Module", "Node Project Manager", "Node Package Module"],
                correctAnswer: "Node Package Manager"
                },
            
                {
                question: "Which command is used to install dependencies defined in a package.json file?",
                options: ["npm install", "npm update", "npm init", "npm start"],
                correctAnswer: "npm install"
                },
            
                {
                question: "How do you handle asynchronous operations in Node JS?",
                options: ["Using callbacks", "Using promises", "Using async/await", "All of the above"],
                correctAnswer: "All of the above"
                },
            
                {
                question: "Which of the following is NOT a built-in middleware in Express JS?",
                options: ["bodyParser", "cookieParser", "session", "router"],
                correctAnswer: "router"
                },
            
                {
                question: "What is the purpose of the \"module.exports\" in Node JS?",
                options: ["To import modules", "To export variables or functions from a module", "To start a Node JS application", "To install npm packages"],
                correctAnswer: "To export variables or functions from a module"
                }
            ]
        
        };

        this.category = [{name:"HTML", logo:"https://cdn.worldvectorlogo.com/logos/html-1.svg"}, {name:"CSS", logo:"https://cdn.worldvectorlogo.com/logos/css-3.svg"}, {name:"JavaScript", logo:"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"}, {name:"GIT", logo:"https://cdn.worldvectorlogo.com/logos/git-icon.svg"}, {name:"Python", logo:"https://cdn.worldvectorlogo.com/logos/python-5.svg"}, {name:"NodeJS", logo:"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"}];

        this.selected_subject = ""
        this.selected_answer = "";
        this.question_index = 0;
        this.questions_per_category = null;
        this.answered_questions = 1;
        this.correctly_answered_questions = 0;
        this.progress_percentage = 10;

        // DOM ELEMENTS 
        this.welcome_section_ele = document.getElementById("welcome-section");
        this.question_paragraph_ele = document.getElementById("question-text");
        this.answer_options_container = document.getElementById("answer-options-container");
        this.category_section_ele = document.getElementById("category-section");
        this.questions_section_ele = document.getElementById("questions-section");
        this.header_subject_container = document.getElementById("header-subject-container");
        this.results_section_ele = document.getElementById("results-section");
        this.submit_btn_ele = document.getElementById("submit-btn");
        this.user_score_ele = document.getElementById("user-score");
        this.correct_answers_amount_ele = document.getElementById("correct-answers-amount");
        this.play_again_btn = document.getElementById("play-again-btn");
    };
 
    displayCategories(){
        this.category.forEach(ele=>{
            let category_options_template = `
                <div class="quiz-category px-4 py-2 mb-4 d-flex  align-items-center rounded shadow-sm">
                    <img class="category-logo bg-light p-1 rounded me-4" src=${ele.logo} />
                    <p class="fs-5">${ele.name}</p>
                </div>
            `;

            this.category_section_ele.insertAdjacentHTML("beforeend", category_options_template);
        })
    };

    displayQuestions(){

        document.addEventListener("click", (e)=>{

            // the DOM element clicked by the user 
            let clicked_ele = e.target;
            
        
            // check if any of the options from the quiz category was clicked 
            if(clicked_ele.classList.contains("quiz-category")){
                this.updateHeader(clicked_ele);
                

                // get questions based on selected subject option 
                this.selected_subject = this.getSelectedSubject(clicked_ele);
                this.questions_per_category = this.questionsBank[this.selected_subject.toLowerCase()+"QuestionsBank"];

                this.updateQuestionsCount();
                
                //display a question from the questions of the selected subject
                this.question_paragraph_ele.innerText = this.questions_per_category[this.question_index]["question"];
                this.question_paragraph_ele.classList.add("question-index-"+this.question_index);

                // display answer options 
                let answer_labels = ["A","B","C", "D"];
                this.questions_per_category[0].options.forEach(ele=>{
                    let answer_options_index = this.questions_per_category[0].options.indexOf(ele);
                    let answer_options_template = `
                        <div class="answer-option px-4 py-2 mb-4 d-flex  align-items-center rounded">
                        <div>
                            <h3 class="bg-light py-2 px-3 rounded text-dark me-4 fw-bolder">${answer_labels[answer_options_index]}</h3>
                        </div>
                        
                        <h6 class="me-5">${ele}</h6>
                        </div>
                    `;
                    this.answer_options_container.insertAdjacentHTML("beforeend", answer_options_template);
                });

                //hide welcome section and show questions section
                this.hideElement(this.welcome_section_ele);  
                this.showElement(this.questions_section_ele);
            }

    });


    }

    displayResultSection(){
      if(this.answered_questions === 11){
        // hide question section and display result section 
        this.questions_section_ele.classList.add("d-none");
        this.results_section_ele.classList.remove("d-none");

        // update correct answer DOM element with user quiz details 
        this.correct_answers_amount_ele.innerText = this.correctly_answered_questions;
        let completed_quiz_name_ele = document.getElementById("completed-quiz-name");
        //display the name of the quiz user just completed
        completed_quiz_name_ele.innerText = `${this.selected_subject} Quiz Results`;
        // display user score in percentage 
        this.displayUserScore();
      }
    }

    displayUserScore(){
      let user_score = this.correctly_answered_questions;
      this.user_score_ele.innerText = `${user_score}0%`
      this.restartQuiz();
    }

    getSelectedSubject(DOM_ele){
        let subject = DOM_ele.innerText;
        return subject;
    }

    updateHeader(clicked_ele){

        let elements = clicked_ele.children;

        // extract text from clicked DOM element 
        let elements_texts = [{subject: elements[1].innerText, logo:elements[0].attributes.src.value}];

        let HTML_template = `
            <div class="d-flex align-items-center">
                <img class="header-text-logo bg-light p-1 rounded me-2" src=${elements_texts[0].logo} />
                <h3 class="text-dark fw-bolder">${elements_texts[0].subject} Quiz</h3>
            </div>
        `;

        // update header 
        this.header_subject_container.insertAdjacentHTML("beforeend", HTML_template);
    }

    submitAnswer(){
        document.addEventListener("click", (e)=>{
            let clicked_ele = e.target;

            if(clicked_ele.classList.contains("answer-option")){
                clicked_ele.id = "selected-answer";
                let all_options = clicked_ele.parentNode.children;
                this.selectAnswer(clicked_ele, all_options);
            }

            if(clicked_ele.id === "submit-btn"){
                let selected_answer_ele = document.getElementById("selected-answer");
                let validation_result = this.validateAnswer(this.selected_answer, selected_answer_ele);

                if(validation_result === 1){
                  return;
                }

                setTimeout(()=>{
                  this.goToNextQuestion();
                  this.updateQuestionsCount();
                  this.updateProgressBar();
                  this.displayResultSection();
                }, 2000);
            }
            
        });
    }

    selectAnswer(element, parent_ele){
      console.log(element)
      // loop through all children of parent element and remove style 
      for(let i=0; i<4; i++){
          if(parent_ele[i].classList.contains("selected-answer")){
            parent_ele[i].classList.remove("selected-answer");
          }
      }

      // add style to the anser option that was clicked 
      element.classList.add("selected-answer");

      // extract text from selected element and save it 
      this.selected_answer = element.children[1].innerText;        
    }

    validateAnswer(user_answer, ele){
        let correct_answer = this.questions_per_category[this.question_index].correctAnswer;

        // check if user submits without selecting an answer 
        if(user_answer === ""){
            alert("No answer selected!");
            return 1;
        }

        if(user_answer === correct_answer ){
            ele.classList.remove("selected-answer");
            ele.classList.add("pass");
            this.correctly_answered_questions++;
        }
        else{
            ele.classList.add("fail");
        }
        
        // increment the amount of qustions the user have answered 
        this.answered_questions++

    }

    goToNextQuestion(){
      if(this.answered_questions === 11){
        return;
      }
      // increment question index to update to the index of the next question 
      this.question_index++
      
      this.selected_answer = "";
      
      // clear previously displayed options from the DOM 
      while(this.answer_options_container.firstElementChild){
        this.answer_options_container.removeChild(this.answer_options_container.firstElementChild);        
      }

      // update DOM with new question 
      this.question_paragraph_ele.innerText = this.questions_per_category[this.question_index]["question"];
      this.question_paragraph_ele.classList.add("question-index-"+this.question_index);

      // display answer options for new question
      let answer_labels = ["A","B","C", "D"];
      this.questions_per_category[this.question_index].options.forEach(ele=>{
          let answer_options_index = this.questions_per_category[this.question_index].options.indexOf(ele);
          let answer_options_template = `
              <div class="answer-option px-4 py-2 mb-4 d-flex  align-items-center rounded">
              <div>
                  <h3 class="bg-light py-2 px-3 rounded text-dark me-4 fw-bolder">${answer_labels[answer_options_index]}</h3>
              </div>
              
              <div class="d-flex justify-content-between align-items-center w-100">
                <h6 class="me-5">${ele}</h6>
                <i class="bi bi-check-square-fill d-none" id="pass-icon"></i>
                <i class="bi bi-x-square-fill d-none" id="fail-icon"></i>
              </div>
              </div>
          `;
          this.answer_options_container.insertAdjacentHTML("beforeend", answer_options_template);
      });
    }

    updateQuestionsCount(){
      let total_qustions = this.questions_per_category.length;
      this.answered_questions
      let questions_count_ele = document.getElementById("questions-count");
      questions_count_ele.innerText = `Question ${this.answered_questions} of ${total_qustions}`
    }

    updateProgressBar(){
      let progress_bar = document.getElementById("progress-bar");
      this.progress_percentage+= 10;
      // progress_bar.innerText = `${this.progress_percentage}%`;
      progress_bar.attributes[2].value = `width: ${this.progress_percentage}%`
    }

    hideElement(ele){
        ele.classList.add("d-none");
    }

    showElement(ele){
        ele.classList.remove("d-none");
    }

    restartQuiz(){
      this.play_again_btn.addEventListener("click", ()=>{
        window.location.reload();
      })
    }

    // contains methods that enable app to run and implement all features 
    int(){
        this.displayCategories();
        this.displayQuestions();
        this.submitAnswer();
    }

}


// initialize the app 
let brainBoasterApp = new App();
brainBoasterApp.int();

document.addEventListener("click",(e)=>{
  console.log(e.target)
})
  
  
  
  
  

  
  
  
  
  

  
  
  
  
  











