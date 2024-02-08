let hi  = document.getElementById("horaInicial");
let mi  = document.getElementById("minInicial");
let hf  = document.getElementById("horaFinal");
let mf  = document.getElementById("minFinal");
let resultado = document.getElementById("resp");

function soma(){
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMin = Number(mi.value) + Number(mf.value);
    while (somaMin > 59){
        somaMin -= 60;
        somaHora ++;
    }
    resultado.innerHTML = somaHora + ":" + somaMin
}
function sub(){
    let totalMin 
}