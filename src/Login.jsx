import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css"




const Login = () => {
  const history = useHistory();
  const [jugador2, setJugador2] = useState("");
  const [habilitado, setHabilitarJ2] = useState(false);
  const [jugador1, setJugador1] = useState("");



  const jugarCpu= () =>{
    localStorage.setItem("puntajeJ1",0)
    localStorage.setItem("puntajeJ2",0)
    localStorage.setItem("cpu","cpu")
    localStorage.setItem("jugador1",jugador1)
    localStorage.setItem("contra",1)
    
    history.push("./home")
  }
  const jugarPlayer = () => {
    localStorage.setItem("contra",2)
    localStorage.setItem("puntajeJ1",0)
    localStorage.setItem("puntajeJ2",0)
    localStorage.setItem("jugador1",jugador1);
    localStorage.setItem("jugador2",jugador2)
    history.push("/home");
    
      }


const handleInputChange = (event) => {

  setJugador1(event.target.value)
}
const handleInputChange2 = (event) => {

  setJugador2(event.target.value)
}
  
const habilitarJugador = () => {
  setHabilitarJ2(true)
}
return (
  <div class="wrapper fadeInDown">
  <div id="formContent">
  <h2 class="active"> Piedra, Papel, Tijera, Lagarto o Spock </h2>
    
    <form>
      <input  required value={jugador1} onChange={handleInputChange} type="text" id="login" class="fadeIn second" name="login" placeholder="Nombre Jugador"/>
      <input type="submit" onClick={()=>jugarCpu()} class="fadeIn fourth" value="Jugar vs CPU"/>
      <input type="button" onClick={()=>habilitarJugador()} class="fadeIn fourth" value="Jugar vs Otro Jugador"/>
      {habilitado?
        (<input value={jugador2} onChange={handleInputChange2} type="text" id="login" class="fadeIn second" name="login" placeholder="Nombre Jugador 2"/>  
      ):<div></div>}
      {habilitado?(
        <input type="button" onClick={()=>jugarPlayer()} class="fadeIn fourth" value="Jugar vs Otro Jugador"/>
      ):<div></div>}
    </form>

    
    

  </div>
</div>
)
/*return (
  <div>
      
        <label>
          NameTag
          <input
            value={jugador1}
            onChange={handleInputChange}
            className="form-control"
          ></input>
        </label>
        <p>Elegir Oponente</p>
        <button onClick={()=>habilitarJugador()}>vsPlayer</button>
        <button onClick={()=>jugarCpu()}>vsCpu</button>
        {habilitado?
        (<label>
        NameTagPlayer2
          <input
          value={jugador2}
          onChange={handleInputChange2}
          className="form-control"
        ></input>
        <button onClick={()=>jugarPlayer()}>
          Jugar
        </button>
      </label>
      ):<div></div>}
    </div>
    
)*/
        }
export default Login;
