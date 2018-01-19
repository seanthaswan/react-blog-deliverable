import React, { Component } from 'react';
import './App.css';

class Blog extends Component {
  render() {
    return(
      <div className="Blog">
        {this.props.posts}
      </div>
    );
  }
}

export default Blog;