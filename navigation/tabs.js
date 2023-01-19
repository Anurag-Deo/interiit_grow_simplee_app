/* eslint-disable */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

//screens
import { Home } from '../screens/Home';
import { Maps } from '../screens/Map';
import { Profile } from '../screens/Profile';
import { Rides } from '../screens/Rides';

//icons
import HomeIcon from "react-native-vector-icons/Feather";
import Notes from "react-native-vector-icons/Foundation";
import Location from "react-native-vector-icons/SimpleLineIcons";
import Rider from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false, tabBarStyle:{
      position:'absolute',
      bottom:25,
      left:20,
      right:20,
      elevation:0,
      backgroundColor:'black',
      borderRadius:15,
      height:80,
      ...style.shadow
    }
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({focused,size}) => (
          <HomeIcon name='home' size={size} color={focused?'#04F968':'#9ca3af'}/>
        )
      }} />
      <Tab.Screen name="Rides" component={Rides} options={{
        tabBarIcon:({focused,size}) => (
          <Notes name='clipboard-notes' size={size} color={focused?'#04F968':'#9ca3af'}/>
        )
      }}  />
      <Tab.Screen name="Map" component={Maps} options={{
        tabBarIcon:({focused,size}) => (
          <Location name='location-pin' size={size} color={focused?'#04F968':'#9ca3af'}/>
        )
      }} />
      <Tab.Screen name="Account" component={Profile} options={{
        tabBarIcon:({focused,size}) => (
          <Rider name='user' size={size} color={focused?'#04F968':'#9ca3af'}/>
        )
      }} />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow:{
    shadowColor:"rgba(0,0,0,0.7)",
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})
export default Tabs;