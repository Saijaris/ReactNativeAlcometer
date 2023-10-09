import { View } from "react-native";
import { RadioButton, Text } from 'react-native-paper';
import { useStyle } from "../styles/useStyle";

export default function RadioButtons({value, onChange, theme}) {

    const Style = useStyle(theme);

    return (
        <RadioButton.Group value={value} onValueChange={onChange}>
            <View style={Style.radiobutton}>
                <RadioButton value='Male' color='rgb(227, 26, 123)' />
                <Text style={Style.radiobuttontext}>Male</Text>
            </View>
            <View style={Style.radiobutton}>
                <RadioButton value='Female' color='rgb(227, 26, 123)'/>
                <Text style={Style.radiobuttontext}>Female</Text>
            </View>
        </RadioButton.Group>
    );
}