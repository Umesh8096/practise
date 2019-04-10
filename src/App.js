import React, { Component } from 'react';
import './App.css';
import Profile from './Profile'

class App extends Component {
  render() {
    return (
        
      <div className="App">
        <header className="App-header">
            <a link href="#">Link</a>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Login</a></li>
            </ul>
        </header>
        <h1>Blizzmate</h1>
        <p>This site is our for seek our interests and lets meetup with new friends with same interests and hike and shop</p>
        <form className="form">
          <label for="text">Email</label><br/>
          <input text="text" className="form_class" placeholder="Enter e-mail"/>
          <br/>
          <label for="text">Password</label><br/>
          <input text="text" className="form_class" placeholder="Enter e-mail"/>
          <br/>
          <button className="button">Log In</button>
        </form>
        <Profile />
      </div>
    );
  }
}

export default App;
