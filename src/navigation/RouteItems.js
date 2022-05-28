import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'Home',
  Home: 'Home',
  ContactStack: 'ContactStack',
  Contact: 'Contact',

  AboutStack: 'AboutStack',
  About: 'About',
}

export const routes = [
  // Home 
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
        <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
        <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  // Contact Us 
  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <FontAwesome name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
        <FontAwesome name="phone" size={30} color={focused ? '#551E18' : '#000'} />
  },

  // About Us 
  {
    name: screens.AboutStack,
    focusedRoute: screens.AboutStack,
    title: 'About Us',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <FontAwesome name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.About,
    focusedRoute: screens.AboutStack,
    title: 'About Us',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
        <FontAwesome name="phone" size={30} color={focused ? '#551E18' : '#000'} />
  },

  
]