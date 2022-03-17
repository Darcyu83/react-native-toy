import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AuthNavProps} from '../type/AuthParamList';

interface AboutProps {
  navigation: any;
  route: any;
}

const About = ({navigation, route}: AuthNavProps<'About'>) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {},
});
