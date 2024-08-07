const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        const id = e.target.id;
        switch (id) {
            case "grey":
                document.body.style.backgroundColor = 'grey'
                break;
            
            case "white":
                document.body.style.backgroundColor = 'white'
                break;

            case "blue":
                document.body.style.backgroundColor = 'blue'
                break;

            case "yellow":
                document.body.style.backgroundColor = 'yellow'
                break;
        
            default:
                break;
        }
    })
})
