import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostInput from './components/PostInput';
import PostList from './components/PostList';
import Title from './components/Title';
import CategoriesScreen from './screens/CategoriesScreen';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [postList, setPostList] = useState([]);

  const Stack = createNativeStackNavigator();

  const addPost = () => {
    setPostList([
      ...postList,
      {title: inputText, id: Math.random().toString()},
    ]);
    setInputText('');
  };

  const deletePost = (id) => {
    setPostList(postList.filter((post) => post.id !== id));
  };

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Projects" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Title/>      
      <PostInput inputText={inputText} setInputText={setInputText} addPost={addPost} />
      <PostList postList={postList} deletePost={deletePost}/> */}
    </>
  );
};

export default App;
