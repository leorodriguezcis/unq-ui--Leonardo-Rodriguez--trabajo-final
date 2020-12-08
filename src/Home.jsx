import React, { useState, useEffect } from "react";
import "./LinkSelectorText.css"
import { useHistory } from "react-router-dom";

const Home = () =>{
  const [jugadorCarta, setCartaj] = useState({})
  const [jugador1, setJugador1] = useState("")
  const [user1Selec, setUser1Select] = useState(null)
  const [user2Selec, setUser2Select] = useState(null)
  const [cpu, setCpu] = useState("")
  const [turno, setTurno] = useState("jugador 1")
  const [turnoCpu, setTurnoCpu] = useState("jugador 1")
  const [jugador2, setJugador2] = useState("")
  const [ganador, setGanador] = useState("")
  const history = useHistory();
  const [puntajeJ1, setPuntajeJ1] = useState(0)
  const [puntajeJ2, setPuntajeJ2] = useState(0)

  useEffect(()=> {
      setJugador1(JSON.stringify(localStorage.getItem("jugador1")))
      setJugador2(JSON.stringify(localStorage.getItem("jugador2")))
      setPuntajeJ1(localStorage.getItem("puntajeJ1"))
      setPuntajeJ2(localStorage.getItem("puntajeJ2"))
      setCpu(JSON.stringify(localStorage.getItem("cpu")))
  }
  
  )


  const Roca = ()=>{
    const name = "rock"
    const img = "https://i.ibb.co/2sPFxR5/Rock.png"
    
    const action =()=>{
      return { name:"rock",
      leGanaA:["lizzard","scissor"]}
    }
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
      console.log(user1Selec)
      console.log(user2Selec)
    }
    return(
    
          <img id="link"   onClick={()=>setEleccionAJugador(action)} src={img} alt="" height="50"/>
   
    )
  } 
  const Papel = ()=>{
    const name = "papper"
    const img = "https://i.ibb.co/GsJCY3w/Papper.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
      console.log(user1Selec)
      console.log(user2Selec)
    }
    const action =()=>{
    return { name:"papper",
    leGanaA:["spock","rock"]}
    }
    return(
      
        <img  onClick={()=>setEleccionAJugador(action)} id="link" src={img} alt=""height="50"/>
      
    )
  } 
  const Tijera = ()=>{
    const name = "scissor"
    const img = "https://i.ibb.co/fvfv4Zn/Sissors.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
      console.log(user1Selec)
      console.log(user2Selec)
    }
    const action =()=>{
     return{ name:"scissor",
     leGanaA:["papper","lizzard"]}
    }
    
    return(
      
          <img  onClick={()=>setEleccionAJugador(action)} id="link" src={img} alt=""height="50"/>
     
    )
  }
  const Lagarto = ()=>{
    const name = "lizzard"
    const img = "https://i.ibb.co/44JpdYy/Lizzard.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
      
    }
    
    const action =()=>{
      return{ name:"lizzard",
              leGanaA:["spock","papper"]}
    }
    return(
      
          <img id="link"  onClick={()=>setEleccionAJugador(action)} src={img} alt=""height="50"/>
      
    )
  }
  const Spock = ()=>{
    const name = "spock"
    const img = "https://i.ibb.co/qNsHqn0/Spock.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
    
    }
    const action =()=>{
     return{ name:"spock",
     leGanaA:["spock","rock"]}
    }
    return(
      
          <img id="link"  onClick={()=>setEleccionAJugador(action)} src={img} alt=""height="50"/>
      
    )
  }

  

  const Batalla = (user1Selec, user2Selec) =>{
    
    if(user2Selec.leGanaA.includes(user1Selec.name)){
      let res = Number(puntajeJ2)+Number(1)
      setPuntajeJ2(res)
      localStorage.removeItem("puntajeJ2")
      localStorage.setItem("puntajeJ2",res)
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador",jugador2)
      setPuntajeJ2(localStorage.getItem("puntajeJ2"))
      location.reload();
      history.push("/home");
      return jugador2
    }
    if(user1Selec.leGanaA.includes(user2Selec.name)){
      let res = Number(puntajeJ1) +Number(1)
      setPuntajeJ1(res)
      localStorage.removeItem("puntajeJ1")
      localStorage.setItem("puntajeJ1",res)
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador",jugador1)
      location.reload();
      history.push("/home");
      return jugador1
    }
    else{
      location.reload();
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador","empate")
      return "Empate"
    }  
  }
  
 
  const fijarSeleccion = ()=>
  {
      setTurno("jugador 2") 
  }
  const VsCPU = () => {

    return(
      <div>
      <Papel/><Tijera/><Spock/><Lagarto/><Roca/>
      <p>{turno}</p>
      {(user1Selec)? <button onClick={()=>setGanador(Batalla(user1Selec,user2Selec))}>Batalla</button> : <div/>}
      <p>ganador:{localStorage.getItem("ganador")}</p>
    </div>
  )

  }
  const VsJugador = () =>{
    return(
        <div>
        <Papel/><Tijera/><Spock/><Lagarto/><Roca/>
        <p>{turno}</p>
        {user1Selec?<button onClick={fijarSeleccion}>Elegir</button>:<div/>}
        {(user1Selec&&user2Selec)? <button onClick={()=>setGanador(Batalla(user1Selec,user2Selec))}>Batalla</button> : <div/>}
        <p>ganador:{localStorage.getItem("ganador")}</p>
      </div>
    )

  }
  const salir = ()=>{
    localStorage.clear()
    history.push("./login")
  }

  return(
      <div>
        <button onClick={salir}>Volver al Menu Principal</button>
        <p/>Jugador 1 :{JSON.stringify(localStorage.getItem("jugador1"))}
          <p/>Puntaje J1:{puntajeJ1}
          <p/>jugador 2 :{localStorage.getItem("cpu")?(
            JSON.stringify(localStorage.getItem("cpu"))):
            JSON.stringify(localStorage.getItem("jugador2")) 
        }<p/>Puntaje J2:{puntajeJ2}
          {cpu? <VsCPU/> : <VsJugador/>}
      </div>
  )    
}

export default Home;