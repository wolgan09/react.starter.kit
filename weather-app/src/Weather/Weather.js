import React, { Component } from 'react'
import axios from 'axios';
import "./Weather.css";
import { Link } from "react-router-dom";
export default class Weather extends Component {
    filteredCities = [];
    state = {
        weather: {},
        cities: [],
        searchTerm: ''
    }

    componentDidMount() {

        console.log('did mount')
        axios.get(`http://localhost:3100/get-cities`)
            .then(res => {
                const cities = res.data;
                // this.filteredCities = cities;  // let user search first
                this.setState({ cities });

            })
    }

    searchCities = (e) => {
        this.setState({ searchTerm: e.target.value })
        const filteredCities = [];
        this.state.cities.filter((city) => {
            if (city.toLowerCase().includes(e.target.value.toLowerCase())) {
                filteredCities.push(city)
            }
        });

        this.filteredCities = filteredCities;
    }

    render() {
        // const weather = this.state.weather;
        const cities = this.state.cities;

        return (
            <div className="App-header">
                <div className="text-white" >
                    <input className="search-input form-control" type="text" placeholder="City"
                        value={this.state.searchTerm} onChange={this.searchCities}
                    />
                    <ul className="cities-list p-0 text-center">
                        {this.filteredCities.length ? this.filteredCities.map(item => (
                            <li key={item}>
                                <Link className="list-item" to={'/report/' + item.toLowerCase()}>{item}</Link>
                            </li>
                        )) : null}
                    </ul>
                </div>
            </div>
        )
    }
}