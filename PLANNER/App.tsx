import React, { useRef, useState } from 'react';
import { Animated, TouchableWithoutFeedback, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/main_background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.box}>
      <View style={styles.uppermenu}>
        <View style={{borderWidth:0, width:"15%",justifyContent:"center"}}>
          <Ionicons name="calendar" size={30} color="#948979" />
        </View>
      </View>
      <View style={styles.midmenu}>
        <View style={styles.midbox}>
          <View style={{width:"95%", backgroundColor:"#BFECFF", flex:0.2, borderRadius:30}}>
          </View>
          
          <View style={{width:"95%", backgroundColor:"#BFECFF", flex:0.75, borderRadius:20}}>
          </View>
        </View>
        <View style={styles.midbox}>
          <View style={{width:"95%", backgroundColor:"#CDC1FF", flex:0.55, borderRadius:20}}>
          </View>

          <View style={{flexDirection:"row",justifyContent:'space-evenly',flex:0.4, borderWidth:0, width:"100%"}}>
            <View style={{flex:0.47, borderWidth:0, justifyContent:"center"}}>
              <View style={{flex:0.97, width:"100%", backgroundColor:"#FFCF9D", borderRadius:30}}>
              </View>
            </View>

            <View style={{flex:0.47, borderWidth:0, justifyContent:"center"}}>
              <View style={{width:"100%", backgroundColor:"#C9E9D2",flex:0.95, borderRadius:30}}>
              </View>
            </View>
          </View>
          
        </View>

      </View>

      <View style={styles.bottommenu}>
        <View style={{flex:0.9,backgroundColor:"#FFCCEA", width:"95%", borderRadius:20}}>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  box:{
    flex:0.6,
    backgroundColor:"white",
    width:"100%",
    borderRadius:40,
    borderWidth:1,
  },
  uppermenu:{
    borderWidth:0,
    flex:0.10,
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  midmenu:{
    borderWidth:0,
    flex:0.60,
    width:"100%",
    flexDirection:"row"
    
  },

  bottommenu: {
    borderWidth:0,
    flex: 0.30,
    width:"100%",
    alignItems:"center"
  },
  midbox:{
    borderWidth:0,
    flex:0.5,
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    borderRadius: 10,
  },

  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    borderWidth:0.5,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#b6ad90',
    marginBlock: 10,
    fontStyle: 'italic',
    borderWidth:0.5,
  },

  handleBar: {
    width: 60,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 0.1,
    marginTop: 1,
    borderWidth:0.5,
  },

  iconWrapper: {
    position: 'absolute',
    top: 35,
    right: 30,
    zIndex: 10,
    borderWidth:0.5,
  },

});