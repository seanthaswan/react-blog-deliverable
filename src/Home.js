import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render(){
    return(
      <div class="Home">
        <h1>Welcome to my home, I am the Potion Seller</h1>
        <h2>Would you like to browse my wares?</h2>
        <img src="https://static.fjcdn.com/gifs/Potion_e74f1a_5548262.gif" />
      </div>
    );
  }
}

export default Home;