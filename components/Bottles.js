import { Text, View } from "react-native";
import NumericInput from 'react-native-numeric-input';
import { useStyle } from "../styles/useStyle";

export default function AskBottles({ value, onChange, theme }) {

    const Style = useStyle(theme);

    return (
        <View>
            <Text style={Style.text}>Bottles</Text>
            <NumericInput
                minValue={0}
                value={value}
                onChange={onChange}
                inputStyle={Style.numericinput}
                type='plus-minus'
                rightButtonBackgroundColor='rgb(246, 91, 179)'
                leftButtonBackgroundColor='rgb(246, 91, 179)'
                backgroundColor='rgb(234, 106, 161)'
                rounded
            />
        </View>
    );
}