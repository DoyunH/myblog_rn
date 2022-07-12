import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
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
    setPostList([...postList, inputText]);
    setInputText('');
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
      <ScrollView contentContainerStyle={styles.postListContainer}>
        {postList.map((post, index) => (
          <Text style={styles.postElement} key={index}>
            {post}
          </Text>
        ))}
      </ScrollView>
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
    marginTop: 10,
    marginHorizontal: 10,
  },
  postElement: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 10,
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default App;
