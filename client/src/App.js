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

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trip Information</h1>
        </header>
      <div>
        <Location />
        <City />
        </div>
      </div>
    );
  }
}

export default App;

  add = (name) => {
    const product = { name };
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    }).then( res => res.json() )
      .then( grocery => {
        const { groceries } = this.state;
        this.setState({ groceries: [...groceries, grocery] });
    })
   
  }


  updateGrocery = (id) => {
    fetch(`/api/products/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( product => {
        const groceries = this.state.groceries.map( t => {
          if (t.id === id)
            return product
          return t;
      });
  
      this.setState({ groceries });
    })
  }

  deleteGrocery = (id) => {
    fetch(`/api/products/${id}`, { method: 'DELETE' })
      .then( () => {
        const { groceries } = this.state;
        this.setState({ groceries: groceries.filter( t => t.id !== id ) })
      })
   }
   
  render() {
    return (
      <div className="container">
        <GroceryForm addProduct={this.addProduct} />
        <GroceryList
          groceries={this.state.groceries}
          updateGrocery={this.updateGrocery}
          deleteGrocery={this.deleteGrocery}
        />
      </div>
    );
  }
}

export default App;
