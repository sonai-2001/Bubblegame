import React, { useCallback, useContext, useEffect, useState } from "react";
import Nav from "./partial/Nav";
import Balls from "./partial/Balls";
import { UserContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Play() {
  const [timer, settimer] = useState(60);
  const {score,setscore}=useContext(UserContext)
  const[val,setval]=useState(0)
  useEffect(()=>{
    // setscore([...score,val])
    console.log("useeffect")
    
    if(timer<1){
      return
    }
    const interval=setInterval(()=>{
      settimer(timer-1)
    },300)
    return ()=>{
      clearInterval(interval)
    
    }
  })
  console.log(timer)
  
  return timer>0 ? (
    <div className="w-full h-screen bg-[#333333]">
      <Nav timer={timer} score={val} />
      <Balls score={val} setscore={setval} />
    </div>
  ): <div className="w-full h-screen bg-[#333333] flex flex-col gap-10 items-center justify-center">
        <h1>Game end and your score is {val}</h1>
        <button className='px-4 py-2 bg-red-400 rounded ' onClick={()=>{
          window.location.reload()
        }}>Play again</button>
        <Link to="/" className='px-4 py-2 bg-red-400 rounded '>Home</Link>
  </div>
}

export default Play;
