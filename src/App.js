import React, {Component} from 'react'
import Router from './configs/router';
class App extends Component{
  constructor(props){
    super(props)
    console.log('ini method costructor');
    this.state={
    }
  }
  componentDidMount(){
    console.log('ini method compoenntDIdMount');
  }
  componentDidUpdate(){
    console.log('ini method componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('ini method componentWillUnmount');
  }
  render(){
    console.log('ini method render');
    return(
      <Router />
    )
  }

}
export default App 
