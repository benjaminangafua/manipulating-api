let correct_answer; //answer correct answer
let questions;
let check_id;

function questionsForm() {
    let subject = document.getElementById("subject");
    let number_of_questions = document.getElementById("number-of-question");
    let questions_field = document.getElementById("questions");
    let score_board = document.getElementById("score-board")


    //fetching from quiz api
    fetch(`https://kit-questions.glitch.me/question/${subject.value}/${number_of_questions.value}`)
        .then(response => response.json())
        .then(data => {
            //List of questions 
            let id
            let free_id = Object.keys(data.questions)
            free_id.forEach(ele => {
                id = ele;
            })
            let regular_data = Object.entries(data.questions);


            regular_data.forEach((element, index) => {

                questions = element[1].question; //Question to be answer
                let option = element[1].options; //Option
                correct_answer = element[1].answer; //answer correct answer

                let option_value;

                let opt = Object.entries(option);
                opt.forEach((value, index2) => {
                    console.log(value[0])
                    option_value += `<li><input type="radio" name="${questions}" id="${id}-${index + 1}" value="${value[0]}">${value}</input></li>`
                    check_id = `${id}-${index2 + 1}`
                })
                questions_field.insertAdjacentHTML("beforebegin",
                    `<div id="quiz-style"> 
                            <li>${index + 1}. ${questions}</li>
                        <label for="">
                            ${option_value} 
                            ${correct_answer}
                        </label>

                    </div>`)
                console.log(check_id)

            });
        });
    score_board.style.display = "block";
    document.getElementById("q-num").style.display = "none";
    document.getElementById("submit").style.display = "block";

}

function submitQuestios() {
    // let click_answer = e.target.value
    for (let i = 0; i < 4; i++) {

    }

    console.log('Seeing what is  ', document.querySelectorAll(id))
};