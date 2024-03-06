import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
      type === 'TERTIARY' ? ( 
        <Pressable onPress={onPress} style={styles.container_TERTIARY}>
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      ) : (
        <Pressable onPress={onPress} style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      )
    );
  };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',

    },
    container_TERTIARY:{
        backgroundColor: 'gray',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_TERTIARY: {
        color: 'gray',

    },

});

export default CustomButton;