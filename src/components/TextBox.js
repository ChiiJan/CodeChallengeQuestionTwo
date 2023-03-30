import React from 'react'
import { View, TextInput, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 42,
        width: "75%",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor:"white",
    },
    textInput: {
        marginTop: 0,
        width: "100%",
        borderColor: "#0B3270",
        borderWidth: 1,
        paddingLeft: 15
    }

})

export default function TextBox(props) {
    return <View style={styles.container}>
        <TextInput style={{ ...styles.container, ...styles.textInput }} {...props} />
    </View>
}