import { View, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

const PostInput = (props) => {
  return (
    <View style={styles.containerCentered}>
        <View style={styles.flexRowContainer}>
          <TextInput
            style={styles.input}
            value={props.inputText}
            onChangeText={props.setInputText}
          />
          <Button title="Post" style={styles.postButton} onPress={props.addPost} />
        </View>
      </View>
  )
}

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
  }
})

export default PostInput