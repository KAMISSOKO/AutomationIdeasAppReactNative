import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
    separator: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default Separator;