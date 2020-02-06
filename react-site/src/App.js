import React, { Component } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Foeter from './components/Footer'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Foeter />
      </div>
    )
  }
}
