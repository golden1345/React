import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Foeter from './components/Footer'

const App = () =>{

  return(
    <div>
      <Header />
      <Foeter />
    </div>
  );
}

export default App;