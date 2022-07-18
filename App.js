import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import PostInput from './components/PostInput';
import PostList from './components/PostList';
import Title from './components/Title';
import CategoriesScreen from './screens/CategoriesScreen';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [postList, setPostList] = useState([]);

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
    <SafeAreaView>
      <StatusBar />
      <CategoriesScreen />
      {/* <Title/>      
      <PostInput inputText={inputText} setInputText={setInputText} addPost={addPost} />
      <PostList postList={postList} deletePost={deletePost}/> */}
    </SafeAreaView>
  );
};

export default App;
