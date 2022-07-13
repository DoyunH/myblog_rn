import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.containerCentered}>
        <Text style={styles.highlight}>Code for Beginners</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCentered: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Title