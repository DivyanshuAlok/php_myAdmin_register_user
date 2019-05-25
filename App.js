import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,} from 'react-native';
import SignUp from './components/SignUp';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component<Props>{ 
  render() {
    return (
      <Router>
      <Scene key='root'>
      <Scene key="SignUp"
        component={SignUp}
        title="SignUp"
        hideNavBar={true}
      />
      </Scene>
      </Router>
          
    );
  }
}