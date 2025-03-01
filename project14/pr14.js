
const inc = document.getElementById('increase');
const dec= document.getElementById('decrease');
const reset = document.getElementById('reset');
const count = document.getElementById('counter');
const rand = document.getElementById("random");
let value = 0;

inc.onclick = function(){
    value ++;
    count.textContent= value;
}

dec.onclick = function(){
    value --;
    count.textContent= value;
}

reset.onclick = function(){
    value = 0;
    count.textContent= value;
}

rand.onclick = function(){
    value = Math.floor(Math.random()*201)-100;
    count.textContent= value;
}