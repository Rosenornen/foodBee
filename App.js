import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import MapScreen from './screens/mapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const StackNavigation = () => {
    return (
     <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="Map" component={MapScreen}/>
      </Stack.Navigator>
      );}
  
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name = {'Home'} component = {StackNavigation} options = {{tabBarIcon: () => ( <Ionicons name='home' size={20}/>)}}/>
          <Tab.Screen name = {'Settings'} component = {StackNavigation} options = {{tabBarIcon: () => ( <Ionicons name='settings' size={20}/>)}}/>
          <Tab.Screen name = {'Map'} component = {StackNavigation} options = {{tabBarIcon: () => ( <Ionicons name='map' size={20}/>)}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
