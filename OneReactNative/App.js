import React, { Component } from 'react';

import { 
  Text, 
  View, 
  StyleSheet, 
  Button,
  Image
 } from 'react-native';

 class Janta extends Component{
   
  constructor(props){
    super(props);
    this.state = {comida:props.comida}

    let comida = ['pizza', 'lasanha', 'Hamburguer', 'arroz']

    setInterval(() =>{
      this.setState(previousState =>{
        var n = Math.floor( Math.random() * comida.length)

        return {comidas: comida[n]};
      })
    }, 1000)
   }
   render(){
     return(
        <View>
          <Text style={{
            textAlign:"center",
            height:100,
            // width:100,
            justifyContent:"center",
            fontSize:50,
            alignItems:'center'
        }}>Hoje a Janta é</Text>
          <Text style={{
            textAlign:"center",
            color:'red',
            justifyContent:"center",
            fontSize:50,
            alignItems:'center'
        }}>{this.state.comidas}</Text>
        </View>
     )
   }
 }
export default class PrimeiroProjeto extends Component{

  render(){
      return(
        <View>
        {/* <Text>Olá Mundo</Text> */}

        <Janta comida='Biscoitodfdas' />
        </View>
      );
  } 
  
}

const styles = StyleSheet.create({
  texto:{
    fontSize:30,
    // color:red
  }
});
