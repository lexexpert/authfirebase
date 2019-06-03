/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';
import Firebase from './src/apis/Firebase';


export default class App extends Component {

  componentWillMount() {
    Firebase();
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm/>
      </View>
    );
  }
}
