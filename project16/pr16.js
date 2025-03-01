const tofehrenheit = document.getElementById('cel');
const tocelcius = document.getElementById('feh');
const text = document.getElementById('value');
const submit = document.getElementById('submit');
const input = document.getElementById('text');


function tofeh (x){
    let result = (x*9/5)+32;
    return result;
}

function tocel (x){
    let result = (x-32)*5/9;
    return result;
}

submit.onclick=function(){
let value = Number(input.value);
if(input.value == ""){
    text.textContent = "you didn't provide a number to convert";

}else if(isNaN(value)){
    text.textContent = "Would you provide a number";
}else{
if(tocelcius.checked){
    text.textContent = tocel(value);

    }else if(tofehrenheit.checked) {
    text.textContent = tofeh(value);
        }else{
             text.textContent = "choose an operation to perform";
}
}
}