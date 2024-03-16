/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Switch,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

function App(): React.JSX.Element {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState("0.00");
  const [type, setType] = useState("")

  const handlePress = () => {
    const myResult = onCalculate()
    showMessage(myResult)
  }

  const showMessage = (result: number) => {
    if (result > 32) {
      setType("Obese")
    }
    else if (result > 25) {
      setType("OVer weight")
    }
    else if (result > 18.5) {
      setType("Normal weight")
    }
    else {
      setType("Under weight")
    }
  }

  const onCalculate = () => {
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);

    const result = weightVal / Math.pow(heightVal / 100.0, 2);
    setResult(result.toString());
    return result
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.group}>
            <Text>Weight(Kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              inputMode="numeric"
              returnKeyType="go"
              onChangeText={text => {
                setWeight(text);
              }}
              value={weight.toString()}
            />
          </View>

          <View style={styles.group}>
            <Text>Height(CM)</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              inputMode="numeric"
              returnKeyType="go"
              onChangeText={text => {
                setHeight(text);
              }}
              value={height.toString()}
            />
          </View>

          <View style={styles.center}>
            <Text style={styles.title}>BMI: {result}</Text>
            <Text style={styles.title}>Type: {type}</Text>

            <View style={styles.group}>
              <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Compute</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 40,
    borderWidth: 1,
    width: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  group: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
  },
  center: {
    alignItems: 'center',
  },
});

export default App;
