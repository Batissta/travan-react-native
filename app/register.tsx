import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

function Register() {
  const [checked, setChecked] = useState('motorista');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState({ value: '', dirty: false });
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState({ value: '', dirty: false });
  const [error, setError] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const router = useRouter();



  const preencha=()=>{
    if(nome.trim() === '' || email.value.trim() === '' || telefone.trim() === '' || senha.value.trim() === ''){
      return <Text style={styles.error}>Todos os campos são obrigatorios!</Text>;
    }
  }
  const handleErrorEmail = () => {
    if (!email.value && email.dirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (!emailRegex.test(email.value) && email.dirty) {
      return <Text style={styles.error}>Email inválido</Text>;
    }
    return null;
  };

  const handleErrorPassword = () => {
    if (!senha.value && senha.dirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (senha.value.length < 6 && senha.dirty) {
      return <Text style={styles.error}>Senha deve ter pelo menos 6 caracteres</Text>;
    }
    return null;
  };
  const handleErrorNome = () => {
    if (nome.length < 3) {
      return <Text style={styles.error}>Nome inválido</Text>;
    }
    return null;
  };
  const handleErrorTelefone = () => {
    if (telefone.length < 11) {
      return <Text style={styles.error}>Telefone inválido</Text>;
    }
  }

     
    

  const handleRegister = () => {
    let hasError = false;

    if (!email.value || !emailRegex.test(email.value)) {
      setEmail({ value: email.value, dirty: true });
      hasError = true;
    }

    if (!senha.value || senha.value.length < 6) {
      setSenha({ value: senha.value, dirty: true });
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
        <Text style={styles.title}>Criar conta:</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          placeholderTextColor="black"
        />
        {handleErrorNome()}

        <TextInput
          placeholder="E-mail"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, dirty: true })}
          style={styles.input}
          placeholderTextColor="black"
        />
        {handleErrorEmail()}

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
          value={telefone}
          keyboardType='numeric'
          onChangeText={setTelefone}
          style={styles.input}
          placeholderTextColor="black"
         

        />
        {handleErrorTelefone()}

        <TextInput
          placeholder="Senha"
          value={senha.value}
          onChangeText={(text) => setSenha({ value: text, dirty: true })}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="black"
        />
        {handleErrorPassword()}

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>
        {preencha()}
        
    

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
    height: 50,
    fontSize: 14,
    paddingHorizontal: 10,
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
    padding: 10,
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
});

export default Register;
