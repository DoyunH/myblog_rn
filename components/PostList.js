import { Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PostList = (props) => {
  return (
    <FlatList
        data={props.postList}
        renderItem={post => {
          return (
            <Pressable style={styles.postListContainer} onPress={() => props.deletePost(post.item.id)}>
              <Text style={styles.postElement}>{post.item.title}</Text>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
      />
  )
}

const styles = StyleSheet.create({
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

export default PostList