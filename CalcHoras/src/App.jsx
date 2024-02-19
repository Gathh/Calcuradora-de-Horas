import { useState } from 'react'
import './App.css'

function App() {

const [hi, setHi] = useState();
const [mi, setMi] = useState();
const [hf, setHf] = useState();
const [mf, setMf] = useState();
const [resultado, setResultado] = useState("resultado");

const soma = () =>{
  let somaHora = Number(hi.value) + Number(hf.value);
    let somaMin = Number(mi.value) + Number(mf.value);
    while (somaMin > 59){
        somaMin -= 60;
        somaHora ++;
    }
    setResultado(somaHora + ":" + somaMin);
} 

  const sub = () =>{
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
    setResultado(resultadoHora+ ":" + resultadoMinuto);
  } 

  return (
  <>
     <h1>Calculadora</h1>
    <div class="cdh">
        <h3>Digite o horário que vai ser calcular!</h3>
        <input type="number" value={hi} onChaange={(e) => setHi(e.target.value)} placeholder="Hora Inicial"/>&nbsp; :
        <input type="number" value={mf} onChaange={(e) => setMf(e.target.value)} placeholder="Min Inicial"/><br/>
        <input type="number" value={hf} onChaange={(e) => setHf(e.target.value)} placeholder="Hora Final"/>&nbsp; :
        <input type="number" value={mf} onChaange={(e) => setMf(e.target.value)} placeholder="Min Final"/><br/><br/>
        <button onClick={soma}>Soma</button>
        <button onClick={sub}>Diferença</button>
        <h3 id="r">{resultado}</h3>
    </div>
  </>
  )
}

export default App
