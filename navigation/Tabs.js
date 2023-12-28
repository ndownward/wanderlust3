import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EntryScreen from '../screens/EntryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = ({ todos, setTodos }) => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home">
                {() => <HomeScreen todos={todos} />}
            </Tab.Screen>
            <Tab.Screen name="Entry" >
            {() => <EntryScreen todos={todos} setTodos={setTodos}/>}
            </Tab.Screen>
            <Tab.Screen name="Profile">
            {() => <ProfileScreen/>}
                </Tab.Screen>
        </Tab.Navigator>
    );
}
export default Tabs;