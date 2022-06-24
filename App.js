import React, { useState } from 'react';
import { SafeAreaView ,View, Text, Button, StyleSheet, TouchableOpacity, Image, LogBox } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function App(){

  const [image, setimage] = useState('');

  const openGalery = async () => {
    const options = {
      mediaType: 'photo',
    }

    const result = await launchImageLibrary(options);

    if (result?.assets) {
      setimage(result.assets[0].uri)
      return
    }
  }

  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: false,
      cameraType: 'back',
      quality: 1,
    }

    const result = await launchCamera(options);

    if (result?.assets) {
      setimage(result.assets[0].uri)
      return
    }
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={{height: 500, width: 300, borderWidth: 2, borderColor: 'black', margin: 10}}/>
        <TouchableOpacity onPress={() => {openCamera();}} style={styles.btn}>
          <Text style={styles.txt}>Abrir Camêra</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {openGalery();}} style={styles.btn}>
          <Text style={styles.txt}>Abrir Galeria</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: 'black',
  },
  btn: {
    margin: 5,
    backgroundColor: '#C20114',
    width: 200,
    height: 40,
    paddingTop: 8,
    borderRadius: 10,
  },
  txt: {
    color: '#fff',
    alignSelf: 'center',
  }
})