import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import AppNavigator from './AppNavigator';


const Stack = createStackNavigator();



const SplashNavigator = () => {
  
  return (
    
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splash">
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="app" component={AppNavigator} />
    </Stack.Navigator>
  
  );
};

export default SplashNavigator;
