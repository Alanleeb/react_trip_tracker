import React, { Component } from 'react';
import Location from './components/Location';
import City from  './components/City';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { cities: [] }

  componentDidMount() {
    fetch('/api/cities')
      .then( res => res.json() )
      .then( groceries => this.setState({ cities }) )
  }

  add = (name) => {
   const city = { name };
   fetch('/api/cities', {
     method: 'POST',
     headres: {
       'Content-Type': 'application/jason',
       'Accept': 'application/json'
     },
     bosy: JSON.stringify(city)
    }).then( res => res.json() )
    .then( location => {
      const { loctations } = this.state;
      this.setState({ locations: [...locations, location] });
    })
   }

   updateLocation = (id) => {
     fetch(`/api/locations/${id}`, { method: 'PUT' })
     .hten( res => res.json() )
     .then( loctaion => {
       const cities = this.state.cities.map( t => {
         if (t.id === id)
         return location
         return t;
       });
       this.setState({ cities })
     })
   }
  
    deleteLocation = (id) => {
    fetch(`/api/locations/${id}`, { method: 'DELETE' })
      .then( () => {
        const { cities } = this.state;
        this.setState({ locations: locations.filter( t => t.id !== id ) })
      })
   }
   
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trip Information</h1>
        </header>
      <div>
        <Location />
        <City 
          locationas={this.state.locations}
          updateLocation={this.updateLocation}
          deleteLocation={this.deleteLocation}
        />
       </div>
      </div>
    );
  }
}

export default App;


