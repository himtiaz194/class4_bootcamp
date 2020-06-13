import React ,{useState} from 'react';
import './App.css';
import Message from './message';

function App() {
  let[count,setCount]=useState(1);
  let[isMorning,setMorning]=useState(false);
  return ( 
    <div className={`box ${isMorning ? "daylight": ""}`}> 
    <h1>Day time={isMorning ? 'Morning':'Night'}</h1>
      <Message counter={count}/>
      <br />
      <button onClick={()=>setCount(count + 1)}>Update Counter</button>
      <br />
      <button onClick={()=>setMorning(!isMorning)}>Update Day Time</button>
    </div>
  );
}

export default App;
