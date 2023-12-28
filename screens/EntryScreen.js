//from official documentation:
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView
} from 'react-native';
import { Button } from 'react-native-elements';

const EntryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Entry screen</Text>
        <Button title="Save"></Button>
    </View>
  );
};

export default EntryScreen;

const styles = StyleSheet.create({
  container: {
    width: 400,
    flex: 1,
    padding: 20,
    alignSelf: 'center' 
},
});