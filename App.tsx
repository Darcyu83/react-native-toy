/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/navigation/Routes';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Routes />
      {/* <View style={{flex: 1, backgroundColor: 'tomato'}}>
        <Text style={{backgroundColor: 'yellow', marginTop: 20}}>text</Text>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
