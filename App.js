import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreen";

 import{NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack'
 import MusicOverviewScreen from './screens/MusicOverviewScreen';
 import MusicDetailScreen from './screens/MusicDetailScreen';
 const Stack = createStackNavigator();


export default function App() {
  
  return (
   <>
   <StatusBar style ='black'/>
   <NavigationContainer>
    <Stack.Navigator
    screenOptins={{
      headerStyles:{ backgroundColor:'black'},
      headerTintColor:'black',
      contentStyle:{backgroundColor:'black'}
    }}
    >
      <Stack.Screen
      name="MusicCategories"
      //cambie mayuscula C
      component={CategoriesScreen}
      />
      <Stack.Screen
      name="MusicOverview"
      component={MusicOverviewScreen}
      optins={{
        title:'All categories',
        headerTintColor:'white',
        contentStyle:{ backgroundColor:'black'}
      }}
      />
      <Stack.Screen name="MusicDetail"
      component={MusicDetailScreen}
      />
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});