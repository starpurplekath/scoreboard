let homeSumText = document.getElementById("homeScore")
let homeSum = 0
let guestSumText = document.getElementById("guestScore")
let guestSum = 0

function addOneHome() {
    homeSum += 1
    homeSumText.textContent = homeSum
    
}
function addTwoHome() {
    homeSum += 2
    homeSumText.textContent = homeSum
    
}
function addThreeHome() {
    homeSum += 3
    homeSumText.textContent = homeSum
    
}

function addOneGuest() {
    guestSum += 1
    guestSumText.textContent = guestSum
    
}
function addTwoGuest() {
    guestSum += 2
    guestSumText.textContent = guestSum
    
}
function addThreeGuest() {
    guestSum += 3
    guestSumText.textContent = guestSum
    
}