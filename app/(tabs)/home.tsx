import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Seja muito bem-vindo à homepage</Text>
      <TouchableOpacity
             onPress={() => router.push('/carrinho')}
        style={styles.button}
      >
        <Text>Visite o seu carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "20%",
  },
  button: {
    maxWidth: "50%",
    backgroundColor: "#fb1",
    padding: 18,
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#fea",
  },
});

export default Home;
