import './App.css';
//import { Button } from '@chakra-ui/react';
import * as React from 'react';
import {  Route } from 'react-router-dom';
import HomePage from './Pages/Homepage.js';
import ChatPage from './Pages/Chatpage.js';



function App() {
  return (
    <div className="App">
         <Route path='/' component={HomePage} exact />              
         <Route path='/chats' component={ChatPage} />
       
    </div>
  );
}

export default App;
