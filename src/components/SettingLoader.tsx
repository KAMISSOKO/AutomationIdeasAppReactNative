import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

const SettingLoader = () => {
    return (
        <View style={ styles.container }>
            <LottieView 
                source={ require("../assets/setting-loader.json") }
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
        width: 200,
        height: 200,
    },
});
export default SettingLoader;