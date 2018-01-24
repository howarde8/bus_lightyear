import React, { Component } from 'react';
import '../styles/App.css';
import { SearchBar } from './SearchBar';
import { ItemList } from './ItemList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <header className="App-header">
          <h1 className="App-title">巴士光年</h1>
          <h2>最快速且方便的遊覽車預訂體驗</h2>
        </header>
        <div>
          <h1>Icons</h1>
        </div>
        <ItemList/>
      </div>
    );
  }
}

export default App;
