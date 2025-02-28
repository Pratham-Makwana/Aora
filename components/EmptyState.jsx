import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4 ">
      <Image
        source={images.empty}
        className="h-[215px] w-[270px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subTitle}</Text>
      <CustomButton title="Create video" handlePress={() => router.push('/create')} contentContainerStyle="w-full mt-5" />
    </View>
  );
};

export default EmptyState;
