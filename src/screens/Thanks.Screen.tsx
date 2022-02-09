import React from "react";
import { 
    StyleSheet, 
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from "../components/Loader";
import SettingLoader from "../components/SettingLoader";

const ThanksScreen = ({ navigation }: any) => {
    const navigateTo = (url: string) => {
        navigation.navigate(url);
    };

    return (
        <>
            <View style={ styles.container }>
                <SafeAreaView>
                    <View style={ styles.contentContainer }>
                        <View style={ styles.titleContainer }>
                                <Text style={ styles.titleContent }>Remerciement</Text>
                        </View>
                        <View style={ styles.imgContainer }>
                            <Image source={ require("../assets/success.png") } style={ styles.img } />
                        </View>
                        <View style={ styles.messageContainer }>
                            <Text style={ styles.messageContent }>Felicitation, votre demande est en cours de traitement par nos équipes.</Text>
                            <Text style={ styles.messageContent }>Nous ne manquerons pas de vous contactez afin de statuer une réponse à votre idée.</Text>
                            <SettingLoader />
                        </View>
                        <TouchableOpacity onPress={ () => { navigateTo("Home") } }>
                            <View style={ styles.backToHomeButton }>
                                <Text style={ styles.backToHomeButtonContent }>
                                    Retour à l'écran d'accueil
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#ffffff"
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: 50
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 100,
        marginTop: 30,
        marginBottom: 30
    },
    titleContent: {
        color: "#000000",
        fontSize: 50,
        fontWeight: "900"
    },
    imgContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30
    },
    img: {
        height: 200,
        width: 200
    },
    messageContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        marginTop: 50,
        marginBottom: 30
    },
    messageContent: {
        textAlign: "center",
        color: "#000000",
        fontWeight: "600",
        fontSize: 15,
    },
    backToHomeButton: {
        display: 'flex',
        justifyContent: 'center',
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
        marginTop: 20,
        height: 50,
        backgroundColor: "#000000",
        padding: 7,
        alignItems: 'center',
        borderRadius: 10
    },
    backToHomeButtonContent: {
        color: "#ffffff",
        fontWeight: "700"
    }
});
export default ThanksScreen;
