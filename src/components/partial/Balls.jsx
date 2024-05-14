import React from 'react'
import Ball from './Ball'

function Balls({score,setscore}) {
    const array = Array.from({ length: 131 }, (_, index) => index);

    return (
    <div className='w-full h-[85vh] flex items-center justify-center gap-4 flex-wrap overflow-hidden'>
       {array.map((b,i)=>{
        return <Ball score={score} setscore={setscore}  key={i}  />
       })}
    </div>
  )
}

export default Balls