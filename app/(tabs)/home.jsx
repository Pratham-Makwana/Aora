import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const {data : posts, refetch} = useAppwrite(getAllPosts)
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // re call videos -> if any new videos  appreard
    await refetch()
    setRefreshing(false);
  };
  // console.log(posts);
  
  return (
    <SafeAreaView className="bg-primary  h-full">
      <FlatList
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[]}
        data={posts}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item) => item.$id} // from appwrite
        renderItem={({ item }) => (
         <VideoCard video={item}/>
        )}
        ListHeaderComponent={() => (
          <View className=" my-6 px-4  gap-y-6">
            {/* Header Bar Row  */}
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Pratham
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="h-10 w-9"
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* Search Component */}
            <SearchInput />

            <View className=" w-full pt-5 pb-8 flex-1">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Video
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos found"
            subTitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
