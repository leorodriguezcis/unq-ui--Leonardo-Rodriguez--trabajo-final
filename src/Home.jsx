import React, { useState, useEffect } from "react";
import "./LinkSelectorText.css"
import { useHistory } from "react-router-dom";
import "./login.css"

const Home = () =>{
  const [renderCpu,setRenderCpu] = useState("")
  const [jugador1, setJugador1] = useState("")
  const [user1Selec, setUser1Select] = useState(null)
  const [user2Selec, setUser2Select] = useState(null)
  const [cpu, setCpu] = useState("")
  const [turno, setTurno] = useState("jugador 1")
  const [jugador2, setJugador2] = useState("")
  const [ganador, setGanador] = useState("")
  const history = useHistory();
  const [puntajeJ1, setPuntajeJ1] = useState(0)
  const [puntajeJ2, setPuntajeJ2] = useState(0)



  useEffect(()=> {
      setJugador1((localStorage.getItem("jugador1")))
      setPuntajeJ1(localStorage.getItem("puntajeJ1"))
      setPuntajeJ2(localStorage.getItem("puntajeJ2"))
      setCpu(localStorage.getItem("cpu"))
      setRenderCpu(localStorage.getItem("renderCpu"))
      setJugador2((localStorage.getItem("jugador2")))
  }
  
  )


  const Roca = ()=>{
    const name = "rock"
    const img = "https://i.ibb.co/1GxJ4n5/piedra-256x256.png"
    
    const action =()=>{
      return  {name:"rock",
      leGanaA:["lizzard","scissor"],
      render:"https://i.ibb.co/1GxJ4n5/piedra-256x256.png"}
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
    const img = "https://i.ibb.co/s9t34Ym/papel-256x256.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
      console.log(user1Selec)
      console.log(user2Selec)
    }
    const action =()=>{
    return {name:"papper",
    leGanaA:["spock","rock"],
    render:"https://i.ibb.co/s9t34Ym/papel-256x256.png"}
    }
    return(
      
        <img  onClick={()=>setEleccionAJugador(action)} id="link" src={img} alt=""height="50"/>
      
    )
  } 
  const Tijera = ()=>{
    const name = "scissor"
    const img = "https://i.ibb.co/3zH5RPH/tijera-256x256.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
      console.log(user1Selec)
      console.log(user2Selec)
    }
    const action =()=>{
     return{name:"scissor",
     leGanaA:["papper","lizzard"],
     render:"https://i.ibb.co/3zH5RPH/tijera-256x256.png"}
    }
    
    return(
      
          <img  onClick={()=>setEleccionAJugador(action)} id="link" src={img} alt=""height="50"/>
     
    )
  }
  const Lagarto = ()=>{
    const name = "lizzard"
    const img = "https://i.ibb.co/Bg62f11/lagarto-256x256.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
      
    }
    
    const action =()=>{
      return{name:"lizzard",
      leGanaA:["spock","papper"],
      render:"https://i.ibb.co/Bg62f11/lagarto-256x256.png"}
    }
    return(
      
          <img id="link"  onClick={()=>setEleccionAJugador(action)} src={img} alt=""height="50"/>
      
    )
  }
  const Spock = ()=>{
    const name = "spock"
    const img = "https://i.ibb.co/Twkk5zG/spock-256x256.png"
    
    const setEleccionAJugador = (elem) =>{
      (turno == "jugador 1")? setUser1Select(elem):setUser2Select(elem)
    
    }
    const action =()=>{
     return{name:"spock",
     leGanaA:["spock","rock"],
     render:"https://i.ibb.co/Twkk5zG/spock-256x256.png"}
    }
    return(
      
          <img id="link"  onClick={()=>setEleccionAJugador(action)} src={img} alt=""height="50"/>
      
    )
  }
  
  const BatallaVsCpu = (user1Selec) =>{
  const itemsCpu = [ {name:"spock",
                      leGanaA:["spock","rock"],
                      render:"https://i.ibb.co/Twkk5zG/spock-256x256.png"},
                     {name:"lizzard",
                      leGanaA:["spock","papper"],
                      render:"https://i.ibb.co/Bg62f11/lagarto-256x256.png"},
                     {name:"scissor",
                      leGanaA:["papper","lizzard"],
                      render:"https://i.ibb.co/3zH5RPH/tijera-256x256.png"},
                     {name:"papper",
                     leGanaA:["spock","rock"],
                     render:"https://i.ibb.co/s9t34Ym/papel-256x256.png"},
                     {name:"rock",
                     leGanaA:["lizzard","scissor"],
                     render:"https://i.ibb.co/1GxJ4n5/piedra-256x256.png"} ] 

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
      // eslint-disable-next-line no-restricted-globals
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
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      
      return jugador1
    }
    else{
      
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador","empate")
      // eslint-disable-next-line no-restricted-globals
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
      // eslint-disable-next-line no-restricted-globals
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
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      
      return jugador1
    }
    else{
      
      localStorage.removeItem("ganador")
      localStorage.setItem("ganador","empate")
      // eslint-disable-next-line no-restricted-globals
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
      <div align="center">
         <div id="formContent">
        <h2 class="active">Por favor Seleccione</h2>
        <br/>
      <Papel/><Tijera/><Spock/><Lagarto/><Roca/>
      <br/>
      <br/>
      {(user1Selec)?<input type="button" onClick={()=>setGanador(BatallaVsCpu(user1Selec))} class="fadeInDown" value="Batalla"/>  : <div/>}
      <br/>
      <h2 class="active">jugador 1 eligio:<img id="link"  src={localStorage.getItem("imagenJ1")} alt="" height="50"/></h2>
      <h2 class="active">jugador 2 eligio:<img id="link"  src={localStorage.getItem("imagenCpu")} alt="" height="50"/></h2>
      <h2 class="active">ganador:{localStorage.getItem("ganador")}</h2>
      </div>

    </div>
  )

  }
  const VsJugador = () =>{
    return(
        <div align="center">
          <div id="formContent">
          <h2 class="active">Por favor Seleccione</h2>
          <br/>
         <Papel/><Tijera/><Spock/><Lagarto/><Roca/>
         <br/>
         <h2 class="active">Turno De:{turno}</h2>
        {user1Selec&&(turno!="jugador 2")?<input type="button"onClick={fijarSeleccion} class="fadeInDown" value="Fijar Seleccion"/>:<div/>}
        {(user1Selec&&user2Selec)?<input type="button"onClick={()=>setGanador(Batalla(user1Selec,user2Selec))} class="fadeInDown" value="Batalla"/>: <div/>}
        <br/>
        <h2 class="active">jugador 1 eligio:<img id="link"  src={localStorage.getItem("imagenJ1")} alt="" height="50"/></h2>
        <h2 class="active">jugador 2 eligio:<img id="link"  src={localStorage.getItem("imagenJ2")} alt="" height="50"/></h2>
        <h2 class="active">ganador:{localStorage.getItem("ganador")}</h2>
        </div>
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
      <div align="center">
        <button onClick={salir}>Volver al Menu Principal</button>
          <div>
            <h2 class="active">Jugador 1 :{(localStorage.getItem("jugador1"))} ---------- Puntaje:{puntajeJ1}</h2>
            <br/>
            <h2 class="active">Jugador 2 :{localStorage.getItem("cpu")?(
              (localStorage.getItem("cpu"))):
              (localStorage.getItem("jugador2")) 
            } ---------- Puntaje:{puntajeJ2}</h2>
            {elegir()}
          </div>
      </div>
  )    
}

export default Home;