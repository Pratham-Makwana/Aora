import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const VideoCard = ({
  video: {
    title,
    video,
    thumbnail,
    prompt,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col items-center mb-14 px-4">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          {/* Image Of the user avatar */}
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary  items-centerp-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          {/* Title and Username in cols */}
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-gray-100 text-sm font-pregular">
              {username}
            </Text>
          </View>
        </View>
        {/* Menu Image */}
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Text>Play</Text>
      ) : (
        <TouchableOpacity className="w-full h-60  rounded-xl mt-3 justify-center items-center relative">
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
