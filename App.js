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
} from 'react-native';

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

  console.log(postList);
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.sectionContainer}>
        <Text style={styles.highlight}>Code for Beginners</Text>
        <View style={styles.flexRowContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
          />
          <Button title="Post" style={styles.postButton} onPress={addPost} />
        </View>
      </View>
      <FlatList
        data={postList}
        renderItem={post => {
          return (
            <View style={styles.postListContainer}>
              <Text style={styles.postElement}>{post.item.title}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
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
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  postButton: {
    flex: 1,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
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
