import React, { useState, useContext, useEffect }  from 'react'
import dayjs from 'dayjs'

const Home: React.FC<{
  startTime:string,
  endTime:string,
  curTimeStamp: number
}> = (props) => {
  const {curTimeStamp, startTime, endTime} = props
  const endTimeStamp = dayjs(endTime).millisecond()
  const [curTime, setCurTime] = useState('')
  const [remainStamp, setRemainStamp] = useState(endTimeStamp - curTimeStamp)

  const endIntervalTimer = setInterval(() => {
    const cur = dayjs(remainStamp).format('HH:mm:ss')
    setRemainStamp(remainStamp-1000)
    setCurTime(cur)
  },1000)

  useEffect(() => {
    return componentWillUnmount;
  }, []);

  const componentWillUnmount = () => {
    clearInterval(endIntervalTimer)
  }

  return <div>
    <div>{curTime}</div>
  </div>
}

export default Home
