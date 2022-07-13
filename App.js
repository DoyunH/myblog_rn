import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Pressable,
} from 'react-native';
import PostInput from './components/PostInput';
import Title from './components/Title';

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
      <Title/>      
      <PostInput inputText={inputText} setInputText={setInputText} addPost={addPost} />
      <FlatList
        data={postList}
        renderItem={post => {
          return (
            <Pressable style={styles.postListContainer} onPress={() => deletePost(post.item.id)}>
              <Text style={styles.postElement}>{post.item.title}</Text>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerCentered: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  postListContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  postElement: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#90caf9',
    color: 'white',
    paddingVertical: 10,
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default App;
