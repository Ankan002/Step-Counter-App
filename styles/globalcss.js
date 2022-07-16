import { StyleSheet } from "react-native";
import React from "react";
import {
 
  Dimensions
} from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;


const styles = StyleSheet.create({
  backall: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    color: "white",
  },
  backallWhite: {
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderBottomColor:"#FE0097",
    color:"white",
  },
  tinyLogo: {
    width: 120,
    height: 150,
    marginTop:10
   

  },
  image:{
    flex: 1,
    justifyContent: "center",
    backgroundColor:"black",
    width:"100%",
    
  },
  PaymentDo: {
    width: 120,
    height: 120,
    marginTop:10,
    alignSelf:"center"
   

  },
  ProceedButton:{
    backgroundColor:"white",
    textAlign:"center",
    marginHorizontal:80,
    padding:5,
    fontSize:15,
    borderRadius:10
  },
  infoIcon: {
    width: 120,
    height: 100,
    marginTop:10,
    alignSelf:"center"
   

  },
  QrIcon: {
    width: 200,
    height: 160,
    marginTop:10,
    alignSelf:"center"
   

  },
 
  screen: {
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white"
  },
});
export default styles;
