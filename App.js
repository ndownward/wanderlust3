//from official documentation:
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView
} from 'react-native';
import { generateClient } from 'aws-amplify/api';
import { createTodo } from './src/graphql/mutations';
import { listTodos } from './src/graphql/queries';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const initialState = { name: '', description: '' };
const client = generateClient();

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos
      });
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NavigationContainer>
          <Tabs todos={todos} setTodos={setTodos}/>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, alignSelf: 'center' },
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



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import SimpleForm from './components/SimpleForm';

// import { Amplify } from 'aws-amplify';
// import amplifyconfig from './amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);

// export default function App() {
//   return (
//     <>
//       <View style={styles.container}>
//         <Text>App to start working on your app!</Text>
//         <View>
//           <SimpleForm></SimpleForm>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
