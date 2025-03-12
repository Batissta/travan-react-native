import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

function Register() {
  const [checked, setChecked] = useState('motorista');
  const router = useRouter();

  return (
    <LinearGradient 
      colors={["#1a002a", "#3a0ca3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.formContainer}>

        <Text style={styles.title}>Criar conta:</Text>

        <TextInput
          placeholder="Nome"
          style={styles.input}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          placeholderTextColor="black"
        />
        
        <View style={styles.radioContainer}>
          <TouchableOpacity 
            style={[styles.radioOption, checked === 'motorista' && styles.radioSelected]} 
            onPress={() => setChecked('motorista')}
          >
            <RadioButton
              value="motorista"
              status={checked === 'motorista' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('motorista')}
              color="black"
            />
            <Text style={styles.radioLabel}>Motorista</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.radioOption, checked === 'passageiro' && styles.radioSelected]} 
            onPress={() => setChecked('passageiro')}
          >
            <RadioButton
              value="passageiro"
              status={checked === 'passageiro' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('passageiro')}
              color="black"
            />
            <Text style={styles.radioLabel}>Passageiro</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Telefone"
          style={styles.input}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="black"
        />
        
        <TouchableOpacity style={styles.registerButton} onPress={() => router.replace('/login')}>
          <Text style={{ color: 'black' }}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    justifyContent: 'center',
  },
  radioSelected: {
    borderWidth: 2,
    borderColor: 'black',
  },
  radioLabel: {
    color: 'black',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});

export default Register;
