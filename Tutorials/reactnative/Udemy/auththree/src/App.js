import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common/Index';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDra7tu4MDeWIv-ut1173VmIC8ZxGB-e5g',
    authDomain: 'auth-reactnative-29a96.firebaseapp.com',
    databaseURL: 'https://auth-reactnative-29a96.firebaseio.com',
    storageBucket: 'auth-reactnative-29a96.appspot.com',
    messagingSenderId: '398858069094'
  });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}

export default App;
