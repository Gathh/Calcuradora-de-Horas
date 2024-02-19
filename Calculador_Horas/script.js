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
    let momentoInicial = hi.value*60 + Number(mi.value);
    let momentoFinal = hf.value*60 + Number(mf.value);
    let resultado = 0;
    let resultadoMinuto = momentoInicial - momentoFinal;
    if(resultadoMinuto < 0){
        resultadoMinuto *= -1;
    }
        while(resultadoMinuto > 59){
            resultadoMinuto -= 60;
            resultadoHora ++;
    }
    resultado.innerHTML = resultadoHora+ ":"+resultadoMinuto;
}