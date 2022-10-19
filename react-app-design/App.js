import { useGlobalState, setGlobalState } from './index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainContainer from './navigation/MainContainer';
import LoginScreen from './navigation/screens/LoginScreen/LoginScreen';
import RegisterScreen from './navigation/screens/RegisterScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn] = useGlobalState("isLoggedIn");

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={MainContainer}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;