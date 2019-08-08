import React, { Component } from 'react';
import Signup from './Signup';
//import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
//import './App.css';
//import Loginscreen from './Loginscreen'
class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     loginPage:[],
  //     uploadScreen:[]
  //   }
  // }
  // componentWillMount(){
  //   var loginPage =[];
  //   loginPage.push(<Loginscreen parentContext={this}/>);
  //   this.setState({
  //                 loginPage:loginPage
  //                   })
  // }
  render() {
    return (
      <Signup />
    );
  }
}
// const style = {
//   margin: 15,
// };
export default App;