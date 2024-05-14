import React, { createContext, useState } from 'react'

export const UserContext=createContext()
function Context(props) {
  const [score, setscore] = useState([])
  const [hit, sethit] = useState(Math.floor(Math.random() * 9) + 1)

  return (
    <UserContext.Provider value={{score ,setscore,hit ,sethit}}>{props.children}</UserContext.Provider>
  )
}

export default Context