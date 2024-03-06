import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SignInScreen from './src/Screens/SignInScreen';
import ForgotPassword from './src/Screens/SignInScreen/ForgotPassword';
import NewPasswordScreen from './src/Screens/NewPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ForgotPassword />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

export default App;