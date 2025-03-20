import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as Animatable from "react-native-animatable";
import {
  Button,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

import { icons } from "../constants";
import { useVideoPlayer, VideoView } from "expo-video";
const { width } = Dimensions.get("window");

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const localvideo = require("../assets/videoplayback.mp4");
const res = "https://player.vimeo.com/video/949582778?h=d60220d68d";

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  // console.log("==> video", item.video);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          // source={localvideo}
          source={{uri : item.video}}
          style={[styles.video]}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const [play, setPlay] = useState(false);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  const player = useVideoPlayer(localvideo, (player) => {
    (player.loop = true), (player.staysActiveInBackground = true);
    play ? player.play() : player.pause();
  });

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170 }}
    />
  );
};
const styles = StyleSheet.create({
  video: {
    width: 208,
    height: 308,
    borderRadius: 33,
    marginTop: 12,
    backgroundColor: " rgb(255 ,255,255 / 0.1)",
  },
});

export default Trending;
