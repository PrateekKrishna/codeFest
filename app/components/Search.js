import { React, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, userID, setUserID, setClicked }) => {

  // function to handle submit
  const handleSubmit = () => {
    setClicked(false);
    Keyboard.dismiss();
    console.log(userID);
    setUserID("");
  };

  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}

        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />

        {/* Input field */}

        <TextInput
          style={styles.input}
          placeholder="Search"
          value={userID}
          onChangeText={setUserID}
          onFocus={() => {
            setClicked(true);
          }}
        />

        {/* cross Icon, depending on whether the search bar is clicked or not */}

        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setUserID("");
            }}
          />
        )}
      </View>

      {/* cancel button, depending on whether the search bar is clicked or not */}

      <View>
        <TouchableOpacity
          style={styles.submitButton}
          title="Submit"
          onPress={() => {
            //   Keyboard.dismiss();
            handleSubmit();
            // setClicked(false);
          }}
        >
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  submitButton: {
    marginLeft: 10,
    marginRight: 10,
    height: 45,
    width: 60,
    borderRadius: 15,
    backgroundColor: "#d9dbda",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    fontWeight: "bold",
  },
});
