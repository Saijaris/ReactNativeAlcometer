import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AskBottles from './components/Bottles';
import AskHours from './components/Hours';
import RadioButtons from './components/Radiobuttons';
import AskWeight from './components/Weight';
import { useStyle } from './styles/useStyle';



export default function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('');
  const [result, setResult] = useState();
  const [alert, setAlert] = useState(false);
  const litres = bottles * 0.33;
  const grams = litres * 8 * 4.5;
  const burning = weight / 10;
  const gramsLeft = grams - (burning * hours);
  const Style = useStyle(darkTheme);

  const createAlert = () =>
    Alert.alert('Error', 'Please input weight', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const onClick = () => {
    if (weight === '') {
      createAlert()
      return
    }
    const multiplyer = gender === 'Male' ? 0.7 : 0.6;
    const result = (gramsLeft / (weight * multiplyer)).toFixed(2);
    setResult(result < 0 || weight == null ? 0 : result)
  }

  const getColor = () => {
    if (result === 0) {
      return 'rgb(17, 221, 58)'
    }
    else if (result > 0 && result <= 0.5) {
      return 'rgb(246, 231, 27)'
    }
    return 'rgb(235, 10, 10)'
  }

  return (
    <ScrollView style={Style.container}>
      <Switch style={Style.switch}
        value={darkTheme}
        onValueChange={val => setDarkTheme(val)}
      />
      <Text style={Style.title}>Alcometer</Text>
      <AskWeight
        theme={darkTheme}
        value={weight}
        onChange={setWeight}
      />
      <AskBottles
        theme={darkTheme}
        value={bottles}
        onChange={setBottles}
      />
      <AskHours
        theme={darkTheme}
        value={hours}
        onChange={setHours}
      />
      <RadioButtons
        theme={darkTheme}
        value={gender}
        onChange={setGender}
      />
      <Text style={{ ...Style.result, color: getColor() }}>{result}</Text>
      <Button style={Style.button} textColor='#ffffff' onPress={onClick}>Calculate</Button>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    display: 'flex'
  },
});
