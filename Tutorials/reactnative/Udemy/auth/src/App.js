import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';

const React = require('react');

class App extends React.Component {

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
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
      );
  }
}

module.exports = App;
