/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/navigation/Routes';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/redux/store';
import {getUserList} from './src/redux/User/actions';
import {ThemeProvider} from 'styled-components';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={{textColor: {main: 'black'}}}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
