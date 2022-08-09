import React, { useState, useContext, useEffect }  from 'react'
import dayjs from 'dayjs'

const Home: React.FC<{
  startTime:string,
  endTime:string,
  curTimeStamp: number
}> = (props) => {
  const {curTimeStamp, startTime, endTime} = props;
  const endTimeStamp = dayjs(endTime).millisecond();
  const [curTime, setCurTime] = useState('');
  console.log('curTime==', curTime);
  const [remainStamp, setRemainStamp] = useState(endTimeStamp - curTimeStamp);

  const endTimeoutTimer = setTimeout(() => {
    const cur = dayjs(remainStamp).format('HH:mm:ss');
    setRemainStamp(remainStamp - 1000);
    setCurTime(cur);
  },1000);

  useEffect(() => {
    return componentWillUnmount;
  }, [curTime]);

  const componentWillUnmount = () => {
    clearTimeout(endTimeoutTimer);
  }

  return <div>
    <div>{curTime}</div>
  </div>
}

export default Home
