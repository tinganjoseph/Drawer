import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Images } from "../../Constants";
import Animated from "react-native-reanimated";
import { interpolateNode } from "react-native-reanimated";

import { DetailScreen, HomeScreen } from "../../Screens";

const MENUs = [
  {
    label: "Home",
    icon: Images.home,
    name: "Home",
  },
  {
    label: "Detail",
    icon: Images.profile,
    name: "Detail",
  },
];

const Drawer = createDrawerNavigator();

const CustomerDrawerContent = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View className="flex-1  ">
      <View className="w-full h-[107px] rounded-br-[80px] bg-slate-100 justify-center items-center">
        <View className="flex-row justify-center items-center mt-7">
          <View className="h-16 w-16 rounded-sm mt-5">
            <Image source={Images.avatar2} />
          </View>
          <View className="p-2">
            <Text className="text-sm font-bold">Smith Joseph</Text>
            <Text className="text-xs">Software Developer</Text>
          </View>
        </View>
      </View>
      {/* DrawerItems */}
      <DrawerContentScrollView
        scrollEnabled={false}
        contentContainerStyle={{ flex: 1 }}
        style={{ marginLeft: -18 }}
      >
        {MENUs?.map((menu, index) => {
          return (
            <DrawerItem
            activeTintColor="#5e6977"
            focused={activeIndex === index}
            key={index}
            label={({ focused }) => {
              return (
                <View className="flex-row space-x-4 justify-start items-center">
                  <View
                    style={{
                      width: 4,
                      height: 33,
                      marginRight: 10,
                      backgroundColor: focused ? "#5e6977" : "transparent",
                    }}
                  ></View>
                  <Image className="w-5 h-5" source={menu.icon} />
                  <Text className="text-md text-green-900 font-semibold">
                    {menu.label}
                  </Text>
                </View>
              );
            }}
            onPress={() => {
              setActiveIndex(index);
              navigation.navigate(menu.name); // navigate to the corresponding screen
            }}
          ></DrawerItem>
          
          );
        })}
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={{ marginBottom: 30, marginLeft: 30 }}>
        <View className="flex-row justify-start items-center space-x-4">
          <Image
            source={Images.logout}
            style={{ tintColor: "#000", marginRight: 8 }}
          />
          <Text className="text-sm font-bold">Logout</Text>
        </View>
        <View className="flex-1 justify-end items-end mr-3">
          <Text className="text-md text-slate-600 mt-3  ">Version 2.1</Text>
        </View>
      </View>
    </View>
  );
};

const DrawerMenu = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  //we do 3 animations here
  const scale = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });
  
  const borderRadius = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 60],
  });

  const rotate = interpolateNode(progress,{
    inputRange: [0, 1],
    outputRange: ['0deg', '-10deg']
  }) 

  const animatedStyle =  {
    borderRadius,
    transform: [{ scale, rotateZ: rotate }],
  };

  return (
    <View className="flex-1 bg-white  ">
      <Drawer.Navigator
        hideStatusBar={true}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "60%",
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="Home"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomerDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <HomeScreen {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>

        <Drawer.Screen name="Detail" component={DetailScreen}    options={{
            headerShown: false,
          }}/>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerMenu;
