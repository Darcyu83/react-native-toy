import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthNavProps} from '../redux/type/AuthParamList';
import {getUserList} from '../redux/User/actions';

interface HomeProps {}

const Home = ({navigation, route}: AuthNavProps<'Home'>) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserList('11'));
  }, []);
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
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('Detail', {msg: 'Arrived at About'});
        }}
      />
    </View>
  );
};

export default React.memo(Home);

const styles = StyleSheet.create({
  container: {},
});
