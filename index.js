const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What are the three important manipulations for a loop on a loop variable?",
        a: "Updation, Incrementation, Initialization",
        b: "Initialization, Testing, Incrementation",
        c: "Testing, Updation, Testing",
        d: "Initialization, Testing, Updation",
        correct: "d",
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "let",
        c: "var",
        d: "constant",
        correct: "a",
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        correct: "c",
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringfy()",
        b: "parse()",
        c: "convert()",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "In JavaScript the x===y statement implies that:",
        a: "Both x and y are equal in value, type and reference address as well.",
        b: "Both are x and y are equal in value only.",
        c: "Both are equal in the value and data type.",
        d: "Both are not same at all.",
        correct: "c",
    },
    {
        question: "Which of the following is not a Javascript framework?",
        a: "Node",
        b: "Vue",
        c: "React",
        d: "Cassandra",
        correct: "d",
    },
    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        a: "async",
        b: "await",
        c: "setTimeout",
        d: "None of the above",
        correct: "a",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const counter = document.getElementById('counter')
const totalQuestion = document.getElementById('totalQuestion')
const tf = document.getElementById('trueOrFalse')

let currentQuiz = 0
let score = 0
let counterQuestion = 0;

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    counterQuestion++;
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    counter.innerText = counterQuestion
    totalQuestion.innerText = quizData.length
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log("answer:", answer)
    console.log("correct:", quizData[currentQuiz].correct);
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       } else {
           alert(`Wrong answer! The answer is should be "${quizData[currentQuiz].correct}".`)
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})