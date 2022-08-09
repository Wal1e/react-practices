import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './page/home'

function App() {
  const curTimeStamp = new Date().getTime();
  const startTime = '2022-08-09 10:00:00';
  const endTime = '2022-08-09 22:00:00';
  console.log('curTimeStamp in App==', curTimeStamp)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Home curTimeStamp={curTimeStamp} startTime={startTime} endTime={endTime}></Home>
    </div>
  );
}

export default App;
