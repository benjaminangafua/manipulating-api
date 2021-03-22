let correct_answer; //answer correct answer
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
            let regular_data = Object.entries(data.questions);
            console.log(regular_data)

            regular_data.forEach((element, index) => {

                console.log('I am specific', element)
                let questions = element[1].question; //Question to be answer

                correct_answer = element[1].answer; //answer correct answer
                let html = `<div id="quiz-style"> 
                                <li>${index + 1}. ${questions}</li>
                                <label >
                                    <li><input type="radio" name="type" id="a" value="a"  onclick="answerIs(event) ">${element[1].options.a}</input> </li>
                                    <li><input type="radio" name="type" id="b" value="b"  onclick="answerIs(event)">${element[1].options.b}</input> </li>
                                    <li><input type="radio" name="type" id="c" value="c"  onclick="answerIs(event)">${element[1].options.c}</input> </li>
                                    <li><input type="radio" name="type" id="d" value="d"  onclick="answerIs(event)">${element[1].options.d}</input> </li>
                                </label>
                            </div>

                            `

                // let option = element[1].options; //Option
                // let option_value;
                // for (const [key, value] of Object.entries(option)) { //looping through options
                //     option_value += ` 
                //      <li><input type="radio" name="type" id="option" value="${key}"  onclick="answerIs()">${key}: ${value}</input> </li>
                //                         `
                // }

                questions_field.insertAdjacentHTML("beforebegin", html)


            });
            // for (let i = 0; i < regular_data.length; i++) {


            // }
            // for (const [key, value] of Object.entries(regular_data)) {
            //     console.log(`${key}: ${value}`)
            // }
        });
    score_board.style.display = "block";
    document.getElementById("q-num").style.display = "none";
    document.getElementById("submit").style.display = "block";

}

function answerIs(ele) {
    let answer = ele.target.id

    console.log('my answer', ele.target)

    console.log('I am the answer', correct_answer)
    if (answer === correct_answer) {
        answer.style = "background #00b300;"
        console.log('success')
    } else {
        answer.style = 'background: #ff5c33;'
        console.log("try again")
    }

}
submitQuestios = () => {

}