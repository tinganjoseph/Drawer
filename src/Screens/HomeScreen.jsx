import { View, Text } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

const Home = ({animatedStyle}) => {
  return (
    <Animated.View
      style={{ 
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        ...animatedStyle
       }}
    >
  
      <Text className="text-red-800">Home Page</Text>
  
    </Animated.View>
  )
}

export default Home


