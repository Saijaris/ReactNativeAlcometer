import { StatusBar, StyleSheet } from "react-native"

export const LightTheme = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: StatusBar.currentHeight + 10,
        //padding: 20,
        height: '100%'
    },
    title: {
        fontSize: 30,
        color: 'rgb(220, 36, 119)',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
        fontWeight: 'bold',
        flexGrow: 1,
        alignSelf: 'center'
    },
    header: {
        marginBottom: 10
    },
    switch: {
        alignSelf: "flex-start",
        color: 'rgb(227, 26, 123)',
        marginTop: 20,
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        color: 'rgb(216, 78, 135)',
        marginTop: 8,
        marginBottom: 8
    },
    textinput: {
        padding: 5,
        borderWidth: 1,
        marginBottom: 8,
    },
    numericinput: {
        //borderColor: 'rgb(227, 26, 123)',
        backgroundColor: 'rgb(240, 177, 201)',
    },
    radiobutton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radiobuttontext: {
        color: 'rgb(195, 45, 192)',
        fontWeight: 'bold',
        fontSize: 18
    },
    button: {
        backgroundColor: 'rgb(227, 26, 123)',
        borderRadius: 5,
        color: 'rgb(33, 154, 170)',
    },
    result: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 15
    }
})