//Index.ios.js - place code in here for ios
//Import Library to help create component
import React from 'react';
import { Text, View, AppRegistry } from 'react-native'
import Header from './src/components/Header'

//Create a component
const App = () => (
      <View>
      <Header />
      <Text> Some Text</Text>
      </View>
    );

//Render the component to the divse
AppRegistry.registerComponent('albums', () => App )
