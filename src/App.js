import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Import page components
import Author from './Author.js';
import Comment from './Comment.js';
import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import FaveMovie from './FaveMovie.js';
import FaveFood from './FaveFood.js';


class Post extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   moodPoints: 1
    // }
  }

  // increaseMood(e){
  //   if(this.state.moodPoints <=9){
  //     this.setState({moodPoints: this.state.moodPoints +1});
  //   } else {
  //     this.setState({moodPoints: 1});
  //   }
  // }

  render() {
    const allPosts = this.props.posts.map(p => {
      return <div>
        <h1 className="Title">{p.title}</h1>
        <Author author={p.author}/>
        <h2> {p.author}</h2>
        <p className="Post-intro">
          {p.content}
        </p>
        <h2>Comments</h2>
        <Comment comments={p.comments}/>
        <br />
        <br />
        <hr />
      </div>
    });

    return (
      <Router>
      <div className="Post">
      <nav>
        <Link className="link" to="/">Home Page</Link>
        <Link className="link" to="/blog">Blog</Link>
        <Link className="link" to="/about">About Me</Link>
        <Link className="link" to="/favorite/movie">Fave Movie</Link>
        <Link className="link" to="/favorite/food">Fave Food</Link>
      </nav>
      <header className="Post-header">
          <h1 className="Post-title">Ya boy</h1>
          <p className="Post-intro">
            and his blog.
          </p>
        </header>
        {/* <h3>On a scale of 1-10 this is how I feel</h3>
        <p>Current Mood: {this.state.moodPoints}</p>
        <button onClick={ (e)=> this.increaseMood(e) }>DO YOU FEEL GOOD??</button> */}
        <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={ () => (<Blog posts={allPosts} />)} />
        <Route path="/about" component={About}/>
        <Route path="/favorite/food" component={FaveMovie} />
        <Route path="/favorite/movie" component={FaveFood}/>
        <hr />
        </div>
      </div>
      </Router>
    );
  }
}

export default Post;
