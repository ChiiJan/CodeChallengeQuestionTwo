import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Modal, Text, LayoutAnimation } from 'react-native';
import TextBox from "./TextBox";
import Button from "./Button";

const Form = () => {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [inputAmt, setInputAmt] = useState("");
    const [otp, setOtp] = useState("");

    const handleSubmit = () => {
        if(fullName !== null &&
            address !== null &&
            inputAmt !== null &&
            otp === "123") {
                alert("Submit successful!");
            } 
            else if(otp !== "123"){
                alert("Wrong OTP!")
            }
            else {
                alert("There are missing fields!")
            }

    };

    return (
        <View style={styles.content}>
            <Text style={styles.header}>Question Two: Fancy Form</Text>
            <TextBox placeholder="Full Name" onChangeText={text => setFullName(text)} />
            <TextBox placeholder="ETH Address" onChangeText={text => setAddress(text)} />
            <TextBox placeholder="Input Amount" onChangeText={text => setInputAmt(text)} />
            <View style={styles.otpContainer}>
                {/*Send OTP is just a pseudo and for validation purpose*/}
                <TextBox placeholder="OTP Authentication" onChangeText={text => setOtp(text)} />
                <Button onClick={() => alert("Your OTP is : 123")} title="Send OTP" style={{ marginLeft: 30, width: "42%" }} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "75%" }}>
                <Button onClick={() => handleSubmit()} title="Submit" style={{ width: "48%" }} />
                <Button onClick={() => alert("cancel")} title="Cancel" style={{ width: "48%", backgroundColor: "#2563eb"}} />
            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    submit: {
        textAlign: "center",
    },

    submittext: {
        marginbottom: 15,
    },
    content: {
        alignItems: "center",
    },
    header: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
        marginTop: 10
    },
    otpContainer: {
        flexDirection: "row",
        width: "60%",
        marginLeft: "-15%"
    },
});

export default Form;