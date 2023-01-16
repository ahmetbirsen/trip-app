import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { IauLogo } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/*first section*/}
      <View className="flew-row px-6 mt-8 items-center space-x-2">
        <View className="w-20 h-20 bg-black rounded-full items-center justify-center">
          <Text className="text-[#4DABB7] text-3xl font-semibold">LETS</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">GO!</Text>
      </View>

      {/* second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px]">Travelling App!</Text>
        <Text className="text-[#154246] text-[20px]">
        This project aims to provide users with a comprehensive and seamless experience while planning and booking their trips. The mobile application will feature user-generated reviews and ratings of destinations, accommodations, and activities, as well as personalized recommendations.
        </Text>
      </View>
      {/* circle section */}
      <View className="bg-[#00BCC9] w-[300px] h-[250px] rounded-full absolute bottom-36 -right-36"></View>
      <View className="bg-[#147e49] w-[300px] h-[300px] rounded-full absolute -bottom-36 -left-36"></View>

      {/* Image container*/}
      <View className="flex-1 relative items-center justify-center">
        
        <View className="absolute bottom-50 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <TouchableOpacity
            onPress={() =>navigation.navigate("Discover")}
          >
          <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#1a33c2]">
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
