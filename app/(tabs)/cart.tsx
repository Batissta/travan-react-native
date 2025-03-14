import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Cart() {
  const router = useRouter();

  return (
    
    <View style={styles.container}>
     
      
      <View style={styles.viagemContainer}>
        <Text style={styles.viagemText}>Origem: São Paulo</Text>
        <Text style={styles.viagemText}>Destino: Rio de Janeiro</Text>
        <Text style={styles.viagemText}>Valor: R$ 150,00</Text>
      </View>
      
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ 150,00</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}> 
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "5%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  viagemContainer: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    width: "90%",
    borderWidth: 2,
    borderColor: "#ccc",
  },
  viagemText: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  totalContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    width: "90%",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3a0ca3",
    padding: 15,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#black",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Cart;
