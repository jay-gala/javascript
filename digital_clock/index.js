const clock = document.querySelector('#clock')

const updatetime = () => {
    const date = new Date();
    const currenttime = date.toLocaleString();
    clock.innerHTML = currenttime
}
setInterval(updatetime, 1000)
