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
        <View>
          <Text style={[styles.azulGrande, styles.textCenter]}>Texto 1</Text>
          <Text style={styles.textCenter}>Texto 2</Text>
          <Text>Texto 3</Text>
          <Text>Texto 4</Text>
        </View>
      );
  } 
  
}

const styles = StyleSheet.create({
  texto1:{
    fontSize:30,
  },
  azulGrande:{
    color:'blue',
    fontSize:50
  },
  textCenter:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  }
});
