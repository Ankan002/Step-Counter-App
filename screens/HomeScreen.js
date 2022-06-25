import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import styles from "../styles/globalcss";
import TopHeader from '../components/Home/TopHeader';
import Timer from '../components/Home/Timer';
import Items from '../components/Home/Items';
import CoinsEarned from '../components/Home/CoinsEarned';
import Past7Days from '../components/Home/Past7Days';

const HomeScreen = () => {
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