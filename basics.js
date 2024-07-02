let myAge = 19;
let dogRatio = 7;
let myDogAge = myAge * dogRatio;
console.log(myDogAge);

let origin = 50;

origin+=50;
origin-=75;
origin+=45;

console.log("Origin is now: ", origin);

let fan = 120
let car = 200
let food = 50

function increase() {
    total= fan + car + food
    console.log(total)
}

increase()

let lapDone = 0

function perStep() {
    lapDone += 1
}

perStep()
perStep()
perStep()

console.log(lapDone)

let userName = "Henry"

let msg = "We have looged you in"

let messageToUser = msg + " " + userName + "!"
console.log(messageToUser)

let myName = "Festus"
let greeting1 = "Hello!,"
let greeting2 = " My name is "
let greeting3 = "and you're welcome here"
let myGreeting = `<span style="color: red;">${greeting1}</span> ${greeting2} <span style="color: green;">${myName}</span> ${greeting3}`;
let output = document.getElementById("welcome-el")

output.innerHTML = myGreeting
output.innerHTML += "!!"

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)