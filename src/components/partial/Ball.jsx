import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../utils/Context'

function Ball({score,setscore}) {
  const {hit,sethit}=useContext(UserContext)
  const [val,setval]=useState(0)
  const handleclick=(e)=>{
      if(e.target.innerText==hit){
        sethit(Math.floor(Math.random() * 9) + 1) 
        setscore(score+1)
      }
    // console.log(e.target.innerText)
  }
  const ran=()=>{
    const n=Math.floor(Math.random() * 9) + 1
     setval(n)
  }

  useEffect(()=>{
    ran()
  },[hit,score])
    return (
    <div onClick={handleclick} className='px-4 py-2 rounded-full border-2 border-zinc-500 text-white '>
    {val}
    </div>
  )
}

export default Ball