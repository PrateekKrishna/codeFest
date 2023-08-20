import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Codeforces from "./Codeforces";
import Leetcode from "./Leetcode";

const Home = () => {


    

    return (
        <ScrollView style={styles.mainContainer}>
            <Text style={styles.mainText}>Welcome to codeFest</Text>
            <Text style={styles.upcomingHeader}>Upcoming Contests</Text>

            <View style={styles.container}>

                
                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>

                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>

                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>

                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>
                
                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>
                
                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>

                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>

                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>

                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>
                
                <View style={styles.card}>
                    <Text>Codeforces</Text>
                    <Text>11/12/2023  8:05PM IST</Text>
                </View>
                


            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    mainText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    upcomingHeader: {
        marginTop: 10,
        fontSize: 20,
        textAlign: "center",
    },
    container:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
        alignItems: "center",
    },
    header:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    card: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 70,
        width: "90%",
        backgroundColor: "lightgrey",
        borderRadius: 10,
        alignItems: "center",
    }
  });

export default Home;