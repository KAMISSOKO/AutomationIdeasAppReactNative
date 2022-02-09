import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

const Loader = () => {
    return (
        <View style={ styles.container }>
            <LottieView 
                source={ require("../assets/cubes-loader-.json") }
                autoPlay
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});
export default Loader;