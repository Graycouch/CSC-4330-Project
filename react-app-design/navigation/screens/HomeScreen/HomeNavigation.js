import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import ScheduleScreen from '../Schedule Screen/ScheduleScreen';
import HomeScreen from './HomeScreen';

const homeScreen = "Home"
const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={homeScreen}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Request"
                component={ScheduleScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Schedule"
                component={ScheduleScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation;