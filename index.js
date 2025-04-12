let counter_one = 0

let counter_two = 0

document.getElementById("score_one").textContent = counter_one
document.getElementById("score_two").textContent = counter_two

function score1_plus_one() {
    
    counter_one += 1
    document.getElementById("score_one").textContent = counter_one
    
}


function score1_plus_two() {
    
    counter_one += 2
    document.getElementById("score_one").textContent = counter_one
    
}



function score1_plus_three() {
    
    counter_one += 3
    document.getElementById("score_one").textContent = counter_one
    
}


function score2_plus_one() {
    
    counter_two += 1
    document.getElementById("score_two").textContent = counter_two
    
}


function score2_plus_two() {
    
    counter_two += 2
    document.getElementById("score_two").textContent = counter_two
    
}



function score2_plus_three() {
    
    counter_two += 3
    document.getElementById("score_two").textContent = counter_two
    
}
