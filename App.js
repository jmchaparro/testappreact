import React from "react";
import "./App.css";
import { List } from "./components/List";
import ProductView from "./components/ProductView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List />

        <ProductView />
      </header>
    </div>
  );
}

export default App;
