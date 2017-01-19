import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
  );

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
