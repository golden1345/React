import React, { Component } from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Foeter from './components/Footer'
import Contacts from './pages/Contacts'
import Weather from './components/Weather'

const api_weather = "d0bf743cbbef75d38e39ad6040bbe969";

export default class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const api_url = await
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_weather}&units=metric`);
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        sunset: sunset_date,
        error: ""
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Contacts weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          wind={this.state.wind}
          sunset={this.state.sunset}
          error={this.state.error}
        />
        <Foeter />
      </div>
    )
  }
}
