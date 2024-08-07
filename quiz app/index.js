const questions = [{
    'que': "Which of the following is a client site language?",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'd': "JavaScript",
    'correct': "d"
},
{
    'que': "What does HTML stand for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "a",
},
{
    'que': "What is the capital city of France?",
    'a': "Berlin",
    'b': "Madrid",
    'c': "Rome",
    'd': "Paris",
    'correct': "d"
  },
  {
    'que': "Which planet is known as the 'Red Planet'?",
    'a': "Venus",
    'b': "Mars",
    'c': "Jupiter",
    'd': "Saturn",
    'correct': "b"
  },
  {
    'que': "Who wrote the play 'Romeo and Juliet'?",
    'a': "Charles Dickens",
    'b': "Jane Austen",
    'c': "William Shakespeare",
    'd': "Mark Twain",
    'correct': "c"
  },
  {
    'que': "What is the largest mammal on Earth?",
    'a': "Elephant",
    'b': "Blue Whale",
    'c': "Giraffe",
    'd': "Polar Bear",
    'correct': "b"
  },
  {
    'que': "In what year did the Titanic sink?",
    'a': "1905",
    'b': "1912",
    'c': "1920",
    'd': "1931",
    'correct': "b"
  },
  {
    'que': "Who is known as the 'Father of Computer Science'?",
    'a': "Alan Turing",
    'b': "Bill Gates",
    'c': "Steve Jobs",
    'd': "Ada Lovelace",
    'correct': "a"
  },
  {
    'que': "What is the capital city of Japan?",
    'a': "Beijing",
    'b': "Seoul",
    'c': "Tokyo",
    'd': "Bangkok",
    'correct': "c"
  },
  {
    'que': "Which element has the chemical symbol 'O'?",
    'a': "Oxygen",
    'b': "Gold",
    'c': "Silver",
    'd': "Iron",
    'correct': "a"
  }
];

let index = 0;
let total = questions.length
let right = 0,
    wrong = 0
const quesbox = document.getElementById('quesbox')
const optionInputs = document.querySelectorAll('.options')
const nextbutton = document.getElementById('btn1')
const checkbutton = document.getElementById('btn2')
const loadQuestion = () => {
    if(index >= total){
        return endQUiz()
    }
    reset()
    const data = questions[index];
    quesbox.innerHTML = `${index+1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswers()
    if(ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion()
    if (index >= total) {
        nextbutton.style.display = 'none';
        checkbutton.style.display = 'none';
    }
    return
}

const Check = () => {
    const data = questions[index]
    checkanswer = document.getElementById('checkanswer')
    checkanswer.innerHTML = `Correct answer is: ${data.correct}`
}

const getAnswers = () => {
    let answer
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.value
        }
    })
    return answer
}

const reset = () => {
    optionInputs.forEach((input)=>{
        if(input.checked){
            input.checked = false
        }
    }
    )
    document.getElementById('checkanswer').innerHTML = ''
}

const endQUiz = () =>{
    document.getElementById('box').innerHTML = `<div style='text-align: center'> <h3>Quiz done</h3> <br> <h3>${right}/${total} are correct</h3><div>`

}

loadQuestion()