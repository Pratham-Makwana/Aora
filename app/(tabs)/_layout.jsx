import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

// TabIcon Component
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.iconContainer} >
      <Image
        source={icon}
        style={[styles.icon, { tintColor: color }]}
        resizeMode="contain"
      />

      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-center text-xs mt-1.5 `}
        style={[
          styles.tabText,
          {
            color: color,
          },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.home}
              name="Home"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.bookmark}
              name="Bookmark"
              color={color}
              focused={focused}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.plus}
              name="Create"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.profile}
              name="Profile"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

// Styles
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 84,
    backgroundColor: "#161622",
    borderTopWidth: 1,
    borderTopColor: "#232533",
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    paddingTop: 5,
    flex: 1,
  },
  icon: {
    width: 100,
    height: 20,
  },
  
});
