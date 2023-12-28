import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EntryScreen from '../screens/EntryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
        // tabBarOptions={{
        //     showLabel: false
        // }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Entry" component={EntryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
export default Tabs;