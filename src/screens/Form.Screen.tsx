import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput,
  View,
  ScrollView,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';

// Infterface
import { Project } from '../interfaces/Project';

// Component
import Separator from '../components/Separator';

// Service 
import { SubmitFormDataService } from '../services/SubmitFormDataService';

// Form variables
import * as formVariables from "../exports/formVariables";
import { Attachment } from '../interfaces/Attachment';

const FormScreen = ({ navigation }: any) => {
    const [autorName, setAutorName] = useState<string>("");
    const [autorFirstName, setAutorFirstName] = useState<string>("");
    const [autorEmail, setAutorEmail] = useState<string>("");
    const [projectName, setProjectName] = useState<string>("");
    const [projectDescription, setProjectDescription] = useState<string>("");
    const [attachment, setAttachment] = useState<Attachment>({
        name: "",
        type: "",
        uri: ""
    });

    const onAutorNameChange = (e: React.SetStateAction<string>) => {
        setAutorName(e);
    };

    const onAutorFirstNameChange = (e: React.SetStateAction<string>) => {
        setAutorFirstName(e);
    };

    const onAutorEmailChange = (e: React.SetStateAction<string>) => {
        setAutorEmail(e);
    };

    const onProjectNameChange = (e: React.SetStateAction<string>) => {
        setProjectName(e);
    };

    const onProjectDescriptionChange = (e: React.SetStateAction<string>) => {
        setProjectDescription(e);
    };

    const openDocumentPicker = async () => {
        const file : DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync();
        const { type } = file;

        if (type !== "cancel") {
            const { name, uri, mimeType } = file;
            await setAttachment({
                name: name,
                type: mimeType,
                uri: uri
            });
        } else {
            console.log('[ Not file selected ]');
        }
    };

    const uploadFile = (): FormData => {
        const formData = new FormData();
        formData.append('attachment', attachment as any);
        return formData;
    }

    const onSubmit = async () => {
        let project: Project = await {
            name: projectName,
            description: projectDescription,
            autor: autorName + " " + autorFirstName,
            autorEmail: autorEmail,
            attachments: attachment
        };

        let file: FormData = uploadFile();

        SubmitFormDataService(file, project)
         .then((res) => {
             console.log('[ AXIOS RESPONSE ]', res);

             if (res.requestFinishedWithSuccess) {
                showToast();
             }
         })
         .catch((error) => console.log(error));
    };

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: "Succès",
            text2: "Votre idée à bien été envoyée ✅"
        });
    };

    const inputs: object[] = [
        {
            field: formVariables.autorNameTitle,
            value: autorName,
            function: onAutorNameChange,
            placeholder: "Saisir votre nom"
        },
        {
            field: formVariables.autorFirstNameTitle,
            value: autorFirstName,
            function: onAutorFirstNameChange,
            placeholder: "Saisir votre prénom"
        },
        {
            field: formVariables.autorEmailTitle,
            value: autorEmail,
            function: onAutorEmailChange,
            placeholder: "Saisir votre email"
        },
        {
            field: formVariables.projectNameTitle,
            value: projectName,
            function: onProjectNameChange,
            placeholder: "Saisir le nom de votre idée"
        },
        {
            field: formVariables.projectDescriptionTitle,
            value: projectDescription,
            function: onProjectDescriptionChange,
            placeholder: "Saisir une description de votre idée"
        },
    ];

    return (
        <>
            <View style={ styles.container }>
                <SafeAreaView>
                    {/* <View style={ styles.formContainer }> */}
                    <View>
                        <ScrollView>
                            <View style={ styles.formTitleContainer }>
                                <Text style={ styles.formTitle }>
                                    Créer une idée d'automatisation
                                </Text>
                            </View>
                            <View>
                                { 
                                    inputs.map((input: any, index: number) => {
                                        return (
                                            <View key={ index }>
                                                <Text style={ styles.fields }>{ input.field }</Text>
                                                <TextInput
                                                    style={ index === inputs.length - 1 ? styles.textArea : styles.input } 
                                                    value={ input.value } 
                                                    onChangeText={ input.function } 
                                                    placeholder={ input.placeholder }
                                                    placeholderTextColor="#8b959e" 
                                                    focusable={true}
                                                    multiline={ index === inputs.length - 1 ? true : false }
                                                    numberOfLines={ index === inputs.length -1 ? 10 : 0 }
                                                />
                                            </View>
                                        );
                                    })
                                }
                                <Text style={ styles.file }>{ attachment.name.length > 0 ? attachment.name : "Aucun fichier n'est sélectionné" }</Text>
                                <TouchableOpacity onPress={ openDocumentPicker }>
                                    <View style={ styles.shareFileButton }>
                                        <Text style={ styles.shareFileButtonContent }>
                                            Partager un fichier
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onSubmit}>
                                    <View style={ styles.submitButton }>
                                        <Text style={ styles.submitButtonContent }>
                                            Envoyer
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>        
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
        backgroundColor: "#000000"
    },
    formContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
        height: "95%",
        borderRadius: 10,
        backgroundColor: "#000000"
    },
    formTitleContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        marginTop: 10
    },
    formTitle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: 30
    },
    inputsContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 22,
        borderWidth: 1,
        padding: 10,
        color: "#fff",
        borderColor: "#fff",
        alignSelf: "stretch",
        borderRadius: 5
    },
    textArea: {
        height: 150,
        margin: 22,
        borderWidth: 1,
        padding: 10,
        color: "#fff",
        borderColor: "#fff",
        alignSelf: "stretch",
        borderRadius: 5,
        justifyContent: "flex-start"
    },
    fields: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 22,
        marginTop: 20
    },
    file: {
        margin: 20,
        alignSelf: 'center',
        color: "#ffffff"
    },
    shareFileButton: {
        display: 'flex',
        justifyContent: 'center',
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        height: 50,
        backgroundColor: "#ffffff",
        padding: 7,
        alignItems: 'center',
        borderRadius: 10
    },
    shareFileButtonContent: {
        color: "#000000",
        fontWeight: "700"
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'center',
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
        marginTop: 20,
        height: 50,
        backgroundColor: "#ffffff",
        padding: 7,
        alignItems: 'center',
        borderRadius: 10
    },
    submitButtonContent: {
        color: "#000000",
        fontWeight: "700"
    }
});
export default FormScreen;