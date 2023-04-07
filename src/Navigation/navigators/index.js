import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";
import Stacks from './Stacks';

export default function AppNavigator() {
 
    return (
        
        <NavigationContainer
       
        >
             <TailwindProvider>
                
            {/* Use TabStacks or Stacks below to display the bottom tabs or not */}
            <Stacks />
            {/* <TabStacks /> */}
            </TailwindProvider>
        </NavigationContainer>
    );
}
