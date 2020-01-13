import React from 'react';
import {View, Text} from 'react-native';
const Card = ({children}) => {
  return <View style={styles.containerStyle}>{children}</View>;
};
export default Card;

const styles = {
  containerStyle: {
    border: 1,
    borderWidth: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
};
