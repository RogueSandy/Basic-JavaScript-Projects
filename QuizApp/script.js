const questions = [
    {
        question: 'Whcih Branch Do I Study?',
        answers: [
            {text: 'IT', correct: false},
            {text: 'MECH', correct: false},
            {text: 'CSE', correct: true},
            {text: 'EXTC', correct: false},
        ]
    },
    {
        question: 'What do I love the Most?',
        answers: [
            {text: 'Coding', correct: false},
            {text: 'Games', correct: true},
            {text: 'Her', correct: false},
            // {text: 'EXTC', correct: false},
        ]
    },
    {
        question: 'Which is the My favourite Drink?',
        answers: [
            {text: 'Mojito', correct: false},
            {text: 'Chocolate Shake', correct: false},
            {text: 'Tea', correct: false},
            {text: 'Coffee', correct: true},
        ]
    },
]

const queHeading = document.getElementById('queHeading');
const ansBtn = document.getElementById('ans');
const nxtBtn = document.getElementById('nxtBtn');

var currIndex = 0;
var score = 0;

function startQuiz(){
    currIndex = 0;
    score= 0;
    nxtBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    ResetQue();

    const queNo = currIndex + 1;
    queHeading.innerHTML  = queNo + '. ' +questions[currIndex].question;

    questions[currIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', (e)=>{
            if(e.target.dataset.correct === 'true'){
                e.target.classList.add("correct");
                score++;
            }
            else{
                e.target.classList.add("inCorrect");
            }

            Array.from(ansBtn.children).forEach(ans =>{
                if(ans.dataset.correct === 'true'){
                    ans.classList.add("correct");
                }
                ans.disabled = true;
            })
            nxtBtn.style.display = 'block';
        })
    }); 
}

nxtBtn.addEventListener('click', ()=>{
    if(currIndex < questions.length){
        currIndex++;
        if(currIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    else{
        startQuiz();
    }
})

function showScore(){
    document.getElementById('queHeading').innerHTML = 'Your Score is '+score+' out of '+questions.length+'!';
    ResetQue();
    nxtBtn.innerHTML = 'Play Again';
    nxtBtn.style.display = 'block';
}




function ResetQue(){
    nxtBtn.style.display = 'none';
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}




startQuiz();