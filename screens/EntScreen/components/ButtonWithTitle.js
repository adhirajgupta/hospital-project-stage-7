import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ButtonWithTitle = ({ onTap, width, height, title, isNoBg = false }) => {

  if(isNoBg){
    return (
      <TouchableOpacity style={[styles.btn, { width, height, backgroundColor:'transparent' } ]} 
        onPress={() =>  onTap()}
      >
        <Text style={{ fontSize: 16, color: '#3980D9'}}>{title}</Text>
      </TouchableOpacity>
    );
  }else{
    return (
      <TouchableOpacity style={[styles.btn, { width, height } ]} 
        onPress={() =>  onTap()}
      >
        <Text style={{ fontSize: 16, color: '#FFF'}}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  btn: { 
    flex: 1,
    display: 'flex',  
    maxHeight: 50,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f15b5d',
    borderRadius:30,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default ButtonWithTitle;
