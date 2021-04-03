let correct_answer; //answer correct answer
let questions;

function questionsForm() {
    let subject = document.getElementById("subject");
    let number_of_questions = document.getElementById("number-of-question");
    let questions_field = document.getElementById("questions");
    let score_board = document.getElementById("score-board")
    let id;
    //fetching from quiz api
    fetch(`https://kit-questions.glitch.me/question/${subject.value}/${number_of_questions.value}`)
        .then(response => response.json())
        .then(data => {
            /* converting data to arry */
            /* Looping through data */
            let regular_data = Object.entries(data.questions);
            regular_data.forEach((element, index) => {
                questions = element[1].question; //Question to be answer
                let option = element[1].options; //Option
                correct_answer = element[1].answer; //answer correct answer
                // /* Looping through option */
                let opt = Object.entries(option);
                let option_value;
                opt.forEach((value, index2) => {
                    id = `opt${index}-${index2 +1}`
                    option_value += `
                    <li>
                        <label for="${id}">
                            <input type="radio" name="qu-${index}" id="${id}" value="${value[0]}" >${value}</input> 
                        </label>
                    </li>`
                })
                questions_field.insertAdjacentHTML("beforebegin",
                    `<div id="quiz-style"> 
                        <li><b> ${index + 1}. ${questions}</b></li> 
                        ${option_value}
                        ${correct_answer} 
                    </div>
                    `)
            });
            let sub_btn = document.querySelector("#button")
            sub_btn.addEventListener("click", () => {
                let sel_ans = document.querySelectorAll("input[type='radio']")
                for (let i = 0; i < sel_ans.length; i++) {
                    if (sel_ans[i].checked) {
                        // let select = sel_ans[i].value
                        // if (select === correct_answer) {
                        // opt_style.innerHTML.style = "backgroundColor: green"
                        // }
                        console.log(regular_data)

                        let opt_style = document.querySelector("label").innerText
                        console.log(opt_style)
                    }
                }
            })
        });

    /* display */
    score_board.style.display = "block";
    document.getElementById("q-num").style.display = "none";
    // document.getElementById("submit").style.display = "block";
}