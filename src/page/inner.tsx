import React, { useState, useContext, useEffect }  from 'react'
import { AppContext } from '../App'

const Inner: React.FC<{

}> = (props) => {

  const [count, setCount] = useState(0)
  const name = useContext(AppContext)

  useEffect(()=>{

  })

  return <div>
    <div>{name}</div>
  </div>
}

export default Inner
