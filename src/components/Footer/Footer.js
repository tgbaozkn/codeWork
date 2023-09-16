import {Text, View} from 'react-native';
import React from 'react';
import styles from './Footer.style';
import Button from '../Button';

const Footer = ({increment, decrement, page}) => {
  return (
    <View style={styles.container}>
      <Button text="Back" onPress={decrement} />
      <Text style={styles.text}>{page} of 50 </Text>
      <Button text="Next" onPress={increment} />
    </View>
  );
};

export default Footer;
