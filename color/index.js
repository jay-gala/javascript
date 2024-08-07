const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
let intervalid
document.querySelector('#start').addEventListener('click', (e) => {
    const changebg = () => {
        document.body.style.backgroundColor = getRandomColor()
    }
    if(!intervalid){
        intervalid = setInterval(changebg,1000)
    }
})
document.querySelector('#stop').addEventListener('click',(e)=>{
    clearInterval(intervalid)
    intervalid = null
})

