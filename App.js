import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleForm from './components/SimpleForm';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>App to start working on your app!</Text>
        <View>
          <SimpleForm></SimpleForm>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
