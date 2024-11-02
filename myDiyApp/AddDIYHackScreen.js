import React, { useState } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet, Image, Pressable } from 'react-native';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';

const AddDIYHackScreen = ({ navigation }) => {
  //Add the code fo this screen here
};

const styles = StyleSheet.create({
  textArea: {
    height: 120, // Adjust height as needed
    justifyContent: 'flex-start',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top', // Aligns the text to the top of the text area
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  image: {
    width: 200,
    margin: 10,
  },
  browseButton: {
    backgroundColor: 'navy',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    margin: '.5cm',
    width:'60%'
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor:'#001a66',
    borderWidth:3,
    alignItems: 'center',
    margin: '.5cm',
    width:'60%'
  },
  browseText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#001a66',
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelText:{
    fontWeight:'bold',
    fontSize:16, 
    marginTop:'.5cm',
    marginBottom:'.5cm'
  },
  uploadedImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover'    
  },})
export default AddDIYHackScreen;

