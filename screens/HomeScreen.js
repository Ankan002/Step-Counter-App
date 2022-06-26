import { View, Text ,ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from "../styles/globalcss";
import TopHeader from '../components/Home/TopHeader';
import Timer from '../components/Home/Timer';
import Items from '../components/Home/Items';
import CoinsEarned from '../components/Home/CoinsEarned';
import Past7Days from '../components/Home/Past7Days';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {

  useEffect(() => {
    
    // removeAll()
   

    
  }, []);



  const removeAll = async () =>{
   await AsyncStorage.removeItem("jwt")
   await AsyncStorage.removeItem("skipActivate")
   await AsyncStorage.removeItem("skipReferal")
   await AsyncStorage.removeItem("skipPricing")




  }


  



  return (
    <ScrollView style={styles.backall}>
    <TopHeader/>
    <Timer/>
    <Items/>
    <CoinsEarned/>
    <Past7Days/>      
    </ScrollView>
  )
}

export default HomeScreen