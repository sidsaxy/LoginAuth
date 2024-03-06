import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("Sign In");
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
    </View>

      <View style={styles.inputContainer}>
      <Text style={{ marginBottom: 5, textAlign: 'left' }}>Benutzername</Text>
      </View>
      <CustomInput 
      placeholder="Benutzername" 
      value={username} 
      setValue={setUsername} 
      />
  
      <View style={styles.inputContainer}>
      <Text style={{ marginBottom: 5, textAlign: 'left' }}>Passwort</Text>
      </View>
      <CustomInput 
      placeholder="Passwort" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}

      />
    
      <View style={styles.root}>

      <CustomButton text="Anmeldung" onPress={onSignInPressed}/>

      <CustomButton 
      text="Passwort vergessen?" 
      onPress={onForgotPasswordPressed}
      type="TERTIARY"  
      />
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
      alignItems: 'center', 
      padding: 20,
      marginHorizontal: 10,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        
    },
    label: {
      
      marginBottom: 1,
      textAlign: 'left',
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      padding:20,

    
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginHorizontal: 15, 
    },
});

export default SignInScreen;