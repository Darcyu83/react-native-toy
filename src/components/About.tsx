import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import {AuthNavProps} from '../type/AuthParamList';
import VideoCard from './VideoCard';

interface AboutProps {}

const About = ({navigation, route}: AuthNavProps<'About'>) => {
  const [videos, setVideos] = useState<any[]>();

  useEffect(() => {
    const _videos = new Array<any>(5);
    for (let i = 0; i < _videos.length; i++) {
      _videos.push({id: i, vod: require('./bunny.mp4')});
    }
    setVideos(_videos);
  }, []);
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Text>Route.params : {route?.params?.msg}</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home', {msg: 'Arrived at Home'});
        }}
      />

      <FlatList
        data={videos}
        renderItem={({item}) => <VideoCard item={item} />}></FlatList>
    </View>
  );
};

export default React.memo(About);

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
