//Index.andriod.js - place code in here for andriod


//Import Library to help create component
import React from 'react';
import { Text, AppRegistry } from 'react-native'

//Create a component
const App = () => (
      <Text> Some Text</Text>
    );

//Render the component to the divse
AppRegistry.registerComponent('albums', () => App )
