import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = (
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  onFocusChange,
  ...props
) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center
    gap-x-4"
    >
      <TextInput
        className="text-base mt-0.5  text-white flex-1 font-pregular  h-10"
        value={value}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        autoCapitalize="none"
        {...props}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
