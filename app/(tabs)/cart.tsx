import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

function Cart() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.viagemContainer}>
        <Text style={styles.viagemText}>Origem: {params.origem}</Text>
        <Text style={styles.viagemText}>Destino: {params.destino}</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Valor Original: R${params.valorOriginal}</Text>
        <Text style={styles.textAviso}>Você ganhou um desconto na viagem de R${params.valorDesconto}</Text>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar Viagem</Text>
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
  textAviso: {
    fontSize: 15,
    color: "green"
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
