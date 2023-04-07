import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerMenu from './DrawerMenu';
import { DetailScreen } from '../../Screens';

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
    <Stack.Navigator initialRouteName="home">
        <Stack.Screen
            name="home"
            component={DrawerMenu}
            options={{
                headerShown: false,
            }}
        />
             <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
                headerShown: false,
            }}
        />
      
    </Stack.Navigator>
);

export default Stacks;
