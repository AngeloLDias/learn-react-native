import React, { Component } from 'react';

import { 
  Text, 
  View, 
  StyleSheet, 
  Button,
  Image
 } from 'react-native';

export default class PrimeiroProjeto extends Component{

  render(){
      return(
        <View style={{flex:1, backgroundColor:'black'}}>
            <View style={{flex:1, backgroundColor:'green'}}></View>
            <View style={{flex:1, backgroundColor:'red'}}></View>
            <View style={{flex:1, backgroundColor:'yellow'}}></View>
            <View style={{flex:3, backgroundColor:'blue'}}></View>
        </View>
      );
  } 
  
}
