import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AboutUsScreen from '../../../src/screen/AboutUsScreen'

const Stack = createStackNavigator()

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="About" component={AboutUsScreen} />
    </Stack.Navigator>
  )
}

export default AboutStackNavigator