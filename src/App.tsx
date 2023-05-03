import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";
import Popup from  './Popup';
import Homescreenn from './Homescreenn';

const App = () =>{
  return(
    <SafeAreaView style={styles.container}>
      <Homescreenn/>
      {/* <Popup/> */}
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#E5E5E5'
},

});
export default App;
