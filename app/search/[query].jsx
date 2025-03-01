import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useAppwrite from "../../lib/useAppwrite";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import { searchPosts } from "../../lib/appwrite";
import VideoCard from "../../components/VideoCard";

const Search = () => {
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));
  const { query } = useLocalSearchParams();
  useEffect(() => {
    refetch();
  }, [query]);
  return (
    <SafeAreaView className="bg-primary  h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id} // from appwrite
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className=" my-6 px-4 ">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Result
            </Text>
            <Text className="text-2xl font-psemibold text-white">{query}</Text>
            {/* Search Component */}
            <View className="mt-6 mb-8">
              
            <SearchInput initialQuery={query} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos found"
            subTitle="No video found for this search"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
