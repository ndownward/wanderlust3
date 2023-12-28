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
import { generateClient } from 'aws-amplify/api';
import { createTodo } from '../src/graphql/mutations';
import { listTodos } from '../src/graphql/queries';

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const initialState = { name: '', description: '' };
const client = generateClient();

const HomeScreen = ({navigation}) => {
  const [formState, setFormState] = useState(initialState);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }


// retrieves only the current value of 'user' from 'useAuthenticator'

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 }
});