import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import PostInput from '../components/PostInput';
import PostList from '../components/PostList';

const PostTodoScreen = () => {
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
    <>     
      <PostInput inputText={inputText} setInputText={setInputText} addPost={addPost} />
      <PostList postList={postList} deletePost={deletePost}/>
    </>
  )
}

export default PostTodoScreen

const styles = StyleSheet.create({})