
    const dataf = document.getElementById('number');
    const image = document.getElementById('images');
    const result = document.getElementById('result');
    

function roll (){
    let images = [];
    let rolls = [];

    for(let i = 0 ; i< Number(dataf.value) ; i++){

        let value = Math.floor(Math.random()*6)+1;
        rolls.push(value);
        images.push(`<img src="dice/${value}.png">`);
    }

    result.textContent = `dice : <${rolls.join(', ')}>`;
    image.innerHTML = images.join(' ');



}

function reset(){
    result.textContent="";
    dataf.value = "1";
    image.innerHTML = "";
}