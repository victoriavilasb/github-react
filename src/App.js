import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/NavBar'
import './App.css';

class App extends Component {

  render() {

    const name = "Victória Vilas Boas";
    return (
      <Fragment>
        <Navbar/>
      </Fragment>
    );
  }
  
}

export default App;
