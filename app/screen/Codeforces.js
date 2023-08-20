import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react";
import { TextInput } from 'react-native'
import SearchBar from '../components/Search'

const Codeforces = () => {

  const [userID, setUserID] = useState("");
  const [clicked, setClicked] = useState(false);


  return (
    <ScrollView style={styles.mainContainer} >
      <SearchBar
        userID={userID}
        setUserID={setUserID}
        clicked={clicked}
        setClicked={setClicked}
      />
      
      <View style={styles.mainView}>
        <Text>Codeforces ID: {userID} </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: 'pink',
  },
  mainView:{
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  }
})

export default Codeforces
