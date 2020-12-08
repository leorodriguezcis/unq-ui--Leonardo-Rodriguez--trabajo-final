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
  const [renderCpu, setRenderCpu] = useState(0)


  useEffect(()=> {
      setJugador1((localStorage.getItem("jugador1")))
      setPuntajeJ1(localStorage.getItem("puntajeJ1"))
      setPuntajeJ2(localStorage.getItem("puntajeJ2"))
      setCpu(JSON.stringify(localStorage.getItem("cpu")))
      setRenderCpu(localStorage.getItem("renderCpu"))
      setJugador2((localStorage.getItem("jugador2")))
  }
  
  )


  const Roca = ()=>{
    const name = "rock"
    const img = "https://i.ibb.co/2sPFxR5/Rock.png"
    
    const action =()=>{
      return  {name:"rock",
      leGanaA:["lizzard","scissor"],
      render:"https://i.ibb.co/2sPFxR5/Rock.png"}
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
    return {name:"papper",
    leGanaA:["spock","rock"],
    render:"https://i.ibb.co/GsJCY3w/Papper.png"}
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
     return{name:"scissor",
     leGanaA:["papper","lizzard"],
     render:"https://i.ibb.co/fvfv4Zn/Sissors.png"}
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
      return{name:"lizzard",
      leGanaA:["spock","papper"],
      render:"https://i.ibb.co/44JpdYy/Lizzard.png"}
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
     return{name:"spock",
     leGanaA:["spock","rock"],
     render:"https://i.ibb.co/qNsHqn0/Spock.png"}
    }
    return(
      
          <img id="link"  onClick={()=>setEleccionAJugador(action)} src={img} alt=""height="50"/>
      
    )
  }
  
  const BatallaVsCpu = (user1Selec) =>{
  const itemsCpu = [ {name:"spock",
                      leGanaA:["spock","rock"],
                      render:"https://i.ibb.co/qNsHqn0/Spock.png"},
                     {name:"lizzard",
                      leGanaA:["spock","papper"],
                      render:"https://i.ibb.co/44JpdYy/Lizzard.png"},
                     {name:"scissor",
                      leGanaA:["papper","lizzard"],
                      render:"https://i.ibb.co/fvfv4Zn/Sissors.png"},
                     {name:"papper",
                     leGanaA:["spock","rock"],
                     render:"https://i.ibb.co/GsJCY3w/Papper.png"},
                     {name:"rock",
                     leGanaA:["lizzard","scissor"],
                     render:"https://i.ibb.co/2sPFxR5/Rock.png"} ] 

      let numRandom = Math.floor(Math.random() * itemsCpu.length)
      let res2 = itemsCpu[numRandom]
      localStorage.setItem("imagenCpu",res2.render)
      localStorage.setItem("imagenJ1",user1Selec.render)

    if(res2.leGanaA.includes(user1Selec.name)){
      let res = Number(puntajeJ2)+Number(1)
      setPuntajeJ2(res)
      localStorage.removeItem("puntajeJ2")
      localStorage.setItem("puntajeJ2",res)
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador","cpu")
      localStorage.setItem("renderCpu",res2.render)
      setPuntajeJ2(localStorage.getItem("puntajeJ2"))
      location.reload();
      
      return jugador2
    }
    if(user1Selec.leGanaA.includes(res2.name)){
      let res = Number(puntajeJ1) +Number(1)
      setPuntajeJ1(res)
      localStorage.removeItem("puntajeJ1")
      localStorage.setItem("puntajeJ1",res)
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador",jugador1)
      location.reload();
      
      return jugador1
    }
    else{
      
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador","empate")
      location.reload();
      return "Empate"
    }  
  }

  const Batalla = (user1Selec, user2Selec) =>{
    localStorage.setItem("imagenJ1",user1Selec.render)
    localStorage.setItem("imagenJ2",user2Selec.render)
    
    if(user2Selec.leGanaA.includes(user1Selec.name)){
      let res = Number(puntajeJ2)+Number(1)
      setPuntajeJ2(res)
      localStorage.removeItem("puntajeJ2")
      localStorage.setItem("puntajeJ2",res)
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador",jugador2)
      setPuntajeJ2(localStorage.getItem("puntajeJ2"))
      localStorage.setItem("renderCpu",user2Selec.render)
      location.reload();
      
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
      
      return jugador1
    }
    else{
      
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador","empate")
      location.reload();
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
      {(user1Selec)? <button onClick={()=>setGanador(BatallaVsCpu(user1Selec))}>Batalla</button> : <div/>}
    <p>Cpu Eligio</p>
    <img id="link"  src={localStorage.getItem("imagenCpu")} alt="" height="50"/>
    
    <p>jugador 1 eligio:<img id="link"  src={localStorage.getItem("imagenJ1")} alt="" height="50"/></p>
    <p>jugador 2 eligio:<img id="link"  src={localStorage.getItem("imagenJ2")} alt="" height="50"/></p>
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
    <p>jugador 1 eligio:<img id="link"  src={localStorage.getItem("imagenJ1")} alt="" height="50"/></p>
    <p>jugador 2 eligio:<img id="link"  src={localStorage.getItem("imagenJ2")} alt="" height="50"/></p>
        <p>ganador:{localStorage.getItem("ganador")}</p>

      </div>
    )

  }
  const salir = ()=>{
    localStorage.clear()
    history.push("./login")
  }
  const elegir =() =>
  {
    if(localStorage.getItem("contra")==1){
      localStorage.removeItem("jugador2")
      localStorage.setItem("jugador2","cpu")
      
      return <VsCPU/>
    }
    else
    {
      
      return <VsJugador/>
    }
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
          {elegir()}
      </div>
  )    
}

export default Home;