import { StatusBar, StyleSheet } from "react-native"

export const darkTheme = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        padding: 20,
        backgroundColor: 'rgb(132, 54, 85)',
        height: '100%'
    },
    title: {
        fontSize: 30,
        color: '#ffffff',
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
        color: '#ffffff',
        marginTop: 8,
        marginBottom: 8
    },
    textinput: {
        padding: 5,
        borderWidth: 1,
        marginBottom: 8,
    },
    numericinput: {
        backgroundColor: 'rgb(240, 177, 201)',
    },
    radiobutton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radiobuttontext: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    },
    button: {
        backgroundColor: 'rgb(227, 26, 123)',
        borderRadius: 5,
    },
    result: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 15
    }
})