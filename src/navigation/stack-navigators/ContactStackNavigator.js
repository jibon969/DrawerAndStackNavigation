import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ContactUsScreen from '../../../src/screen/ContactUsScreen'

const Stack = createStackNavigator()

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Contact" component={ContactUsScreen} />
    </Stack.Navigator>
  )
}

export default ContactStackNavigator