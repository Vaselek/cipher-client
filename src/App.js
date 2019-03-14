import React, { Component } from 'react';
import './App.css';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import CipherPage from "./containers/CipherPage/CipherPage";

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Switch>
          <Route to='/' component={CipherPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
