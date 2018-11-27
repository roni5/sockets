import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container" >
       <aside id="sidebar">Users</aside>
          <section id="main">
          <MessagesList />
          <AddMessage />

          </section>
      </div>
    );
  }
}

export default App;
