import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {React, useState} from 'react'
import SearchBar from '../components/Search'

const Codechef = () => {
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

export default Codechef

const styles = StyleSheet.create({})