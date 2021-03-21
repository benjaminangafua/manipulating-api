 let correct_answer; //answer correct answer
 function submitForm() {
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
                 let questions_numbering = element[0]; //Ordering question
                 let questions = element[1].question; //Question to be answer
                 let option = element[1].options; //Option
                 correct_answer = element[1].answer; //answer correct answer

                 console.log('I am the answer', element[1].answer)


                 let option_value;
                 for (const [key, value] of Object.entries(option)) { //looping through options
                     option_value += ` 
                     <li><input type="radio" name="type" id="option" value="${key}"  onclick="answerIs()">${key}: ${value}</input> </li>
                                        `
                 }
                 questions_field.insertAdjacentHTML("beforebegin",
                     `<div id="quiz-style"> 
                            <li>${index + 1}. ${questions}</li>
                        <label >
                            ${option_value}

                        </label>
                    </div>

                    `
                 )

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

 function answerIs() {
     let check_value = document.getElementById("option");
     if (check_value.checked) {
         var val = check_value.value;
         console.log("Correct", val)

         // if (check_value === correct_answer) {
         //     console.log("Correct")
         // }
     }
 };