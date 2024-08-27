import react, { useState } from 'react';
import './App.css';

function App() {
  const [bgcolor, setBgColor] = useState('aqua');
  let changeTheme=()=>{
    (bgcolor==='aqua')? setBgColor('black') : setBgColor('aqua');
  } 
  return (
    <div style={{backgroundColor: bgcolor ,transition:'1s'}} className="App">
      <h4 style={{color:"white"}}>{bgcolor==='aqua'?"Switch to Dark Theme":"Switch to Light Theme"}</h4>
      <button className='btn' onClick={changeTheme}>
        <div className='dot' style={{left : (bgcolor==='aqua')? "5px" : "55px", backgroundColor: (bgcolor==='aqua')? 'yellow':'black', transition:'1s'}}></div>
      </button>
    </div>
  );
}

export default App;