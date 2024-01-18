
import "./App.css";
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import DrawingPage from "./components/DrawingPage";
import PostPage from "./components/PostPage";
import url1 from './images/url1.jpeg'
import url2 from './images/url2.jpeg'
import url3 from './images/url3.jpeg'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const postData = {
  title: '포스팅 제목',
  date: '2024-01-14',
  images: [url1, url2, url3],
  content: '포스팅 내용',
};

const App = ({}) => {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Container>
          <Routes>
            {/* <Route path="/" element={<PostPage data={postData}/>}></Route> */}
            {/* {/* <Route path="/signup" element={<SignIn/>}></Route> */}
            <Route path="/" element={<SignUp/>}></Route>
            {/* <Route path="/" element={<DrawingPage/>}></Route> */}
            {/* <Route path="/test" element={<test/>}></Route> */}
          </Routes>
        </Container>
    </BrowserRouter>
    </div>
  );
};

export default App;