let randomnumber = parseInt(Math.random()*100+1)


const userinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prev = document.querySelector('.guesses')
const res = document.querySelector('.lastResult')
const loh = document.querySelector('.lowOrHi')
const start = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []
let numguess = 0

let playgame = true

if (playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess)
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a valid number')
    }else if(guess>100){
        alert('please enter a valid number')
    }else{
        prevguess.push(guess)
        if(numguess === 9){
            displayguess(guess)
            displaymessage(`number was ${randomnumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }

}
function checkguess(guess){
    if(guess === randomnumber){
        displaymessage(`right`)
        endgame()
    }else if(guess<randomnumber){
        displaymessage(`number is higher`)
    }else{
        displaymessage(`number is lower`)
    }
}
function displayguess(guess){
    userinput.value = ''
    prev.innerHTML += `${guess} , `
    numguess++;
    res.innerHTML = `${10 - numguess}`
}
function displaymessage(message){
    loh.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =  `<h2 id="newgame">start new game</h2>`;
    start.appendChild(p)
    playgame = false
    newgame()
}
function newgame(){
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click', function(){
        randomnumber = parseInt(Math.random() * 100 + 1)
        prevguess = []
        numguess = 0
        prev.innerHTML = ''
        res.innerHTML = `${10 - numguess}`
        userinput.removeAttribute('disabled')
        start.removeChild(p)

        
        playgame = true
    })
}

