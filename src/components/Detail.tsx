import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TRootReducer} from '../redux/type/types';
import {getUserList} from '../redux/User/actions';
import styled from 'styled-components/native';

interface IProps {}

const Title = styled.Text`
  background-color: ${props => props.theme.textColor.main};
  opacity: 0.4;
  color: white;
`;

const Detail = ({}: IProps) => {
  const users = useSelector((state: TRootReducer) => state.users);

  return (
    <View style={styles.container}>
      {/* {users &&
        users.users?.map((user, idx) => (
          <Title style={{width: '100%', backgroundColor: 'tomato'}}>
            {user.id} {user.text} {idx}
          </Title>
        ))} */}

      <Title allowFontScaling={true}> adafasfalkfjaljfdaslfjl</Title>
      <Text style={{width: '100%', backgroundColor: 'tomato'}}>AA</Text>
    </View>
  );
};

export default React.memo(Detail);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'teal', marginTop: 100},
});
