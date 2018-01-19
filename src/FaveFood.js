import React, { Component } from 'react';
import './App.css';

class FaveFood extends Component {
  render() {
    return(
      <div className="FaveFood">
        <h1>My favorite movie</h1>
        <ol>
        <li>Fear and Loathing in Las Vegas</li>
        <li>The Princess Bride</li>
        </ol>
      </div>
    );
  }
}

export default FaveFood;