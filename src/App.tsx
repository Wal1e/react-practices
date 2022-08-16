import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './page/home'
import List from './page/list'
import Inner from './page/inner'

const AppContext = React.createContext('wsz')
export { AppContext }

function App() {
  const [name, setName] = useState('wsz')
  const curTimeStamp = new Date().getTime();
  const startTime = '2022-08-09 10:00:00';
  const endTime = '2022-08-09 22:00:00';
  console.log('curTimeStamp in App==', curTimeStamp)
  return (
    <div className="App">
      <input onChange={e => setName(e.target.value)}></input>
      <AppContext.Provider value={name}>
        <Inner />
      </AppContext.Provider>
      {/* <Home curTimeStamp={curTimeStamp} startTime={startTime} endTime={endTime}></Home> */}
      <List />
    </div>
  );
}

export default App;
