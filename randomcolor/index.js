const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let p = document.querySelector('p')
p.innerHTML = getRandomColor()

const btn = document.querySelector('button')
btn.addEventListener('click',(e)=>{
    let newColor = getRandomColor();
    p.innerHTML = newColor;
    document.body.style.backgroundColor = newColor
})