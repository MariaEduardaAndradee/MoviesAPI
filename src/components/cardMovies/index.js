import React from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';




export default function CardMovies({titulo,nota,imagem}){
    const navigation = useNavigation();
    

    return(
     
        <TouchableOpacity style={styles.containerJogos}  onPress={() => navigation.navigate('Details',{imagem:imagem ,titulo:titulo , nota:nota })}>


        <Image style={styles.images} source ={{uri: `https://image.tmdb.org/t/p/original/${imagem}`}} />
        <Text style ={styles.titulo}>{titulo} </Text> 
        
        <Text style ={styles.textNota}> {nota} </Text>
       
       
    </TouchableOpacity>

  

    );


}