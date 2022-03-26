import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Video from 'react-native-video';

interface IProps {
  item: any;
}

const VideoCard = ({item}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>{item.id}</Text>
      <Video
        source={item.vod}
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderWidth: 1,
          borderColor: 'black',
        }}
        controls={true}
        paused={false}

        // poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
      />
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {},
});
