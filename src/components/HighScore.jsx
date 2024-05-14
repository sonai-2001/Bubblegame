import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utils/Context'
import { useNavigate } from 'react-router-dom'

function HighScore() {
   const{score}= useContext(UserContext)
 const [highscore,sethighscore]=useState(0)
 const navigate=useNavigate()
 useEffect(()=>{
   sethighscore((prev)=>{
      return score.reduce((max,item)=>{
        
        if(item>max){
          max=item;
        }
        return max
       },0)
   })
 },[score])
 return (
    <div className='w-full h-screen flex flex-col gap-10 items-center justify-center bg-[#333333] text-white'>
      <h1>High score is {highscore}</h1>
      <button className='px-4 py-2 bg-red-400 rounded ' onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}

export default HighScore