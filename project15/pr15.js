let value = Math.floor(Math.random()*101);
const text = document.getElementById('text');
const circ = document.getElementById('target');
const reveal = document.getElementById('give');
const revval = document.getElementById('cheat');
let data ;

const restart = document.getElementById('replay');
const well = document.getElementById('submit');

let play = true;
well.onclick = function(){
data = Number(text.value);

if(play){
    if(data == value){
        circ.style.backgroundColor = "green";
        play = false;
        revval.style.fontWeight="bold";
        revval.textContent = "You won !!";
    }
    else if(data != value && Math.abs(value-data)<10){
        circ.style.backgroundColor = "lime";
    }else if(Math.abs(value-data)>10 && Math.abs(value-data)<50 ){
        circ.style.backgroundColor = "yellow";
    }else if(Math.abs(value-data)>50 && Math.abs(value-data)<80 ){
        circ.style.backgroundColor = "orange";
    }else if(Math.abs(value-data)>80){
        circ.style.backgroundColor = "red";
    }
}
}
restart.onclick =function(){
    play = true;
    value = Math.floor(Math.random()*101);
    text.value="";
    revval.textContent = "";
    circ.style.backgroundColor = "white";

}
reveal.onclick= function(){
    revval.textContent = value;
    circ.style.backgroundColor = "#640D5F";
    play = false;
}