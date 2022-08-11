import React, { useState, useContext, useEffect }  from 'react'

const List: React.FC<{

}> = (props) => {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    return componentWillUnmount
  })

  const componentWillUnmount = ()=> {
    console.log('componentWillUnmount')
  }

  return <div>
    <div>{count}</div>
    <button onClick={() => setCount(count+1)}>add</button>
  </div>
}

export default List
