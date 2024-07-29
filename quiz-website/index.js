const questions=[
    {question:"which is the largest desert in the world?",
    answers:[
        {text:"kalahari",correct:false},
        {text:"gobi",correct:false},
        {text:"sahara",correct:true},
        {text:"antartica",correct:false},
        ]
    },
    {
        question:"which is the largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Girrafe",correct:false},
        ]
    },
    {
        question:"which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:false},
            {text:"Antartica",correct:false},
            {text:"Africa",correct:true},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNO=currentQuestionIndex+1;
    questionElement.innerHTML=questionNO + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();