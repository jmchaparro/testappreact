import React, { Component } from "react";
import "./App.css";
import { List } from "./components/List";
import ProductView from "./components/ProductView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <List />

          <ProductView />
        </header>
      </div>
    );
  }
}

export default App;
