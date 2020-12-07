import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const Home = () =>{
  const history = useHistory();
  const Roca = ()=>{
    const name = "rock"
    const img = "https://i.ibb.co/2sPFxR5/Rock.png"
    function leGanaA(otro){
      return(otro.name =="lizzard"|| otro.name =="scissor")
    }
  } 
  const Papel = ()=>{
    const name = "papper"
    const img = "https://i.ibb.co/GsJCY3w/Papper.png"
    function leGanaA(otro){
      return(otro.name =="spock"|| otro.name =="rock")
    }
  } 
  const Tijera = ()=>{
    const name = "scissor"
    const img = "https://i.ibb.co/fvfv4Zn/Sissors.png"
    function leGanaA(otro){
      return(otro.name =="lizzard"|| otro.name =="papper")
    }
  }
  const Lagarto = ()=>{
    const name = "lizzard"
    const img = "https://i.ibb.co/44JpdYy/Lizzard.png"
    function leGanaA(otro){
      return(otro.name =="spock"|| otro.name =="papper")
    }
  }
  const Spock = ()=>{
    const name = "spock"
    const img = "https://i.ibb.co/qNsHqn0/Spock.png"
    function leGanaA(otro){
      return(otro.name =="rock"|| otro.name =="scissor")
    }
  }

  const [user1, setUser1] = useState({})
  const [user2, setUser2] = useState({})
  const cosas = [Roca(),Papel(),Tijera(),Lagarto(),Spock()]

  const Batalla = (user1Selec, user2Selec) =>{
    let res = user1
    user1Selec.leGanaA(user2Selec)? res: res= user2
    return(res)
    
  }
  const salir = ()=>{
    localStorage.removeItem("user")
    history.push("./home")
  }
  return(
      <div>
          usuario{JSON.stringify(localStorage.getItem("user"))}
          <button onClick={salir}>salir</button>
      </div>
      
  )
      
}

export default Home;