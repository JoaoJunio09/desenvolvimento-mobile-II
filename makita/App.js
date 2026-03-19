import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Feijão com Farinha amoladeira.</Text>

      <TextInput placeholder='Digite seu nome' style={styles.campo}/>

      <TextInput placeholder='Digite seu e-mail' style={styles.campo} keyboardType='email-address'/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campo: {
    backgroundColor: '#d1ffd1',
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#066e06',
    borderRadius: 20,
    paddingHorizontal: 20,
  }
});
