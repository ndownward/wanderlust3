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

import {
    withAuthenticator,
    useAuthenticator
  } from '@aws-amplify/ui-react-native';

const userSelector = (context) => [context.user];

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <SafeAreaView>
        <View>
            <Pressable onPress={signOut} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                Hello, {user.username}! Click here to sign out!
            </Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
};

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Profile screen</Text>
        <SignOutButton />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
    buttonContainer: {
      alignSelf: 'center',
      backgroundColor: 'black',
      paddingHorizontal: 8
    },
    buttonText: { color: 'white', padding: 16, fontSize: 18 }
  });
  