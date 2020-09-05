import React, { Component } from 'react'
import axios from 'axios';
import './weather.css'

export class weather extends Component {
    state = {
    weatherData: { name:'', weather:[]}
  }
  componentDidMount(){
    const appid = '5cb0f98c0ab3bfb5a93a94e970bb84ed';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=1259229&appid=${appid}` ).then(res => {
       this.setState({ weatherData: res.data })
    })
  }
  render() {
    return (
      <span>
       <h3>City :  { this.state.weatherData ? this.state.weatherData.name : ''} </h3>
       
      </span>
    )
  }
}

export default weather

