import React from 'react'
import HomePage from './HomePage';
import BusPage from './BusPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component{
  getMain = () => {
    return <Redirect to="/"/>;
  }

  getBusPage = () => {
    return <Redirect to="/buspage"/>;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/buspage" component={BusPage}/>
      </Switch>
    );
  }

}

export default App