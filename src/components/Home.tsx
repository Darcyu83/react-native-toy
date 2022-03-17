import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AuthNavProps} from '../type/AuthParamList';

interface HomeProps {}

const Home = ({navigation, route}: AuthNavProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
