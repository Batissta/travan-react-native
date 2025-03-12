import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState({ value: '', dirty: false });
  const [password, setPassword] = useState({ value: '', dirty: false });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleErrorEmail = () => {
    if (!email.value && email.dirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (!emailRegex.test(email.value) && email.dirty) {
      return <Text style={styles.error}>Email inválido</Text>;
    }
    return null;
  };

  const handleErrorPassword = () => {
    if (!password.value && password.dirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (password.value.length < 6 && password.dirty) {
      return <Text style={styles.error}>Senha deve ter pelo menos 6 caracteres</Text>;
    }
    return null;
  };

  const handleErrorForm = () => {
    let hasError = false;

    if (!email.value || !emailRegex.test(email.value)) {
      setEmail({ value: email.value, dirty: true });
      hasError = true;
    }

    if (!password.value) {
      setPassword({ value: password.value, dirty: true });
      hasError = true;
    }

    if (!hasError) {
      router.replace('/(tabs)/home');
    }
  };

  return (
    <LinearGradient
      colors={["#1a002a", "#3a0ca3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="account-circle" size={100} style={{ color: "#FFF" }} />
          <Text style={styles.title}>TraVan</Text>
        </View>
        
        <TextInput 
          onChangeText={(text) => setEmail({ value: text, dirty: true })}
          placeholder="E-mail"
          style={styles.input}
          placeholderTextColor="#000"
        />
        {handleErrorEmail()}

        <TextInput 
          onChangeText={(text) => setPassword({ value: text, dirty: true })}
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#000"
        />
        {handleErrorPassword()}

        <TouchableOpacity style={styles.loginButton} onPress={handleErrorForm}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.registerButton} onPress={() => router.replace('/')}> 
          <Text style={styles.registerButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#1BD7BF',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  error: {
    color: '#FF0000',
    marginTop: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  registerButtonText: {
    color: '#000',
    textAlign: 'center',
  },
});

export default Login;
