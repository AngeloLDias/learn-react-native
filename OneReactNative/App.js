import React, { Component } from 'react';

import { 
  Text, 
  View, 
  StyleSheet, 
  Button,
  Image
 } from 'react-native';


 class Imagem extends Component{
   render(){
     let imagem={
      uri:"https://abrilexame.files.wordpress.com/2018/04/gm-"+this.props.nome+".jpg"
    }
     return(
        <Image source={imagem} style={{width:parseInt(this.props.largura), height:parseInt(this.props.altura)}} />
    )
   }
 }

export default class PrimeiroProjeto extends Component{

  render(){
      return(
        <View>
        <Text style={styles.texto}>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text> 
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        {/* <Image source={{uri:"https://abrilexame.files.wordpress.com/2018/04/gm-tracker.jpg"}} style={{width:300,height:300}}/> */}

        <Imagem nome="tracker" altura="250" largura="250"/>

        <Button title="Aperte" onPress={()=>{

          alert('me apertou')
          
        }}/>
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
