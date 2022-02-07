import React, { useRef, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }: any) => {
    const navigateTo = (url: string) => {
        navigation.navigate(url);
    };

    return (
        <>
            <View style={ styles.container }>
                <SafeAreaView>
                    <View style={ styles.homeContainer }>
                        <Image source={ require("../assets/foncia-logo.png") } style={ styles.image } />
                        {/* <Text style={ styles.title }>
                            Automation Ideas App
                        </Text> */}
                        <Text style={ styles.subTitle }>
                            Créer une idée d'automatisation avec simplicité !
                        </Text>
                        <TouchableWithoutFeedback onPress={() => navigateTo('Form')}>
                            <View style={ styles.getStartedButtonContainer }>
                                <View>
                                    <Text style={ styles.getStartedButtonText }>Créer une idée d'automatisation</Text>
                                </View>
                                <View style={ styles.iconContainer }>
                                    <Ionicons name="arrow-forward" color="#ffffff" size={30} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff"
    },
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "center",
        margin: 10,
        marginTop: 50,
        padding: 10,
        height: 650,
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 30,
        color: "#000000",
        fontWeight: "800",
    },
    subTitle: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "800",
        textAlign: 'center',
    },
    image: {
        height: 250,
        width: 250,
        marginRight: "auto",
        marginLeft: "auto",
    },
    getStartedButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: "#20232a",
        backgroundColor: "#15151c",
        borderRadius: 10,
        padding: 7
    },
    getStartedButtonText: {
        color: "#ffffff",
        fontWeight: "600"
    },
    iconContainer: {
        marginLeft: 5,
        color: "#ffffff",
    },
});
export default HomeScreen;