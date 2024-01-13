import React from 'react';
import '../App.css'; 
import DrawingCanvas from './Canvas';
import Sidebar from './Sidebar';
import styled from 'styled-components';


// const SendButtonStyle = styled.button`
//   border: 1px solid #000;
//   height:40vh;
// `;

const Main = () => (
  <div className="main">
    <DrawingCanvas></DrawingCanvas>
  </div>
);

const App = () => (
  <div className="app">
    <Sidebar />
    {/* <SendButtonStyle /> */}
    <div className="content">
      <Main />
    </div>
  </div>
);

export default App;
