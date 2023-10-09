import { TextInput, View, Text } from "react-native";
import { LightTheme } from "../styles/Styles";
import { useState } from "react";
import { useStyle } from "../styles/useStyle";


export default function AskWeight({value, onChange, theme}) {

    const Style = useStyle(theme);

    return (
        <View>
            <Text style={Style.text}>Weight</Text>
            <TextInput
                keyboardType='number-pad'
                style={Style.textinput}
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
}