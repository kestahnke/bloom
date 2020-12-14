// the quiz


const myQuestions = [
    {
        question: "Are you burnt out / depressed?",
        answers: {
            a: "ya",
            b: "idk kinda",
            c: "no",
        },
        amFine: 'c',
        conclusion: 'you have duh prez shun'
    },
    {
        question: "Are you anxious / stressed?",
        answers: {
            a: "ya",
            b: "idk kinda",
            c: "no",
        },
        amFine: 'c',
        conclusion: 'you are aang shush'
    },
    {
        question: "Do you feel that something in your life needs to change but you don't know what? ",
        answers: {
            a: "ya",
            b: "idk kinda",
            c: "no",
        },
        amFine: 'c',
        conclusion: 'you are a mess'
    },
]

function buildQuiz() {
    // store html output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // variable to store list of possible answers
            const answers = [];

            // for each available answer:
            for(letter in currentQuestion.answers){
                // add HTML radio button
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                  );
            }
            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
             );
        }
    )
    // display stuff
    quizContainer.innerHTML = output.join(' ');
}

function showResults() {

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numFine = 0;
    
    myQuestions.forEach( (currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            
            if(userAnswer === currentQuestion.amFine) {
                numFine++;
            }
            else {
                alert(`${currentQuestion.conclusion}`)
                answerContainers[questionNumber].style.color = 'purple';
            }
    })

    if (numFine == 3)
    {
        alert("you are FINE!!! leave this website immediately");
    }
}

//variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

buildQuiz();

//event listener
submitButton.addEventListener('click', showResults);


// if a or b for any given question, suggest correlated thing
// if all c exception -> u seem to be doing ok. check out this page anyway!

// a, b, c
// --> give them the link to the depression activity and the anxiety activity but not the general life mangagement activity
