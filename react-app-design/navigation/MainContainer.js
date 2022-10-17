import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';

const homeName = "Home";
const searchName = "Search";
const messageName = "Message";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === searchName) {
                            iconName = focused ? 'search' : 'search-outline';

                        } else if (rn === messageName) {
                            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';

                        } else if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline';

                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#5F59F7',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name={searchName} component={SearchScreen} options={{ headerShown: false }} />
                <Tab.Screen name={messageName} component={MessageScreen} options={{ headerShown: false }} />
                <Tab.Screen name={profileName} component={ProfileScreen} options={{ headerShown: false }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}