import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {React, useState} from 'react'
import SearchBar from '../components/Search'

const Atcoder = () => {
  const [userID, setUserID] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <ScrollView>
      <SearchBar
        userID={userID}
        setUserID={setUserID}
        clicked={clicked}
        setClicked={setClicked}
      />
      
      <Text>{userID}</Text>
    </ScrollView>
  )
}

export default Atcoder

const styles = StyleSheet.create({})