import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import News from './component/News/News';
import Header from './component/Header/Header';
import TopHeadline from './component/TopHeadline/TopHeadline';
function App() {
  return (
    <div>
      
      <Header></Header>
      <TopHeadline></TopHeadline>
      {/* <News></News> */}
      
    </div>
  );
}

export default App;
