let num1 = 8
let num2 = 2
let sum = document.getElementById("sum")
let result = 0

document.getElementById("num1_el").textContent = num1
document.getElementById("num2_el").textContent = num2

function add() {
    result = num1 + num2
    sum.innerHTML = result
}

function subtract() {
    result = num1 - num2
    sum.innerHTML = result
}

function divide() {
    result = num1 / num2
    sum.innerHTML = result
}

function multiply() {
    result = num1 * num2
    sum.innerHTML = result
}

//Scoreboard

let gamePlay = document.getElementById("gameplay")
let boardCounter1 = document.getElementById("counter")
let boardCounter2 = document.getElementById("counter2")
let counter1 = 0
let counter2 = 0
let homeWin = "Home is leading"
let guestWin = "Guest is leading"

function add1() {
    counter1 +=1
    boardCounter1.textContent = counter1
}

function add2() {
    counter1 +=2
    boardCounter1.textContent = counter1
}

function add3() {
    counter1 +=3
    boardCounter1.textContent = counter1
}

//Guest Counter
function add1g() {
    counter2 +=1
    boardCounter2.textContent = counter2
}

function add2g() {
    counter2 +=2
    boardCounter2.textContent = counter2
}

function add3g() {
    counter2 +=3
    boardCounter2.textContent = counter2
}

function newGame() {
    boardCounter1.textContent = 0
    boardCounter2.textContent = 0
    counter1 = 0
    counter2 = 0
}

function updateGameplay() {
    if (counter1 > counter2) {
        gamePlay.textContent = homeWin
    }
    else if (counter2 > counter1) {
        gamePlay.textContent = guestWin
    }
    
    else if (counter1 === counter2) {
        gamePlay.textContent = "Nobody is leading, DRAW!"
    }
    
    else {
        gamePlay.textContent = "An error occured"
    }
}
