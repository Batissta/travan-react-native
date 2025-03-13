import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const welcome = () => {

  const router = useRouter();

  return (
    <LinearGradient 
      colors={["#1a002a", "#3a0ca3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <FontAwesome5 name="road" size={100} style={{ color: "#FFF" }} />
          <Text style={styles.title}>TraVan</Text>
          <Text style={styles.subtitle}>Para onde iremos hoje?</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('/login')}><Text style={{ color: '#FFF' }}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}onPress={() => router.replace('/register')}><Text style={{ color: 'black' }}>Registrar</Text></TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '80%',
    height: '60%',
    padding: 10,
    borderRadius: 15
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  subtitle: {
    fontSize: 15,
    color: '#FFF',   
  },
  loginButton: {
    backgroundColor: '#1BD7BF',
    color: "#FFF",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  registerButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center'
  }
});
export default welcome;