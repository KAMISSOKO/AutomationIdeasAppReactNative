import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
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
                        <Text style={ styles.subTitle }>
                            Créer une idée d'automatisation avec simplicité !
                        </Text>
                        <TouchableOpacity onPress={() => navigateTo('Form')}>
                            <View style={ styles.getStartedButtonContainer }>
                                <View>
                                    <Text style={ styles.getStartedButtonText }>Créer une idée d'automatisation</Text>
                                </View>
                                <View style={ styles.iconContainer }>
                                    <Ionicons name="arrow-forward" color="#ffffff" size={30} />
                                </View>
                            </View>
                        </TouchableOpacity>
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
        margin: 5,
        marginTop: 50,
        padding: 10,
        height: "90%",
        borderRadius: 10,
        backgroundColor: "#ffffff",
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
        width: "90%",
        backgroundColor: "#15151c",
        borderRadius: 10,
        padding: 10
    },
    getStartedButtonText: {
        color: "#ffffff",
        fontWeight: "600",
        marginRight: 20,

    },
    iconContainer: {
        marginLeft: 35,
        color: "#ffffff",
    },
});
export default HomeScreen;