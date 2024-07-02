let mainCounter = document.getElementById("d-counter")
let count = 0

function increment() {
    console.log('Clicked')
    count +=1
    mainCounter.textContent = count
}

let prevEntries = document.getElementById("saved")

function save() {
    let countStr = count + " - "
    prevEntries.textContent += countStr
    mainCounter.innerHTML = 0
    count = 0
}

let dError = document.getElementById("error")
let errorMsg = "Sorry, something went wrong!"

function render() {
    dError.innerHTML = errorMsg
}