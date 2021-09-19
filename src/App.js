import React, { Component } from 'react';
import Router from './configs/router';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('ini method costructor');
    this.state = {};
  }
  componentDidMount() {
    console.log('ini method compoenntDIdMount');
  }
  componentDidUpdate() {
    console.log('ini method componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('ini method componentWillUnmount');
  }
  render() {
    console.log('ini method render');
    return (
      <>
        <ReactNotification />
        <Router />
      </>
    );
  }
}
export default App;
