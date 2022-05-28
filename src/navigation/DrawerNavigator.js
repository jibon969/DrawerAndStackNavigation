import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'

import BottomTabNavigator from './BottomTabNavigator'
import { routes, screens } from './RouteItems'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name
  return (
    <DrawerContentScrollView {...props}>
      {
        routes.filter(route => route.showInDrawer).map((route) => {
          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            route.name === focusedRoute?.focusedRoute :
            route.name === screens.HomeStack
          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {route.title}
                </Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#4F091D',
          height: 50,
        },
        headerLeft: () => (
          // Header Tab Option
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <FontAwesome name="bars" size={30} color="#fff" />
          </TouchableOpacity>
        ),
        swipeEdgeWidth: 0,
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={{
        title: 'Home',
        // Header Title
        // headerTitle: () => <Image source={require('../assets/logo.png')} style={styles.headerTitle} />,
        headerTitle: () => <Text style={styles.headerTitle}>Application</Text>,
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name="bell" size={20} color="#fff" />
          </View>
        ),
      }}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    borderRadius:5,
    marginLeft:"30%"
  },
  
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
})

export default DrawerNavigator