let rocket = document.getElementById("rocket");
let buttonStart = document.getElementById("start");
let newRocket = document.getElementById("newRocket");
let countDown = document.getElementById("countDown");
let second = 0;
let timerId

function start() {
    if (second == 10) {
        timerId = setInterval(() => subtraction(), 1000);
    }
    return
}

function hide() {
    rocket.style.display = "none"
    buttonStart.style.display = "none"
    newRocket.style.display = "block"
    second = 8
}

function subtraction() {
    if (second == 0) {
        countDown.innerHTML = "Поехали!!!"
        clearInterval(timerId);
        rocket.style.top = "1000px"
        setTimeout(hide, 5000)
    } else {
        countDown.innerHTML = second
    }

    second = second - 1

}

function setNewRocket() {
    newRocket.style.display = "none"
    rocket.style.display = "block"
    countDown.innerHTML = "Ракета на старте"
    rocket.style.top = "5px"
    buttonStart.style.display = "block"

}