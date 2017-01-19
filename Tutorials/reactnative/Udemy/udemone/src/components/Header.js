// import libraries
import React from 'react';
///When defining position for a component on a screen, it's best to use a View tag
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
       <Text style={textStyle}>{props.headerText}</Text>
       </View>
   );
};

//Make the component available to other parts of the app
export default Header;

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
