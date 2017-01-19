import React, { Component } from 'react';
import View from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {

   componetWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDra7tu4MDeWIv-ut1173VmIC8ZxGB-e5g',
      authDomain: 'auth-reactnative-29a96.firebaseapp.com',
      databaseURL: 'https://auth-reactnative-29a96.firebaseio.com',
      storageBucket: 'auth-reactnative-29a96.appspot.com',
      messagingSenderId: '398858069094'
    });
  }

  render() {
    return (
      <View>
      <Header />
      <LoginForm />
      </View>
      );
  }
}

export default App;
