
import "./App.css";
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import DrawingPage from ".components/DrawingPage";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const App = ({}) => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={<DrawingPage/>}></Route>
            {/* <Route path="/test" element={<test/>}></Route> */}
          </Routes>
        </Container>
    </BrowserRouter>
    </div>
  );
};

export default App;