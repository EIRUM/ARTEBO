import React from 'react';
import '../App.css'; 
import DrawingCanvas from './Canvas';

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

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="content">
      <Main />
    </div>
  </div>
);

export default App;
