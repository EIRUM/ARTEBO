
import '../App.css'; 
import DrawingCanvas from './Canvas';
import Palette from './Palette';
import React, { useState } from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <button>버튼1</button>
    <button>버튼2</button>
    <button>버튼3</button>
    <button>버튼4</button>
  </div>
);


const Main = () => (
  <div className="main">
    <DrawingCanvas></DrawingCanvas>
  </div>
);


const App2 = () => (

  <div className="app">
    <Sidebar />
    <div className="content">
      <Main />
    </div>
   <div>
    <ColorPalette/>
   </div>
  </div>
);

function App3(){

  let [strokeColor, setStrokeColor] = useState("");
  return(
    <div className="app">
    <Sidebar />
    <div className="content">
      <div className="main">
        <DrawingCanvas strokeColor = {strokeColor}></DrawingCanvas>
      </div>
    </div>
   <div>
    <ColorPalette setStrokeColor = {setStrokeColor}/>
   </div>
  </div>
  )
}

function ColorPalette(props){
  let [strokeColor2, setStrokeColor2] = useState("");
  return(
    <div className="Palette">
      <Palette setStrokeColor2 = {setStrokeColor2}></Palette>
      {props.setStrokeColor(strokeColor2)}
      <h4>선택된 색상 : {strokeColor2}</h4>
    </div>
  )
}



function App(){
  return (
    <div className="App">
      <App3/>
    </div>

  );
}

export default App;
