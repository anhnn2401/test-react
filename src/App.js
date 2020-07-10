import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/styles/main.scss'

import { 
  Header,
  Messages
  } from './components'
function App() {
  return (
    <div>
      <Header/>
      <Messages/>
    </div>
  );
}

export default App;
