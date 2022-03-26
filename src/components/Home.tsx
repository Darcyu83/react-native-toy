import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AuthNavProps} from '../type/AuthParamList';

interface HomeProps {}

const Home = ({navigation, route}: AuthNavProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Route.params : {route?.params?.msg}</Text>
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About', {msg: 'Arrived at About'});
        }}
      />
    </View>
  );
};

export default React.memo(Home);

const styles = StyleSheet.create({
  container: {},
});
