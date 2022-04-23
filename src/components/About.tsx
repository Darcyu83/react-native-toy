import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {AuthNavProps} from '../redux/type/AuthParamList';
import {TRootReducer} from '../redux/type/types';

interface AboutProps {}

const About = ({navigation, route}: AuthNavProps<'About'>) => {
  const users = useSelector((state: TRootReducer) => state.users);
  return (
    <View style={styles.container}>
      <Text>About {`${JSON.stringify(users)}`}</Text>
      <Text>Route.params : {route?.params?.msg}</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home', {msg: 'Arrived at Home'});
        }}
      />
    </View>
  );
};

export default React.memo(About);

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
