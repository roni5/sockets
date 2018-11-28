import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
import { SocketList } from "./containers/SocketList"
import { FetchData } from "./containers/FetchData"

class App extends Component {
  render() {
    return (
      <div id="container" >
        <aside id="sidebar"> :Users
          <Sidebar />
          <FetchData />
       </aside>
          <section id="main">
          <MessagesList />
          <FetchData />
          <SocketList />
          <AddMessage />

          </section>
      </div>
    );
  }
}

export default App;
