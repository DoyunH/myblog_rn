import React, {useState} from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import PostTodoScreen from './screens/PostTodoScreen';
import NumberQuizScreen from './screens/NumberQuizScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Projects" component={CategoriesScreen} />
          <Stack.Screen name="Post Todo" component={PostTodoScreen} />
          <Stack.Screen name="Number Quiz" component={NumberQuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  );
};

export default App;
