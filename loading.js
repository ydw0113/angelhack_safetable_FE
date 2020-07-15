import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Loading() {
  return (
    <View style={StyleSheet.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
