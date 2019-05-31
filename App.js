/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBLZrgwIeVHV-M4ZJjDveDg0L_Oe-lHFeE",
      authDomain: "authentication-5fd5d.firebaseapp.com",
      databaseURL: "https://authentication-5fd5d.firebaseio.com",
      projectId: "authentication-5fd5d",
      storageBucket: "authentication-5fd5d.appspot.com",
      messagingSenderId: "867518603426",
      appId: "1:867518603426:web:bebbb10276aa5cfa"
    })
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
