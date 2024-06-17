import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";

function Form (){
    return(
        <View style={StyleSheet.formSection}>
            <TextInput style={styles.name} placeholder='Name' placeholderTextColor={'#AFB0B6'}></TextInput>
            <TextInput style={styles.email} placeholder='Email' placeholderTextColor={'#AFB0B6'}></TextInput>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    formSection:{
        flex: 1,
        padding: 0,
    },

    name: {
        width: 360,
        height: 52,
        bottom: 15,
        right: 2,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6',
        alignSelf: 'center',
    },

    email: {
        width: 360,
        height: 52,
        top: 1,
        right: 2,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6',
    },

    loginButton: {
        width: 360,
        height: 56,
        top: 25,
        right: 2,
        borderRadius: 5,
        backgroundColor: '#356899',
    },

    buttonText: {
        width: 47,
        height: 24,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFFFF',
        alignSelf: 'center',
        top: 15,
    },
})

export default Form;