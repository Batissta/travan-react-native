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
          <Text style={styles.registerButtonText}>Registrar</Text>
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
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    height: '10%',
    fontSize: 14  ,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '45%',
    justifyContent: 'center',
  },
  radioSelected: {
    borderWidth: 1,
    borderColor: 'black',
  },
  radioLabel: {
    color: 'black',
    marginLeft: 5,
  },
  registerButton: {
    backgroundColor: '#1BD7BF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
});

export default Register;
