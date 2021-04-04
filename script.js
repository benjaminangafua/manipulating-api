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
            let regular_data = Object.entries(data.questions)


            /* Looping through data */
            ;
            regular_data.forEach((element, index) => {
                questions = element[1].question; //Question to be answer
                let option = element[1].options; //Option
                correct_answer = element[1].answer; //answer correct answer

                /* Looping through option */
                let opt = Object.entries(option);
                let option_value;
                opt.forEach((value, index2) => {
                    id = `${element[0]}-${index2 +1}`
                    option_value += `
                    <li>
                        <label for="${id}">
                            <input type="radio" name="${element[0]}" id="${id}" value="${value[0]}" >${value}</input> 
                        </label>
                    </li>`
                })

                /* displaying in a DOM */
                questions_field.insertAdjacentHTML("beforebegin",
                    `<div id="quiz-style"> 
                        <li><b> ${index + 1}. ${questions}</b></li> 
                        ${option_value}
                        ${correct_answer} 
                    </div>
                    `)
            });

            /* SUBMIT FUNCTION */
            let sub_btn = document.querySelector("#button")
            sub_btn.addEventListener("click", () => {
                let radio_btn = document.querySelectorAll("input[type='radio']")

                /* Testing answer */
                var tru;
                let ans_data = data.questions

                let ans_loop = Object.keys(ans_data);
                ans_loop.forEach(elem => {
                    tru = ans_data[elem].answer
                    console.log('First answer', tru)
                })

                /* looping over radio button */
                for (let i = 0; i < radio_btn.length; i++) {

                    /* to see the checked box */
                    if (radio_btn[i].checked) {
                        let select = radio_btn[i].value

                        console.log('SELECTED OPTION', select)
                        console.log('answer', tru)

                        /* Validating option and answer */
                        if (select === tru) {
                            console.log("correct")
                        } else {
                            if (select !== tru) {
                                console.log("wrong")
                            }
                        }
                    }
                }
            })
        });

    /* display */
    score_board.style.display = "block";
    document.getElementById("q-num").style.display = "none";
}

/**
 * 

    if (select === correct_answer) {
    opt_style.innerHTML.style = "backgroundColor: green"
    }
    let opt_style = document.querySelector("label").innerText
    console.log(opt_style)
*
*/