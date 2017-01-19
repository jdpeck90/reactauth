// import libraries
import React from 'react';
///When defining position for a component on a screen, it's best to use a View tag
import { Text, View } from 'react-native'

//Make a component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>
};

//Make the component available to other parts of the app
export default Header;

const styles = {
  textStyle: {
    color: 'blue',
    textAlign: 'center',
    border:
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
};
