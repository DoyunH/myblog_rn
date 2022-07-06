import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.sectionContainer}>
        <Text style={styles.highlight}>Code for Beginners</Text>
        <View style={styles.flexRowContainer}>
          <TextInput style={styles.input} value="its a text input" />
          <Button title="Post" style={styles.postButton} />
        </View>
      </View>
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
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 10,
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
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  postButton: {
    flex: 1,
    marginLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
