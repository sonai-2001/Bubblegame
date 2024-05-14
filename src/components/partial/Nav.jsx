import React, { useContext } from 'react'
import { UserContext } from '../../utils/Context'

function Nav({timer,score}) {
  console.log("rendernav")
  
 const {hit}= useContext(UserContext)
  return (
    <div className='w-full h-[15vh] flex text-white justify-center items-center gap-[10vw] border-b-2 border-zinc-400 text-md md:text-2xl'>
        <div>
            <span className='mr-[5px]'>HIT -</span>
            <span>{hit}</span>
        </div>
        <div>
            <span className='mr-[5px]'>TIMER -</span> 
            <span >{timer}</span>
        </div>
        <div>
            <span className='mr-[5px]'>SCORE -</span>
            <span>{score}</span>
        </div>
    </div>
  )
}

export default Nav