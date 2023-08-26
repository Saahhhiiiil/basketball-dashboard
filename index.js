// ===== RED POINTS ===== 


let redPoints = 0
let callRed = document.querySelector(".red-points")
// console.log(callRed)

function increaseRed1(){
    redPoints+=1
    callRed.textContent = redPoints
}
function increaseRed2(){
    redPoints+=2
    callRed.textContent = redPoints
}
function increaseRed3(){
    redPoints+=3
    callRed.textContent = redPoints
}

function redReset(){
    redPoints = 0
    callRed.textContent = redPoints
}



// ===== BLUE POINTS ===== 

let bluePoints = 0
let callBlue = document.querySelector(".blue-points")
// console.log(callBlue)

function increaseBlue1(){
    bluePoints+=1
    callBlue.textContent = bluePoints
}
function increaseBlue2(){
    bluePoints+=2
    callBlue.textContent = bluePoints
}
function increaseBlue3(){
    bluePoints+=3
    callBlue.textContent = bluePoints
}

function blueReset(){
    bluePoints = 0
    callBlue.textContent = bluePoints
}
